<template>
    <div class="container py-5">
        <div class="row pb-5 py-md-5">
            <h1 class="my-4">I miei progetti</h1>
            <div class="col-12 col-md-6 col-lg-4" v-for="progetto in store.progetti">
                <AppCard :progetto="progetto"></AppCard>
            </div>
        </div>
    </div>
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
.container{
    width: 90%;
}

@media screen and (max-width: 789px) {
    .container{
        width: 100%;

        .row{
            h1{
                text-align: center;
            }
        }
    }
}
</style>