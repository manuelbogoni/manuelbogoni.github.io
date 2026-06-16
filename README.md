# manuelbogoni.it — sito fotografo (Jekyll)

Sito a pagina unica costruito con Jekyll. **GitHub Pages compila tutto da solo**
(HTML, Liquid e SCSS): non devi compilare niente a mano.

## Pubblicazione su GitHub Pages
1. Carica TUTTI i file e le cartelle nella root del repository (branch `main`).
2. Settings → Pages → Source: `Deploy from a branch`, branch `main` / `/ (root)`.
3. Il file `CNAME` collega automaticamente www.manuelbogoni.it.

GitHub Pages riconosce Jekyll automaticamente: **non** aggiungere un file `.nojekyll`.

## Dove si modificano i contenuti
Tutto in **`_config.yml`**: nome, ruolo, contatti (email, telefono, città),
social, e le tre sezioni (titolo, immagine, testo).

- Per nascondere una voce di contatto o un social, lascia il valore vuoto `""`
  oppure rimuovi la riga.
- Per aggiungere/togliere una sezione, aggiungi/rimuovi un blocco sotto `sections:`.
- `reverse: true` inverte l'ordine immagine/testo di una sezione.

> Nota: dopo aver modificato `_config.yml`, GitHub Pages può metterci 1-2 minuti
> a ricostruire il sito.

## Foto
Metti le immagini nella cartella `images/` e indica il nome del file nel
`_config.yml` (campo `image:` di ogni sezione). Formato consigliato 4:5.
Le tre attuali (`about.jpg`, `work.jpg`, `approach.jpg`) sono placeholder.

## Aspetto (colori e font)
Variabili in cima a `_sass/_main.scss`. GitHub Pages ricompila lo SCSS a ogni push.

## Struttura dei file
```
_config.yml          ← i tuoi dati (modifica qui)
index.html           ← struttura della pagina (loop sui dati)
_layouts/default.html← <head> e scheletro HTML
_sass/_main.scss     ← stile
assets/css/style.scss← punto d'ingresso CSS (non toccare)
images/              ← foto
CNAME                ← dominio
```

## Anteprima in locale (facoltativa)
Serve Ruby + Jekyll:
```
gem install bundler jekyll
jekyll serve
```
Poi apri http://localhost:4000
