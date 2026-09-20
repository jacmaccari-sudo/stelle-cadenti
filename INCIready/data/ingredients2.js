/* Banca dati INCI - parte 2: idratanti, attivi, acidi, filtri solari. */
window.INCI_DB.push(

/* ---------- UMETTANTI E IDRATANTI ---------- */
{n:"SODIUM HYALURONATE",alt:["HYALURONIC ACID","HYDROLYZED HYALURONIC ACID","SODIUM ACETYLATED HYALURONATE"],c:"Polisaccaride (glicosamminoglicano)",g:"funz",f:"idratante, rimpolpante",
 d:"Acido ialuronico: una spugna molecolare che trattiene moltissima acqua. Distende le rughe superficiali, rimpolpa e dà un effetto immediato di pelle fresca.",
 p:"Polimero di acido glucuronico e N-acetilglucosammina; trattiene fino a 1000 volte il proprio peso in acqua. Il peso molecolare alto resta in superficie e forma un film, quello basso penetra di più. Solubile in acqua, forma gel viscosi già allo 0,1-1%.",
 t:[0.05,2],ph:{e:"neutro",v:6.5}},

{n:"PANTHENOL",alt:["D-PANTHENOL","DEXPANTHENOL","PANTHENYL ETHYL ETHER"],c:"Provitamina B5 (alcol dell'acido pantotenico)",g:"funz",f:"lenitivo, riparatore",
 d:"Calma i rossori, aiuta la pelle a ripararsi e trattiene acqua. Sui capelli dà corpo e morbidezza. È uno degli ingredienti più sicuri e universali.",
 p:"Liquido viscoso idrosolubile, nella pelle si trasforma in acido pantotenico (vitamina B5), stabile fra pH 4 e 7 (si degrada ai pH estremi), igroscopico.",
 t:[0.5,5],ph:{e:"neutro",v:6.5}},

{n:"UREA",c:"Composto organico azotato (diammide dell'acido carbonico)",g:"funz",f:"idratante, cheratolitico",
 d:"È una sostanza che la pelle produce da sola. Sotto il 10% idrata in profondità, sopra il 10% ammorbidisce e assottiglia le pelli ispessite (talloni, gomiti, psoriasi).",
 p:"Solido cristallino molto solubile in acqua, fortemente igroscopico, rompe i legami a idrogeno della cheratina; sopra i 40 °C o a pH estremi si decompone liberando ammoniaca.",
 t:[2,30],ph:{e:"neutro",v:7.5}},

{n:"BETAINE",alt:["TRIMETHYLGLYCINE"],c:"Ammminoacido modificato (osmolita)",g:"funz",f:"idratante",
 d:"Idratante dolce estratto dalla barbabietola: trattiene acqua e riduce il potere irritante dei tensioattivi.",
 p:"Solido cristallino molto solubile, zwitterione (carica positiva e negativa insieme), stabile a ogni pH e al calore.",
 t:[0.5,5],ph:{e:"neutro",v:6.5}},

{n:"SODIUM PCA",alt:["PCA","ARGININE PCA","SODIUM LACTATE","TREHALOSE","GLYCINE","SERINE","ALANINE","SODIUM LACTATE/SODIUM PCA"],c:"Componente del fattore naturale di idratazione (NMF)",g:"funz",f:"idratante",
 d:"Rimette nella pelle le stesse sostanze che lei usa per trattenere l'acqua: idratazione fisiologica, non appiccicosa.",
 p:"Sali e amminoacidi molto igroscopici e solubilissimi in acqua, stabili, tipicamente usati in miscela a bassa percentuale.",
 t:[0.2,3],ph:{e:"neutro",v:6.5}},

{n:"ALLANTOIN",c:"Derivato dell'acido urico (eterociclo azotato)",g:"funz",f:"lenitivo, cheratoplastico",
 d:"Calma le irritazioni, favorisce il rinnovo cellulare e rende la pelle più liscia. Molto usato nei prodotti per pelli sensibili e dopobarba.",
 p:"Polvere cristallina poco solubile in acqua fredda (circa 0,5%), stabile fra pH 4 e 9, inattaccabile dal calore, non irritante.",
 t:[0.1,0.5],ph:{e:"neutro",v:6}},

{n:"ALOE BARBADENSIS LEAF JUICE",alt:["ALOE BARBADENSIS LEAF EXTRACT","ALOE BARBADENSIS LEAF JUICE POWDER"],c:"Estratto vegetale (polisaccaridi e mucillagini)",g:"funz",f:"lenitivo, idratante",
 d:"Gel d'aloe: rinfresca, calma rossori e scottature e lascia un velo idratante leggero.",
 p:"Soluzione acquosa di polisaccaridi (acemannano), amminoacidi e sali minerali; leggermente acida, molto deperibile, va sempre conservata.",
 t:[1,20],ph:{e:"acido",v:4.5}},

{n:"CERAMIDE NP",alt:["CERAMIDE AP","CERAMIDE EOP","CERAMIDE NS","CERAMIDE 3","PHYTOSPHINGOSINE","SPHINGOLIPIDS","CHOLESTEROL"],c:"Lipide di barriera (sfingolipide)",g:"funz",f:"riparatore della barriera",
 d:"Sono i \"mattoni\" che tengono insieme le cellule più esterne della pelle. Rimetterli riduce la secchezza, la sensibilità e la perdita d'acqua.",
 p:"Lipidi polari che si organizzano in lamelle insieme a colesterolo e acidi grassi; efficaci già a concentrazioni bassissime, insolubili in acqua, richiedono un veicolo grasso.",
 t:[0.02,1],ph:{e:"neutro",v:6}},

/* ---------- ATTIVI FUNZIONALI ---------- */
{n:"NIACINAMIDE",alt:["NICOTINAMIDE","VITAMIN B3"],c:"Vitamina B3 (ammide dell'acido nicotinico)",g:"funz",f:"uniformante, seboregolatore",
 d:"Uno degli attivi più versatili: schiarisce le macchie, riduce rossori e pori dilatati, regola il sebo e rinforza la barriera. Ben tollerata da quasi tutti.",
 p:"Polvere bianca molto solubile in acqua, stabile fra pH 5 e 7 (a pH acido si idrolizza in acido nicotinico, che arrossa), stabile alla luce. Efficace dal 2% al 5%, sopra il 5% può pizzicare.",
 t:[2,10],ph:{e:"neutro",v:6.5}},

{n:"ASCORBIC ACID",alt:["L-ASCORBIC ACID","VITAMIN C"],c:"Vitamina C (acido organico, lattone)",g:"funz",f:"antiossidante, schiarente",
 d:"Illumina il colorito, attenua le macchie, stimola il collagene e difende dai danni del sole e dello smog. È efficace ma delicata: ingiallisce facilmente.",
 p:"Polvere bianca, solubilissima in acqua, fortemente acida e riducente; si ossida rapidamente con aria, luce, calore e metalli. Richiede pH sotto 3,5 per penetrare, quindi può pizzicare; si stabilizza con vitamina E, ferulico e chelanti.",
 t:[5,20],ph:{e:"acido",v:2.8}},

{n:"SODIUM ASCORBYL PHOSPHATE",alt:["MAGNESIUM ASCORBYL PHOSPHATE","ASCORBYL GLUCOSIDE","3-O-ETHYL ASCORBIC ACID","ASCORBYL TETRAISOPALMITATE","ASCORBYL PALMITATE"],c:"Derivato stabile della vitamina C",g:"funz",f:"antiossidante, schiarente",
 d:"Vitamina C \"addomesticata\": lavora a pH vicino a quello della pelle, non pizzica e non ingiallisce, ma agisce più lentamente.",
 p:"Sale o estere che protegge il gruppo reattivo della vitamina C; stabile fra pH 6 e 7 (forme fosfato) o liposolubile (palmitato), deve essere trasformato dalla pelle nella forma attiva.",
 t:[1,10],ph:{e:"neutro",v:6.8}},

{n:"TOCOPHEROL",alt:["TOCOPHERYL ACETATE","VITAMIN E","MIXED TOCOPHEROLS","TOCOPHERYL LINOLEATE"],c:"Vitamina E (fenolo liposolubile)",g:"funz",f:"antiossidante",
 d:"Protegge la pelle e soprattutto gli oli della formula dall'irrancidimento; ammorbidisce e aiuta a riparare i danni del sole.",
 p:"Liquido oleoso giallo, liposolubile, blocca le reazioni a catena dei radicali liberi, sensibile a luce e ossigeno (l'acetato è più stabile ma va attivato dalla pelle).",
 t:[0.1,1],ph:{e:"neutro",v:6.5}},

{n:"RETINOL",alt:["VITAMIN A","RETINYL PALMITATE","RETINAL","RETINALDEHYDE","RETINYL ACETATE","HYDROXYPINACOLONE RETINOATE","RETINYL RETINOATE"],c:"Vitamina A e suoi derivati (retinoidi)",g:"funz",f:"antirughe, rinnovante",
 d:"Il più studiato degli antirughe: accelera il rinnovo della pelle, attenua rughe e macchie e aiuta la pelle impura. All'inizio può arrossare e far spellare, quindi si introduce piano e si usa di sera.",
 p:"Molecola liposolubile molto instabile a luce, ossigeno e calore (va in confezioni opache e ermetiche); attiva a bassissime concentrazioni, richiede pH 5-6; il palmitato è più stabile ma meno potente.",
 t:[0.1,1],ph:{e:"neutro",v:5.5},
 r:{t:"limitato",x:"Il regolamento (UE) 2024/996 limita la vitamina A e i suoi esteri allo 0,05% (come retinolo equivalente) nei prodotti corpo e allo 0,3% in viso e mani, per non superare l'apporto giornaliero raccomandato.",a:"Allegato III"}},

{n:"BAKUCHIOL",c:"Meroterpene fenolico vegetale",g:"funz",f:"antirughe alternativo al retinolo",
 d:"Estratto da una pianta, dà effetti simili al retinolo (rughe, macchie) ma è molto più tollerato e si può usare anche di giorno.",
 p:"Liquido oleoso liposolubile, stabile alla luce e in un ampio intervallo di pH, antiossidante e antibatterico.",
 t:[0.5,2],ph:{e:"neutro",v:6}},

{n:"GLYCOLIC ACID",alt:["LACTIC ACID","MANDELIC ACID","MALIC ACID","TARTARIC ACID","AMMONIUM GLYCOLATE","AHA"],c:"Alfa-idrossiacido (AHA)",g:"funz",f:"esfoliante chimico",
 d:"Scioglie il collante fra le cellule morte: leviga, illumina, attenua macchie e rughe sottili. Rende la pelle più sensibile al sole, quindi serve la protezione solare.",
 p:"Acido carbossilico con un OH sul carbonio vicino; l'acido glicolico è il più piccolo e penetra di più, il mandelico è il più grosso e delicato. Efficace solo a pH acido (3-4): più il pH è basso più esfolia e più può pizzicare. L'acido lattico è anche idratante.",
 t:[2,10],ph:{e:"acido",v:3.5},
 r:{t:"limitato",x:"Per uso domestico l'acido glicolico è ammesso fino al 4% a pH non inferiore a 3,5 nei prodotti viso (regolamento (UE) 2024/996); concentrazioni maggiori sono riservate all'uso professionale.",a:"Allegato III"}},

{n:"SALICYLIC ACID",alt:["BHA","BETA-HYDROXY ACID","BETAINE SALICYLATE","CAPRYLOYL SALICYLIC ACID"],c:"Beta-idrossiacido (acido fenolico)",g:"funz",f:"esfoliante, anti-imperfezioni, conservante",
 d:"Entra dentro il poro perché è affine al sebo: libera punti neri, riduce brufoli e desquamazione. In piccola dose serve anche a conservare il prodotto.",
 p:"Acido aromatico poco solubile in acqua (si scioglie in alcol o glicoli), attivo a pH 3-4, cheratolitico e antinfiammatorio, imparentato con l'aspirina.",
 t:[0.5,2],ph:{e:"acido",v:3.5},
 r:{t:"limitato",x:"Massimo 3% nei prodotti da risciacquo per capelli e 2% negli altri prodotti; vietato nei prodotti per bambini sotto i 3 anni (salvo shampoo) e nei prodotti che possono portare a esposizione dei polmoni.",a:"Allegato III"}},

{n:"AZELAIC ACID",c:"Acido dicarbossilico saturo",g:"funz",f:"anti-imperfezioni, uniformante",
 d:"Riduce rossori, brufoli e macchie scure; particolarmente indicato per rosacea e pelle acneica.",
 p:"Polvere cristallina poco solubile in acqua, attiva a pH 4-5, antibatterica e inibitrice della tirosinasi; sopra il 10% tende a cristallizzare nella formula.",
 t:[5,15],ph:{e:"acido",v:4.5}},

{n:"ALPHA-ARBUTIN",alt:["ARBUTIN","BETA-ARBUTIN"],c:"Glucoside dell'idrochinone",g:"funz",f:"schiarente",
 d:"Attenua le macchie scure frenando la produzione di melanina, in modo graduale e senza irritare.",
 p:"Polvere idrosolubile, stabile fra pH 4 e 7 e sotto i 40 °C (a caldo o a pH acido può liberare idrochinone), va protetta dalla luce.",
 t:[0.5,2],ph:{e:"neutro",v:5.5},
 r:{t:"limitato",x:"Ammesso fino al 2% nelle creme viso e allo 0,5% nelle lozioni corpo (parere SCCS recepito), con tenore di idrochinone libero non superiore a 1 ppm.",a:"Allegato III"}},

{n:"KOJIC ACID",c:"Pirone prodotto da funghi",g:"funz",f:"schiarente",
 d:"Schiarisce le macchie bloccando l'enzima che produce il pigmento.",
 p:"Polvere idrosolubile, instabile alla luce e ai metalli (ingiallisce), attiva a pH 4-5, chelante del rame.",
 t:[0.5,1],ph:{e:"acido",v:4.5},
 r:{t:"limitato",x:"Ammesso fino all'1% nei prodotti per viso e mani (parere SCCS).",a:"Allegato III"}},

{n:"HYDROQUINONE",c:"Difenolo",g:"funz",f:"schiarente",
 d:"Schiarente molto potente, non ammesso nei cosmetici normali: in Europa si può usare solo il medico, come farmaco.",
 p:"Fenolo bianco cristallino, ossidabile all'aria, forte inibitore della tirosinasi, potenzialmente citotossico per i melanociti.",
 t:[0,0],
 r:{t:"vietato",x:"Vietato nei cosmetici. Unica eccezione: 0,02% come conservante nei sistemi per unghie artificiali di uso professionale.",a:"Allegato II / Allegato III"}},

{n:"CAFFEINE",c:"Alcaloide xantinico",g:"funz",f:"anticellulite, decongestionante",
 d:"Stimola il microcircolo e aiuta a smaltire i liquidi: nei prodotti corpo contrasta la cellulite, nei contorno occhi sgonfia le borse.",
 p:"Polvere bianca amara, solubile in acqua calda (2% a freddo), stabile al calore e alla luce, penetra bene la pelle, lipolitica per inibizione della fosfodiesterasi.",
 t:[0.5,5],ph:{e:"neutro",v:6.5}},

{n:"ADENOSINE",c:"Nucleoside purinico",g:"funz",f:"antirughe, lenitivo",
 d:"Distende le rughe e migliora l'elasticità stimolando le cellule della pelle. Attivo approvato anche in Corea come anti-età.",
 p:"Polvere idrosolubile, stabile in un ampio intervallo di pH e al calore, efficace a concentrazioni molto basse (0,04-0,1%).",
 t:[0.04,0.5],ph:{e:"neutro",v:6.5}},

{n:"CENTELLA ASIATICA EXTRACT",alt:["CENTELLA ASIATICA LEAF EXTRACT","MADECASSOSIDE","ASIATICOSIDE","ASIATIC ACID","MADECASSIC ACID"],c:"Estratto vegetale ricco di triterpeni",g:"funz",f:"lenitivo, riparatore",
 d:"La famosa \"cica\": calma la pelle irritata, favorisce la riparazione e rinforza la barriera. Ottima dopo trattamenti aggressivi.",
 p:"Miscela di saponine triterpeniche idrosolubili, stimolano la sintesi del collagene, antinfiammatorie, stabili fra pH 4 e 7.",
 t:[0.1,5],ph:{e:"neutro",v:5.5}},

{n:"BISABOLOL",alt:["ALPHA-BISABOLOL","CHAMOMILLA RECUTITA FLOWER EXTRACT","MATRICARIA FLOWER EXTRACT"],c:"Alcol sesquiterpenico (da camomilla)",g:"funz",f:"lenitivo",
 d:"Calma rossori e pruriti: si usa nei prodotti per pelli sensibili, dopobarba e doposole.",
 p:"Liquido oleoso liposolubile dal lieve odore floreale, antinfiammatorio e antibatterico, stabile ma sensibile all'ossidazione.",
 t:[0.1,1],ph:{e:"neutro",v:6.5}},

{n:"PALMITOYL TRIPEPTIDE-1",alt:["PALMITOYL TETRAPEPTIDE-7","ACETYL HEXAPEPTIDE-8","PALMITOYL PENTAPEPTIDE-4","COPPER TRIPEPTIDE-1","ACETYL TETRAPEPTIDE-5","HEXAPEPTIDE-11"],c:"Peptide di sintesi (catena corta di amminoacidi)",g:"funz",f:"antirughe",
 d:"Piccoli frammenti di proteina che danno alla pelle il segnale di produrre collagene o di rilassare la contrazione muscolare: rughe meno marcate nel tempo.",
 p:"Molecole idrosolubili, spesso legate a una catena grassa (palmitoil) per penetrare meglio; attive a concentrazioni bassissime (ppm), sensibili al calore e agli enzimi, incompatibili con pH estremi.",
 t:[0.001,0.5],ph:{e:"neutro",v:6}},

{n:"ZINC OXIDE",c:"Ossido inorganico (filtro fisico)",g:"funz",f:"filtro solare, lenitivo, opacizzante",
 d:"Polvere bianca che riflette e assorbe i raggi UVA e UVB: protegge dal sole, calma le irritazioni e assorbe il sebo. Molto usata nelle paste per il cambio del pannolino.",
 p:"Ossido inorganico insolubile, indice di rifrazione alto (effetto bianco), leggermente alcalino, fotostabile, in forma nano è trasparente; può disattivarsi in formule molto acide.",
 t:[2,25],ph:{e:"alcalino",v:7.5},
 r:{t:"limitato",x:"Ammesso come filtro UV fino al 25%; la forma nano è consentita solo con caratteristiche definite e non in prodotti che possono essere inalati (spray).",a:"Allegato VI"}},

{n:"TITANIUM DIOXIDE",alt:["CI 77891"],c:"Ossido inorganico (filtro fisico / pigmento bianco)",g:"funz",f:"filtro solare, pigmento bianco",
 d:"Schermo minerale che riflette i raggi UV; è anche il bianco di fondotinta, ciprie e dentifrici.",
 p:"Polvere bianchissima, indice di rifrazione altissimo (2,6), insolubile, chimicamente inerte, fotostabile se rivestita (le versioni non rivestite sono fotocatalitiche).",
 t:[1,25],ph:{e:"neutro",v:7},
 r:{t:"limitato",x:"Filtro UV ammesso fino al 25%. Vietato nei prodotti in polvere sciolta che possono essere inalati e vietato come colorante alimentare; la forma nano segue condizioni specifiche.",a:"Allegato VI / Allegato IV"}},

{n:"ETHYLHEXYL METHOXYCINNAMATE",alt:["OCTINOXATE","OCTYL METHOXYCINNAMATE"],c:"Filtro solare organico (cinnamato)",g:"funz",f:"filtro UVB",
 d:"Filtro chimico che assorbe i raggi UVB trasformandoli in calore. Molto usato perché leggero e trasparente.",
 p:"Liquido oleoso liposolubile, picco di assorbimento a 310 nm, moderatamente fotostabile (si degrada se non abbinato ad altri filtri), buon solvente per altri filtri.",
 t:[2,10],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammesso come filtro UV fino al 10%.",a:"Allegato VI"}},

{n:"BUTYL METHOXYDIBENZOYLMETHANE",alt:["AVOBENZONE"],c:"Filtro solare organico (dibenzoilmetano)",g:"funz",f:"filtro UVA",
 d:"Il principale filtro contro i raggi UVA, quelli che invecchiano la pelle. Da solo si degrada al sole, quindi va sempre stabilizzato con altri filtri.",
 p:"Polvere liposolubile, picco a 357 nm, fotolabile: perde fino al 50-90% dell'efficacia in un'ora se non è stabilizzata (con octocrilene, Tinosorb, ecc.).",
 t:[1,5],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammesso come filtro UV fino al 5%.",a:"Allegato VI"}},

{n:"OCTOCRYLENE",c:"Filtro solare organico (cianoacrilato)",g:"funz",f:"filtro UVB, fotostabilizzante",
 d:"Assorbe i raggi UVB e soprattutto protegge gli altri filtri dal degradarsi al sole. Aiuta anche la resistenza all'acqua.",
 p:"Liquido oleoso viscoso, molto fotostabile, ottimo solvente per filtri solidi, resistente all'acqua; con il tempo può liberare tracce di benzofenone.",
 t:[2,10],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammesso fino al 10% (espresso come acido); nei prodotti spray il limite scende al 9% secondo il regolamento (UE) 2022/1176.",a:"Allegato VI"}},

{n:"BENZOPHENONE-3",alt:["OXYBENZONE"],c:"Filtro solare organico (benzofenone)",g:"funz",f:"filtro UVB/UVA corto",
 d:"Filtro chimico ormai poco usato: oggi ha limiti più stretti perché può essere assorbito dal corpo e può dare allergie da contatto.",
 p:"Polvere liposolubile, assorbe fra 270 e 350 nm, buona fotostabilità, penetrazione cutanea relativamente alta.",
 t:[0.5,6],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Dal regolamento (UE) 2022/1176: massimo 6% nei prodotti solari in crema, 2,2% negli spray corpo e 0,5% se usato solo per proteggere la formula. Obbligo di dicitura \"contiene benzofenone-3\".",a:"Allegato VI"}},

{n:"HOMOSALATE",c:"Filtro solare organico (salicilato)",g:"funz",f:"filtro UVB",
 d:"Filtro UVB debole ma utile come solvente per gli altri filtri; oggi con limiti ridotti.",
 p:"Liquido oleoso, assorbe a 306 nm, fotostabile, ottimo solubilizzante di filtri cristallini.",
 t:[1,7.34],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Dal regolamento (UE) 2022/1176 è ammesso solo nei prodotti per il viso (esclusi gli spray) e al massimo al 7,34%.",a:"Allegato VI"}},

{n:"BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE",alt:["TINOSORB S","BEMOTRIZINOL","METHYLENE BIS-BENZOTRIAZOLYL TETRAMETHYLBUTYLPHENOL","TINOSORB M","DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE","ETHYLHEXYL TRIAZONE","TRIS-BIPHENYL TRIAZINE"],c:"Filtro solare organico di nuova generazione (triazina/benzotriazolo)",g:"funz",f:"filtro UVA+UVB ad ampio spettro",
 d:"Filtri moderni, molto fotostabili, che coprono sia UVA sia UVB: permettono protezioni alte con texture leggere.",
 p:"Molecole grandi (peso molecolare alto), quindi penetrano poco nella pelle; fotostabilissime, liposolubili o in dispersione acquosa, stabilizzano anche gli altri filtri.",
 t:[1,10],ph:{e:"neutro",v:6.5},
 r:{t:"limitato",x:"Ammessi come filtri UV con limiti specifici (in genere 10%, 5% per l'etilesil triazone).",a:"Allegato VI"}},

{n:"4-METHYLBENZYLIDENE CAMPHOR",alt:["ENZACAMENE"],c:"Filtro solare organico (derivato della canfora)",g:"funz",f:"filtro UVB",
 d:"Vecchio filtro solare non più ammesso in Europa perché sospettato di interferire con gli ormoni.",
 p:"Polvere liposolubile, assorbimento a 300 nm.",t:[0,0],
 r:{t:"vietato",x:"Vietato nei cosmetici dal 1° maggio 2025 (regolamento (UE) 2024/996) per potenziale attività di interferente endocrino.",a:"Allegato II"}}
);
