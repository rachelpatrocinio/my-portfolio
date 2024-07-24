<template>
<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-4 text-center">
                <img class="rachel" src="../images/rachel.jpg" alt="Foto Rachel">
            </div>
            <div class="col-8 p-5 text-center">
                <img class="name" src="../images/name.png" alt="">
                <h1 class="mt-4">FULL STACK WEB DEVELOPER</h1>
                <button class="btn btn-main p-2 mt-4 grow">
                    <RouterLink class="router text-decoration-none" to="/contatti">CONTATTAMI !</RouterLink>
                </button>
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
    margin-top: 100px;
}

.btn-main{
    width: 30%;
}
</style>