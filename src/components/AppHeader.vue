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

<header class="py-4">
  <div class="container d-flex justify-content-center">
    <nav class="col-8">
      <ul class="d-flex m-0 p-0">
        <li class="col">
          <a href="">Home</a>
        </li>
        <li class="col">
          <a href="">Esperienze</a>
        </li>
        <li class="col">
          <a href="">I miei Progetti</a>
        </li>
        <li class="col">
          <a href="">Formazione</a>
        </li>
        <li class="col">
          <a href="">Contatti</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

</template>

<style lang="scss" scoped>
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
      }
    }
  }
}
</style>