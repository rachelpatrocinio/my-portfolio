<template>
<section class="hero pt-5 pt-lg-2">
    <div class="container pt-2">
        <div class="row">
            <div class="col-12 col-md-4 text-center">
                <img class="rachel" src="../../public/rachel.jpg" alt="Foto Rachel">
            </div>
            <div class="col-12 col-md-8 px-4 p-lg-5 text-center">
                <img class="name mt-4" src="../../public/name.png" alt="">
                <h1 class="mb-0 mt-4">JR FULL STACK WEB DEVELOPER</h1>
            </div>
        </div>
    </div>  
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/utilities';
@import '../assets/style/partials/layout';

h1{
    color: var(--main-dark-color);
}

.hero{
    .row{
        flex-direction: column-reverse;
    }
}

@media screen and (min-width: 768px){
    .hero{
        margin-top: 50px;

        .row{
            flex-direction: row;
        }
    }

    img.name{
        margin-top: 15px;
    }
}

@media screen and (min-width: 1189px){
    .row{
        .col-md-8{
            position: relative;
            top: 100px;
        }
   }
}
</style>