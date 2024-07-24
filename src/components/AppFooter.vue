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

<footer class="dark-bg">
  <div class="container py-5">
    <div class="row justify-content-between">
      <div class="col-4 d-flex gap-3">
        <a class="d-flex align-items-center gap-2 social" target="_blank" href="https://www.linkedin.com/in/rachel-anne-patrocinio-80811b315/">
          <img src="../images/linkedin.png" alt="">
          <p class="p-0 m-0">Linked in</p>
        </a>
        <a class="d-flex align-items-center gap-2 social" target="_blank" href="https://github.com/rachelpatrocinio">
          <img src="../images/github-sign.png" alt="">
          <p class="p-0 m-0">Github</p>
        </a>
      </div>
      <div class="col-4 text-end">
        <p class="m-0">RACHEL ANNE RABANG PATROCINIO &copy;</p>
        <a class="contatti" href="mailto:rachelannepatrocinio@gmail.com">rachelannepatrocinio@gmail.com</a>
        <a class="contatti" href="tel:+393271437327">+39 327 1437 327</a>
      </div>
    </div>
  </div>
</footer>

</template>

<style lang="scss" scoped>
@import '../assets/style/partials/utilities';

footer{
  color: white;
}

a.social{
  text-decoration: none;
  color: var(--main-color);

  &:hover{
    color: var(--main-dark-color);
  }
}

a.contatti{
  text-decoration: none;
  color: var(--main-dark-color);
  display: block;

  &:hover{
    color: var(--main-color);
  }
}
</style>