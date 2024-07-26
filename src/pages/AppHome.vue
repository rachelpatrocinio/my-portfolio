<template>
    <AppHero></AppHero>
    <div class="dark-bg py-5">
        <section class="me">
            <div class="container">
                <div class="row contatti justify-content-end align-items-center">
                    <div class="col-12 col-md-4 text-center">
                        <button class="btn btn-main p-2 mt-2 mt-md-0 grow">
                            <RouterLink class="router text-decoration-none" to="/contatti">📞 CONTATTAMI 📩</RouterLink>
                        </button>
                        <div class="socials mt-3">
                            <a class="d-flex justify-content-center align-items-center gap-2 social" target="_blank" href="https://www.linkedin.com/in/rachel-anne-patrocinio-80811b315/">
                            <img src="../images/linkedin.png" alt="">
                            <p class="p-0 m-0">Linked in</p>
                            </a>
                            <a class="d-flex justify-content-center align-items-center gap-2 social" target="_blank" href="https://github.com/rachelpatrocinio">
                            <img src="../images/github-sign.png" alt="">
                            <p class="p-0 m-0">Github</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-10 col-md-8 main-dark-bg rounded p-3 p-md-5">
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
        <AppCompetenze></AppCompetenze>
        <AppProgetti></AppProgetti>
    </div>
    <div class="main-bg py-5">
        <section class="formazione py-5 main-bg">
            <div class="container">
                <h1 class="mb-md-3">Formazione</h1>
                <div class="row mb-5 justify-content-center">
                    <div class="col-12 col-md-8">
                        <h2>BOOLEAN</h2>
                        <h4>Master Full Stack Web Development </h4>
                        <h6>Gennaio 2024 - Luglio 2024</h6>
                        <p>Percorso intensivo di 700 ore durante le quali ho partecipato a lezioni teoriche e pratiche apprendendo le basi della programmazione frontend e backend con l’utilizzo dei principali strumenti di sviluppo.</p>
                        <a href="https://boolean.careers/" target="_blank">Sito Boolean</a>
                        <div class="mt-2">
                            <button type="button" class="btn btn-primary" @click="store.toggleBooleanCert()">
                                🗂 Certificato 
                            </button>
                            <div class="certificato" v-if="store.booleanCert === true">
                                <div class="certificato-img rounded p-5">
                                    <img src="../images/certificati/boolean.jpeg" alt="">
                                    <font-awesome-icon :icon="['far', 'circle-xmark']" class="close" @click="store.closeCert()" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-center text-md-end my-5 m-md-0">
                        <img class="logo" src="../images/boolean.png" alt="">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">
                        <h2>LABFORTRAINING - LABFORWEB</h2>
                        <h4>Front End Development </h4>
                        <h6>Aprile 2021 - Luglio 2021</h6>
                        <p>Corso specializzato in HTML, CSS, GRAFICA WEB e UI/UX DESIGN, JAVASCRIPT, JQUERY, BOOTSTRAP, AJAX, RESPONSIVE WEB DESIGN e SASS di 190 ore totali.</p>
                        <a href="https://www.labfortraining.it/" target="_blank">Sito Labfortaining</a>
                        <div class="mt-2">
                            <button type="button" class="btn btn-primary" @click="store.toggleLabCert()">
                                🗂 Certificato 
                            </button>
                            <div class="certificato" v-if="store.labCert === true">
                                <div class="certificato-img rounded p-5">
                                    <img src="../images/certificati/lab.jpg" alt="">
                                    <font-awesome-icon :icon="['far', 'circle-xmark']" class="close" @click="store.closeCert()" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-4 text-center text-md-end my-5 m-md-0">
                        <img class="logo" src="../images/labforweb.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="main-bg py-5">
        <section class="esperienze">
            <div class="container p-5 rounded">
                <div class="row">
                    <h1 class="mb-4">Esperienze</h1>
                    <div class="col-12 mb-4">
                        <h2>BOOLEAN</h2>
                        <h5>JR FULL-STACK WEB DEVELOPER TRAINEE</h5>
                        <h6>Gennaio | Luglio 2024</h6>
                        <p>Il corso intensivo di Full Stack Web Developer mi ha permesso di acquisire competenze approfondite sia nello sviluppo front end che back end. Ho partecipato a lezioni teoriche, esercitazioni pratiche e progetti reali che mi hanno preparato a sviluppare applicazioni web complete e performanti.</p>

                        <div>
                            <p><strong>Front End Development:</strong></p>
                            <ul>
                                <li><span>HTML5 & CSS3</span>: Creazione di layout responsivi e ottimizzati per vari dispositivi, utilizzo di framework come Bootstrap per velocizzare lo sviluppo.</li>
                                <li><span>JavaScript</span>: Sviluppo di funzionalità interattive, gestione del DOM e manipolazione di eventi.</li>
                                <li><span>Librerie e Frameworks</span>: Utilizzo di Vue.js per la creazione di interfacce utente dinamiche e modulari.</li>
                                <li><span>Responsive Design</span>: Tecniche per garantire una user experience ottimale su dispositivi mobili e desktop.</li>
                            </ul>
                        </div>

                        <div>
                            <p><strong>Back End Development:</strong></p>
                            <ul>
                                <li><span>PHP</span>: Sviluppo di applicazioni web dinamiche utilizzando PHP.</li>
                                <li><span>Laravel</span>: Utilizzo del framework Laravel per lo sviluppo rapido di applicazioni, gestione di routing, middleware e servizi RESTful.</li>
                                <li><span>Database</span>: Progettazione e gestione di database relazionali con MySQL, utilizzo di Eloquent ORM per l'interazione con il database.</li>
                                <li><span>API Development</span>: Creazione e gestione di API RESTful per la comunicazione tra front end e back end.</li>
                                <li><span>Autenticazione e Sicurezza</span>: Implementazione di sistemi di autenticazione e autorizzazione, protezione delle applicazioni contro vulnerabilità comuni.</li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-12">
                        <h2>CARPISA - DESIGUAL - ALCOTT</h2>
                        <h5>COMMESSA</h5>
                        <h6>2016 | 2022</h6>
                        <p>
                            Grazie a questo lavoro ho maturato competenze nel <strong>lavoro in team</strong>,
                            raggiungendo gli obiettivi prefissati e assegnatoci rispettandone le
                            scadenze. Inoltre, ho sviluppato una capacità comunicativa
                            efficace, dove sono stata in grado di comunicare in modo chiaro,
                            preciso e veloce, rispondendo e soddisfacendo specifiche richieste
                            della clientela.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppCompetenze from '../components/AppCompetenze.vue'
