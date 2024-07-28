<template>
 <div class="card p-4 mb-4" @click="modalProgetto = true">
    <h3 class="text-center">{{progetto.nome}}</h3>
    <img class="card-img" :src="getImagePath(progetto.foto)" alt="Anteprima">
    <ul class="d-flex flex-wrap justify-content-center gap-2 p-0 mt-3">
        <li v-for="tecnica in progetto.tecnologie">
            <p class="p-2 m-0 badge" :class="tecnica">{{ tecnica }}</p>
        </li>
    </ul>
    <p class="mt-1 descrizione">{{ progetto.descrizione }}</p>
    <div class="repository">
        <a class="text-center" target="_blank" v-for="github in progetto.github" :href="github.link">Github Repository {{ github.tech }}</a>
    </div>
</div>
<div v-if="modalProgetto === true" class="modal-progetto">
    <div class="container position-relative">
        <div class="row p-5 rounded">
            <h2 class="mb-3">{{progetto.nome}}</h2>
            <p>{{ progetto.descrizione }}</p>
            <div class="repository">
                <a target="_blank" v-for="github in progetto.github" :href="github.link">Github Repository {{ github.tech }}</a>
            </div>
            <img :src="getImagePath(progetto.foto)" alt="Anteprima">
            <img class="my-5" v-for="img in progetto.imgProgetto" :src="getImagePath(img)" alt="Anteprima">
            <figure class="col-6" v-if="progetto.imgMobile">
                <h4>Mobile</h4>
                <img class="col-6 mb-3" :src="getImagePath(progetto.imgMobile)" alt="Anteprima">
            </figure>
            <figure class="col-6" v-if="progetto.imgTablet">
                <h4>Tablet</h4>
                <img class="col-6 mb-3" :src="getImagePath(progetto.imgTablet)" alt="Anteprima">
            </figure>
        </div>
        <font-awesome-icon :icon="['far', 'circle-xmark']" class="close position-absolute" @click="modalProgetto = false" />
    </div>
</div>
</template>

<script>
    export default {
        props:{
            progetto: Object
        },
        data() {
            return{
                modalProgetto: false
            }
        },
        methods:{
            getImagePath(imageName) {
                return `/progetti/${imageName}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
.card{
    box-shadow: 0 8px 8px -4px var(--main-dark-color);
    cursor: pointer;
    
    &:hover{
        transform: scale(1.05);
        transition: all 0.6s;
    }

    .card-img{
        height: 200px;
        object-fit: cover;
    }

    .descrizione{
        height: 130px;
        font-size: 14px;
    }
}

ul{
    li{
        margin: 0;
        color: white;
        font-weight: 400;
        font-size: 14px;
    }
}

.repository{
    height: 40px;

    a{
        color: currentColor;
        display: block;
    }   
}

.modal-progetto{
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

    .container{
        .row{
            background-color: white;
            color: var(--dark-color);
            height: 700px;
            overflow: auto;
           
        }

        .close{
            color: var(--dark-color);
            font-size: 40px;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 789px){
    .row{
        height: 200px;
    }
}


</style>