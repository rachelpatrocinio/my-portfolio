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
                <h2 class="mb-3">I miei progetti</h2>
                <div class="row">
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                    <div class="col-4">
                        <AppCard></AppCard>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppCard from '../components/AppCard.vue'


export default {
    components: {
        AppHero,
        AppCard
    }
}
</script>

<style lang="scss" scoped>

.progetti{
    h2{
        color: var(--main-color);
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