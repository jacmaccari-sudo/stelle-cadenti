/* Banca dati INCI - parte 3: conservanti, addensanti, regolatori di pH, coloranti, profumi. */
window.INCI_DB.push(

/* ---------- CONSERVANTI ---------- */
{n:"PHENOXYETHANOL",c:"Etere aromatico di glicole",g:"ecc",f:"conservante",
 d:"È il conservante più usato al mondo: impedisce a batteri e muffe di crescere nel prodotto. Senza conservanti un cosmetico con acqua diventerebbe pericoloso in pochi giorni.",
 p:"Liquido oleoso leggermente solubile in acqua (2,7%), odore di rosa, efficace soprattutto sui batteri (meno su muffe e lieviti, per questo si abbina a etilesilglicerina o sorbato), attivo fra pH 3 e 10.",
 t:[0.3,1],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammesso fino all'1%.",a:"Allegato V"}},

{n:"ETHYLHEXYLGLYCERIN",c:"Etere di glicerolo con catena grassa",g:"ecc",f:"potenziatore di conservazione, deodorante",
 d:"Rende più forte il conservante principale e riduce i batteri che causano il cattivo odore; ammorbidisce anche la pelle.",
 p:"Liquido oleoso, tensioattivo debole che destabilizza le membrane batteriche, stabile a ogni pH, non è classificato come conservante ufficiale.",
 t:[0.3,1],ph:{e:"neutro",v:6.5}},

{n:"SODIUM BENZOATE",alt:["BENZOIC ACID","AMMONIUM BENZOATE","POTASSIUM BENZOATE"],c:"Sale dell'acido benzoico",g:"ecc",f:"conservante",
 d:"Conservante di origine anche naturale (si trova nei mirtilli): blocca soprattutto lieviti e muffe. Funziona solo se il prodotto è acido.",
 p:"Polvere idrosolubile; è attiva solo la forma acida non dissociata, quindi serve pH sotto 5 (ideale 4-4,5). Con la vitamina C e a caldo può formare tracce di benzene.",
 t:[0.1,1],ph:{e:"acido",v:5},
 r:{t:"limitato",x:"Acido benzoico e sali: 0,5% (come acido) nei prodotti senza risciacquo, 2,5% nei prodotti da risciacquo, 1,7% nei prodotti per il cavo orale.",a:"Allegato V"}},

{n:"POTASSIUM SORBATE",alt:["SORBIC ACID","SODIUM SORBATE"],c:"Sale dell'acido sorbico (acido grasso insaturo)",g:"ecc",f:"conservante",
 d:"Conservante delicato contro muffe e lieviti, molto usato nei prodotti naturali. Attivo solo in ambiente acido.",
 p:"Polvere molto solubile in acqua, attiva sotto pH 5,5 (ottimale 4-5), instabile alla luce e all'ossidazione (può ingiallire la formula).",
 t:[0.1,0.6],ph:{e:"acido",v:5},
 r:{t:"limitato",x:"Ammesso fino allo 0,6% (espresso come acido sorbico).",a:"Allegato V"}},

{n:"DEHYDROACETIC ACID",c:"Pirandione (acido organico)",g:"ecc",f:"conservante",
 d:"Conservante ad ampio spettro usato spesso in coppia con l'alcol benzilico nei prodotti \"senza parabeni\".",
 p:"Polvere poco solubile in acqua, attiva soprattutto sotto pH 6, efficace su muffe e lieviti, stabile al calore.",
 t:[0.1,0.6],ph:{e:"acido",v:5.5},
 r:{t:"limitato",x:"Acido deidroacetico e suoi sali: massimo 0,6% (come acido); vietato negli spray. Attenzione: il sodium dehydroacetate è stato vietato separatamente.",a:"Allegato V"}},

{n:"SODIUM DEHYDROACETATE",c:"Sale sodico dell'acido deidroacetico",g:"ecc",f:"conservante",
 d:"Conservante non più ammesso in Europa dopo la classificazione come tossico per la riproduzione.",
 p:"Polvere idrosolubile, attiva a pH acido.",t:[0,0],
 r:{t:"vietato",x:"Vietato nei cosmetici dal 1° dicembre 2023 (regolamento (UE) 2022/1531, \"Omnibus V\"), perché classificato CMR di categoria 1B/2.",a:"Allegato II"}},

{n:"BENZYL ALCOHOL",c:"Alcol aromatico",g:"ecc",f:"conservante, solvente, allergene da profumo",
 d:"Conserva il prodotto e gli dà un leggero profumo; è anche un allergene che deve essere dichiarato in etichetta.",
 p:"Liquido con odore dolce, solubile in acqua al 4%, attivo fra pH 3 e 8 su batteri e lieviti, volatile, può ossidarsi in aldeide benzoica.",
 t:[0.3,1],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Massimo 1% come conservante; come componente di profumo va dichiarato in etichetta sopra 0,001% nei prodotti senza risciacquo e 0,01% in quelli da risciacquo.",a:"Allegato V / Allegato III"}},

{n:"METHYLPARABEN",alt:["ETHYLPARABEN","SODIUM METHYLPARABEN","SODIUM ETHYLPARABEN","POTASSIUM METHYLPARABEN"],c:"Estere dell'acido para-idrossibenzoico (parabene a catena corta)",g:"ecc",f:"conservante",
 d:"Conservante storico, molto efficace e con lunghissima storia d'uso. I parabeni a catena corta sono considerati sicuri alle dosi ammesse.",
 p:"Polvere poco solubile in acqua, attiva fra pH 4 e 8, efficace soprattutto su muffe e lieviti, può essere inattivata dai tensioattivi non ionici.",
 t:[0.1,0.4],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Massimo 0,4% per singolo parabene e 0,8% come somma di tutti i parabeni presenti.",a:"Allegato V"}},

{n:"PROPYLPARABEN",alt:["BUTYLPARABEN","SODIUM PROPYLPARABEN","SODIUM BUTYLPARABEN"],c:"Estere dell'acido para-idrossibenzoico (parabene a catena lunga)",g:"ecc",f:"conservante",
 d:"Parabene più potente ma con limiti più severi e vietato nei prodotti da lasciare sul sederino dei bambini piccoli.",
 p:"Poco solubile in acqua, più liposolubile del metilparabene, attivo fra pH 4 e 8.",
 t:[0.05,0.14],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Massimo 0,14% (somma); vietato nei prodotti senza risciacquo per la zona del pannolino nei bambini sotto i 3 anni.",a:"Allegato V"}},

{n:"ISOPROPYLPARABEN",alt:["ISOBUTYLPARABEN","PHENYLPARABEN","BENZYLPARABEN","PENTYLPARABEN"],c:"Parabene ramificato o aromatico",g:"ecc",f:"conservante",
 d:"Parabeni non più ammessi in Europa: mancavano dati sufficienti sulla loro sicurezza.",
 p:"Esteri poco solubili in acqua, attivi fra pH 4 e 8.",t:[0,0],
 r:{t:"vietato",x:"Vietati nei cosmetici dal 2015 (regolamento (UE) 358/2014) per mancanza di dati adeguati sulla sicurezza.",a:"Allegato II"}},

{n:"METHYLISOTHIAZOLINONE",alt:["MI","MIT"],c:"Isotiazolinone (eterociclo con zolfo e azoto)",g:"ecc",f:"conservante",
 d:"Conservante molto potente ma anche fra le prime cause di allergia da contatto: oggi è ammesso solo nei prodotti che si risciacquano.",
 p:"Liquido idrosolubile, attivo a dosi bassissime (ppm), efficace fra pH 2 e 9, disattivato dalle ammine e dai solfiti.",
 t:[0.0001,0.0015],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Vietato nei prodotti senza risciacquo dal 2017; ammesso solo nei prodotti da risciacquo fino allo 0,0015% (15 ppm).",a:"Allegato V"}},

{n:"METHYLCHLOROISOTHIAZOLINONE",alt:["METHYLCHLOROISOTHIAZOLINONE/METHYLISOTHIAZOLINONE","CMIT/MIT","KATHON CG"],c:"Isotiazolinone clorurato",g:"ecc",f:"conservante",
 d:"Miscela conservante molto efficace ma fortemente allergizzante: solo nei prodotti che si sciacquano via.",
 p:"Attiva a concentrazioni bassissime, stabile fra pH 2 e 8, incompatibile con ammine e agenti riducenti.",
 t:[0.0001,0.0015],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Solo nei prodotti da risciacquo, massimo 0,0015% della miscela 3:1 con metilisotiazolinone; non può essere usato insieme al solo metilisotiazolinone.",a:"Allegato V"}},

{n:"DMDM HYDANTOIN",alt:["IMIDAZOLIDINYL UREA","DIAZOLIDINYL UREA","QUATERNIUM-15","SODIUM HYDROXYMETHYLGLYCINATE","BRONOPOL","2-BROMO-2-NITROPROPANE-1,3-DIOL"],c:"Conservante cessore di formaldeide",g:"ecc",f:"conservante",
 d:"Conserva liberando lentamente piccolissime quantità di formaldeide. Efficace, ma chi è allergico alla formaldeide deve evitarlo: l'etichetta lo segnala.",
 p:"Solidi idrosolubili, attivi in ampio intervallo di pH, ad ampio spettro; l'efficacia dipende dal rilascio lento di formaldeide, che è anche il motivo delle restrizioni.",
 t:[0.1,0.6],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammessi con limiti specifici (0,6% per DMDM idantoina, 0,5% per diazolidinil urea, 0,1% per bronopol). Dal regolamento (UE) 2022/1181 se il prodotto rilascia più dello 0,001% di formaldeide deve riportare l'avvertenza \"rilascia formaldeide\".",a:"Allegato V"}},

{n:"FORMALDEHYDE",alt:["FORMALIN","METHYLENE GLYCOL","PARAFORMALDEHYDE"],c:"Aldeide semplice",g:"ecc",f:"conservante",
 d:"Non è più ammessa come tale nei cosmetici: è irritante e classificata come cancerogena per inalazione.",
 p:"Gas solubile in acqua, altamente reattivo con le proteine.",t:[0,0],
 r:{t:"vietato",x:"Vietata nei cosmetici (regolamento (UE) 2019/831), compreso l'uso per lisciare i capelli.",a:"Allegato II"}},

{n:"CHLORPHENESIN",alt:["IODOPROPYNYL BUTYLCARBAMATE","CAPRYLHYDROXAMIC ACID","p-ANISIC ACID","LEVULINIC ACID","SODIUM LEVULINATE","GLUCONOLACTONE"],c:"Conservante o sostanza ad azione antimicrobica",g:"ecc",f:"conservante",
 d:"Tengono il prodotto al riparo da germi e muffe. Alcune di queste sostanze sono ammesse come conservanti veri e propri, altre lavorano \"di supporto\".",
 p:"Molecole attive per lo più in ambiente acido o neutro, usate in piccole quantità, spesso in miscela per coprire batteri, muffe e lieviti insieme.",
 t:[0.1,0.5],ph:{e:"acido",v:5.5},
 r:{t:"limitato",x:"Clorfenesina massimo 0,3%; iodopropinil butilcarbammato con limiti dallo 0,005% allo 0,02% secondo il tipo di prodotto e vietato nei prodotti per bambini sotto i 3 anni.",a:"Allegato V"}},

{n:"TRICLOSAN",alt:["TRICLOCARBAN"],c:"Fenolo clorurato",g:"funz",f:"antibatterico",
 d:"Antibatterico usato in dentifrici e deodoranti, oggi molto limitato per il rischio di resistenze batteriche e per l'impatto ambientale.",
 p:"Polvere poco solubile in acqua, attiva contro i batteri gram-positivi, stabile, bioaccumulabile.",
 t:[0.05,0.3],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Triclosan ammesso solo in dentifrici, saponi, deodoranti non spray, ciprie e correttori (0,3%) e in collutori (0,2%). Triclocarban massimo 0,2% (1,5% nei prodotti da risciacquo).",a:"Allegato V"}},

{n:"ZINC PYRITHIONE",alt:["PYRITHIONE ZINC","ZPT"],c:"Complesso di zinco con piritione",g:"funz",f:"antiforfora",
 d:"Storico antiforfora, oggi non più ammesso nei cosmetici europei.",
 p:"Polvere insolubile in acqua, antifungina contro la Malassezia, sensibile alla luce e ai metalli.",t:[0,0],
 r:{t:"vietato",x:"Vietato nei cosmetici dal 1° marzo 2022 (regolamento (UE) 2021/1902) perché classificato tossico per la riproduzione.",a:"Allegato II"}},

{n:"PIROCTONE OLAMINE",alt:["CLIMBAZOLE","SELENIUM DISULFIDE","KETOCONAZOLE"],c:"Antifungino organico (idrossipiridone / azolo)",g:"funz",f:"antiforfora",
 d:"Riduce il fungo responsabile della forfora e il prurito del cuoio capelluto.",
 p:"Poco solubile in acqua, attivo a pH leggermente acido, sostantivo al cuoio capelluto, stabile.",
 t:[0.1,1],ph:{e:"acido",v:5.5},
 r:{t:"limitato",x:"Piroctone olamina: 1% nei prodotti da risciacquo e 0,5% negli altri. Climbazolo: limiti specifici per tipo di prodotto (0,2-2%).",a:"Allegato V"}},

/* ---------- ADDENSANTI E STABILIZZANTI ---------- */
{n:"XANTHAN GUM",alt:["SCLEROTIUM GUM","CAESALPINIA SPINOSA GUM","CYAMOPSIS TETRAGONOLOBA GUM","GUAR GUM","CELLULOSE GUM","HYDROXYETHYLCELLULOSE","HYDROXYPROPYL METHYLCELLULOSE","CARRAGEENAN","CHONDRUS CRISPUS","PULLULAN","GELLAN GUM","AGAR","ALGIN","SODIUM ALGINATE"],c:"Polisaccaride naturale (gomma)",g:"ecc",f:"addensante, stabilizzante",
 d:"Dà corpo al prodotto e impedisce che le parti si separino o che le polveri vadano a fondo. Trasforma un liquido in gel.",
 p:"Polimero di zuccheri prodotto per fermentazione o estratto da alghe e semi; si idrata in acqua formando soluzioni molto viscose già allo 0,2-1%, pseudoplastiche (si fluidificano quando si spalmano), stabili fra pH 3 e 11 e resistenti al sale.",
 t:[0.1,1.5],ph:{e:"neutro",v:6.5}},

{n:"CARBOMER",alt:["ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER","CARBOMER 940","CARBOMER 980","ACRYLATES COPOLYMER","POLYACRYLATE CROSSPOLYMER-6","SODIUM POLYACRYLATE","SODIUM ACRYLATES COPOLYMER","AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER","SODIUM ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER","HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER"],c:"Polimero sintetico dell'acido acrilico",g:"ecc",f:"gelificante, stabilizzante",
 d:"Trasforma l'acqua in un gel trasparente e stabile: è quello che dà la consistenza a gel, sieri e molte creme.",
 p:"Polimero acido che in acqua è un liquido torbido; quando viene neutralizzato con una base (idrossido di sodio, trietanolammina, arginina) le catene si aprono e si forma il gel, con viscosità massima fra pH 5 e 9. Sensibile ai sali e agli ingredienti cationici, che lo fanno smontare.",
 t:[0.1,1],ph:{e:"acido",v:3}},

{n:"SODIUM CHLORIDE",alt:["SEA SALT","MARIS SAL","AMMONIUM CHLORIDE","MAGNESIUM SULFATE","POTASSIUM CHLORIDE"],c:"Sale inorganico",g:"ecc",f:"addensante, regolatore",
 d:"Nei bagnoschiuma e negli shampoo il sale serve a rendere il prodotto più denso; negli scrub fa da granello esfoliante.",
 p:"Cristalli molto solubili in acqua, elettrolita: modifica la forma delle micelle dei tensioattivi e ne aumenta la viscosità fino a un massimo, oltre il quale il prodotto torna liquido.",
 t:[0.5,3],ph:{e:"neutro",v:7}},

{n:"PEG-150 DISTEARATE",alt:["PEG-120 METHYL GLUCOSE DIOLEATE","PEG-150 PENTAERYTHRITYL TETRASTEARATE"],c:"Estere etossilato ad alto peso molecolare",g:"ecc",f:"addensante",
 d:"Addensa i prodotti a base di tensioattivi senza usare il sale e dà una consistenza ricca e filante.",
 p:"Polimero idrosolubile associativo: si lega alle micelle creando una rete viscosa, stabile a ogni pH.",
 t:[0.5,3],ph:{e:"neutro",v:6.5}},

/* ---------- CHELANTI ---------- */
{n:"DISODIUM EDTA",alt:["TETRASODIUM EDTA","TRISODIUM EDTA","EDTA","TRISODIUM ETHYLENEDIAMINE DISUCCINATE","ETIDRONIC ACID","SODIUM PHYTATE","PHYTIC ACID","SODIUM GLUCONATE","PENTASODIUM PENTETATE"],c:"Agente chelante (sequestrante di metalli)",g:"ecc",f:"stabilizzante",
 d:"Cattura le tracce di metalli che arrivano con l'acqua e che farebbero irrancidire il prodotto o scolorire la formula. Aiuta anche i conservanti a funzionare meglio e la schiuma a formarsi in acqua dura.",
 p:"Molecola con più siti che \"pinzano\" ioni come ferro, rame, calcio e magnesio; idrosolubile, efficace a dosi bassissime, più attiva a pH neutro-alcalino. L'EDTA è poco biodegradabile, per questo esistono alternative come il fitato.",
 t:[0.05,0.5],ph:{e:"neutro",v:7}},

/* ---------- REGOLATORI DI pH ---------- */
{n:"CITRIC ACID",c:"Acido carbossilico tricarbossilico (acido della frutta)",g:"ecc",f:"regolatore di pH",
 d:"Serve a portare il prodotto al giusto grado di acidità, di solito vicino a quello della pelle. In piccola quantità è solo un correttore, in quantità maggiori diventa un esfoliante.",
 p:"Cristalli molto solubili in acqua, acido debole a tre funzioni acide, forma tamponi con il citrato di sodio, leggermente chelante verso i metalli.",
 t:[0.05,1],ph:{e:"acido",v:2.5}},

{n:"SODIUM HYDROXIDE",alt:["POTASSIUM HYDROXIDE","CALCIUM HYDROXIDE","LITHIUM HYDROXIDE"],c:"Base inorganica forte (alcali)",g:"ecc",f:"regolatore di pH",
 d:"Si usa in gocce per alzare il pH e neutralizzare i gelificanti acidi. Nel prodotto finito non resta come tale: si è già trasformata in sale.",
 p:"Base forte, completamente dissociata in acqua, fortemente corrosiva allo stato puro; nella formula è presente solo la quantità necessaria alla neutralizzazione.",
 t:[0.05,1],ph:{e:"alcalino",v:13},
 r:{t:"limitato",x:"Limiti stretti secondo l'uso: fino al 5% negli scioglicuticole, 2% nei lisciviatori per capelli di uso professionale fino al 4,5%, con avvertenze obbligatorie; vietato negli altri usi sopra queste soglie.",a:"Allegato III"}},

{n:"TRIETHANOLAMINE",alt:["TEA","AMINOMETHYL PROPANOL","TROMETHAMINE","TRIS","ARGININE","SODIUM CITRATE","SODIUM PHOSPHATE","TRISODIUM CITRATE","POTASSIUM CITRATE","SODIUM BICARBONATE","AMMONIUM HYDROXIDE"],c:"Base organica / sale tampone",g:"ecc",f:"regolatore di pH",
 d:"Alza il pH o lo mantiene stabile nel tempo, evitando che il prodotto diventi troppo acido o troppo alcalino durante la conservazione.",
 p:"Basi deboli o sali che formano sistemi tampone: resistono alle variazioni di pH. La trietanolammina neutralizza anche gli acidi grassi formando saponi emulsionanti.",
 t:[0.1,2],ph:{e:"alcalino",v:9},
 r:{t:"limitato",x:"La trietanolammina è ammessa fino al 2,5% nei prodotti senza risciacquo, con tenore massimo di ammine secondarie e senza sostanze nitrosanti, per evitare la formazione di nitrosammine.",a:"Allegato III"}},

/* ---------- COLORANTI E PIGMENTI ---------- */
{n:"CI 77491",alt:["CI 77492","CI 77499","IRON OXIDES","IRON OXIDE"],c:"Pigmento inorganico (ossidi di ferro)",g:"ecc",f:"colorante",
 d:"Danno i colori rosso, giallo e nero ai fondotinta e ai trucchi. Sono polveri minerali che non si sciolgono: restano in superficie e coprono.",
 p:"Ossidi metallici insolubili, opachi, stabilissimi a luce, calore e pH; il colore dipende dallo stato di ossidazione del ferro; ottima tollerabilità cutanea.",
 t:[0.1,10],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Colorante ammesso per tutti i tipi di cosmetici, con i requisiti di purezza previsti.",a:"Allegato IV"}},

{n:"MICA",alt:["SYNTHETIC FLUORPHLOGOPITE","BISMUTH OXYCHLORIDE","CALCIUM ALUMINUM BOROSILICATE","CI 77019"],c:"Minerale lamellare (silicato di alluminio)",g:"ecc",f:"pigmento perlescente",
 d:"Dà il riflesso luminoso e perlato a ombretti, illuminanti e creme: le sue lamelle riflettono la luce.",
 p:"Cristalli lamellari trasparenti, insolubili, inerti, spesso rivestiti di biossido di titanio o ossidi di ferro per dare tonalità iridescenti.",
 t:[0.5,30],ph:{e:"neutro",v:7}},

{n:"CI 19140",alt:["CI 42090","CI 15985","CI 16035","CI 45410","CI 17200","CI 14700","CI 15510","CI 47005","CI 60730","CI 61565"],c:"Colorante organico di sintesi",g:"ecc",f:"colorante",
 d:"Dà colore al prodotto (giallo, blu, rosso...). Serve solo all'aspetto: non ha effetto sulla pelle. In etichetta è sempre in fondo alla lista.",
 p:"Coloranti idrosolubili o in lacca insolubile; stabilità variabile a luce e pH, usati in quantità minime (spesso sotto lo 0,01%).",
 t:[0.0005,0.1],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Solo i coloranti elencati nell'Allegato IV sono ammessi, con i limiti d'uso previsti (alcuni solo per prodotti da risciacquo o non destinati a mucose e contorno occhi).",a:"Allegato IV"}},

{n:"CI 75470",alt:["CARMINE","COCHINEAL","CARMINIC ACID"],c:"Colorante naturale di origine animale",g:"ecc",f:"colorante rosso",
 d:"Rosso brillante estratto da un insetto (la cocciniglia): dà il colore a rossetti e blush. Non è vegano e raramente può dare allergia.",
 p:"Lacca di alluminio dell'acido carminico, insolubile a pH acido, sensibile alla luce e ai pH alti (vira al viola).",
 t:[0.1,5],ph:{e:"neutro",v:6},
 r:{t:"limitato",x:"Colorante ammesso per tutti i prodotti cosmetici.",a:"Allegato IV"}},

/* ---------- PROFUMO E ALLERGENI ---------- */
{n:"PARFUM",alt:["FRAGRANCE","AROMA","PERFUME"],c:"Miscela di sostanze odorose",g:"ecc",f:"profumazione",
 d:"È la parte che dà l'odore al prodotto: può contenere decine di molecole diverse, indicate con un unico nome. Non migliora l'efficacia del cosmetico, ma è la prima causa di allergie da cosmetico.",
 p:"Miscela di oli essenziali e molecole di sintesi, in gran parte volatili e liposolubili; alcune componenti si ossidano all'aria diventando più allergizzanti. I 26 (oggi 80+) allergeni riconosciuti vanno dichiarati a parte.",
 t:[0.1,1.5],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Gli allergeni del profumo elencati nell'Allegato III devono essere dichiarati singolarmente in etichetta sopra 0,001% (prodotti senza risciacquo) o 0,01% (da risciacquo); dal regolamento (UE) 2023/1545 l'elenco è stato ampliato a oltre 80 sostanze.",a:"Allegato III"}},

{n:"LIMONENE",alt:["LINALOOL","CITRONELLOL","GERANIOL","CITRAL","EUGENOL","COUMARIN","BENZYL SALICYLATE","BENZYL BENZOATE","BENZYL CINNAMATE","HEXYL CINNAMAL","ALPHA-ISOMETHYL IONONE","AMYL CINNAMAL","FARNESOL","ISOEUGENOL","CINNAMYL ALCOHOL","CINNAMAL","ANISE ALCOHOL","METHYL 2-OCTYNOATE","HYDROXYCITRONELLAL","BUTYLPHENYL METHYLPROPIONAL","AMYLCINNAMYL ALCOHOL","EUGENYL ACETATE"],c:"Componente odorosa (terpene o aldeide aromatica)",g:"ecc",f:"profumazione (allergene dichiarato)",
 d:"È una delle sostanze del profumo che per legge va scritta a parte, perché può dare allergia da contatto a chi è predisposto. La sua presenza non significa che il prodotto sia pericoloso: solo che chi è allergico deve saperlo.",
 p:"Molecole volatili liposolubili, spesso presenti anche negli oli essenziali naturali (agrumi, lavanda, rosa); si ossidano facilmente all'aria diventando più sensibilizzanti, per questo le formule le abbinano ad antiossidanti.",
 t:[0.001,0.5],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Deve essere dichiarato in etichetta se supera 0,001% nei prodotti senza risciacquo o 0,01% in quelli da risciacquo. Alcuni (come il butylphenyl methylpropional, \"Lilial\") sono stati poi vietati del tutto.",a:"Allegato III"}},

{n:"BUTYLPHENYL METHYLPROPIONAL",alt:["LILIAL","HYDROXYISOHEXYL 3-CYCLOHEXENE CARBOXALDEHYDE","LYRAL","HICC"],c:"Aldeide aromatica di sintesi (profumo)",g:"ecc",f:"profumazione",
 d:"Sostanze profumate non più ammesse: la prima perché tossica per la riproduzione, la seconda perché causava troppe allergie.",
 p:"Aldeidi volatili liposolubili dal tipico odore di mughetto.",t:[0,0],
 r:{t:"vietato",x:"Butylphenyl methylpropional (Lilial) vietato dal 1° marzo 2022; HICC (Lyral) vietato dal 2021.",a:"Allegato II"}},

/* ---------- POLVERI E ALTRO ---------- */
{n:"SILICA",alt:["HYDRATED SILICA","SILICA DIMETHYL SILYLATE","ALUMINA","MAGNESIUM ALUMINUM SILICATE","BENTONITE","KAOLIN","MONTMORILLONITE","ILLITE","SOLUM FULLONUM"],c:"Minerale inorganico (silicato o argilla)",g:"ecc",f:"assorbente, opacizzante, addensante",
 d:"Polveri che assorbono sebo e sudore, opacizzano la pelle e danno scorrevolezza ai prodotti in polvere. Le argille puliscono in profondità nelle maschere.",
 p:"Particelle porose con grande superficie, insolubili, inerti; alcune (bentonite, magnesio alluminio silicato) gonfiano in acqua formando gel tissotropici.",
 t:[0.5,20],ph:{e:"neutro",v:7}},

{n:"TALC",c:"Silicato di magnesio idrato",g:"ecc",f:"assorbente, scorrevolezza",
 d:"Polvere morbidissima che assorbe l'umidità e rende scorrevoli ciprie e fondotinta.",
 p:"Minerale lamellare insolubile, inerte, molto scorrevole, ottimo assorbente di umidità.",
 t:[1,80],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Deve essere privo di amianto. Nei prodotti in polvere per bambini sotto i 3 anni è obbligatoria l'avvertenza di tenere la polvere lontana dal naso e dalla bocca.",a:"Allegato III"}},

{n:"ZEA MAYS STARCH",alt:["MAIZE STARCH","ORYZA SATIVA POWDER","TAPIOCA STARCH","SODIUM STARCH OCTENYLSUCCINATE","ALUMINUM STARCH OCTENYLSUCCINATE","NYLON-12","POLYMETHYL METHACRYLATE","SILICA SILYLATE"],c:"Amido o polvere sferica sintetica",g:"ecc",f:"assorbente, effetto vellutato",
 d:"Assorbe il sebo e regala l'effetto \"pelle di pesca\", togliendo la lucidità e l'eventuale sensazione di unto.",
 p:"Granuli sferici insolubili che rotolano sulla pelle riducendo l'attrito; gli amidi gelatinizzano in acqua calda, le polveri sintetiche restano inerti.",
 t:[1,20],ph:{e:"neutro",v:6.5}},

{n:"BHT",alt:["BHA","BUTYLATED HYDROXYTOLUENE","BUTYLATED HYDROXYANISOLE","T-BUTYL HYDROQUINONE","PROPYL GALLATE","ASCORBYL PALMITATE"],c:"Antiossidante fenolico di sintesi",g:"ecc",f:"antiossidante di formula",
 d:"Non serve alla pelle: serve a impedire che i grassi e i profumi del prodotto irrancidiscano, cambiando odore e colore.",
 p:"Fenoli impediti liposolubili che interrompono le reazioni radicaliche a catena; efficaci a dosi minime (0,01-0,1%), volatili al calore.",
 t:[0.01,0.1],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Il BHA (butylated hydroxyanisole) è limitato a 0,0001-0,001% secondo il tipo di prodotto (regolamento (UE) 2024/996) per sospetta attività endocrina; il BHT resta ammesso fino a 0,001-0,8% secondo il tipo di prodotto.",a:"Allegato III"}},

{n:"MENTHOL",alt:["MENTHA PIPERITA OIL","CAMPHOR","MENTHYL LACTATE","EUCALYPTUS GLOBULUS LEAF OIL"],c:"Alcol terpenico (rinfrescante)",g:"funz",f:"rinfrescante",
 d:"Dà la sensazione di fresco attivando i recettori del freddo della pelle; nei dentifrici e nei collutori dà l'effetto \"pulito\".",
 p:"Cristalli volatili liposolubili, attivano il recettore TRPM8, forte odore di menta, possono irritare pelli sensibili e mucose.",
 t:[0.1,2],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"La canfora è soggetta a limiti nei prodotti destinati ai bambini; le essenze mentolate non sono adatte ai bambini piccoli per il rischio di spasmo respiratorio.",a:"Allegato III"}},

{n:"SODIUM FLUORIDE",alt:["SODIUM MONOFLUOROPHOSPHATE","STANNOUS FLUORIDE","AMINE FLUORIDE","OLAFLUR"],c:"Sale inorganico del fluoro",g:"funz",f:"anticarie",
 d:"Nel dentifricio rinforza lo smalto dei denti e previene la carie. È l'unico ingrediente del dentifricio con efficacia dimostrata contro la carie.",
 p:"Sale idrosolubile che trasforma l'idrossiapatite dello smalto in fluorapatite, più resistente all'acido; incompatibile con il calcio (che lo inattiva), attivo a pH leggermente acido.",
 t:[0.1,0.34],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Massimo 0,15% di fluoro (1500 ppm) nei prodotti per l'igiene orale; oltre lo 0,1% è obbligatoria un'avvertenza per i bambini.",a:"Allegato III"}},

{n:"ALUMINUM CHLOROHYDRATE",alt:["ALUMINUM ZIRCONIUM TETRACHLOROHYDREX GLY","ALUMINUM SESQUICHLOROHYDRATE","ALUMINUM CHLORIDE","POTASSIUM ALUM","ALUM"],c:"Sale di alluminio",g:"funz",f:"antitraspirante",
 d:"È la sostanza che blocca il sudore: forma un tappo temporaneo nel dotto della ghiandola sudoripara. I deodoranti senza alluminio invece agiscono solo sui batteri dell'odore.",
 p:"Sale acido idrosolubile che, a contatto con il sudore, forma un gel di idrossido di alluminio; la soluzione è acida (pH 3,5-4,5) e può macchiare i tessuti e irritare la pelle appena depilata.",
 t:[5,25],ph:{e:"acido",v:4},
 r:{t:"limitato",x:"Ammessi come antitraspiranti; il parere SCCS del 2020 ne ha confermato la sicurezza entro limiti di concentrazione definiti per tipo di prodotto (fino al 6,25% negli spray e 10,60% nei roll-on, espressi come alluminio).",a:"Allegato III"}},

{n:"HYDROGEN PEROXIDE",alt:["PEROXIDE"],c:"Perossido inorganico (ossidante)",g:"funz",f:"ossidante, schiarente",
 d:"L'acqua ossigenata: apre le squame del capello, scolorisce il pigmento naturale e attiva la tintura.",
 p:"Liquido instabile che si decompone in acqua e ossigeno (accelerato da luce, calore e metalli); forte ossidante, stabilizzato a pH acido nelle formule.",
 t:[1,12],ph:{e:"acido",v:3.5},
 r:{t:"limitato",x:"Massimo 12% (40 volumi) nei prodotti per capelli, 4% per la pelle, 2% per l'indurimento delle unghie, 0,1% per i prodotti del cavo orale. Avvertenze e guanti obbligatori.",a:"Allegato III"}},

{n:"AMMONIUM HYDROXIDE",alt:["AMMONIA","ETHANOLAMINE","MONOETHANOLAMINE","MEA"],c:"Base alcalina volatile o organica",g:"funz",f:"alcalinizzante per tinture",
 d:"Apre le squame del capello perché il colore possa entrare. L'ammoniaca ha l'odore pungente tipico delle tinture; l'etanolammina è inodore ma resta più a lungo sul capello.",
 p:"Base debole volatile (ammoniaca) o non volatile (etanolammina), porta il pH a 9-10,5 facendo gonfiare la cheratina.",
 t:[1,6],ph:{e:"alcalino",v:10.5},
 r:{t:"limitato",x:"Ammoniaca ammessa fino al 6%; sopra il 2% è obbligatoria l'indicazione \"contiene ammoniaca\".",a:"Allegato III"}},

{n:"P-PHENYLENEDIAMINE",alt:["PPD","TOLUENE-2,5-DIAMINE","P-AMINOPHENOL","M-AMINOPHENOL","RESORCINOL","4-AMINO-M-CRESOL","2-METHYLRESORCINOL","HYDROXYETHYL-P-PHENYLENEDIAMINE SULFATE"],c:"Ammina aromatica (precursore di colore ossidativo)",g:"funz",f:"colorante per capelli",
 d:"Sono le sostanze che, reagendo con l'acqua ossigenata, creano il colore dentro il capello. Sono anche fra le principali cause di allergia grave da tintura: per questo l'etichetta obbliga al test preliminare.",
 p:"Ammine e fenoli che si ossidano formando grandi molecole colorate intrappolate nel fusto; molto reattive, sensibilizzanti, attive a pH alcalino.",
 t:[0.1,2],ph:{e:"alcalino",v:9.5},
 r:{t:"limitato",x:"Ammessi solo nelle tinture ossidative per capelli con limiti stretti (p-fenilendiammina massimo 2% dopo miscelazione) e avvertenze obbligatorie: \"può provocare una reazione allergica\", non usare su under 16, non usare per tingere ciglia e sopracciglia.",a:"Allegato III"}},

{n:"THIOGLYCOLIC ACID",alt:["AMMONIUM THIOGLYCOLATE","ETHANOLAMINE THIOGLYCOLATE","CYSTEAMINE HCL","SODIUM THIOGLYCOLATE"],c:"Acido tiolico (riducente)",g:"funz",f:"riducente per permanenti e creme depilatorie",
 d:"Rompe i ponti che tengono la forma del capello o del pelo: serve per la permanente, la stiratura e le creme depilatorie. Ha il tipico odore di zolfo.",
 p:"Liquido con gruppo -SH che riduce i ponti disolfuro della cheratina; attivo a pH alcalino (8-9,5), si riossida all'aria, forte odore sulfureo.",
 t:[3,11],ph:{e:"alcalino",v:9},
 r:{t:"limitato",x:"Massimo 8% nei prodotti per capelli a uso domestico (11% professionale, pH 7-9,5) e 5% nelle creme depilatorie, con avvertenze e guanti obbligatori.",a:"Allegato III"}},

{n:"LEAD ACETATE",alt:["LEAD","MERCURY","THIMEROSAL","PHENYLMERCURIC ACETATE","HYDROXYPROPYL BIS(N-HYDROXYETHYL-P-PHENYLENEDIAMINE) HCL","METHYL METHACRYLATE","CHLOROFORM","PHENOL","ESTRADIOL","ESTRONE","STRONTIUM","ZIRCONIUM","GENISTEIN","DAIDZEIN","DEOXYARBUTIN"],c:"Sostanza non ammessa nei cosmetici",g:"funz",f:"—",
 d:"Sostanza che il regolamento europeo vieta nei cosmetici, per tossicità, effetti sugli ormoni o rischio cancerogeno. Se compare in etichetta il prodotto non è conforme alle regole europee.",
 p:"Metalli pesanti, ormoni, solventi tossici o molecole classificate CMR (cancerogene, mutagene o tossiche per la riproduzione).",
 t:[0,0],
 r:{t:"vietato",x:"Compresa nell'elenco delle sostanze vietate nei prodotti cosmetici. I metalli pesanti sono tollerati solo come tracce tecnicamente inevitabili.",a:"Allegato II"}}
);
