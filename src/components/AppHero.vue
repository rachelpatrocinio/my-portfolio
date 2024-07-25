<template>
<section class="hero pt-5">
    <div class="container pt-4">
        <div class="row">
            <div class="col-12 col-md-4 text-center">
                <img class="rachel" src="../images/rachel.jpg" alt="Foto Rachel">
            </div>
            <div class="col-12 col-md-8 px-4 p-md-5 text-center">
                <img class="name" src="../images/name.png" alt="">
                <h1 class="mb-0 mt-4">FULL STACK WEB DEVELOPER</h1>
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

img.name{
    margin-top: 90px;
}

@media screen and (max-width: 689px){
    .hero{
        .row{
            flex-direction: column-reverse;
        }
    }
   
    img.name{
        margin-top: 20px;
    }
}
</style>