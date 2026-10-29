# Regenesy Studio

**[Apri il sito su GitHub Pages](https://christianmusumeci00.github.io/regenesy-design-studio/)**

Studio interattivo in italiano per esplorare il design di prodotti dedicati alle reti elettriche, gas e idriche. Tutti i dati sono dimostrativi.

## Avvio locale

Non serve una fase di build né un'installazione npm. Con Python 3:

```sh
cd docs
python3 -m http.server 4317 --bind 127.0.0.1
```

Aprire http://127.0.0.1:4317/ nel browser. Il sito va servito via HTTP per consentire l'esportazione dei mockup e dei font incorporati.

## Contenuti

- Sei template: Enterprise, Essential, Executive, Aurora, Control Room, Soft.
- Selezione multipla e confronto dei template.
- Cinque font locali: Inter, Manrope, DM Sans, IBM Plex Sans, Plus Jakarta Sans.
- Tre stili di componenti, due densità, palette e modalità scura.
- Catalogo di 36 componenti con anteprime, preferiti e markup HTML.
- DataTables 2.3.5 e AG Grid Community 34.3.1, con 64 dispositivi per settore.
- Ricerca, ordinamento, filtri, paginazione ed esportazione CSV. AG Grid include selezione multipla e consumi modificabili.
- Mockup desktop, tablet e mobile esportabili come HTML autonomo, con font incorporati.
- POC VoltGrid, GasLink, AquaSense: KPI, periodi dei grafici, schemi di rete esplorabili, allarmi e schede dispositivo.
- Preferenze salvate in localStorage, con importazione ed esportazione JSON.

## Struttura

- `docs/index.html`: entry point.
- `docs/styles.css`: layout responsive, temi e token.
- `docs/data.js`: cataloghi e dataset dimostrativi.
- `docs/app.js`: viste, routing hash, interazioni ed esportazioni.
- `docs/vendor/`: librerie e font inclusi localmente.

Le route usano `#/`, quindi l'hosting statico non necessita di riscritture. Non ci sono backend, account, telemetria o collegamenti a impianti reali. Gli allarmi presi in carico e i consumi modificati sono mantenuti in memoria durante la sessione. Le preferenze e i preferiti restano nel browser.

## Riferimenti

- Professionalità e gerarchia: https://shaw-composed-caring-burning.trycloudflare.com/panoramica
- Idee e interazioni: https://christianmusumeci00.github.io/regenesy-flux/
- DataTables: https://datatables.net/
- AG Grid Community: https://www.ag-grid.com/javascript-data-grid/

## Verifica

Controlli sintattici:

```sh
node --check docs/app.js
node --check docs/data.js
```

Verifica nel browser dei flussi principali: confronto multiplo, personalizzazione e persistenza, ricerca e filtri di entrambi i motori, editing AG Grid, nodi e allarmi delle POC, componenti e preferiti, mockup ed esportazione HTML. Layout controllato ai breakpoint desktop e mobile. Vedere `THIRD_PARTY.md` per le dipendenze.

## Pubblicazione GitHub Pages

Il sito viene pubblicato automaticamente dalla cartella `docs/` del branch `main`. Per aggiornare il sito, modifica i file in `docs/` e invia un commit a `main`. Il file `docs/.nojekyll` abilita la distribuzione dei file statici senza trasformazioni Jekyll.
