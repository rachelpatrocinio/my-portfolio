<template>
 <div class="card p-4 mb-4" @click="modalProgetto = true">
    <h3 class="text-center">{{progetto.nome}}</h3>
    <img class="card-img" :src="'dist/progetti'+progetto.foto" alt="Anteprima">
    <ul class="d-flex flex-wrap justify-content-center gap-2 p-0 mt-3">
        <li v-for="tecnica in progetto.tecnologie">
            <p class="p-2 m-0 badge" :class="tecnica">{{ tecnica }}</p>
        </li>
    </ul>
    <div class="repository">
        <a target="_blank" v-for="github in progetto.github" :href="github.link">Github Repository {{ github.tech }}</a>
    </div>
</div>
<div v-if="modalProgetto === true" class="modal-progetto">
    <div class="container position-relative">
        <div class="row p-5 rounded">
            <h2>{{progetto.nome}}</h2>
            <img :src="progetto.foto" alt="Anteprima">
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
        }
    }
</script>

<style lang="scss" scoped>
.card{
    box-shadow: 0 8px 8px -4px var(--main-dark-color);
    cursor: pointer;
    
    &:hover{
        transform: scale(1.01);
        transition: all 0.6s;
    }

    .card-img{
        height: 200px;
        object-fit: cover;
    }
}

ul{
    height: 70px;

    li{
        margin: 0;
        color: white;
        font-weight: 400;
        font-size: 14px;
    }
}

.repository{
    height: 50px;

    a{
        text-align: center;
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

            img{
                height: 500px;
                object-fit: contain;
            }
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


</style>