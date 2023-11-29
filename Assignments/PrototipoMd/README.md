# Documentazione per prototipo Medium Fedelity
## Descrizione del progetto
L'obiettivo cardine del progetto è risolvere il problema della varietà dei pasti per gli studenti del politecnico.
A questo fine, è stata pensata un'applicazione che permetta agli utenti di trovare, condividere e scegliere ricette da cucinare per i proprio giorni in università
I task su cui si è concentrato lo sviluppo del prototipo sono i seguenti:
  * **Semplice**: cercare ispirazione per una ricetta
  * **Moderato**: imporre dei parametri come filtro per una ricerca di una ricetta specifica
  * **Difficile**: condividere una ricetta
## Struttura del documento
Ogni schermata sarà composta da 3 sezioni:
  - Modalità di navigazione
  - Obiettivo della schermata
  - Funzionalità
## Profilo
Questa schermata, concettualmente unica, è stata divisa in due schermate:
  * Il profilo personale dell'utente, successivamente indicato come MyProfile
  * Il profilo di altri utenti sulla piattaforma, indicato come OtherProfile
### MyProfile
**Modalità di navigazione**

Questa pagina è sempre disponibile nel main flow dell'applicazione tramite apposita icona in alto a sinistra.

**Obiettivo**

L'obiettivo è dare la possibilità all'utente di modificare o di visualizzare i propri dati:
In particolare, si vuole dare la possibilità di vedere:
  * Il proprio nome
  * Il corso di studi che si sta frequentando
  * La media dei voti delle proprie ricette
  * La propria foto profilo
  * I link ai social che si è deciso di mostrare

**Funzionalità**

E' presente un tasto "Modifica" con cui l'utente può cambiare i suoi dati anagrafici, link ai social e foto profilo.
> [!Note]
> Il tasto modifica non è funzionante nel prototipo, ma l'idea è quello di mostrare all'utente un form da compilare per permettere le modifiche citate.

Essa si divide in due sezioni:
  * Ricette: dove è possibile accedere alle ricette create, per modificarle o visualizzare le recensioni su di esse.
  > [!Note]
  > Le funzioni di modifica sono solo citate ma non sono implementate nel prototipo in quanto non sono tra le 3 task su cui si è deciso di focalizzarsi al momento della consegna, tuttavia, potrebbero essere inserite in futuri aggiornamenti.
  * Notifiche: dove è possibile visualizzare tutte le notifiche di sistema, ad esempio se qualcuno ha votato una ricetta pubblicata oppure se qualcuno ha salvato l'utente in una raccolta.
  > [!Note]
  > La possibilità di visualizzare i dettagli di una notifica non è stata implementata nel prototipo, ma l'idea è quella di indirizzare l'utente verso la ricetta o l'utente citato, per rendere il più rapida possibile l'interazione
### OtherProfile
**Modalità di navigazione**

Questa schermata si apre nel momento in cui l'utente seleziona un profilo diverso dal suo. Questo può avvenire, ad esempio, tramite ricerca nella barra di navigazione (non implemenetata) oppure dai propri elementi salvati.

**Obiettivo**

Analogamente alla schermata MyProfile, l'obiettivo è quello di mostrare i dati anagrafici e i post dell'utente visualizzato. In aggiunta, è possibile usare un tasto in alto a destra per seguire o smettere di seguire l'utente visualizzato.

**Funzionalità**

Da questa schermata è possibile accedere a tre categorie diverse che includono: 
  * Ricette: dove si vedono tutte le ricette pubblicate dall'utente visualizzato
  * Raccolte: dove è possibile visualizzare oppure copiare le raccolte di ricette create dall'utente visualizzato.
  * Seguiti: analoga alla pagina di Raccolte, è possibile visualizzare gli account seguiti dall'utente selezionato.
> [!Note]
> Nessuna di queste schermate è effettivamente utilizzabile al momento nel prototipo.
## Salvati
**Modalità di navigazione**

Questa schermata può essere raggiunta grazie alla relativa icona sulla barra di navigazione

**Obiettivo**

Permettere all'utente di accedere rapidamente ai contenuti che ha deciso di salvare.
In particolare questa mostra:
  * Le raccolte di ricette create dall'utente
  * Le persone seguite dall'utente
  * Le ricette non messe all'interno di raccolte

**Funzionalità**

