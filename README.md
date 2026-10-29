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
- Catalogo di 96 componenti con anteprime, preferiti e markup HTML: 36 fondamentali e 60 esperimenti live.
- DataTables 2.3.5 (registro base di 64 dispositivi) e AG Grid Community 34.3.1 (workspace con 512 dispositivi per settore).
- Ricerca anche nelle colonne nascoste, filtri combinabili, paginazione e CSV dei risultati o della selezione. AG Grid include assegnazioni e presa in carico multiple, confronto, editing validato, annulla/ripeti, dettaglio dispositivo, viste salvate e simulazione live.
- Mockup desktop, tablet e mobile esportabili come HTML autonomo, con font incorporati.
- POC VoltGrid, GasLink, AquaSense: KPI, periodi dei grafici, schemi di rete esplorabili, allarmi e schede dispositivo.
- Preferenze salvate in localStorage, con importazione ed esportazione JSON.

## Struttura

- `docs/index.html`: entry point.
- `docs/styles.css`: layout responsive, temi e token.
- `docs/data.js`: cataloghi e dataset dimostrativi.
- `docs/app.js`: viste, routing hash, interazioni ed esportazioni.
- `docs/live-components.js` e `docs/live-lab.css`: 60 simulazioni, controlli, snapshot SVG e runtime basato sulla visibilità.
- `docs/grid-model.js`: dati e calcoli operativi verificabili.
- `docs/grid-workbench.js` e `docs/grid-workbench.css`: workspace AG Grid e interazioni.
- `docs/vendor/`: librerie e font inclusi localmente.
- `tests/`: verifica dei calcoli, delle patch locali e di tutti i renderer live.

Le route usano `#/`, quindi l'hosting statico non necessita di riscritture. Non ci sono backend, account, telemetria o collegamenti a impianti reali. Le modifiche del workspace AG Grid, le note operative e le viste sono salvate in localStorage su questo browser. Le preferenze e i preferiti restano nel browser. Gli eventi dei POC originali, il flusso simulato e la cronologia annulla/ripeti restano nella sessione. Non vengono attivati dispositivi o collegamenti reali.

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
node --test tests/*.test.cjs
```

Verifica nel browser dei flussi principali: confronto multiplo, personalizzazione e persistenza, ricerca e filtri di entrambi i motori, editing AG Grid, nodi e allarmi delle POC, componenti e preferiti, mockup ed esportazione HTML. Layout controllato ai breakpoint desktop e mobile. Vedere `THIRD_PARTY.md` per le dipendenze.

## Pubblicazione GitHub Pages

Il sito viene pubblicato automaticamente dalla cartella `docs/` del branch `main`. Per aggiornare il sito, modifica i file in `docs/` e invia un commit a `main`. Il file `docs/.nojekyll` abilita la distribuzione dei file statici senza trasformazioni Jekyll.

## Live Lab

Apri `#/live` per 60 esperimenti in sei famiglie: Reti, Energia, Analisi, Telemetria, Operazioni ed Esperienze. Ogni esperimento dispone di una regolazione, un’azione contestuale, pausa e snapshot. I componenti usano un runtime condiviso: solo quelli visibili vengono aggiornati; tab nascoste, pausa globale e preferenze di movimento ridotto sospendono gli aggiornamenti automatici.

I grafici di forecast, correlazione, rischio e geofence sono esempi visivi basati su dati simulati, non modelli predittivi convalidati.

## Workspace AG Grid

Apri `#/tabelle`. Le metriche includono tutte le righe filtrate, mentre i grafici inferiori seguono la selezione quando è presente. Il CSV esporta le righe selezionate, altrimenti tutti i risultati filtrati, includendo colonne visibili e nascoste. Le checkbox dell’intestazione selezionano i risultati filtrati su tutte le pagine. Il flusso live aggiorna otto dispositivi ogni 2,2 secondi e si sospende durante un edit o un dialog. Le funzioni sono costruite con AG Grid Community, senza moduli Enterprise.
