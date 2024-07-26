import { reactive } from 'vue'

export const store = reactive({
  cartItems: 0,
  booleanCert: false,
  labCert: false,
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
      nome: 'Deliveboo',
      descrizione: '...',
      foto: 'Deliveboo-1.jpg',
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
      foto: 'Game-creator.jpg',
      tecnologie: ['HTML', 'SCSS', 'BOOTSTRAP', 'MYSQL', 'PHP', 'LARAVEL'],
      github: [
        {
          link:'https://github.com/rachelpatrocinio/game-creator'
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
   
  ]
})