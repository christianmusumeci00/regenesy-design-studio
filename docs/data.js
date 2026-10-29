/* Regenesy Studio — dati dimostrativi e catalogo */
const ICONS={
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 layers:'<path d="m12 3 10 6-10 6L2 9l10-6Z"/><path d="m2 13 10 6 10-6M2 17l10 6 10-6"/>',
 components:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><path d="m17.5 2.5 5 5-5 5-5-5 5-5Z"/><rect x="14" y="14" width="7" height="7" rx="3.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
 table:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16"/>',
 mockup:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4M2 7h20"/>',
 compare:'<rect x="2" y="4" width="8" height="16" rx="1.5"/><rect x="14" y="4" width="8" height="16" rx="1.5"/><path d="M6 9v6m12-6v6"/>',
 bolt:'<path d="m13 2-9 12h7l-1 8L21 9h-8l1-7Z"/>',
 flame:'<path d="M12 3c1 5-5 5-4 10 1-1 2-1 3-3 4 4 4 7 1 9 6 1 9-6 6-10-1 2-2 2-2 2s0-5-4-8Z"/><path d="M8 8c-8 10 1 15 7 12"/>',
 drop:'<path d="M12 2S4 11 4 15a8 8 0 0 0 16 0c0-4-8-13-8-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
 settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor" stroke="none"/><circle cx="15" cy="17" r="3" fill="currentColor" stroke="none"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5m0 3v.1"/>',
 moon:'<path d="M20.5 13A9 9 0 0 1 11 3.5 9 9 0 1 0 20.5 13Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
 star:'<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 3Z"/>',
 expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
 code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
 filter:'<path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z"/>',
 activity:'<path d="M2 12h4l3-8 5 16 3-8h5"/>',
 chart:'<path d="M4 3v18h18M8 16V9m5 7V5m5 11v-5"/>',
 trend:'<path d="m3 17 6-6 4 4 8-10M15 5h6v6"/>',
 shield:'<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 pin:'<path d="M19 9c0 6-7 13-7 13S5 15 5 9a7 7 0 0 1 14 0Z"/><circle cx="12" cy="9" r="2.5"/>',
 server:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.1M7 17.5h.1m4-11h6m-6 11h6"/>',
 wifi:'<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.1"/>',
 more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
 copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
 reset:'<path d="M3 10a9 9 0 1 1 1 8M3 3v7h7"/>',
 folder:'<path d="M3 6h6l2 3h10v11H3V6Z"/>',
 layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M9 8v13"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 pause:'<path d="M8 4v16M16 4v16"/>',
 play:'<path d="m8 4 12 8-12 8V4Z"/>',
 alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v.1"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 save:'<path d="M4 3h13l4 4v14H3V3h1Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/>',
 arrowup:'<path d="M12 20V4m-6 6 6-6 6 6"/>',
 users:'<circle cx="9" cy="7" r="4"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8m3 10v-3a7 7 0 0 0-3-6"/>',
 meter:'<path d="M3 19a10 10 0 1 1 18 0H3Z"/><path d="m12 14 5-5M6 14H4m3-7 1 2m8-2-1 2m5 5h-2"/>'
};
const TEMPLATES=[
{id:'enterprise',name:'Enterprise',tag:'Professionale',level:'Rigore e chiarezza',desc:'Gerarchie solide, verde petrolio e dati in primo piano. Il punto di partenza per ogni utility.',color:'#257463',bg:'#f5f7f8',side:'#152b32',font:'Inter',radius:12,personality:'Istituzionale',score:95},
{id:'essential',name:'Essential',tag:'Minimale',level:'L’essenziale, ben fatto',desc:'Spazio, tipografia e contrasti misurati. Un’interfaccia che lascia parlare i contenuti.',color:'#24292f',bg:'#fafafa',side:'#ffffff',font:'DM Sans',radius:6,personality:'Professionale',score:88},
{id:'executive',name:'Executive',tag:'Premium',level:'Autorevole per natura',desc:'Blu profondo, dettagli editoriali e una lettura pensata per decisioni strategiche.',color:'#36578b',bg:'#f4f5f8',side:'#17263e',font:'Manrope',radius:8,personality:'Istituzionale',score:100},
{id:'aurora',name:'Aurora',tag:'Sperimentale',level:'Un’altra energia',desc:'Trasparenze, gradienti e colori espressivi per esplorare nuove direzioni di prodotto.',color:'#7961cf',bg:'#f3f0fb',side:'#29243c',font:'Plus Jakarta Sans',radius:20,personality:'Creativo',score:38},
{id:'control',name:'Control Room',tag:'Operativo',level:'Sempre sotto controllo',desc:'Superfici scure, accenti ciano e alta densità. Progettato per il monitoraggio continuo.',color:'#5acdd1',bg:'#111c27',side:'#0b141d',font:'IBM Plex Sans',radius:6,personality:'Tecnico',score:90},
{id:'soft',name:'Soft',tag:'Friendly',level:'La complessità si fa semplice',desc:'Forme morbide e toni caldi. Un’esperienza più umana, senza perdere precisione.',color:'#bc754e',bg:'#f8f5f0',side:'#eee6dc',font:'DM Sans',radius:22,personality:'Informale',score:58}
];
const SECTORS={
 elettrico:{name:'Elettrico',product:'VoltGrid',icon:'bolt',color:'#bd8c33',light:'#fbf3df',subtitle:'L’energia della rete, in una sola vista.',metric:'Energia distribuita',value:'128,6',unit:'MWh',trend:'+4,2%',secondary:'Carico di rete',secondaryValue:'48,7',secondaryUnit:'MW',devices:'8.420',connected:'98,6',alerts:12,efficiency:'99,2',network:'Schema della rete elettrica',nodes:['Cabina primaria','Sottostazione Est','Cabina Nord','Zona industriale','Centro città','Quartiere Sud'],nodeValues:['132 kV','20 kV','18,2 MW','12,8 MW','9,4 MW','8,3 MW'],chart:'Energia distribuita',pressure:'Tensione di rete',pressureValue:'230',pressureUnit:'V',goal:'225–235 V',quality:'Continuità del servizio',status:'Tensione regolare',alert1:'Sovraccarico rilevato',alert2:'Caduta di tensione',idPrefix:'POD',deviceName:'Contatore elettrico'},
 gas:{name:'Gas',product:'GasLink',icon:'flame',color:'#a56b45',light:'#fbefe4',subtitle:'Distribuzione sicura. Decisioni consapevoli.',metric:'Gas distribuito',value:'24.850',unit:'Sm³',trend:'+2,8%',secondary:'Portata istantanea',secondaryValue:'1.976',secondaryUnit:'Sm³/h',devices:'6.180',connected:'97,8',alerts:8,efficiency:'98,4',network:'Schema della rete gas',nodes:['Cabina REMI','Gruppo riduzione','Distretto Nord','Zona industriale','Centro città','Distretto Sud'],nodeValues:['12 bar','4 bar','620 Sm³/h','548 Sm³/h','426 Sm³/h','382 Sm³/h'],chart:'Gas distribuito',pressure:'Pressione di esercizio',pressureValue:'4,2',pressureUnit:'bar',goal:'3,5–5,0 bar',quality:'Efficienza distribuzione',status:'Pressione regolare',alert1:'Pressione sotto soglia',alert2:'Anomalia di portata',idPrefix:'PDR',deviceName:'Contatore gas'},
 idrico:{name:'Idrico',product:'AquaSense',icon:'drop',color:'#3e91b4',light:'#eaf5fa',subtitle:'Ogni goccia conta. Ogni dato, anche.',metric:'Volume distribuito',value:'18.420',unit:'m³',trend:'+3,6%',secondary:'Portata di rete',secondaryValue:'457',secondaryUnit:'L/s',devices:'12.840',connected:'96,8',alerts:24,efficiency:'81,4',network:'Schema della rete idrica',nodes:['Sorgente','Potabilizzatore','Serbatoio Nord','Distretto Est','Centro città','Distretto Sud'],nodeValues:['123 L/s','157 L/s','5.800 m³','135 L/s','144 L/s','178 L/s'],chart:'Volume distribuito',pressure:'Pressione di rete',pressureValue:'3,6',pressureUnit:'bar',goal:'2,5–5,0 bar',quality:'Rendimento idrico',status:'Portata regolare',alert1:'Possibile perdita',alert2:'Flusso inverso',idPrefix:'H2O',deviceName:'Contatore idrico'}
};
const COMPONENTS=[
['kpi','KPI & metriche','Dati','chart','Indicatori con variazioni e contesto.'],['badge','Badge di stato','Fondamentali','check','Stati leggibili, anche senza colore.'],['button','Pulsanti','Fondamentali','plus','Azioni primarie, secondarie e discrete.'],['card','Card dispositivo','Dati','server','Informazioni raggruppate per priorità.'],['avatar','Avatar & gruppi','Fondamentali','users','Persone e gruppi di lavoro.'],['chip','Chip & filtri','Fondamentali','filter','Selezioni veloci e rimovibili.'],
['input','Campi di testo','Form','code','Etichette, suggerimenti e validazione.'],['select','Selezione','Form','down','Opzioni semplici e immediate.'],['switch','Switch','Form','settings','Preferenze applicate all’istante.'],['checkbox','Checkbox','Form','check','Selezioni multiple e conferme.'],['radio','Radio group','Form','grid','Una scelta tra alternative.'],['slider','Slider','Form','settings','Regolazioni su scala continua.'],['date','Date picker','Form','clock','Seleziona il periodo di analisi.'],['upload','Caricamento file','Form','download','Acquisizione locale di file e letture.'],
['tabs','Tabs','Navigazione','layers','Contenuti organizzati in viste.'],['breadcrumb','Breadcrumb','Navigazione','chevron','La posizione, sempre chiara.'],['pagination','Paginazione','Navigazione','arrow','Navigare dataset estesi.'],['stepper','Stepper','Navigazione','check','Processi guidati, passo dopo passo.'],['accordion','Accordion','Navigazione','down','Dettagli disponibili quando servono.'],['menu','Menu azioni','Navigazione','more','Azioni contestuali e ordinamenti.'],
['alert','Alert','Feedback','alert','Messaggi chiari con azioni utili.'],['toast','Toast','Feedback','bell','Conferme leggere e temporanee.'],['modal','Dialog & modali','Feedback','expand','Focus su una decisione o un dettaglio.'],['progress','Progress bar','Feedback','activity','L’avanzamento delle operazioni.'],['skeleton','Skeleton','Feedback','layers','Un’attesa che mantiene il contesto.'],['empty','Stato vuoto','Feedback','folder','Una direzione anche senza dati.'],
['table','Tabella','Dati','table','Dati ordinabili e selezionabili.'],['sparkline','Sparkline','Dati','trend','Il trend, in un colpo d’occhio.'],['bar','Grafico a barre','Dati','chart','Volumi e periodi a confronto.'],['donut','Grafico ad anello','Dati','meter','Composizioni e distribuzioni.'],['heatmap','Heatmap','Dati','grid','Intensità e pattern nel tempo.'],['gauge','Gauge','Rete','meter','Soglie e valori di esercizio.'],['odometer','Contatore digitale','Rete','activity','Letture e consumi cumulati.'],['network','Schema di rete','Rete','layers','Nodi, connessioni e flussi.'],['alarm','Lista allarmi','Rete','bell','Priorità, presa in carico e dettaglio.'],['timeline','Timeline attività','Rete','clock','La storia delle operazioni.']
].map(([id,name,category,icon,desc])=>({id,name,category,icon,desc}));
function makeRows(sector='idrico',count=64){const s=SECTORS[sector];const streets=['Via Roma','Via della Repubblica','Corso Italia','Via Verdi','Piazza Garibaldi','Via Mazzini','Via Dante','Viale Europa'];const zones=['Centro','Nord','Est','Sud'];return Array.from({length:count},(_,i)=>({id:`${s.idPrefix}-${String(840201+i).padStart(8,'0')}`,name:`${s.deviceName} ${String(i+1).padStart(3,'0')}`,address:`${streets[i%8]}, ${12+(i*7)%160}`,district:`Distretto ${zones[i%4]}`,status:i%11===0?'Allarme':i%9===0?'Offline':'Online',technology:['NB-IoT','LoRaWAN','wM-Bus'][i%3],consumption:Math.round((84+((i*137)%2800))*10)/10,unit:sector==='elettrico'?'kWh':sector==='gas'?'Sm³':'m³',signal:Math.min(100,62+(i*7)%39),reading:`29/10/2026 ${String(8+i%7).padStart(2,'0')}:${String((i*13)%60).padStart(2,'0')}`}));}
