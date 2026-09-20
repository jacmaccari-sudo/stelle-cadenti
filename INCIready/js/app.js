/* Interfaccia dell'app: tre schermate in fila
   1) come inserisco gli ingredienti  2) descrizione  3) classificazione */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var risultato = null;
  var storico = [];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }
  function num(x) { return String(x).replace('.', ','); }

  /* ------------- navigazione ------------- */
  var TITOLI = {
    'v-home': 'INCI Chiaro', 'v-scrivi': 'Scrivi gli ingredienti', 'v-foto': 'Foto dell\'etichetta',
    'v-nome': 'Cerca il prodotto', 'v-descrizione': 'Descrizione degli ingredienti', 'v-classificazione': 'Classificazione'
  };
  var PASSO = { 'v-scrivi': 1, 'v-foto': 1, 'v-nome': 1, 'v-descrizione': 2, 'v-classificazione': 3 };

  function vai(id, senzaStorico) {
    var attuale = document.querySelector('.vista.attiva');
    if (attuale && attuale.id === id) return;
    if (attuale && !senzaStorico) storico.push(attuale.id);
    document.querySelectorAll('.vista').forEach(function (v) { v.classList.remove('attiva'); });
    $('#' + id).classList.add('attiva');
    $('#titolo').textContent = TITOLI[id] || 'INCI Chiaro';
    $('#btnIndietro').hidden = (id === 'v-home');
    var p = PASSO[id] || 0;
    $('#passi').hidden = !p;
    [1, 2, 3].forEach(function (i) { $('#p' + i).classList.toggle('on', p >= i); });
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('[data-va]').forEach(function (b) {
    b.addEventListener('click', function () { vai(b.getAttribute('data-va')); });
  });
  $('#btnIndietro').addEventListener('click', function () {
    var prec = storico.pop() || 'v-home';
    vai(prec, true);
  });

  /* ------------- schermata 2: descrizione ------------- */
  function barraPH(ph) {
    if (ph.lo === null) return '';
    var a = Math.max(0, Math.min(14, ph.lo)), b = Math.max(0, Math.min(14, ph.hi));
    var sx = (a / 14) * 100, larg = Math.max(3, ((b - a) / 14) * 100);
    return '<div class="barra-ph"><i style="left:' + sx.toFixed(1) + '%;width:' + larg.toFixed(1) + '%"></i></div>' +
      '<div class="scala"><span>0 acido</span><span>7 neutro</span><span>14 alcalino</span></div>';
  }

  function schedaRiepilogo(r) {
    var h = '';
    h += '<div class="scheda riepilogo">';
    h += '<h3>Che prodotto è</h3>';
    h += '<p style="margin:0 0 6px">Dalla lista sembra <b>' + esc(r.tipo.n) + '</b>, con <b>' + r.lista.length + '</b> ingredienti dichiarati.</p>';
    h += '<p style="margin:0;color:var(--tenue);font-size:14px">La sostanza più abbondante è <b>' + esc(r.gruppi.base[0].nome) + '</b>' +
      (r.altroVeicolo ? ', mentre il liquido che scioglie tutto il resto è l\'acqua (' + esc(r.altroVeicolo.nome) + ')' : '') + '.</p>';
    h += '</div>';

    h += '<div class="scheda">';
    h += '<h3>pH stimato</h3>';
    if (r.ph.lo === null) {
      h += '<div class="grande">Non si misura</div>';
    } else {
      h += '<div class="grande">' + esc(r.ph.testo) + '</div>';
      h += barraPH(r.ph);
    }
    h += '<p style="margin:10px 0 0;font-size:14.5px"><b>Perché:</b></p><ul style="margin:6px 0 0;padding-left:20px;font-size:14.5px;color:var(--tenue)">';
    r.ph.motivi.forEach(function (m) { h += '<li style="margin-bottom:5px">' + esc(m) + '</li>'; });
    h += '</ul>';
    h += '<p class="nota">Il pH dice quanto un prodotto è acido o alcalino. La pelle sana sta fra 4,7 e 5,75: i prodotti vicini a quel valore la rispettano di più. È una stima ricavata dalla lista, non una misura di laboratorio.</p>';
    h += '</div>';

    var vietati = r.vietati, limitati = r.limitati;
    h += '<div class="scheda">';
    h += '<h3>Regolamento europeo 1223/2009</h3>';
    if (!vietati.length && !limitati.length) {
      h += '<p style="margin:0">Nessun ingrediente della lista risulta vietato o soggetto a limiti particolari fra quelli conosciuti dall\'app.</p>';
    } else {
      if (vietati.length) {
        var piu = vietati.length > 1;
        h += '<div class="avviso grave"><b>⛔ ' + vietati.length + (piu ? ' sostanze vietate' : ' sostanza vietata') + ' in Europa</b>' +
          vietati.map(function (x) { return esc(x.nome); }).join(', ') +
          '. Un cosmetico venduto oggi in Europa non dovrebbe ' + (piu ? 'contenerle' : 'contenerla') +
          ': controlla che il prodotto non sia vecchio o comprato fuori dall\'Unione europea.</div>';
      }
      if (limitati.length) {
        h += '<div class="avviso"><b>⚠️ ' + limitati.length + (limitati.length > 1 ? ' sostanze' : ' sostanza') + ' con limiti d\'uso</b>' +
          limitati.map(function (x) { return esc(x.nome); }).join(', ') +
          '. Sono permesse, ma solo entro certe quantità o in certi tipi di prodotto. Apri la scheda del singolo ingrediente per il dettaglio.</div>';
      }
    }
    if (r.allergeni.length) {
      h += '<div class="avviso"><b>🌿 ' + r.allergeni.length + (r.allergeni.length > 1 ? ' allergeni' : ' allergene') + ' del profumo</b>' +
        r.allergeni.map(function (x) { return esc(x.nome); }).join(', ') +
        '. ' + (r.allergeni.length > 1 ? 'Vanno scritti' : 'Va scritto') + ' a parte in etichetta proprio per avvisare chi è allergico. Per tutti gli altri non ' +
        (r.allergeni.length > 1 ? 'sono un problema' : 'è un problema') + '.</div>';
    }
    h += '</div>';
    return h;
  }

  function schedaIngrediente(x, i) {
    var cl = x.gruppo === 'base' ? 'e-base' : (x.gruppo === 'funz' ? 'e-funz' : 'e-ecc');
    var nomeGruppo = x.gruppo === 'base' ? 'Sostanza base' : (x.gruppo === 'funz' ? 'Sostanza funzionale' : 'Eccipiente');
    var grave = x.avvisi.some(function (a) { return a.t === 'vietato'; });
    var h = '<details class="ingr"><summary>';
    h += '<span class="num">' + (i + 1) + '</span>';
    h += '<span class="testa"><span class="nome">' + esc(x.nome) + (grave ? ' ⛔' : (x.avvisi.length ? ' ⚠️' : '')) + '</span>';
    h += '<span class="classe">' + esc(x.classe) + '</span></span>';
    h += '<span class="perc"><b>' + num(x.concMin) + '–' + num(x.concMax) + '%</b>' + esc(x.funzione || '') + '</span>';
    h += '</summary><div class="corpo">';
    h += '<span class="etichetta ' + cl + '">' + nomeGruppo + '</span>';
    if (x.sottoUno) h += '<span class="etichetta e-neutro">sotto l\'1%</span>';
    if (x.allergene) h += '<span class="etichetta e-avviso">allergene da dichiarare</span>';
    if (x.sicurezza === 'dedotta') h += '<span class="etichetta e-neutro">riconosciuto dal nome</span>';
    if (x.sicurezza === 'ignota') h += '<span class="etichetta e-neutro">non riconosciuto</span>';
    h += '<h4>Classe chimica</h4><p>' + esc(x.classe) + '</p>';
    h += '<h4>Che cosa dà al cosmetico</h4><p>' + esc(x.descrizione) + '</p>';
    h += '<h4>Caratteristiche chimico-fisiche</h4><p>' + esc(x.fisico) + '</p>';
    h += '<h4>Quanto ce n\'è (stima)</h4><p>Circa <b>' + num(x.concMin) + '% – ' + num(x.concMax) + '%</b>. ' +
      (x.sottoUno
        ? 'Si trova nella parte finale della lista, dove per legge gli ingredienti sono tutti sotto l\'1% e possono essere scritti in qualsiasi ordine.'
        : 'Stima basata sulla posizione in etichetta (l\'ordine è per quantità decrescente) e sulle dosi con cui questa sostanza si usa di solito.') + '</p>';
    x.avvisi.forEach(function (a) {
      h += '<div class="avviso' + (a.t === 'vietato' ? ' grave' : '') + '"><b>' +
        (a.t === 'vietato' ? '⛔ Sostanza vietata' : '⚠️ Sostanza ad uso limitato') +
        ' — ' + esc(a.a) + '</b>' + esc(a.x) + '</div>';
    });
    h += '</div></details>';
    return h;
  }

  function mostraDescrizione(r) {
    risultato = r;
    $('#riepilogo').innerHTML = schedaRiepilogo(r);
    $('#elencoIngredienti').innerHTML = r.lista.map(schedaIngrediente).join('');
    $('#notaStime').innerHTML = 'Le percentuali e il pH sono <b>stime</b>: l\'etichetta INCI non riporta le quantità, quindi l\'app le ricava dall\'ordine degli ingredienti, dai limiti di legge e dalle dosi d\'uso abituali di ogni sostanza. Il produttore è l\'unico a conoscere i valori esatti.' +
      (r.eventuali ? '<br><br>Nella lista compare la sigla <b>+/-</b> (oppure "may contain"): indica i coloranti che possono esserci o no, secondo la tonalità del prodotto.' : '');
    vai('v-descrizione');
  }

  /* ------------- schermata 3: classificazione ------------- */
  function pesoGruppo(l) { return l.reduce(function (a, x) { return a + (x.conc || 0); }, 0); }

  function bloccoGruppo(titolo, chiave, spiega, elenco) {
    var h = '<div class="gruppo-testa"><span class="pallino p-' + chiave + '"></span><h3>' + titolo + '</h3>' +
      '<span class="conteggio">' + elenco.length + (elenco.length === 1 ? ' sostanza' : ' sostanze') + '</span></div>';
    h += '<p class="spiega">' + spiega + '</p>';
    if (!elenco.length) { h += '<div class="scheda"><p style="margin:0;color:var(--tenue)">Nessuna sostanza di questo tipo in questa lista.</p></div>'; return h; }
    h += '<div class="scheda" style="padding:6px 14px">';
    elenco.forEach(function (x, i) {
      h += '<div style="padding:11px 0;' + (i ? 'border-top:1px solid var(--bordo)' : '') + '">' +
        '<div style="display:flex;gap:10px;align-items:baseline"><b style="flex:1;font-size:15px">' + esc(x.nome) + '</b>' +
        '<span style="color:var(--tenue);font-size:13px;white-space:nowrap">' + num(x.concMin) + '–' + num(x.concMax) + '%</span></div>' +
        '<div style="color:var(--tenue);font-size:13.5px">' + esc(x.classe) + ' · ' + esc(x.funzione || '') + '</div></div>';
    });
    h += '</div>';
    return h;
  }

  function mostraClassificazione(r) {
    var g = r.gruppi;
    var pb = pesoGruppo(g.base), pf = pesoGruppo(g.funz), pe = pesoGruppo(g.ecc);
    var tot = Math.max(pb + pf + pe, 0.01);
    var h = '';
    h += '<div class="scheda"><h3>Di che cosa è fatto, in breve</h3>';
    h += '<div class="torta">' +
      '<i style="width:' + (pb / tot * 100).toFixed(1) + '%;background:var(--base)"></i>' +
      '<i style="width:' + (pf / tot * 100).toFixed(1) + '%;background:var(--funz)"></i>' +
      '<i style="width:' + (pe / tot * 100).toFixed(1) + '%;background:var(--ecc)"></i></div>';
    h += '<div class="legenda">' +
      '<span><i style="background:var(--base)"></i>base ' + Math.round(pb / tot * 100) + '%</span>' +
      '<span><i style="background:var(--funz)"></i>funzionali ' + Math.round(pf / tot * 100) + '%</span>' +
      '<span><i style="background:var(--ecc)"></i>eccipienti ' + Math.round(pe / tot * 100) + '%</span></div>';
    h += '<p class="nota" style="margin-top:8px">Le barre mostrano quanto pesa ogni gruppo in quantità, non in importanza: spesso le sostanze che fanno il lavoro vero sono pochissime in peso.</p></div>';

    h += bloccoGruppo('Sostanza base', 'base',
      'È la sostanza preponderante, quella che contiene e tiene insieme tutte le altre. Fa da veicolo: da sola non "cura" nulla, ma decide se il prodotto sarà una crema, un olio, un gel o un sapone.',
      g.base);

    h += bloccoGruppo('Sostanze funzionali', 'funz',
      'Sono quelle che danno al cosmetico le sue proprietà: lavano, idratano, ammorbidiscono, proteggono dal sole, districano i capelli, esfoliano. Sono il motivo per cui si compra quel prodotto.',
      g.funz);

    h += bloccoGruppo('Eccipienti', 'ecc',
      'Sono le sostanze che perfezionano il cosmetico e lo rendono utilizzabile: coloranti, profumo, conservanti, addensanti, correttori di pH, stabilizzanti. Non agiscono sulla pelle, ma senza di loro il prodotto si separerebbe, ammuffirebbe o non sarebbe piacevole da usare.',
      g.ecc);

    h += '<div class="scheda" style="margin-top:22px"><h3>In sintesi</h3><p style="margin:0">' +
      'Questo prodotto è fatto soprattutto di <b>' + esc(g.base[0].nome) + '</b>. ' +
      'Il lavoro vero lo fanno ' + (g.funz.length ? '<b>' + g.funz.length + '</b> sostanze funzionali, in particolare ' +
        g.funz.slice(0, 3).map(function (x) { return esc(x.nome) + ' (' + esc(x.funzione) + ')'; }).join(', ') : 'poche sostanze funzionali') +
      '. Le restanti <b>' + g.ecc.length + '</b> servono a tenere insieme, conservare, colorare o profumare la formula.</p></div>';

    $('#classificazione').innerHTML = h;
    vai('v-classificazione');
  }

  /* ------------- avvio dell'analisi ------------- */
  function analizzaTesto(testo) {
    var r;
    try { r = window.INCI.analizza(testo); } catch (e) { r = null; }
    if (!r || r.lista.length < 2) {
      alert('Non sono riuscito a riconoscere una lista di ingredienti.\n\nControlla che ci siano le virgole fra un ingrediente e l\'altro, per esempio:\nAqua, Glycerin, Parfum');
      return;
    }
    mostraDescrizione(r);
  }

  $('#btnAnalizzaScritto').addEventListener('click', function () { analizzaTesto($('#testoInci').value); });
  $('#btnAnalizzaFoto').addEventListener('click', function () { analizzaTesto($('#testoOcr').value); });
  $('#btnVaiClassifica').addEventListener('click', function () { mostraClassificazione(risultato); });
  $('#btnTornaDescrizione').addEventListener('click', function () { vai('v-descrizione', true); });
  $('#btnNuova').addEventListener('click', function () { storico = []; vai('v-home', true); });
  $('#btnEsempio').addEventListener('click', function () {
    $('#testoInci').value = 'Aqua, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Niacinamide, Butyrospermum Parkii Butter, Glyceryl Stearate, PEG-100 Stearate, Dimethicone, Panthenol, Tocopheryl Acetate, Sodium Hyaluronate, Xanthan Gum, Carbomer, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin, Parfum, Limonene, Linalool, CI 77891';
  });

  /* ------------- foto: lettura del testo ------------- */
  $('#btnScatta').addEventListener('click', function () { $('#fileFoto').click(); });
  $('#fileFoto').addEventListener('change', function (e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    var img = $('#anteprima');
    img.src = URL.createObjectURL(f);
    img.style.display = 'block';
    leggiFoto(f);
  });

  function caricaTesseract() {
    if (window.Tesseract) return Promise.resolve();
    return new Promise(function (ok, ko) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
      s.onload = ok; s.onerror = ko;
      document.head.appendChild(s);
    });
  }

  function leggiFoto(file) {
    var stato = $('#statoOcr');
    stato.innerHTML = '<div class="caricamento"><span class="giro"></span><span>Sto leggendo l\'etichetta… la prima volta ci vuole qualche secondo in più.</span></div>';
    caricaTesseract().then(function () {
      return window.Tesseract.recognize(file, 'eng', {
        logger: function (m) {
          if (m.status === 'recognizing text') {
            stato.innerHTML = '<div class="caricamento"><span class="giro"></span><span>Lettura in corso… ' +
              Math.round((m.progress || 0) * 100) + '%</span></div>';
          }
        }
      });
    }).then(function (res) {
      var t = (res && res.data && res.data.text) || '';
      stato.innerHTML = '';
      $('#boxTestoOcr').hidden = false;
      $('#testoOcr').value = t.replace(/\n{2,}/g, '\n').trim();
      if (!t.trim()) stato.innerHTML = '<p class="nota">Non ho letto nessun testo. Riprova più da vicino, con la luce davanti e la confezione ben distesa.</p>';
    }).catch(function () {
      stato.innerHTML = '<p class="nota">Non sono riuscito a leggere la foto: per questa funzione serve la connessione a internet almeno la prima volta. Nel frattempo puoi scrivere la lista a mano.</p>';
      $('#boxTestoOcr').hidden = false;
    });
  }

  /* ------------- ricerca per nome del prodotto ------------- */
  /* Fonte: Open Beauty Facts, archivio pubblico e gratuito di cosmetici.
     Si può cercare per nome oppure incollando il codice a barre. */
  var OBF = 'https://world.openbeautyfacts.org';

  function prendiJson(url) {
    return fetch(url, { headers: { 'Accept': 'application/json' } }).then(function (r) {
      if (!r.ok) throw new Error('risposta ' + r.status);
      return r.json();
    });
  }
  function utili(lista) {
    return (lista || []).filter(function (x) { return x && x.ingredients_text && x.ingredients_text.length > 20; });
  }
  function cercaProdotti(q) {
    if (/^[0-9]{8,14}$/.test(q)) {          // è un codice a barre
      return prendiJson(OBF + '/api/v2/product/' + q + '.json?fields=code,product_name,brands,ingredients_text,image_front_small_url')
        .then(function (d) { return utili(d && d.product ? [d.product] : []); });
    }
    var campi = 'code,product_name,brands,ingredients_text,image_front_small_url';
    var uno = OBF + '/cgi/search.pl?search_terms=' + encodeURIComponent(q) +
      '&search_simple=1&action=process&json=1&page_size=20&fields=' + campi;
    var due = OBF + '/api/v2/search?search_terms=' + encodeURIComponent(q) +
      '&page_size=20&fields=' + campi;
    return prendiJson(uno)
      .then(function (d) { return utili(d && d.products); })
      .catch(function () { return []; })
      .then(function (p) { return p.length ? p : prendiJson(due).then(function (d) { return utili(d && d.products); }); });
  }

  function cerca() {
    var q = $('#campoNome').value.trim();
    var box = $('#risultatiRicerca');
    if (q.length < 3) { box.innerHTML = '<p class="nota">Scrivi almeno tre lettere, oppure il codice a barre del prodotto.</p>'; return; }
    box.innerHTML = '<div class="caricamento"><span class="giro"></span><span>Sto cercando…</span></div>';
    cercaProdotti(q).then(function (p) {
      if (!p.length) {
        box.innerHTML = '<p class="nota">Nessun prodotto trovato con la lista degli ingredienti. Prova a scrivere il nome in un altro modo (prima la marca), oppure fotografa l\'etichetta: il risultato dell\'analisi è lo stesso.</p>';
        return;
      }
      box.innerHTML = '<h3>' + p.length + (p.length === 1 ? ' prodotto trovato' : ' prodotti trovati') + '</h3>' + p.map(function (x, i) {
        return '<button class="risultato" data-i="' + i + '">' +
          (x.image_front_small_url ? '<img src="' + esc(x.image_front_small_url) + '" alt="">' : '<span class="ico">🧴</span>') +
          '<span><b>' + esc(x.product_name || 'Prodotto senza nome') + '</b><span>' + esc(x.brands || '') + '</span></span></button>';
      }).join('');
      box.querySelectorAll('.risultato').forEach(function (b) {
        b.addEventListener('click', function () {
          var prod = p[+b.getAttribute('data-i')];
          $('#testoInci').value = prod.ingredients_text;
          analizzaTesto(prod.ingredients_text);
        });
      });
    }).catch(function () {
      box.innerHTML = '<p class="nota">Ricerca non riuscita: controlla la connessione a internet. Puoi sempre fotografare l\'etichetta o scrivere la lista a mano.</p>';
    });
  }
  $('#btnCerca').addEventListener('click', cerca);
  $('#campoNome').addEventListener('keydown', function (e) { if (e.key === 'Enter') cerca(); });

})();
