<template>
    <div class="up-button grow d-flex justify-content-center align-items-center" id="up-button" @click="goUp">
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="fs-1" />
    </div>
</template>

<script>
export default {
    methods:{
        goUp(){
            window.scrollTo(0,0);
        }
    }
}
</script>


<style lang="scss" scoped>
.up-button{
    background-color: var(--main-dark-color);
    width: 70px;
    height: 70px;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    cursor: pointer;
    z-index: 99;
    border-radius: 15px;
}

.grow{
    animation-name: grow;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
}

@media screen and (max-width: 389px){
    .up-button{
        width: 50px;
        height: 50px;
        padding: 20px;

        .fs-1{
            font-size: 20px;
        }
    }
}

@keyframes grow{
    0%{
        transform: scale(0.8);
        transition: all .1s ease-in-out;

    }

    50%{
        transform: scale(0.9);
        transition: all .1s ease-in-out;

    }

    100%{
        transform: scale(0.8);
        transition: all .1s ease-in-out;

    }
}

</style>