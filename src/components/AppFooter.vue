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
      <div class="col-12 col-md-6 d-md-flex gap-3">
        <a class="d-flex align-items-center gap-2 social mb-2 mb-md-0" target="_blank" href="https://www.linkedin.com/in/rachel-anne-patrocinio-80811b315/">
          <img src="../../public/icons/linkedin.png" alt="">
          <p class="p-0 m-0">Linked in</p>
        </a>
        <a class="d-flex align-items-center gap-2 social" target="_blank" href="https://github.com/rachelpatrocinio">
          <img src="../../public/icons/github.png" alt="">
          <p class="p-0 m-0">Github</p>
        </a>
      </div>
      <div class="col-12 col-md-6 text-md-end mt-4 m-md-0">
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

// @media screen and (max-width: 689px) {

//   footer{
//     .row{
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//   }
  
// }
</style>