# manuelbogoni.it — sito fotografo

Sito a pagina unica. HTML + SCSS (compilato in CSS).

## Struttura
- `index.html` — pagina
- `scss/style.scss` — sorgente SCSS
- `css/style.css` — CSS compilato (è questo che il sito usa)
- `images/` — foto (sostituisci i placeholder)
- `CNAME` — dominio personalizzato (www.manuelbogoni.it)
- `.nojekyll` — disabilita Jekyll su GitHub Pages

## Pubblicazione
1. Carica tutti i file nella root del repo (branch `main`).
2. Settings → Pages → Source: `main` / root.
3. Il file `CNAME` collega automaticamente www.manuelbogoni.it.

## DA COMPLETARE (placeholder in index.html)
- Email: `info@dominio.it` → la tua email reale
- Telefono: `+39 000 000 0000` → il tuo numero
- Link Instagram e LinkedIn (al momento puntano alle home dei siti)

## Modificare lo stile
GitHub Pages NON compila SCSS. Dopo aver modificato `scss/style.scss`:
```
sass scss/style.scss css/style.css --style=compressed --no-source-map
```
e ricarica `css/style.css`. (Installa Sass: https://sass-lang.com/install)

## Personalizzare
- Testi, contatti, link social: in `index.html`.
- Colori e font: variabili in cima a `scss/style.scss`.
- Foto: sostituisci `images/about.jpg`, `work.jpg`, `approach.jpg` (formato consigliato 4:5).
