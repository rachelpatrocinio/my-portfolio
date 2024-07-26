<template>
<section class="progetti py-5">
    <div class="container">
        <h1 class="mb-3 mb-md-5">I miei progetti in Boolean</h1>
        <div class="row m-1 m-md-0">
            <div class="col-12 col-md-4" v-for="progetto in store.progettiHome" :key="progetto.id">
                <AppCard :progetto="progetto"></AppCard>
            </div>
            <div class="col-12 text-white">
                <RouterLink @click="store.windowScroll()" to="/progetti" class="router more">. . . vedi altri</RouterLink>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import AppCard from '../components/AppCard.vue'
import { store } from "../store.js";

    export default {
        components:{
            AppCard
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

@media screen and (max-width: 789px){
    .progetti{
        h1{
            text-align: center;
        }
    }
}

</style>