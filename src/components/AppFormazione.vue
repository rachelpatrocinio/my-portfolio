<template>
<section class="formazione main-bg">
    <div class="container py-5">
        <div class="row py-3 justify-content-center">
            <h1 class="mb-2 mb-md-5">Formazione</h1>
            <div class="col-12 d-flex flex-wrap">
                <div class="col-12 col-md-8">
                    <h2>BOOLEAN</h2>
                    <h4>Master Full Stack Web Development </h4>
                    <h6>Gennaio 2024 - Luglio 2024</h6>
                    <p>Percorso intensivo di 700 ore durante le quali ho partecipato a lezioni teoriche e pratiche apprendendo le basi della programmazione frontend e backend con l’utilizzo dei principali strumenti di sviluppo.</p>
                    <a href="https://boolean.careers/" target="_blank">Sito Boolean</a>
                    <div class="mt-2">
                        <button type="button" class="btn btn-primary mb-5" @click="store.toggleBooleanCert()">
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

            <div class="col-12 d-flex flex-wrap">
                <div class="col-12 col-md-8">
                    <h2>LABFORTRAINING - LABFORWEB</h2>
                    <h4>Front End Development </h4>
                    <h6>Aprile 2021 - Luglio 2021</h6>
                    <p>Corso specializzato in HTML, CSS, GRAFICA WEB e UI/UX DESIGN, JAVASCRIPT, JQUERY, BOOTSTRAP, AJAX, RESPONSIVE WEB DESIGN e SASS di 190 ore totali.</p>
                    <a href="https://www.labfortraining.it/" target="_blank">Sito Labfortaining</a>
                    <div class="mt-2">
                        <button type="button" class="btn btn-primary mb-5" @click="store.toggleLabCert()">
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
                <div class="col-12 col-md-4 text-center text-md-end my-5 m-md-0">
                    <img class="logo" src="../images/labforweb.png" alt="">
                </div>
            </div>

            <div class="col-12 d-flex flex-wrap">
                <div class="col-12 col-md-8">
                    <h2>IPSSEOA AMERIGO VESPUCCI</h2>
                    <h4>Diploma di maturità di Operatore dei Servizi di Ricevimento -  "Accoglienza Turistica"</h4>
                    <h6>2011 - 2016</h6>
                    <p>MATERIE PRINCIPALI: Accoglienza Turistica, Tecniche delle comunicazioni, Amministrazione economica del Turismo</p>
                </div>
                <div class="col-12 col-md-4 text-center text-md-end my-5 m-md-0">
                    <img class="logo" src="../images/amerigo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { store } from "../store.js";

export default {
    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.formazione{

    .container{
        width: 80%;

        .row{

            h2{
                color: var(--main-dark-color);
            }

            .logo{
                width: 60%;
                aspect-ratio: 1/1;
                object-fit: cover;
                border-radius: 100%;
                box-shadow: 0 8px 8px -4px var(--dark-color);
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

@media screen and (max-width: 789px){

    .row{

        h1{
            text-align: center;
        }
        .col-12{
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