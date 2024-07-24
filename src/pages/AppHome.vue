<template>
    <AppHero></AppHero>
    <div class="dark-bg py-5">
        <section class="competenze py-5">
            <div class="container">
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
                <h1 class="mb-3">I miei progetti</h1>
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
                        <a href="https://boolean.careers/">Sito Boolean</a>
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
                        <a href="https://boolean.careers/">Sito Labfortaining</a>
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
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/layout';

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

</style>