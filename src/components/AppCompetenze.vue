<template>
<section class="competenze pb-md-5 mb-5">
    <div class="container">
        <h1 class="mb-2 mb-md-5">Competenze</h1>
        <div class="row justify-content-center align-items-center pb-5">
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/html-5.png" alt="HTML"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/css-3.png" alt="CSS"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/sass.png" alt="SCSS"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/bootstrap.png" alt="BOOTSTRAP"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/js.png" alt="JS"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/vue.png" alt="VUE"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/vite.png" alt="VITE"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/mysql.png" alt="MYSQL"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/php.png" alt="PHP"></div>
            <div class="col-2 col-md mb-3 m-md-0"><img src="../images/competenze/laravel.png" alt="LARAVEL"></div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.competenze{
    h1{
        color: var(--main-color);
    }

    .row{
        .col-2{
            text-align: center;
            width: calc(100% / 5)

            img{
                width: 100%;
                margin-bottom: 30px;
            }
        }
    }
}

</style>