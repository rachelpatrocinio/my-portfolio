<template>
    <AppForm class="mt-5"></AppForm>
</template>

<script>
import { store } from "../store.js";
import AppForm from '../components/AppForm.vue'


export default {
    components:{
        AppForm
    },
    data(){
        return{
            store
        }
    }
    
}
</script>

<style lang="scss" scoped>
</style>