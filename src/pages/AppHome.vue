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
        <AppProg></AppProg>
    </div>
    <div class="main-bg py-5">
        <AppForm></AppForm>
        <AppEsp></AppEsp>
    </div>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppCompetenze from '../components/AppCompetenze.vue'
import AppProg from '../components/AppProg.vue'
import AppForm from '../components/AppForm.vue'
import AppEsp from '../components/AppEsp.vue'


import { store } from "../store.js";

export default {
    components: {
        AppHero,
        AppCompetenze,
        AppProg,
        AppForm,
        AppEsp
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