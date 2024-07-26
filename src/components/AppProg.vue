<template>
<section class="progetti">
    <div class="container">
        <h1 class="mb-3 mb-md-5">I miei progetti</h1>
        <div class="row m-1 m-md-0">
            <div class="col-12 col-md-4" v-for="progetto in store.progetti" :key="progetto.id">
                <AppCard :progetto="progetto"></AppCard>
            </div>
            <div class="col-12 text-white">
                <p class="more">. . .</p>
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

</style>