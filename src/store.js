import { reactive } from 'vue'

export const store = reactive({
  cartItems: 0,
  booleanCert: false,
  labCert: false,
  windowScroll(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },
  toggleBooleanCert(){
    if(this.booleanCert === false){
        this.booleanCert = true
    }else{
        this.booleanCert = false
    }
  },
  toggleLabCert(){
      if(this.labCert === false){
          this.labCert = true
      }else{
          this.labCert = false
      }
  },
  closeCert(){
      this.booleanCert = false
      this.labCert = false
  },
  progetti: [
    {
      nome: 'Portfolio',
      descrizione: 'Sito Portfolio personale. Qui sono presenti varie sezioni dove parlo di me, presento i miei progetti e il mio percorso formativo e lavorativo.',
      foto: 'portfolio.jpg',
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/my-portfolio', 
        }
      ]
    },
    {
      nome: 'Deliveboo',
      descrizione: 'Progetto di fine corso parte Front End. Una web-app di food delivery pensata per ordinare i propri piatti preferiti comodamente da casa propria. Gli utenti possono cercare il ristorante, ordinare, vedere il riepilogo nel proprio carrello e infine pagare.',
      foto: 'deliveboo.jpg',
      imgProgetto: [
        'deliveboo.png',
        'deliveboo1.png',
        'deliveboo2.png',
        'deliveboo3.png',
      ], 
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/deliveboo', 
        }
      ]
    },
    {
      nome: 'Deliveboo-Api',
      descrizione: 'Progetto di fine corso parte Back End. Una web-app amministrativa pensata per i ristoratori partner del sito Deliveboo. Qui gli utenti possono gestire il proprio ristorante: tra cui gli ordini e il menu. ',
      foto: 'deliveboo-api.jpg',
      imgProgetto: [
        'deliveboo-api.png',
        'deliveboo-api1.png'
      ], 
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'MYSQL', 'LARAVEL'],
      github: [
        {
          link: 'https://github.com/corgab/deliveboo-api'
        }
      ]
    },
    {
      nome: 'Game Creator',
      descrizione: "Primo progetto di squadra. L'applicazione, sviluppata con Laravel, permette di creare nuovi personaggi, modificare i loro dettagli, visualizzare tutte le armi disponibili e i vari tipi di personaggi",
      foto: 'game.jpg',
      imgProgetto: [
        'game.png',
        'game1.png'
      ], 
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'MYSQL', 'LARAVEL'],
      github: [
        {
          link:'https://github.com/rachelpatrocinio/game-creator'
        }
      ]
    },
    {
      nome: 'Dc Comics',
      descrizione: "Il progetto è stato pensato per gestire una collezione di fumetti. Ispirato alla DC Comics.",
      foto: 'dc.jpg',
      imgProgetto: [
        'dc.png'
      ], 
      tecnologie: ['HTML', 'SCSS','BOOTSTRAP','PHP', 'LARAVEL'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/laravel-comics'
        }
      ]
    },
    {
      nome: 'php-dischi-json',
      descrizione: 'Una web-app ispirata a Spotify che consente di visualizzare una lista di dischi presenti sul server.',
      foto: 'boolify.jpg',
      imgProgetto: [
        'boolify.png'
      ], 
      tecnologie: ['HTML', 'SCSS','BOOTSTRAP','PHP'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/php-dischi-json'
        }
      ]
    },
    {
      nome: 'iAcademy',
      descrizione: 'Il progetto è stato realizzato a metà del percorso di studi in Boolean. Questo lavoro consiste nella riproduzione del sito iAcademy, utilizzando tutti gli strumenti appresi durante la prima parte del corso di front-end con Boolean.',
      foto: 'iacademy.jpg',
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/proj-html-vuejs'
        }
      ]
    },
    {
      nome: 'Boolflix',
      descrizione: 'Il progetto trae ispirazione dal celebre sito Netflix. Attraverso la barra di ricerca, è possibile trovare il film o la serie TV desiderata e visualizzare una descrizione, la lingua originale, la valutazione e il cast di ciascun titolo.',
      foto: 'boolflix.jpg',
      imgProgetto: [
        'boolflix.png'
      ], 
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/vite-boolflix'
        }
      ]
    },
    {
      nome: 'Boolzapp',
      descrizione: "Il progetto è la replica della famosa app di messaggistica WhatsApp, con un design completamente responsive. L'app permette di navigare tra le chat, cercare conversazioni specifiche tramite una barra di ricerca dedicata, e include anche una funzionalità di risposta automatica ai messaggi.",
      foto: 'Boolzapp.jpg',
      imgMobile: 'boolzapp-mobile.png',
      imgTablet: 'boolzapp-tablet.png',
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/vue-boolzapp'
        }
      ]
    },
    {
      nome: 'Boolando',
      descrizione: "Progetto che consiste nella replica del sito Zalando. I prodotti mostrati sulla pagina sono ottenuti tramite l'uso della libreria Axios.",
      foto: 'boolando.jpg',
      imgProgetto:[
        'boolando.png'
      ],
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/vite-boolando'
        }
      ]
    },
    {
      nome: 'js-campominato',
      descrizione: "Il progetto è un'applicazione web basata sul classico gioco Campo Minato, in cui il giocatore deve evitare le mine e rivelare tutte le celle sicure della griglia.",
      foto: 'campominato.jpg',
      imgProgetto: [
        'campominato.png'
      ], 
      tecnologie: ['HTML', 'CSS', 'JS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/js-campominato-dom'
        }
      ]
    },
    {
      nome: 'js-fizzbuzz',
      descrizione: "Il progetto prevede l'implementazione dell'algoritmo FizzBuzz in JavaScript, con successiva visualizzazione dei risultati in una griglia HTML.",
      foto: 'fizzbuzz.jpg',
      imgProgetto: [
        'fizzbuzz.png'
      ], 
      tecnologie: ['HTML', 'CSS', 'JS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/js-fizzbuzz'
        }
      ]
    },
    {
      nome: 'js-biglietto-treno',
      descrizione: 'Il progetto prevede lo sviluppo di un modulo per la prenotazione dei biglietti del treno.',
      foto: 'train-ticket.jpg',
      tecnologie: ['HTML', 'CSS', 'JS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/js-biglietto-treno-form'
        }
      ]
    },
    {
      nome: 'htmlcss-resp-layout',
      descrizione: "Il progetto prevede lo sviluppo di un sito web responsive, realizzato con HTML e CSS, e l'uso di media query personalizzate per assicurare un'esperienza utente ottimale su una varietà di dispositivi, inclusi desktop, tablet e smartphone.",
      foto: 'html-responsive-layout.jpg',
      imgProgetto: [
        'html-responsive-layout.png',
      ], 
      imgMobile:'html-resp-layout-mobile.png',
      imgTablet: 'html-resp-layout-tablet.png',
      tecnologie: ['HTML', 'CSS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/htmlcss-responsive-layout'
        }
      ]
    },
    {
      nome: 'htmlcss-dropbox',
      descrizione: 'Il progetto consiste nella creazione di una replica della landing page di Dropbox Business, includendo tutte le sue funzionalità principali e il design intuitivo',
      foto: 'dropbox.jpg',
      imgProgetto: [
        'dropbox-mobile.png',
      ], 
      tecnologie: ['HTML', 'CSS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/htmlcss-dropbox'
        }
      ]
    },
    {
      nome: 'htmlcss-discord',
      descrizione: 'Replica del sito Discord. Progetto realizzato durante il corso in Boolean, dove ho iniziato a lavorare sul layout.',
      foto: 'discord.jpg',
      imgProgetto: [
        'discord-mobile.png',
      ], 
      tecnologie: ['HTML', 'CSS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/htmlcss-discord'
        }
      ]
    },
    {
      nome: 'CodingChallenge-Lim',
      descrizione: 'Replica del sito Lime. Questo è il primo progetto realizzato prima di iniziare il percorso in Boolean (progetto richiesto da Boolean per la selezione).',
      foto: 'coding-challenge.jpg',
      tecnologie: ['HTML', 'CSS'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/CodingChallenge-Lim'
        }
      ]
    }
  ],
  progettiHome: []
})