La schermata permette di cercare tra i vari elementi grazie alla barra di navigazione e i filtri sottostanti. E' possibile, inoltre, cambiare la disposizione degli elementi a schermo tra in linea e icone grandi.
> [!Note]
> Nella schermata sarà possibile anche creare una nuova raccolta, funzionalità che per ora non presente nel prototipo.
## Home
**Modalità di navigazione**

Questa schermata può essere raggiunta grazie alla relativa icona sulla barra di navigazione

**Obiettivo**

Accedere rapidamente alle ricette pubblicate dagli altri utenti, raggruppate in tre temi predefiniti:
  - Scelti per te: una raccolta dove il sistema seleziona le ricette basate sulle preferenze acquisite dell'utente
  - Dai tuoi seguiti: dove sono presenti solo ricette pubblicate da account seguiti dall'utente
  - Popolari: una raccolta per far scoprire riccette nuove all'utente presentado ricette basandonsi sul numero di recensioni e voto complessivo

**Funzionalità**

Permettere all'utente di visualizzare nella pagina apposita la ricetta selezionata e scorre le ricette proposte
> [!Note]
> In futuro sarà possibile espandere una categoria a pagina intera permettendo all'utente di visualizzare tutte le ricette disponibili.
## Esplora
**Modalità di navigazione**

Questa schermata può essere raggiunta grazie alla relativa icona sulla barra di navigazione

**Obiettivo**

Permettere all'utente di cercare, con diversi gradi di dettaglio, una ricetta.

**Funzionalità**

Le funzionalità comprendono:
  - Selezionare una categoria tra un set definito
  - Selezionare tags inerenti alla ricerca che vuole fare
  - Cercare direttamente il nome della ricetta
  - Aprire la sezione filtri

## Filtri
**Modalità di navigazione**

Questa schermata può essere raggiunta tramite l'icona apposita nella sezione Esplora.

**Obiettivo**

Permettere all'utente di applicare dei filtri alla propria ricerca
**Funzionalità**

I filtri disponibili sono i seguenti:
  - Costo: che permette di utilizzare uno slider per indicare un range di prezzo
  - Tempo di preparazione: come il costo
  - Difficoltà: dove è possibile selezionare una difficoltà (o più) preferita cliccando l'emoji che la indica
  - Ingredienti: selezionare gli ingrediendi che si desidera cercare
  - Esigenze alimentari: analogo agli ingredienti
  - Ingredienti da evitare: analogo agli ingredienti
  
> [!Note]
> Mancano nel prototipo le interazioni per visualizzare l'applicazione a meno di un filtro.

## Nuova ricetta
**Modalità di navigazione**

Questa schermata può essere raggiunta grazie alla relativa icona sulla barra di navigazione

**Obiettivo**

Permettere all'utente di pubblicare una ricetta personale.

**Funzionalità**

La schermata è formata da 4 pagine, una per ognuna delle seguenti fasi:
  *  Ingredienti: dove l'utente aggiunge gli ingredienti necessari scegliendo tra quelli presenti nel sistema oppure manualmente.
  *  Caratteristiche: dove l'utente inserisce le seguenti informazioni:
      * Strumenti utilizzati: dove scegli tra strumenti presenti nel sistema
      * Difficoltà
      * Costo
      * Tempo
      * Categoria
      * Tags
     Tutti questi, volti a rendere la ricetta individuabile dai filti precedentemente descritti
  * Preparazione: dove l'utente inserisce i passaggi, sia con materiale testuale che foto, necessari per cucinare la ricetta
  * Copertina: dove vengono inseriti i ritocchi finali, la foto di copertina e il nome della ricetta
## Ricetta
**Modalità di navigazione**

Questa schermata può essere raggiunta cliccando sul tasto Scopri sotto una card di una ricetta

**Obiettivo**

Mostrare all'utente i dettagli di preparazione della ricetta visualizzata.
In particolare, visualizzare:
  * Il tempo di preparazione, la difficoltà e il range di prezzo
  * La foto di copertina della ricetta
  * Il nome della ricetta
  * Gli ingredienti, gli strumenti, i passaggi e le recensioni

**Funzionalità**

La schermata è formata da 4 pagine:
  * Ingrediendi: che permette di visualizzare gli ingredienti utilizzati nella ricetta e la quantità necessaria.
  * Strumenti: che permette di visualizzare gli strumenti utilizzati e il passaggio dove vengono citati.
  * Passaggi: la descrizione dettagliata dei passaggi necessari per cucinare la ricetta, corredati da foto fatte dall'utente.
  * Recensioni: dove vengono elencate tutte le recensioni fatte al piatto e la possibilità di scrivere la propria.
