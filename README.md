# manuelbogoni.it — sito fotografo (statico)

Sito a pagina unica, statico (HTML + CSS + JS). Nessuna compilazione lato server:
GitHub Pages serve i file così come sono.

## Pubblicazione
1. Carica TUTTI i file e le cartelle nella root del repository (branch `main`).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, cartella `/ (root)`.
3. Il file `CNAME` collega www.manuelbogoni.it.

IMPORTANTE: c'è un file `.nojekyll` (vuoto). Serve e va lasciato: dice a GitHub
di NON usare Jekyll. È il motivo per cui prima il sito appariva senza grafica.

## Struttura
```
index.html        ← la pagina (testi, sezioni, SEO)
css/style.css     ← stile già compilato (è quello che il sito usa)
css/style.scss    ← sorgente SCSS (solo se vuoi rigenerare il CSS)
js/main.js        ← menu mobile + galleria lightbox
images/           ← foto
CNAME             ← dominio
sitemap.xml       ← mappa per i motori di ricerca
robots.txt        ← istruzioni per i crawler
.nojekyll         ← disattiva Jekyll (NON rimuovere)
```

## Modificare i contenuti
- Testi, titoli, contatti: in `index.html`.
- Foto: sostituisci i file in `images/` mantenendo gli stessi nomi
  (`about.jpg`, `portrait-1/2/3.jpg`, `events-1/2/3.jpg`, `landscape-1/2/3.jpg`).
  Per aggiungere foto a una galleria, copia un blocco `<button class="gallery__item" ...>`
  nella sezione e aggiungi l'immagine in `images/`. Formato consigliato 4:5.
- Colori: variabili in cima a `css/style.scss`. Dopo averle cambiate, ricompila:
  `sass css/style.scss css/style.css --style=compressed --no-source-map`

## DA COMPLETARE (ora sono segnaposto in index.html)
- Email: `info@manuelbogoni.it`
- Telefono: `+39 000 000 0000` (in due punti: link `tel:` e testo visibile)
- Link reali di Instagram e LinkedIn (anche nei dati strutturati JSON-LD, campo "sameAs")

## SEO locale — cosa fa già il sito
- Title, description e keyword mirati a Padova, Colli Euganei, Vicenza
- Dati strutturati Schema.org "LocalBusiness" con aree servite
- Tag geografici, Open Graph, Twitter Card
- sitemap.xml e robots.txt
- Testi delle sezioni e testi alternativi (alt) delle foto con le località
- Titoli delle sezioni mirati ai servizi (Ritratto, Eventi, Paesaggio)

## SEO locale — cosa devi fare TU (fuori dal codice, è qui che si vince)
Il codice è la base, ma il posizionamento dipende soprattutto da questi passi:
1. Apri un profilo **Google Business** (gratuito): è il fattore numero uno per
   le ricerche locali tipo "fotografo Padova". Inserisci zona, foto, contatti.
2. Iscrivi il sito a **Google Search Console** e invia la `sitemap.xml`.
3. Raccogli **recensioni** Google dai clienti.
4. Ottieni qualche **link** da siti locali (associazioni, location, partner).
5. Inserisci email e telefono reali (vedi sopra): i contatti coerenti ovunque
   aiutano la SEO locale.

Nessuno può garantire la prima pagina, ma questi passi sono ciò che conta davvero.
```