import AppProgetti from '../components/AppProgetti.vue'

import { store } from "../store.js";



export default {
    components: {
        AppHero,
        AppCard,
        AppCompetenze,
        AppProgetti
    },
    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/layout';

.me{

    .col-md-4{
        position: relative;
        bottom: 190px;
    }

    .col-md-8{
        position: relative;
        bottom: 180px;
        font-weight: 800;
    }

    .btn-main{
        width: 90%;
        transition: all 0.9s;
        background-color: var(--main-dark-color);
        color: var(--dark-color);
        font-weight: 500;

        &:hover{
            background-color: var(--main-color);
        }
    }
}

.socials{

    a.social{
        text-decoration: none;
        color: var(--main-dark-color);
        margin-bottom: 10px;
        font-size: 18px;

        &:hover{
            color: var(--main-color);
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
        border-radius: 100%;
        box-shadow: 0 8px 8px -4px var(--dark-color);
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
    cursor: pointer;
}


.esperienze{

    .container{
        width: 80%;
        background-color: #ae999a7e;

        .row{
            h2{
                color: var(--main-color);
            }

            ul{
                list-style:circle;
                
                span{
                    font-weight: 500;
                }
            }
        }
    }
}

@media screen and (max-width: 789px){

    .row.contatti{
        flex-direction: column-reverse;
    }

    .me{

        .col-md-4{
            bottom: 70px;
        }

        .col-md-8{
            bottom: 80px;
        }

        .btn-main{
            width: 90%;
        }
    }

    .competenze{
        h1{
            text-align: center;
        }

        .row{
            justify-content: center;

        }
    }


    .progetti{
        h1{
            text-align: center;
        }
    }

    .formazione{

        h1{
            text-align: center;
        }

        .row{
            flex-direction: column-reverse;
        }
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
            width: 90%;
            background-color: white;
            position: relative;

            img{
                height: 400px;
            }
        }
    }
}
</style>