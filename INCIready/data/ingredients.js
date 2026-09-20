/* Banca dati degli ingredienti INCI.
   Campi di ogni voce:
   n  = nome INCI (come compare in etichetta)
   c  = classe chimica, in parole semplici
   g  = gruppo: 'base' (sostanza preponderante) | 'funz' (sostanza funzionale) | 'ecc' (eccipiente)
   f  = a cosa serve, in due parole
   d  = che cosa porta al cosmetico (linguaggio per tutti)
   p  = caratteristiche chimico-fisiche
   t  = [min, max] concentrazione tipica in %
   ph = effetto sul pH del prodotto: {e:'acido'|'alcalino'|'neutro'|'tampone', v: pH indicativo}
   r  = regola europea (Reg. CE 1223/2009): {t:'vietato'|'limitato', x:'spiegazione', a:'Allegato'}
*/
window.INCI_DB = [

/* ---------- SOSTANZE DI BASE E SOLVENTI ---------- */
{n:"AQUA",alt:["WATER","EAU","ACQUA","AQUA (WATER)","WATER (AQUA)","AQUA/WATER/EAU"],c:"Solvente inorganico (acqua)",g:"base",f:"solvente",
 d:"È il liquido che contiene e scioglie tutti gli altri ingredienti. Quando è al primo posto il prodotto è, di fatto, una soluzione o un'emulsione a base d'acqua: idrata la pelle in superficie e rende la formula leggera e spalmabile.",
 p:"Molecola polare, pH neutro (7), punto di ebollizione 100 °C, costante dielettrica molto alta: scioglie sali, zuccheri, acidi e tutte le sostanze idrofile. Essendo un terreno ideale per muffe e batteri, obbliga la formula ad avere conservanti.",
 t:[40,90],ph:{e:"neutro",v:7}},

{n:"ALCOHOL DENAT.",alt:["ALCOHOL","ETHANOL","SD ALCOHOL 40-B","SD ALCOHOL 40","ALCOOL DENAT."],c:"Alcol a catena corta (etanolo)",g:"base",f:"solvente, astringente",
 d:"Rende il prodotto fresco, asciutto e a rapida evaporazione; scioglie profumi e filtri solari e aiuta gli attivi a penetrare. In dosi alte può seccare le pelli sensibili.",
 p:"Liquido volatile, evapora a 78 °C, miscibile con acqua e con molti oli, abbassa la viscosità, ha effetto antimicrobico sopra il 15-20%. Leggermente acido in soluzione.",
 t:[3,60],ph:{e:"neutro",v:6.5}},

{n:"GLYCERIN",alt:["GLYCERINE","GLYCEROL","VEGETABLE GLYCERIN"],c:"Polialcol (trialcol)",g:"funz",f:"umettante",
 d:"Richiama acqua dall'ambiente e dagli strati profondi e la trattiene nella pelle: è il più classico degli idratanti. Rende la pelle morbida ed elastica e protegge la formula dal seccarsi.",
 p:"Liquido denso e sciropposo, igroscopico, tre gruppi OH, completamente solubile in acqua, pH neutro, molto stabile al calore. Sopra il 15-20% diventa appiccicoso.",
 t:[2,15],ph:{e:"neutro",v:6.5}},

{n:"PROPYLENE GLYCOL",c:"Glicole (dialcol)",g:"funz",f:"umettante, solvente",
 d:"Idrata leggermente e soprattutto scioglie gli attivi che in sola acqua non si scioglierebbero. Aiuta le sostanze a penetrare nella pelle.",
 p:"Liquido limpido, igroscopico, solubile in acqua e in alcol, punto di ebollizione 188 °C. Ha una blanda azione antimicrobica che aiuta i conservanti.",
 t:[1,10],ph:{e:"neutro",v:6.5}},

{n:"BUTYLENE GLYCOL",c:"Glicole (dialcol)",g:"funz",f:"umettante, solvente",
 d:"Come il glicole propilenico ma più delicato: idrata, scioglie gli estratti vegetali e dà alla formula una sensazione leggera e non appiccicosa.",
 p:"Liquido incolore, igroscopico, solubile in acqua, buona stabilità, azione antimicrobica blanda che sostiene il sistema conservante.",
 t:[1,10],ph:{e:"neutro",v:6.5}},

{n:"PENTYLENE GLYCOL",c:"Glicole (dialcol)",g:"funz",f:"umettante, antimicrobico di supporto",
 d:"Idrata e allo stesso tempo tiene sotto controllo i germi: si usa nelle formule che vogliono ridurre i conservanti classici.",
 p:"Liquido idrosolubile, più grasso dei glicoli corti, attività antimicrobica reale sopra il 3-5%, solubilizza profumi e conservanti.",
 t:[1,5],ph:{e:"neutro",v:6.5}},

{n:"PROPANEDIOL",alt:["1,3-PROPANEDIOL"],c:"Glicole di origine vegetale",g:"funz",f:"umettante, solvente",
 d:"Alternativa naturale al glicole propilenico: idrata, migliora la scorrevolezza e rende più efficaci i conservanti.",
 p:"Liquido idrosolubile ottenuto da mais per fermentazione, buona compatibilità con la pelle, stabile in un ampio intervallo di pH.",
 t:[1,10],ph:{e:"neutro",v:6.5}},

{n:"DIPROPYLENE GLYCOL",c:"Glicole (etere di glicole)",g:"ecc",f:"solvente",
 d:"Serve a sciogliere profumi e filtri solari e a mantenere limpida la formula.",
 p:"Liquido viscoso, inodore, solubile in acqua e alcol, molto stabile, bassa volatilità.",t:[1,8],ph:{e:"neutro",v:7}},

{n:"CAPRYLYL GLYCOL",c:"Glicole grasso (1,2-diolo a 8 atomi di carbonio)",g:"funz",f:"idratante, potenziatore di conservazione",
 d:"Ammorbidisce la pelle e soprattutto rende molto più efficaci i conservanti, permettendo di usarne meno.",
 p:"Liquido oleoso, parzialmente solubile in acqua, tensioattivo debole, danneggia le membrane dei microrganismi, stabile a ogni pH.",
 t:[0.3,1],ph:{e:"neutro",v:6.5}},

{n:"SORBITOL",c:"Polialcol (zucchero alcol)",g:"funz",f:"umettante",
 d:"Trattiene acqua come la glicerina ma è meno appiccicoso; nei dentifrici dà anche corpo e sapore dolce.",
 p:"Solido cristallino solubilissimo in acqua, non fermentabile dai batteri del cavo orale, stabile al calore.",
 t:[2,30],ph:{e:"neutro",v:6.5}},

/* ---------- TENSIOATTIVI ANIONICI ---------- */
{n:"SODIUM LAURETH SULFATE",alt:["SLES","SODIUM LAURYL ETHER SULFATE"],c:"Tensioattivo anionico (alchil etere solfato)",g:"funz",f:"detergente, schiumogeno",
 d:"È il motore lavante della maggior parte di shampoo e bagnoschiuma: scioglie il sebo e lo sporco grasso e produce tanta schiuma cremosa. È più delicato del suo parente senza etossilazione.",
 p:"Sale sodico con testa solfato carica negativamente e coda grassa a 12 atomi di carbonio; molto solubile in acqua, forte potere schiumogeno, si addensa con il sale da cucina, lavora bene fra pH 5 e 7. Perde efficacia in acqua molto dura e viene neutralizzato dai tensioattivi cationici.",
 t:[5,16],ph:{e:"neutro",v:6.5}},

{n:"SODIUM LAURYL SULFATE",alt:["SLS","SODIUM DODECYL SULFATE"],c:"Tensioattivo anionico (alchil solfato)",g:"funz",f:"detergente forte",
 d:"Lava molto a fondo e fa schiuma abbondante, ma può irritare pelli sensibili perché toglie anche i grassi buoni. Nei dentifrici serve a distribuire il prodotto in bocca.",
 p:"Sale sodico cristallino, altissima solubilità in acqua, concentrazione micellare critica bassa, forte potere sgrassante, denatura le proteine superficiali della pelle: da qui il potenziale irritante.",
 t:[1,15],ph:{e:"neutro",v:7}},

{n:"AMMONIUM LAURYL SULFATE",c:"Tensioattivo anionico (alchil solfato di ammonio)",g:"funz",f:"detergente, schiumogeno",
 d:"Lava e fa schiuma come il solfato di sodio, ma lavora meglio in ambiente leggermente acido, più vicino alla pelle.",
 p:"Sale d'ammonio, molto solubile, buona schiuma, ottimale a pH 5-6,5; a caldo può liberare ammoniaca.",
 t:[5,15],ph:{e:"acido",v:5.5}},

{n:"AMMONIUM LAURETH SULFATE",c:"Tensioattivo anionico (alchil etere solfato di ammonio)",g:"funz",f:"detergente, schiumogeno",
 d:"Versione più dolce e più schiumosa, tipica degli shampoo per uso frequente.",
 p:"Sale d'ammonio etossilato, molto solubile, schiuma fine e stabile, ottimale a pH 5-6.",t:[5,15],ph:{e:"acido",v:5.5}},

{n:"SODIUM COCO-SULFATE",c:"Tensioattivo anionico da olio di cocco",g:"funz",f:"detergente",
 d:"Il lavante dei saponi solidi e degli shampoo in barra: schiuma ricca e pulizia decisa.",
 p:"Miscela di alchil solfati a catena variabile (C8-C18), meno solubile a freddo, ottimo in forma solida, potere sgrassante alto.",
 t:[10,40],ph:{e:"neutro",v:7}},

{n:"SODIUM COCOYL ISETHIONATE",alt:["SCI"],c:"Tensioattivo anionico (isetionato)",g:"funz",f:"detergente delicato",
 d:"Lava con una schiuma cremosa e vellutata lasciando la pelle morbida: è il tensioattivo dei detergenti \"senza sapone\" e delle barre solide viso.",
 p:"Estere dell'acido isetionico con acidi grassi di cocco, solido ceroso, tollerante all'acqua dura, stabile fra pH 5 e 7, bassissima capacità di irritare.",
 t:[10,50],ph:{e:"neutro",v:6}},

{n:"SODIUM LAUROYL SARCOSINATE",c:"Tensioattivo anionico (sarcosinato, derivato di amminoacido)",g:"funz",f:"detergente delicato",
 d:"Pulisce delicatamente e lascia una piacevole sensazione di morbidezza; si usa anche nei dentifrici senza SLS.",
 p:"Derivato dell'amminoacido sarcosina, buona schiuma, più delicato dei solfati, attivo a pH leggermente acido, compatibile con la cheratina.",
 t:[1,10],ph:{e:"neutro",v:6.5}},

{n:"SODIUM METHYL COCOYL TAURATE",c:"Tensioattivo anionico (taurato)",g:"funz",f:"detergente delicato",
 d:"Fa una schiuma fitta e soffice ed è molto rispettoso della pelle: tipico dei detergenti viso di qualità.",
 p:"Derivato della taurina, resistente all'acqua dura, stabile in un ampio intervallo di pH, poco irritante per occhi e pelle.",
 t:[2,15],ph:{e:"neutro",v:6.5}},

{n:"DISODIUM LAURETH SULFOSUCCINATE",c:"Tensioattivo anionico (sulfosuccinato)",g:"funz",f:"detergente delicato",
 d:"Si usa insieme ad altri lavanti per renderli più dolci: pulisce bene senza tirare la pelle.",
 p:"Diestere dell'acido succinico solfonato, molto solubile, schiuma abbondante, instabile a pH acido (sotto 5 si idrolizza).",
 t:[2,15],ph:{e:"neutro",v:6.5}},

{n:"SODIUM C14-16 OLEFIN SULFONATE",c:"Tensioattivo anionico (olefin solfonato)",g:"funz",f:"detergente, schiumogeno",
 d:"Alternativa ai solfati: lava con forza e produce molta schiuma, spesso nei bagnoschiuma economici.",
 p:"Miscela di alcheni solfonati, resiste all'acqua dura e ai pH alti, buon potere bagnante, moderatamente sgrassante.",
 t:[3,15],ph:{e:"neutro",v:7.5}},

{n:"SODIUM COCOYL GLUTAMATE",alt:["SODIUM LAUROYL GLUTAMATE","DISODIUM COCOYL GLUTAMATE"],c:"Tensioattivo anionico da amminoacido (glutammato)",g:"funz",f:"detergente delicatissimo",
 d:"Il più rispettoso del film idrolipidico: lava a pH vicino a quello della pelle e la lascia morbida, ideale per pelli sensibili e bambini.",
 p:"Sale dell'acido glutammico con acidi grassi di cocco, schiuma fine, funziona meglio a pH 5-6, meno efficace in acqua dura, biodegradabile.",
 t:[3,20],ph:{e:"acido",v:5.5}},

{n:"POTASSIUM COCOATE",alt:["POTASSIUM OLIVATE","POTASSIUM PALMATE","SODIUM COCOATE","SODIUM PALMATE","SODIUM OLIVATE","SODIUM TALLOWATE","POTASSIUM SUNFLOWERATE"],c:"Sapone vero e proprio (sale alcalino di acidi grassi)",g:"funz",f:"detergente alcalino",
 d:"È il sapone classico ottenuto facendo reagire un grasso con un alcali: lava benissimo ma lascia la pelle a pH alto, quindi più esposta a secchezza.",
 p:"Sale di acidi grassi, si forma per saponificazione, in acqua dà soluzioni alcaline (pH 9-10,5), precipita in acqua dura formando i classici aloni calcarei.",
 t:[10,40],ph:{e:"alcalino",v:10}},

{n:"SODIUM STEARATE",c:"Sapone di acido stearico",g:"funz",f:"gelificante, detergente",
 d:"Nei deodoranti stick fa solidificare il prodotto; nei saponi lava e dà consistenza.",
 p:"Sale sodico dell'acido stearico, forma un reticolo solido con alcoli e glicoli, reazione alcalina in acqua.",
 t:[4,9],ph:{e:"alcalino",v:9.5}},

{n:"SODIUM LAUROYL LACTYLATE",c:"Tensioattivo anionico (lattilato di acido grasso)",g:"funz",f:"emulsionante, detergente delicato",
 d:"Tiene insieme acqua e oli e nello stesso tempo pulisce con dolcezza; migliora anche la sensazione sulla pelle.",
 p:"Estere dell'acido lattico con acido laurico, solubile in acqua calda, stabile a pH 3-7, buona compatibilità cutanea.",
 t:[0.5,5],ph:{e:"acido",v:5.5}},

/* ---------- TENSIOATTIVI ANFOTERI ---------- */
{n:"COCAMIDOPROPYL BETAINE",alt:["COCO-BETAINE","COCAMIDOPROPYL HYDROXYSULTAINE","LAURYL BETAINE"],c:"Tensioattivo anfotero (betaina)",g:"funz",f:"detergente secondario, addolcente",
 d:"Da solo lava poco, ma messo accanto ai solfati li rende molto meno aggressivi, migliora la schiuma e la rende cremosa. Aiuta anche a districare i capelli.",
 p:"Molecola con carica positiva e negativa insieme: si comporta da anionico a pH alto e da cationico a pH acido. Molto solubile, addensa in presenza di sale, compatibile con quasi tutti gli altri tensioattivi.",
 t:[2,10],ph:{e:"neutro",v:6}},

{n:"DISODIUM COCOAMPHODIACETATE",alt:["SODIUM COCOAMPHOACETATE","DISODIUM COCOAMPHODIPROPIONATE","SODIUM LAUROAMPHOACETATE"],c:"Tensioattivo anfotero (imidazolinico)",g:"funz",f:"detergente delicatissimo",
 d:"È il tensioattivo dei bagnoschiuma \"non pizzica gli occhi\": lava con estrema dolcezza, adatto ai neonati.",
 p:"Derivato imidazolinico anfotero, tollerabilità oculare molto alta, buona schiuma in associazione, stabile fra pH 5 e 9.",
 t:[2,12],ph:{e:"neutro",v:8}},

/* ---------- TENSIOATTIVI NON IONICI ---------- */
{n:"COCO-GLUCOSIDE",alt:["DECYL GLUCOSIDE","LAURYL GLUCOSIDE","CAPRYLYL/CAPRYL GLUCOSIDE","CAPRYLYL GLUCOSIDE"],c:"Tensioattivo non ionico (alchil poliglucoside)",g:"funz",f:"detergente delicato",
 d:"Ottenuto da zucchero e olio di cocco: lava con delicatezza, è molto biodegradabile ed è la scelta tipica dei prodotti \"eco\".",
 p:"Zucchero legato a una catena grassa, nessuna carica elettrica, schiuma modesta ma stabile, funziona meglio a pH leggermente alcalino, tende ad alzare il pH della formula.",
 t:[2,15],ph:{e:"alcalino",v:9}},

{n:"POLYSORBATE 20",alt:["POLYSORBATE 60","POLYSORBATE 80","POLYSORBATE 40"],c:"Tensioattivo non ionico (estere di sorbitano etossilato)",g:"ecc",f:"solubilizzante, emulsionante",
 d:"Serve a far sciogliere in acqua profumi e oli, così il prodotto resta limpido e non si separa.",
 p:"Molecola etossilata con lunga coda idrofila, HLB alto (15-17), solubile in acqua, stabile fra pH 3 e 9, non ionico quindi compatibile con tutto.",
 t:[0.5,5],ph:{e:"neutro",v:6.5}},

{n:"PEG-40 HYDROGENATED CASTOR OIL",alt:["PEG-60 HYDROGENATED CASTOR OIL","PEG-7 GLYCERYL COCOATE","PEG-40 STEARATE"],c:"Tensioattivo non ionico etossilato",g:"ecc",f:"solubilizzante",
 d:"Fa entrare oli e profumi nelle formule trasparenti come acque micellari e tonici, senza intorbidirle.",
 p:"Olio di ricino idrogenato reso idrosolubile dall'etossilazione, HLB circa 15, molto delicato, stabile in un ampio intervallo di pH.",
 t:[0.5,5],ph:{e:"neutro",v:6.5}},

{n:"CETEARETH-20",alt:["CETETH-20","STEARETH-2","STEARETH-21","LAURETH-7","CETEARETH-12","CETEARETH-25"],c:"Tensioattivo non ionico etossilato (alcol grasso etossilato)",g:"ecc",f:"emulsionante",
 d:"Tiene unite la parte acquosa e la parte grassa di creme e latti, evitando che si separino.",
 p:"Alcol grasso reso idrofilo da catene di ossido di etilene, HLB regolabile secondo il numero, stabile, compatibile con quasi tutti gli ingredienti.",
 t:[1,5],ph:{e:"neutro",v:6.5}},

{n:"COCAMIDE MIPA",alt:["COCAMIDE DEA","COCAMIDE MEA","LAURAMIDE DEA"],c:"Tensioattivo non ionico (alcanolammide)",g:"ecc",f:"addensante, stabilizzante della schiuma",
 d:"Rende la schiuma più densa e il prodotto più corposo.",
 p:"Ammide di acidi grassi di cocco, poco solubile da sola, agisce in associazione con i solfati; le versioni DEA sono soggette a limiti sul contenuto di nitrosammine.",
 t:[0.5,5],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Le alcanolammidi di tipo DEA sono ammesse solo con tenore massimo di dietanolammina libera dello 0,5% e senza sostanze nitrosanti, per il rischio di formare nitrosammine.",a:"Allegato III"}},

/* ---------- TENSIOATTIVI CATIONICI E CONDIZIONANTI ---------- */
{n:"BEHENTRIMONIUM CHLORIDE",alt:["CETRIMONIUM CHLORIDE","BEHENTRIMONIUM METHOSULFATE","DISTEARYLDIMONIUM CHLORIDE","STEARTRIMONIUM CHLORIDE","DICETYLDIMONIUM CHLORIDE"],c:"Tensioattivo cationico (sale quaternario d'ammonio)",g:"funz",f:"condizionante, districante",
 d:"È il cuore dei balsami: si attacca al capello danneggiato, che è carico negativamente, chiude le squame, elimina i nodi e l'effetto elettrico.",
 p:"Carica positiva permanente, si lega per attrazione elettrostatica alla cheratina, poco solubile in acqua fredda, lavora meglio a pH 4-5,5, viene disattivato dai tensioattivi anionici.",
 t:[0.5,5],ph:{e:"acido",v:5},
 r:{t:"limitato",x:"I sali quaternari di alchiltrimetilammonio sono ammessi con limiti di concentrazione diversi per prodotti da risciacquo e senza risciacquo (indicativamente 0,25-2,5%).",a:"Allegato III"}},

{n:"POLYQUATERNIUM-10",alt:["POLYQUATERNIUM-7","POLYQUATERNIUM-11","POLYQUATERNIUM-37","POLYQUATERNIUM-4","POLYQUATERNIUM-67"],c:"Polimero cationico",g:"funz",f:"condizionante",
 d:"Forma una pellicola invisibile su capelli e pelle che rende i capelli morbidi, pettinabili e meno elettrici; nei bagnoschiuma lascia la pelle vellutata.",
 p:"Cellulosa o polimero sintetico con gruppi carichi positivamente, si deposita durante il risciacquo, idrosolubile, compatibile con i tensioattivi anfoteri e non ionici.",
 t:[0.1,2],ph:{e:"neutro",v:6}},

{n:"GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE",c:"Polimero cationico naturale (guar modificata)",g:"funz",f:"condizionante",
 d:"Versione naturale del condizionante: dà morbidezza ai capelli anche negli shampoo, senza appesantire.",
 p:"Gomma di guar con gruppi cationici, si deposita per \"coacervazione\" quando si diluisce con l'acqua del risciacquo, idrosolubile, addensa leggermente.",
 t:[0.1,1],ph:{e:"neutro",v:6}},

{n:"AMODIMETHICONE",c:"Silicone modificato con gruppi amminici",g:"funz",f:"condizionante",
 d:"Silicone \"intelligente\": si fissa soprattutto dove il capello è rovinato, lo rende liscio e lucido senza appesantire le radici.",
 p:"Polisilossano con gruppi amminici debolmente cationici, sostantivo alla cheratina, resistente al risciacquo, insolubile in acqua (si usa in emulsione).",
 t:[0.1,3],ph:{e:"neutro",v:6}},

/* ---------- EMULSIONANTI E CONSISTENZA GRASSA ---------- */
{n:"CETEARYL ALCOHOL",alt:["CETYL ALCOHOL","STEARYL ALCOHOL","MYRISTYL ALCOHOL","BEHENYL ALCOHOL","C14-22 ALCOHOLS"],c:"Alcol grasso (alcol a catena lunga)",g:"funz",f:"consistenza, emolliente",
 d:"Nonostante il nome non secca: è una cera che dà corpo alle creme, le rende vellutate e aiuta a tenere insieme acqua e olio. Nei balsami dà la classica texture ricca.",
 p:"Miscela solida di alcoli C16-C18, insolubile in acqua, fonde intorno a 50 °C, forma cristalli liquidi lamellari che stabilizzano l'emulsione e aumentano la viscosità.",
 t:[1,8],ph:{e:"neutro",v:7}},

{n:"GLYCERYL STEARATE",alt:["GLYCERYL STEARATE SE","GLYCERYL STEARATE CITRATE","GLYCERYL OLEATE"],c:"Estere di glicerolo e acido grasso (mono-gliceride)",g:"funz",f:"emulsionante, emolliente",
 d:"Unisce acqua e olio e lascia sulla pelle un velo morbido e setoso. È uno degli emulsionanti più usati nelle creme.",
 p:"Solido ceroso, HLB basso (circa 3,8; la versione SE è autoemulsionante), fonde a 55-60 °C, stabile, spesso abbinato a un emulsionante a HLB alto.",
 t:[1,6],ph:{e:"neutro",v:6.5}},

{n:"PEG-100 STEARATE",c:"Estere etossilato di acido stearico",g:"ecc",f:"emulsionante",
 d:"Accompagna quasi sempre il gliceril stearato: insieme formano l'emulsione stabile delle creme.",
 p:"HLB alto (circa 18), idrosolubile, non ionico, stabile fra pH 4 e 9.",t:[0.5,4],ph:{e:"neutro",v:6.5}},

{n:"CETEARYL GLUCOSIDE",alt:["CETEARYL OLIVATE","SORBITAN OLIVATE","SORBITAN STEARATE","SORBITAN OLEATE","POLYGLYCERYL-3 DIISOSTEARATE","POLYGLYCERYL-4 OLEATE","POLYGLYCERYL-10 STEARATE"],c:"Emulsionante non ionico di origine vegetale",g:"funz",f:"emulsionante",
 d:"Tiene insieme acqua e oli in modo simile ai grassi naturali della pelle: dà creme leggere, ben tollerate, senza PEG.",
 p:"Estere di zuccheri o di poliglicerolo con alcoli e acidi grassi, forma strutture lamellari simili a quelle della barriera cutanea, stabile fra pH 4 e 8.",
 t:[1,6],ph:{e:"neutro",v:6}},

{n:"LECITHIN",alt:["HYDROGENATED LECITHIN","PHOSPHOLIPIDS"],c:"Fosfolipide naturale",g:"funz",f:"emulsionante, riparatore",
 d:"Grasso naturale della soia o dell'uovo: emulsiona e allo stesso tempo ripara la barriera della pelle, veicolando gli attivi in profondità.",
 p:"Molecola anfifilica che forma liposomi, sensibile all'ossidazione (la forma idrogenata è più stabile), colore giallo-ambrato, odore caratteristico.",
 t:[0.3,3],ph:{e:"neutro",v:6.5}},

{n:"POTASSIUM CETYL PHOSPHATE",alt:["SODIUM STEAROYL GLUTAMATE","SODIUM CETEARYL SULFATE"],c:"Emulsionante anionico",g:"funz",f:"emulsionante",
 d:"Crea emulsioni fluide e fresche, molto usato nelle creme solari perché mantiene i filtri ben distribuiti.",
 p:"Estere fosforico di alcol grasso, carica negativa, HLB alto, stabile fra pH 5 e 8, poco compatibile con ingredienti cationici.",
 t:[0.5,4],ph:{e:"neutro",v:6.5}},

{n:"STEARIC ACID",alt:["PALMITIC ACID","MYRISTIC ACID","LAURIC ACID","OLEIC ACID"],c:"Acido grasso saturo",g:"funz",f:"consistenza, emulsionante (se neutralizzato)",
 d:"Dà corpo e opacità a creme e schiume da barba; se messo insieme a una base alcalina si trasforma in sapone all'interno del prodotto.",
 p:"Solido ceroso, insolubile in acqua, fonde a circa 70 °C, reagisce con basi (trietanolammina, idrossido di sodio) formando saponi che emulsionano.",
 t:[1,8],ph:{e:"acido",v:5.5}},

/* ---------- EMOLLIENTI, OLI E SILICONI ---------- */
{n:"CAPRYLIC/CAPRIC TRIGLYCERIDE",c:"Trigliceride di acidi grassi a media catena",g:"funz",f:"emolliente",
 d:"Olio leggero e inodore ricavato dal cocco: ammorbidisce la pelle, la rende liscia e scivolosa senza ungere e aiuta a sciogliere le vitamine.",
 p:"Olio limpido molto stabile all'ossidazione (acidi grassi saturi), bassa viscosità, ottimo solvente per vitamine A, E e filtri solari, non comedogeno.",
 t:[2,15],ph:{e:"neutro",v:7}},

{n:"ISOPROPYL MYRISTATE",alt:["ISOPROPYL PALMITATE","CETEARYL ETHYLHEXANOATE","ETHYLHEXYL PALMITATE","ISOPROPYL ISOSTEARATE","DICAPRYLYL CARBONATE","COCO-CAPRYLATE","DICAPRYLYL ETHER"],c:"Estere grasso sintetico",g:"funz",f:"emolliente, scorrevolezza",
 d:"Rende la crema scorrevole e a rapido assorbimento, togliendo la sensazione di unto.",
 p:"Estere liquido a bassissima viscosità, alta capacità di bagnare le polveri, favorisce la penetrazione di altre sostanze; il miristato di isopropile può essere comedogeno su pelli acneiche.",
 t:[2,15],ph:{e:"neutro",v:7}},

{n:"C12-15 ALKYL BENZOATE",c:"Estere dell'acido benzoico con alcoli grassi",g:"funz",f:"emolliente",
 d:"Dà una texture asciutta e setosa e aiuta anche un po' la conservazione del prodotto.",
 p:"Liquido limpido a media viscosità, ottimo solvente per filtri solari organici, leggera attività antimicrobica, molto stabile.",
 t:[2,15],ph:{e:"neutro",v:6.5}},

{n:"SQUALANE",c:"Idrocarburo insaturo idrogenato (lipide)",g:"funz",f:"emolliente, restitutivo",
 d:"È simile a un grasso che la nostra pelle produce da sola: ripristina la barriera, ammorbidisce e non unge. Ottimo per pelli sensibili.",
 p:"Idrocarburo C30 saturo (da olive o canna da zucchero), stabilissimo all'ossidazione, leggero, non comedogeno, ottima affinità con il sebo.",
 t:[1,20],ph:{e:"neutro",v:7}},

{n:"PARAFFINUM LIQUIDUM",alt:["MINERAL OIL","PETROLATUM","CERA MICROCRISTALLINA","MICROCRYSTALLINE WAX","OZOKERITE","HYDROGENATED POLYISOBUTENE","POLYISOBUTENE","SYNTHETIC WAX","CERESIN"],c:"Idrocarburo di origine minerale",g:"funz",f:"occlusivo, emolliente",
 d:"Forma sulla pelle una pellicola che blocca l'evaporazione dell'acqua: protegge le pelli molto secche e screpolate. Non penetra e non nutre, resta in superficie.",
 p:"Miscela di idrocarburi saturi, chimicamente inerte, non irrancidisce, non comedogena nelle qualità cosmetiche raffinate, riduce la perdita d'acqua transepidermica fino al 98% (vaselina).",
 t:[2,60],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Ammessi solo se completamente raffinati, con storia di raffinazione nota: le frazioni non raffinate sarebbero classificate come cancerogene.",a:"Allegato II"}},

{n:"DIMETHICONE",alt:["DIMETHICONOL","PHENYL TRIMETHICONE","CYCLOMETHICONE","TRIMETHYLSILOXYSILICATE","DIMETHICONE CROSSPOLYMER","METHICONE","CAPRYLYL METHICONE"],c:"Silicone (polisilossano)",g:"funz",f:"emolliente, filmogeno",
 d:"Dà la sensazione setosa e scivolosa a creme, fondotinta e balsami; sui capelli li rende lucidi e pettinabili, sulla pelle attenua otticamente le rughe.",
 p:"Polimero di silicio e ossigeno, insolubile in acqua e negli oli vegetali, molto stabile al calore e alla luce, permeabile all'ossigeno, tensione superficiale bassissima. Viscosità regolabile dal liquido fluido alla gomma.",
 t:[1,15],ph:{e:"neutro",v:7}},

{n:"CYCLOPENTASILOXANE",alt:["D5","DECAMETHYLCYCLOPENTASILOXANE"],c:"Silicone ciclico volatile",g:"funz",f:"emolliente volatile",
 d:"Dà scorrevolezza immediata poi evapora, lasciando la pelle asciutta: molto usato in primer e prodotti per capelli.",
 p:"Silicone ciclico a 5 unità, volatile, insolubile in acqua, ottimo solvente per altri siliconi.",
 t:[1,20],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Uso ristretto per motivi ambientali (sostanza molto persistente): dal 2020 limitato allo 0,1% nei prodotti da risciacquo e, con il regolamento (UE) 2024/1328, la restrizione si estende progressivamente anche ai prodotti senza risciacquo.",a:"REACH, All. XVII"}},

{n:"CYCLOTETRASILOXANE",alt:["D4","OCTAMETHYLCYCLOTETRASILOXANE"],c:"Silicone ciclico volatile",g:"funz",f:"emolliente volatile",
 d:"Silicone volatile ormai fuori uso nei cosmetici europei.",
 p:"Silicone ciclico a 4 unità, molto volatile, persistente nell'ambiente.",t:[0,0.1],
 r:{t:"vietato",x:"Vietato nei cosmetici: classificato come tossico per la riproduzione e molto persistente. Ammesso solo come traccia tecnicamente inevitabile sotto lo 0,1%.",a:"Allegato II"}},

{n:"BUTYROSPERMUM PARKII BUTTER",alt:["BUTYROSPERMUM PARKII OIL","SHEA BUTTER","THEOBROMA CACAO SEED BUTTER","MANGIFERA INDICA SEED BUTTER"],c:"Burro vegetale (trigliceridi solidi + insaponificabile)",g:"funz",f:"emolliente ricco, nutriente",
 d:"Burro di karité: nutre in profondità, lenisce, ammorbidisce le pelli molto secche e dà alla crema una consistenza ricca e avvolgente.",
 p:"Trigliceridi di acido stearico e oleico con una frazione insaponificabile (5-10%) ricca di fitosteroli e trirpeni ad azione lenitiva; fonde a temperatura corporea, può ricristallizzare dando una sensazione granulosa.",
 t:[1,20],ph:{e:"neutro",v:6}},

{n:"HELIANTHUS ANNUUS SEED OIL",alt:["OLEA EUROPAEA FRUIT OIL","PRUNUS AMYGDALUS DULCIS OIL","SIMMONDSIA CHINENSIS SEED OIL","ARGANIA SPINOSA KERNEL OIL","PERSEA GRATISSIMA OIL","COCOS NUCIFERA OIL","VITIS VINIFERA SEED OIL","MACADAMIA TERNIFOLIA SEED OIL","SESAMUM INDICUM SEED OIL","CARTHAMUS TINCTORIUS SEED OIL","ORYZA SATIVA BRAN OIL"],c:"Olio vegetale (miscela di trigliceridi)",g:"funz",f:"emolliente, nutriente",
 d:"Olio spremuto da semi o frutti: ammorbidisce la pelle, la nutre con acidi grassi essenziali e vitamine e aiuta a riparare la barriera protettiva.",
 p:"Trigliceridi di acidi grassi insaturi (oleico, linoleico) con vitamina E naturale; più è insaturo più è leggero ma anche più facile all'irrancidimento; parzialmente affine al sebo.",
 t:[1,30],ph:{e:"neutro",v:6}},

{n:"ROSA CANINA FRUIT OIL",alt:["ROSA MOSCHATA SEED OIL","OENOTHERA BIENNIS OIL","BORAGO OFFICINALIS SEED OIL","LINUM USITATISSIMUM SEED OIL"],c:"Olio vegetale ricco di acidi grassi polinsaturi",g:"funz",f:"riparatore, elasticizzante",
 d:"Olio prezioso usato su cicatrici, smagliature e pelli mature: aiuta il rinnovamento e rende la pelle più elastica.",
 p:"Alto contenuto di acido linoleico e alfa-linolenico e di trans-retinoico naturale; molto sensibile a luce e ossigeno, va protetto con antiossidanti.",
 t:[0.5,10],ph:{e:"neutro",v:6}},

{n:"RICINUS COMMUNIS SEED OIL",alt:["CASTOR OIL","HYDROGENATED CASTOR OIL"],c:"Olio vegetale ricco di acido ricinoleico",g:"funz",f:"emolliente lucidante",
 d:"Olio denso e appiccicoso che dà brillantezza: è la base di rossetti e mascara.",
 p:"90% di acido ricinoleico (con gruppo OH), quindi più polare degli altri oli: si lega bene a pigmenti e cere, viscosità alta, buona stabilità.",
 t:[2,50],ph:{e:"neutro",v:6}},

{n:"CERA ALBA",alt:["BEESWAX","CERA FLAVA","COPERNICIA CERIFERA WAX","CANDELILLA WAX","EUPHORBIA CERIFERA WAX","RICE BRAN WAX","HYDROGENATED VEGETABLE OIL"],c:"Cera naturale (esteri di acidi e alcoli grassi)",g:"funz",f:"consistenza, filmogeno",
 d:"Dà solidità a stick, balsami labbra e mascara e forma un velo protettivo sulla pelle.",
 p:"Miscela di esteri, acidi e idrocarburi a catena lunga; punto di fusione 62-65 °C (cera d'api) o 82-85 °C (carnauba), insolubile in acqua, aumenta molto la durezza dei prodotti anidri.",
 t:[2,20],ph:{e:"neutro",v:6.5}},

{n:"LANOLIN",alt:["LANOLIN ALCOHOL","HYDROGENATED LANOLIN","PEG-75 LANOLIN"],c:"Cera animale (grasso della lana)",g:"funz",f:"occlusivo, emolliente",
 d:"Grasso naturale della lana di pecora: molto protettivo su labbra e pelli screpolate, trattiene bene l'acqua. Può dare allergia in soggetti predisposti.",
 p:"Miscela complessa di esteri di steroli e alcoli, capace di assorbire il doppio del proprio peso in acqua, punto di fusione 38-44 °C, altamente occlusiva.",
 t:[1,20],ph:{e:"neutro",v:6.5}}
];
