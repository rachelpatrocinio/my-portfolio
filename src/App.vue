<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import UpButton from './components/UpButton.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
    UpButton
  },
  data() {
    return {
      store,
      isAtTop: true
    }
  },
  methods: {
    handleScroll() {
      this.isAtTop = window.scrollY === 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};


</script>

<template>

  <div id="app">
    <AppHeader></AppHeader>
    <main class="main">
      <RouterView />
      <UpButton v-if="isAtTop === false"></UpButton>
    </main>
    <AppFooter></AppFooter>
  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap';
</style>
