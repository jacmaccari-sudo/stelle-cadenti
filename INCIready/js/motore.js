/* MOTORE DI ANALISI INCI
   1. legge la lista scritta in etichetta e la divide in ingredienti
   2. riconosce ogni ingrediente (banca dati o somiglianza del nome)
   3. stima quanto ce n'è (in base all'ordine, che per legge è decrescente)
   4. stima il pH del prodotto
   5. divide gli ingredienti in: sostanza base, sostanze funzionali, eccipienti
*/
(function () {
  'use strict';

  /* ---------------- indice dei nomi ---------------- */
  var INDICE = null;
  function chiave(s) {
    return String(s || '')
      .toUpperCase()
      .replace(/[‘’“”]/g, "'")
      .replace(/[^A-Z0-9\-\/\+\., ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function costruisciIndice() {
    if (INDICE) return INDICE;
    INDICE = {};
    window.INCI_DB.forEach(function (v) {
      INDICE[chiave(v.n)] = v;
      (v.alt || []).forEach(function (a) { if (!INDICE[chiave(a)]) INDICE[chiave(a)] = v; });
    });
    return INDICE;
  }

  /* ---------------- lettura della lista ---------------- */
  var RUMORE = /^(INGREDIENTS?|INGREDIENTI|INCI|COMPOSITION|COMPOSIZIONE|ZUTATEN|INGREDIENTES|INGREDIENTES?:|LISTA INGREDIENTI)\s*[:\-]?$/i;

  function leggiLista(testo) {
    var t = String(testo || '');
    t = t.replace(/\r/g, '\n');
    t = t.replace(/^[\s\S]*?\b(INGREDIENTS?|INGREDIENTI|INCI)\b\s*[:\-]/i, '');
    t = t.replace(/\[|\]/g, '');
    t = t.replace(/•|·|●|，|;|、/g, ',');
    // "+/-" segnala i coloranti che possono esserci o non esserci
    var eventuali = false;
    t = t.replace(/\+\/\-|\bMAY CONTAIN\b|\bPU[OÒ] CONTENERE\b/gi, function () { eventuali = true; return ','; });
    if (t.indexOf(',') === -1) t = t.replace(/\n+/g, ',');
    var pezzi = t.split(/,/);
    var out = [];
    pezzi.forEach(function (p) {
      var s = p.replace(/\s+/g, ' ').trim().replace(/[\.•]+$/, '').trim();
      if (!s) return;
      if (RUMORE.test(s)) return;
      if (s.length < 2) return;
      // scarta frasi lunghe che non sono ingredienti (testi pubblicitari letti dalla foto)
      if (s.split(' ').length > 9 && !/\//.test(s)) return;
      out.push(s);
    });
    // toglie i doppioni mantenendo l'ordine
    var visti = {}, finale = [];
    out.forEach(function (s) {
      var k = chiave(s);
      if (visti[k]) return;
      visti[k] = 1; finale.push(s);
    });
    finale.eventuali = eventuali;
    return finale;
  }

  /* ---------------- riconoscimento ---------------- */
  function pulisciNome(nome) {
    var s = chiave(nome);
    s = s.replace(/\((.*?)\)/g, ' $1 ').replace(/\s+/g, ' ').trim(); // AQUA (WATER) -> AQUA WATER
    s = s.replace(/^\d+\s*[\)\.]\s*/, '');
    return s;
  }
  function varianti(nome) {
    var s = pulisciNome(nome), v = [s];
    // AQUA/WATER/EAU  -> prova ogni parte
    s.split(/\s*\/\s*/).forEach(function (p) { p = p.trim(); if (p && v.indexOf(p) === -1) v.push(p); });
    // AQUA WATER EAU -> prova la prima parola significativa
    var parole = s.split(' ');
    if (parole.length > 1) v.push(parole[0]);
    v.push(s.replace(/[\.\,]/g, '').trim());
    return v;
  }

  function riconosci(nome) {
    var idx = costruisciIndice(), vv = varianti(nome), i, v;
    for (i = 0; i < vv.length; i++) {
      v = idx[vv[i]];
      if (v) return { voce: v, sicurezza: i === 0 ? 'certa' : 'buona' };
    }
    var pulito = pulisciNome(nome);
    for (i = 0; i < window.INCI_RULES.length; i++) {
      if (window.INCI_RULES[i].re.test(pulito)) {
        return { voce: window.INCI_RULES[i], sicurezza: 'dedotta' };
      }
    }
    return {
      voce: {
        c: 'Non riconosciuto', g: 'ecc', f: 'funzione non determinata',
        d: 'Questo nome non è nella banca dati dell\'app e la sua forma non permette di capire con certezza a che famiglia appartenga. Può essere un ingrediente raro, un nome commerciale o un errore di lettura dell\'etichetta.',
        p: 'Caratteristiche non disponibili.', t: [0.05, 2]
      },
      sicurezza: 'ignota'
    };
  }

  /* ---------------- avvisi del regolamento ---------------- */
  function avvisi(nome, voce) {
    var out = [], visti = {}, allegati = {};
    function radice(a) { return String(a || '').replace(/\s*\(.*$/, '').trim(); } // chiave per non ripetere due avvisi sullo stesso allegato
    if (voce && voce.r) { out.push(voce.r); visti[voce.r.x] = 1; allegati[radice(voce.r.a)] = 1; }
    var pulito = pulisciNome(nome);
    window.INCI_ALERTS.forEach(function (a) {
      // la scheda della banca dati è più precisa: se copre già quell'allegato, non si ripete l'avviso generico
      if (!a.re.test(pulito) || visti[a.x] || allegati[radice(a.a)]) return;
      out.push({ t: a.t, x: a.x, a: a.a });
      visti[a.x] = 1; allegati[radice(a.a)] = 1;
    });
    return out;
  }
  function eAllergene(nome) {
    var p = pulisciNome(nome);
    return window.INCI_ALLERGENI.some(function (a) { return p === chiave(a) || p.indexOf(chiave(a)) === 0; });
  }

  /* ---------------- tipo di prodotto ---------------- */
  function tipoProdotto(lista) {
    var testo = lista.map(function (x) { return x.nomePulito; }).join(' | ');
    var ha = function (re) { return re.test(testo); };
    var primo = lista[0] ? lista[0].nomePulito : '';
    var acqua = /AQUA|WATER/.test(primo) || ha(/\bAQUA\b|\bWATER\b/);
    var nTens = lista.filter(function (x) { return /Tensioattivo/.test(x.classe) && !/cationico/.test(x.classe); }).length;
    var sapone = ha(/SODIUM (COCOATE|PALMATE|OLIVATE|TALLOWATE|SHEA BUTTERATE)|POTASSIUM (COCOATE|OLIVATE|PALMATE|SUNFLOWERATE)/);
    var filtri = lista.filter(function (x) { return /filtro/i.test(x.funzione || '') || /Filtro solare/i.test(x.classe); }).length;

    if (ha(/\bFLUORIDE\b|MONOFLUOROPHOSPHATE|HYDRATED SILICA/) && ha(/SORBITOL|GLYCERIN|XYLITOL/))
      return { t: 'dentifricio', n: 'dentifricio o prodotto per l\'igiene orale' };
    if (ha(/ALUMINUM (CHLOROHYDRATE|ZIRCONIUM|SESQUICHLOROHYDRATE)/))
      return { t: 'antitraspirante', n: 'deodorante antitraspirante' };
    if (ha(/HYDROGEN PEROXIDE/)) return { t: 'ossidante', n: 'ossidante o decolorante per capelli' };
    if (ha(/THIOGLYCOLATE|THIOGLYCOLIC|CYSTEAMINE/)) return { t: 'riducente', n: 'permanente, stiratura o crema depilatoria' };
    if (ha(/PHENYLENEDIAMINE|TOLUENE-2,5-DIAMINE|AMINOPHENOL/)) return { t: 'tintura', n: 'tintura per capelli' };
    if (sapone) return { t: 'sapone', n: 'sapone vero e proprio (saponificato)' };
    if (filtri >= 2 || (filtri >= 1 && ha(/SPF/))) return { t: 'solare', n: 'prodotto solare' };
    if (lista.some(function (x) { return /cationico/.test(x.classe); }) && ha(/CETEARYL ALCOHOL|BEHENYL ALCOHOL/) && nTens < 2)
      return { t: 'balsamo', n: 'balsamo o maschera per capelli' };
    if (nTens >= 2 && acqua) return { t: 'detergente', n: 'detergente schiumogeno (shampoo, bagnoschiuma, detergente viso)' };
    if (!acqua) return { t: 'anidro', n: 'prodotto senza acqua (olio, burro, stick, cipria)' };
    if (lista.some(function (x) { return /Emulsionante|emulsionante/.test(x.classe + ' ' + x.funzione); }) &&
        lista.some(function (x) { return /Olio|Burro|Trigliceride|Estere grasso|Silicone|Idrocarburo/.test(x.classe); }))
      return { t: 'emulsione', n: 'crema, latte o emulsione' };
    return { t: 'acquoso', n: 'siero, gel o tonico a base acquosa' };
  }

  /* ---------------- stima delle concentrazioni ---------------- */
  function geo(a, b) { return Math.sqrt(Math.max(a, 0.0005) * Math.max(b, 0.001)); }
  function arrotonda(x) {
    if (x >= 10) return Math.round(x);
    if (x >= 1) return Math.round(x * 10) / 10;
    if (x >= 0.1) return Math.round(x * 100) / 100;
    return Math.round(x * 10000) / 10000;
  }

  function stimaConcentrazioni(lista) {
    var n = lista.length, i;
    // 1. dove comincia la zona sotto l'1%?
    var sogliaUno = n;
    for (i = 0; i < n; i++) {
      var x = lista[i];
      var maxT = (x.tipico && x.tipico[1]) || 2;
      var marcatore = /conservante|colorante|allergene|antiossidante di formula|profumazione/i.test(x.funzione || '') ||
                      /^CI \d|Colorante|Agente chelante/i.test(x.classe || '');
      if (marcatore && maxT <= 1.6) { sogliaUno = i; break; }
    }
    // i coloranti stanno comunque sempre in fondo
    // 2. punto di stima con vincolo di ordine decrescente
    var punti = [], tetto = 100;
    for (i = 0; i < n; i++) {
      var t = lista[i].tipico || [0.1, 2];
      var p = geo(t[0], t[1]);
      if (i >= sogliaUno) p = Math.min(p, 0.9);
      p = Math.min(p, tetto);
      punti.push(p);
      tetto = p;
    }
    // 3. la base prende quello che resta
    var restoIdx = lista[0] && lista[0].gruppo === 'base' ? 0 : -1;
    var somma = punti.reduce(function (a, b) { return a + b; }, 0);
    if (restoIdx === 0) {
      var altri = somma - punti[0];
      var resto = 100 - altri;
      if (resto > punti[0]) punti[0] = Math.min(resto, 95);
      somma = punti.reduce(function (a, b) { return a + b; }, 0);
    }
    if (somma > 100) {
      var f = 100 / somma;
      for (i = 0; i < n; i++) punti[i] = punti[i] * f;
    }
    // 4. da punto a intervallo
    for (i = 0; i < n; i++) {
      var t2 = lista[i].tipico || [0.1, 2];
      var lo, hi;
      if (i === 0 && lista[0].gruppo === 'base') {  // la base si stima per differenza: intervallo più stretto
        lo = punti[i] * 0.82; hi = Math.min(96, punti[i] * 1.12);
      } else {
        lo = Math.max(punti[i] * 0.55, t2[0] * 0.5);
        hi = Math.min(punti[i] * 1.9, Math.max(t2[1], punti[i] * 1.1));
      }
      if (i >= sogliaUno) hi = Math.min(hi, 1);
      if (i > 0 && hi > lista[i - 1].concMax) hi = lista[i - 1].concMax;
      if (lo > hi) lo = hi * 0.5;
      lista[i].conc = arrotonda(punti[i]);
      lista[i].concMin = arrotonda(lo);
      lista[i].concMax = arrotonda(hi);
      lista[i].sottoUno = i >= sogliaUno;
    }
    return sogliaUno;
  }

  /* ---------------- stima del pH ---------------- */
  function stimaPH(lista, tipo) {
    var motivi = [], somma = function (re) {
      return lista.reduce(function (a, x) { return a + (re.test(x.nomePulito) ? (x.conc || 0) : 0); }, 0);
    };
    var acidiEsfolianti = lista.reduce(function (a, x) {
      return a + (/esfoliante/i.test(x.funzione || '') || /idrossiacido/i.test(x.classe || '') ? (x.conc || 0) : 0);
    }, 0);
    var vitC = somma(/\bASCORBIC ACID\b|L-ASCORBIC/);
    var base, lo, hi;

    if (tipo.t === 'anidro') {
      return {
        lo: null, hi: null,
        testo: 'Non misurabile',
        motivi: ['Il prodotto non contiene acqua: il pH è un valore che esiste solo nelle soluzioni acquose, quindi in un olio, un burro, uno stick o una cipria non si può misurare. Sulla pelle il prodotto assume il pH dell\'ambiente in cui si trova.']
      };
    }
    if (tipo.t === 'sapone') { base = [9.0, 10.5]; motivi.push('Contiene sapone vero e proprio (sali di acidi grassi): questi prodotti sono per natura alcalini, non possono avere il pH della pelle.'); }
    else if (tipo.t === 'riducente') { base = [8.0, 9.5]; motivi.push('Contiene un riducente dei ponti di zolfo (tioglicolato o simili): per funzionare ha bisogno di un ambiente alcalino.'); }
    else if (tipo.t === 'tintura') { base = [9.0, 10.5]; motivi.push('È una tintura ossidativa: l\'alcalinizzante serve ad aprire le squame del capello, quindi il pH è alto.'); }
    else if (tipo.t === 'ossidante') { base = [2.5, 4.0]; motivi.push('Contiene acqua ossigenata, che si conserva solo in ambiente acido.'); }
    else if (tipo.t === 'antitraspirante') { base = [3.5, 4.5]; motivi.push('I sali di alluminio danno una soluzione acida: è proprio l\'acidità che permette di formare il tappo che blocca il sudore.'); }
    else if (tipo.t === 'dentifricio') { base = [6.5, 8.5]; motivi.push('I dentifrici stanno intorno alla neutralità o poco sopra, per non aggredire lo smalto.'); }
    else if (tipo.t === 'detergente') { base = [5.0, 6.0]; motivi.push('È un detergente moderno con tensioattivi sintetici: di norma è portato vicino al pH della pelle.'); }
    else if (tipo.t === 'balsamo') { base = [3.5, 4.5]; motivi.push('I balsami sono acidi per far richiudere le squame del capello e far funzionare i condizionanti cationici.'); }
    else if (tipo.t === 'solare') { base = [5.5, 7.0]; motivi.push('I solari stanno vicino alla neutralità, perché molti filtri si degradano in ambiente acido.'); }
    else { base = [5.0, 6.0]; motivi.push('Il valore di partenza è quello tipico dei prodotti che restano sulla pelle, studiati per rispettare il mantello acido cutaneo (pH 4,7-5,75).'); }

    lo = base[0]; hi = base[1];

    if (vitC > 3) { lo = 2.5; hi = 3.5; motivi.push('La vitamina C pura (acido ascorbico) è stabile ed efficace solo sotto pH 3,5: il prodotto è quindi molto acido e può pizzicare.'); }
    else if (acidiEsfolianti >= 2) { lo = 3.0; hi = 4.0; motivi.push('La quantità di acidi esfolianti (AHA/BHA) è alta: per funzionare hanno bisogno di un pH fra 3 e 4.'); }
    else if (acidiEsfolianti >= 0.4) { lo = 3.5; hi = 4.5; motivi.push('Sono presenti acidi esfolianti in quantità moderata: il pH viene tenuto basso, fra 3,5 e 4,5.'); }

    if (somma(/\bUREA\b/) > 8 && tipo.t !== 'sapone') { lo = Math.max(lo, 6); hi = Math.max(hi, 7.5); motivi.push('L\'urea in alta concentrazione tende a portare la formula verso la neutralità (e a pH acido si degraderebbe).'); }
    if (somma(/NIACINAMIDE/) >= 3 && acidiEsfolianti < 0.4 && vitC < 1) { lo = Math.max(lo, 5); hi = Math.max(hi, 6.5); motivi.push('La niacinamide è stabile fra pH 5 e 7: la formula viene tenuta in questa finestra per evitare che si trasformi in acido nicotinico, che arrossa la pelle.'); }
    if (/GLUCOSIDE/.test(lista.map(function (x) { return x.nomePulito; }).join(' ')) && tipo.t === 'detergente' &&
        !lista.some(function (x) { return /CITRIC ACID|LACTIC ACID|GLYCOLIC/.test(x.nomePulito); })) {
      hi = Math.max(hi, 8.5); lo = Math.max(lo, 6);
      motivi.push('I tensioattivi da zucchero (glucosidi) alzano il pH e nella lista non compare un correttore acido: il prodotto potrebbe essere leggermente alcalino.');
    }
    if (lista.some(function (x) { return /CITRIC ACID|SODIUM CITRATE|LACTIC ACID|SODIUM LACTATE/.test(x.nomePulito); }) && acidiEsfolianti < 0.4) {
      motivi.push('È presente un correttore di pH (acido citrico, lattico o loro sali): serve proprio a portare e mantenere il prodotto al valore voluto.');
    }
    if (lista.some(function (x) { return /SODIUM HYDROXIDE|POTASSIUM HYDROXIDE|TRIETHANOLAMINE|AMINOMETHYL PROPANOL|TROMETHAMINE|ARGININE/.test(x.nomePulito); })) {
      motivi.push('È presente una base (idrossido, trietanolammina o simili): serve ad alzare il pH e ad attivare il gelificante acido.');
    }
    if (lista.some(function (x) { return /CARBOMER|ACRYLATE/.test(x.nomePulito); }) && tipo.t !== 'sapone') {
      lo = Math.max(lo, 4.5);
      motivi.push('Il gel è costruito con un polimero acrilico: questi polimeri si gonfiano e restano stabili solo sopra pH 4,5-5.');
    }

    lo = Math.round(lo * 10) / 10; hi = Math.round(hi * 10) / 10;
    return { lo: lo, hi: hi, testo: lo.toString().replace('.', ',') + ' – ' + hi.toString().replace('.', ','), motivi: motivi };
  }

  /* ---------------- analisi completa ---------------- */
  function analizza(testo) {
    var nomi = leggiLista(testo);
    if (!nomi.length) return null;
    var lista = nomi.map(function (nome, i) {
      var r = riconosci(nome), v = r.voce;
      return {
        indice: i,
        nome: nome.replace(/\s+/g, ' ').trim(),
        nomePulito: pulisciNome(nome),
        classe: v.c,
        gruppo: v.g,
        funzione: v.f,
        descrizione: v.d,
        fisico: v.p,
        tipico: v.t || [0.1, 2],
        sicurezza: r.sicurezza,
        avvisi: avvisi(nome, v),
        allergene: eAllergene(nome)
      };
    });

    // Un colorante scritto con il numero Colour Index è sempre un eccipiente,
    // anche quando la stessa sostanza altrove fa da filtro solare (es. CI 77891 = biossido di titanio).
    lista.forEach(function (x) {
      if (/^CI ?\d{4,5}\b/.test(x.nomePulito)) {
        x.gruppo = 'ecc';
        x.funzione = 'colorante';
        x.tipico = [0.001, 2];
      }
    });

    // La sostanza base è la prima della lista: per legge gli ingredienti sopra l'1%
    // sono scritti in ordine di quantità decrescente, quindi il primo è il più abbondante.
    lista.forEach(function (x, i) { if (x.gruppo === 'base' && i !== 0) x.gruppo = 'funz'; });
    lista[0].gruppo = 'base';
    // se l'acqua c'è ma non è al primo posto, resta comunque il liquido che scioglie il resto
    var altroVeicolo = null;
    for (var i = 1; i < lista.length && i < 5; i++) {
      if (/\bAQUA\b|\bWATER\b/.test(lista[i].nomePulito)) { altroVeicolo = lista[i]; break; }
    }

    var tipo = tipoProdotto(lista);
    var soglia = stimaConcentrazioni(lista);
    var ph = stimaPH(lista, tipo);

    var vietati = lista.filter(function (x) { return x.avvisi.some(function (a) { return a.t === 'vietato'; }); });
    var limitati = lista.filter(function (x) { return x.avvisi.some(function (a) { return a.t === 'limitato'; }); });
    var allergeni = lista.filter(function (x) { return x.allergene; });

    return {
      lista: lista,
      altroVeicolo: altroVeicolo,
      tipo: tipo,
      ph: ph,
      soglia: soglia,
      eventuali: nomi.eventuali,
      vietati: vietati,
      limitati: limitati,
      allergeni: allergeni,
      gruppi: {
        base: lista.filter(function (x) { return x.gruppo === 'base'; }),
        funz: lista.filter(function (x) { return x.gruppo === 'funz'; }),
        ecc: lista.filter(function (x) { return x.gruppo === 'ecc'; })
      }
    };
  }

  window.INCI = { analizza: analizza, leggiLista: leggiLista, riconosci: riconosci };
})();
