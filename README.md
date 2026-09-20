# ⭐ Stelle Cadenti

Piccolo gioco che gira nel browser: prendi le stelle, schiva i meteoriti.
È una **PWA**, quindi si installa sul telefono come una normale app e funziona anche senza rete.

## Metterlo sul telefono Android

1. Su GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save**.
2. Dopo un paio di minuti il gioco è online su
   `https://jacmaccari-sudo.github.io/stelle-cadenti/`.
3. Apri quell'indirizzo con **Chrome sul telefono**.
4. Menu **⋮ → Installa app** (o "Aggiungi a schermata Home").
5. L'icona compare tra le app. Da lì parte a tutto schermo, senza barra del browser.

## Salvare la partita nel cloud

Il record resta sul telefono da solo. Per portarlo altrove:

- **☁️ Salva su cloud** → si apre la condivisione di Android: scegli Google Drive,
  Dropbox, Telegram o quello che usi, e il file `stelle-cadenti-salvataggio.json` finisce lì.
- **📂 Carica salvataggio** → riprendi quel file dal cloud e il record torna al suo posto.

## File del progetto

| File | A cosa serve |
|---|---|
| `index.html` | tutto il gioco: grafica, regole, salvataggio |
| `manifest.webmanifest` | nome, icona e colori dell'app installata |
| `sw.js` | tiene i file in memoria, così funziona offline |
| `icon-192.png`, `icon-512.png` | l'icona sulla schermata Home |

---

# 🧴 INCI Chiaro

Seconda app di questo repository (cartella `inci/`): **spiega e classifica gli ingredienti di un cosmetico**
partendo dalla lista INCI dell'etichetta. Anche questa è una PWA, quindi si installa su Android come una normale app.

## Come si usa

1. **Prima schermata — come inserisci gli ingredienti:**
   - ✍️ *li scrivi tu* (copi la lista dall'etichetta);
   - 📷 *fotografi l'etichetta* (l'app legge il testo dalla foto e ti lascia correggerlo);
   - 🔎 *scrivi il nome del prodotto* (o il codice a barre): l'app cerca gli ingredienti su
     [Open Beauty Facts](https://world.openbeautyfacts.org), archivio pubblico e gratuito.
2. **Seconda schermata — descrizione:** che prodotto è, pH stimato con la spiegazione del perché,
   avvisi del **regolamento (CE) 1223/2009**, e poi ingrediente per ingrediente: classe chimica,
   che cosa dà al cosmetico, caratteristiche chimico-fisiche e concentrazione stimata.
3. **Terza schermata — classificazione:** gli ingredienti divisi nei tre ruoli
   (**sostanza base**, **sostanze funzionali**, **eccipienti**), con il peso di ciascun gruppo.

Il linguaggio è pensato per chi non è del mestiere: niente gergo, ogni termine tecnico è spiegato.

## Che cosa sa fare

| Funzione | Come ci arriva |
|---|---|
| Classe chimica di ogni ingrediente | banca dati di oltre 570 nomi INCI + regole che leggono la forma del nome (es. `-ETH SULFATE` → tensioattivo anionico) |
| Proprietà e caratteristiche chimico-fisiche | scheda scritta per ogni voce della banca dati |
| Stima delle concentrazioni | l'etichetta è in ordine di quantità decrescente: l'app incrocia la posizione con le dosi d'uso abituali e con i limiti di legge |
| Stima del pH | tipo di prodotto riconosciuto dalla lista + acidi, basi, tamponi e gelificanti presenti (nei prodotti senza acqua avvisa che il pH non si misura) |
| Sostanze vietate o limitate | Allegati II, III, IV, V e VI del regolamento (CE) 1223/2009, aggiornamenti compresi (Lilial, zinco piritione, sodium dehydroacetate, retinolo, filtri solari…) |
| Allergeni del profumo | i 26 allergeni che devono comparire in etichetta |

Le percentuali e il pH sono **stime ricavate dall'etichetta**, non misure di laboratorio:
le quantità esatte le conosce solo il produttore.

## Metterla sul telefono Android

Con GitHub Pages attivo (vedi sopra) l'app è su
`https://jacmaccari-sudo.github.io/stelle-cadenti/inci/`.
Aprila con Chrome sul telefono e usa **⋮ → Installa app**.

Funziona anche offline. Servono invece internet la lettura della foto
(la prima volta scarica il motore di riconoscimento testo) e la ricerca per nome prodotto.

## File dell'app

| File | A cosa serve |
|---|---|
| `inci/index.html` | le schermate |
| `inci/style.css` | l'aspetto (con tema chiaro e scuro) |
| `inci/js/motore.js` | legge la lista, riconosce gli ingredienti, stima concentrazioni e pH |
| `inci/js/app.js` | schermate, foto, ricerca del prodotto |
| `inci/data/ingredients*.js` | le schede degli ingredienti |
| `inci/data/rules.js` | riconoscimento per somiglianza del nome + elenco sostanze vietate e limitate |
| `inci/sw.js`, `inci/manifest.webmanifest`, `inci/icon-*.png` | installazione e funzionamento offline |
