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
      descrizione: '...',
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
      descrizione: '...',
      foto: 'deliveboo.jpg',
      imgProgetto: [
        'deliveboo1.png',        
        'deliveboo2.png',
        'deliveboo3.png',
        'deliveboo4.png'
      ], 
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'JS', 'VUE', 'MYSQL','LARAVEL'],
      github: [
        {
          tech: 'FrontEnd',
          link: 'https://github.com/rachelpatrocinio/deliveboo', 
        },
        {
          tech: 'BackEnd',
          link: 'https://github.com/corgab/deliveboo-api'
        }
      ]
    },
    {
      nome: 'Game Creator',
      descrizione: '...',
      foto: 'game.jpg',
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'MYSQL', 'PHP', 'LARAVEL'],
      github: [
        {
          link:'https://github.com/rachelpatrocinio/game-creator'
        }
      ]
    },
    {
      nome: 'Dc Comics',
      descrizione: '...',
      foto: 'dc.jpg',
      tecnologie: ['HTML', 'SCSS','BOOTSTRAP','PHP', 'LARAVEL'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/laravel-comics'
        }
      ]
    },
    {
      nome: 'iAcademy',
      descrizione: '...',
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
      descrizione: '...',
      foto: 'boolflix.jpg',
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/vite-boolflix'
        }
      ]
    },
    {
      nome: 'Boolzapp',
      descrizione: '...',
      foto: 'Boolzapp.jpg',
      tecnologie: ['HTML', 'CSS','BOOTSTRAP', 'JS', 'VUE'],
      github: [
        {
          link: 'https://github.com/rachelpatrocinio/vue-boolzapp'
        }
      ]
    },
  ],
  progettiHome: []
})