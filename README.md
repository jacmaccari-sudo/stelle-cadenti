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
