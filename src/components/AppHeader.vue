<script>

export default {
  components: {
  },
  data() {
    return {
    }
  }
}

</script>

<template>

<header class="header py-4">
  <div class="container d-flex justify-content-center">
    <nav class="col-8">
      <ul class="menu d-md-flex m-0 p-0">
        <li class="col">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="col">
          <RouterLink to="/sudime">Su di me</RouterLink>
        </li>
        <li class="col">
          <RouterLink to="/esperienze">Esperienze</RouterLink>
        </li>
        <li class="col">
          <RouterLink to="/progetti">Progetti</RouterLink>
        </li>
        <li class="col">
          <RouterLink to="/formazione">Formazione</RouterLink>
        </li>
        <li class="col">
          <RouterLink to="/contatti">Contatti</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div class="text-end me-3">
    <font-awesome-icon :icon="['fas', 'bars']" class="hamburger d-md-none"/>
  </div>  
</header>

</template>

<style lang="scss" scoped>
.header{
  position: fixed;
  top:0;
  left: 0;
  right:0;
  background-color: var(--main-color);
  z-index: 99;
}

ul{
  li{
    text-align: center;
    padding: 10px;
    a{
      color: currentColor;
      text-decoration: none;
      display: block;

      &:hover{
        color: var(--main-dark-color);
        font-weight: 500;
        transform: scale(1.1);
        transition: all 0.5s;
      }
    }
  }
}

@media screen and (max-width: 689px) {
  .header{

    nav{
      display: none;
    }
  }
}
</style>