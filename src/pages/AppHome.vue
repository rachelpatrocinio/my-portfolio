<template>
    <AppHero></AppHero>
    <div class="dark-bg py-5">
        <section class="me">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-4 text-center">
                        <button class="btn btn-main p-2 mt-4 grow">
                            <RouterLink class="router text-decoration-none" to="/contatti">📞 CONTATTAMI 📩</RouterLink>
                        </button>
                    </div>
                    <div class="col-8 main-dark-bg rounded p-5">
                        <p class="m-0">
                            👋 Ciao! Benvenut* nel mio Sito Portfolio! Sono Rachel ! Ho 26 anni e sono di 📍 Roma! <br><br>
                            🙋‍♀️ Attualmente sono alla ricerca di un lavoro che mi sappia stimolare e mi aiuti ad arricchire il mio bagaglio da Full Stack Web Developer! <br><br>
                            📈 Sono, quindi, disponibile a tutto! Mi metto in gioco e ho sempre voglia di imparare nuove skills! <br><br>
                            🔆 Se siete interessati ad avere in azienda una persona solare, dinamica, precisa e determinata, sono la persona adatta a voi! 🤗 <br><br>
                            Non esitate a contattarmi! Che non vedo l'ora di iniziare il mio percorso lavorativo come Web Developer! 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="competenze pb-5 mb-5">
            <div class="container">
                <h1 class="mb-5">Competenze</h1>
                <div class="row align-items-center py-2">
                    <div class="col"><img src="../images/competenze/html-5.png" alt="HTML"></div>
                    <div class="col"><img src="../images/competenze/css-3.png" alt="CSS"></div>
                    <div class="col"><img src="../images/competenze/js.png" alt="JS"></div>
                    <div class="col"><img src="../images/competenze/vue.png" alt="VUE"></div>
                    <div class="col"><img src="../images/competenze/mysql.png" alt="MYSQL"></div>
                    <div class="col"><img src="../images/competenze/php.png" alt="PHP"></div>
                    <div class="col"><img src="../images/competenze/laravel.png" alt="LARAVEL"></div>
                </div>
            </div>
        </section>
        <section class="progetti">
            <div class="container">
                <h1 class="mb-5">I miei progetti</h1>
                <div class="row">
                    <div class="col-4" v-for="progetto in store.progetti" :key="progetto.id">
                        <AppCard :progetto="progetto"></AppCard>
                    </div>
                    <div class="col-12 text-white">
                        <p class="more">. . .</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="main-bg py-5">
        <section class="formazione py-5">
            <div class="container">
                <h1 class="mb-3">Formazione</h1>
                <div class="row mb-5 justify-content-center">
                    <div class="col-8">
                        <h2>BOOLEAN</h2>
                        <h4>Master Full Stack Web Development </h4>
                        <h6>Gennaio 2024 - Luglio 2024</h6>
                        <p>Percorso intensivo di 700 ore durante le quali ho partecipato a lezioni teoriche e pratiche apprendendo le basi della programmazione frontend e backend con l’utilizzo dei principali strumenti di sviluppo.</p>
                        <a href="https://boolean.careers/" target="_blank">Sito Boolean</a>
                        <div class="mt-2">
                            <button type="button" class="btn btn-primary" @click="toggleBooleanCert">
                                🗂 Certificato 
                            </button>
                            <div class="certificato" v-if="booleanCert === true">
                                <div class="certificato-img rounded p-5">
                                    <img src="../images/certificati/boolean.jpeg" alt="">
                                    <font-awesome-icon :icon="['far', 'circle-xmark']" class="close" @click="closeCert" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-end">
                        <img class="logo" src="../images/boolean.png" alt="">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-8">
                        <h2>LABFORTRAINING - LABFORWEB</h2>
                        <h4>Front End Development </h4>
                        <h6>Aprile 2021 - Luglio 2021</h6>
                        <p>Corso specializzato in HTML, CSS, GRAFICA WEB e UI/UX DESIGN, JAVASCRIPT, JQUERY, BOOTSTRAP, AJAX, RESPONSIVE WEB DESIGN e SASS di 190 ore totali.</p>
                        <a href="https://www.labfortraining.it/" target="_blank">Sito Labfortaining</a>
                        <div class="mt-2">
                            <button type="button" class="btn btn-primary" @click="toggleLabCert">
                                🗂 Certificato 
                            </button>
                            <div class="certificato" v-if="labCert === true">
                                <div class="certificato-img rounded p-5">
                                    <img src="../images/certificati/lab.jpg" alt="">
                                    <font-awesome-icon :icon="['far', 'circle-xmark']" class="close" @click="closeCert" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-end">
                        <img class="logo" src="../images/labforweb.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppCard from '../components/AppCard.vue'
import { store } from "../store.js";



export default {
    components: {
        AppHero,
        AppCard
    },
    data(){
        return{
            store,
            booleanCert: false,
            labCert: false
        }
    },
    methods:{
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/layout';

.me{

    .col-4{
        position: relative;
        bottom: 50px;
    }

    .col-8{
        position: relative;
        bottom: 180px;
        font-weight: 800;
    }

    .btn-main{
        width: 80%;
        transition: all 0.9s;
        background-color: var(--main-color);
        color: var(--dark-color);
        font-weight: 500;

        &:hover{
            background-color: var(--main-dark-color);
        }
    }
}

.competenze{
    h1{
        color: var(--main-color);
    }
}

.progetti{
    h1{
        color: var(--main-color);
    }

    .more{
        font-size: 20px;
        cursor: pointer;

        &:hover{
            color: var(--main-dark-color);
        }
    }
}

.formazione{

    .container{
        width: 70%;
    }

    h2{
        color: var(--main-dark-color);
    }

    .logo{
        width: 200px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
}

.dark-bg{
    color: white;

    .col{
        img{
            &:hover{
                transform: scale(1.1);
                transition: all 0.8s;
            }       
        }     
    }
}

img.logo{
    border-radius: 100%;
    box-shadow: 0 8px 8px -4px var(--dark-color);
}

.certificato{
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.734);

  .certificato-img {
    width: 40%;
    background-color: white;
    position: relative;

    img{
        height: 600px;
    }
  }
}

.close{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    color: var(--dark-color);
}
</style>