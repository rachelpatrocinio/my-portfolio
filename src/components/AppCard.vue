<template>
 <div class="card p-4 mb-4">
    <h3 class="text-center">{{progetto.nome}}</h3>
    <img :src="imgPath + progetto.foto" alt="Anteprima">
    <ul class="d-flex flex-wrap justify-content-center  gap-2 p-0 mt-3">
        <li v-for="tecnica in progetto.tecnologie">
            <p class="p-2 m-0 rounded" :class="tecnica">{{ tecnica }}</p>
        </li>
    </ul>
    <div class="repository">
        <a target="_blank" v-for="github in progetto.github" :href="github.link">Github Repository {{ github.tech }}</a>
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
                imgPath: 'src/images/progetti/'
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    height: 200px;
    object-fit: cover;
}

.card{
    box-shadow: 0 8px 8px -4px var(--main-dark-color);
    
    &:hover{
        transform: scale(1.01);
        transition: all 0.6s;
    }
}

ul{
    height: 100px;

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



</style>