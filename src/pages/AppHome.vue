<template>
    <AppHero></AppHero>
    <div class="dark-bg pt-5">
        <section class="me">
            <div class="container">
                <div class="row contatti justify-content-end align-items-center">
                    <div class="col-12 col-md-4 text-center">
                        <button class="btn btn-main p-2 mt-2 mt-md-0 grow">
                            <a class="contattami" href="mailto:rachelannepatrocinio@gmail.com">CONTATTAMI 📩</a>
                        </button>
                        <div class="socials mt-3">
                            <a class="d-flex justify-content-center align-items-center gap-2 social" href="mailto:rachelannepatrocinio@gmail.com">
                                <p class="p-0 m-0">📩 rachelannepatrocinio@gmail.com</p>
                            </a>
                            <a href="tel:+393271437327" class="d-flex justify-content-center align-items-center gap-2 social" target="_blank">
                                <p class="p-0 m-0">📞 +39 327 1437 327</p>
                            </a>
                            <a class="d-flex justify-content-center align-items-center gap-2 social" target="_blank" href="https://www.linkedin.com/in/rachel-anne-patrocinio-80811b315/">
                                <img src="../../public/icons/linkedin.png" alt="">
                                <p class="p-0 m-0">Linked in</p>
                            </a>
                            <a class="d-flex justify-content-center align-items-center gap-2 social" target="_blank" href="https://github.com/rachelpatrocinio">
                                <img src="../../public/icons/github.png" alt="">
                                <p class="p-0 m-0">Github</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-10 col-md-8 main-dark-bg rounded p-4">
                        <p class="m-0">
                            👋 Ciao! Benvenuti nel mio Sito Portfolio! Sono Rachel ! Ho 26 anni e sono di 📍 Roma! <br><br>
                            🙋‍♀️ Attualmente sono alla ricerca di un lavoro che mi sappia stimolare e mi aiuti ad arricchire il mio bagaglio da Full Stack Web Developer! <br><br>
                            📈 Sono, quindi, disponibile a tutto! Mi metto in gioco e ho sempre voglia di imparare nuove skills! <br><br>
                            🔆 Se siete interessati ad avere in azienda una persona solare, dinamica, precisa e determinata, sono la persona adatta a voi! 🤗 <br><br>
                            Non esitate a contattarmi! Che non vedo l'ora di mettere in pratica le mie competenze e a costruire una carriera in questo campo! 🚀
                        </p>
                        <p class="mb-0 mt-3">
                            <span class="text-dark">➡ </span>
                            <RouterLink @click="store.windowScroll()" to="/sudime" class="router text-decoration-underline">Scopri di più su di me!</RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <AppCompetenze></AppCompetenze>
        <section class="progetti">
            <div class="container pb-5">
                <div class="row pb-5">
                    <h1 class="mb-4">Alcuni progetti</h1>
                    <div class="col-12 col-md-6 col-lg-4" v-for="progetto in store.progettiHome">
                        <AppCard :progetto="progetto"></AppCard>
                    </div>
                    <div class="col-12 text-white">
                        <RouterLink @click="store.windowScroll()" to="/progetti" class="router more">. . . vedi altri</RouterLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="main-bg py-5">
        <AppFormazione></AppFormazione>
        <AppEsp></AppEsp>
    </div>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppCard from '../components/AppCard.vue'
import AppCompetenze from '../components/AppCompetenze.vue'
import AppFormazione from '../components/AppFormazione.vue'
import AppEsp from '../components/AppEsp.vue'


import { store } from "../store.js";

export default {
    components: {
        AppHero,
        AppCard,
        AppCompetenze,
        AppFormazione,
        AppEsp
    },
    data(){
        return{
            store
        }
    },
    methods:{
        sixProj(){
            store.progettiHome = store.progetti.filter((element, index) => index < 6);
        }
    },
    created(){
        this.sixProj()
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/layout';

.row.contatti{
    flex-direction: column-reverse;
}

.me{

    .col-12{
        position: relative;
        bottom: 80px;
    }

    .col-10{
        position: relative;
        bottom: 100px;
        font-weight: 800;
    }

    .btn-main{
        width: 85%;
        transition: all 0.9s;
        background-color: var(--main-dark-color);
        color: var(--dark-color);
        font-weight: 500;

        &:hover{
            background-color: var(--main-color);
        }

        .contattami{
            text-decoration: none;
            color: white;
            font-weight: 500;
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

@media screen and (min-width: 768px){
    .row.contatti{
        flex-direction: row;

        .col-md-4{
            bottom: 210px;
        }

        .socials{
            a{
                font-size: 13px;
            }
        }
    }
}

@media screen and (min-width: 998px){
    .row.contatti{

        .col-md-4{
            bottom: 160px;
        }

        .col-md-8{
            bottom: 160px;
        }

        .socials{
            a{
                font-size: 16px;
            }
        }
    }
}
</style>