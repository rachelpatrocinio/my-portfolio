<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      dropdown: false,
      store
    }
  },
  methods:{
    toggleDropdown(){
      if(this.dropdown === false){
        this.dropdown = true
      }else{
        this.dropdown = false
      }
    }
  }
}

</script>

<template>

<header class="header py-4">
  <div class="container d-flex justify-content-center">
    <nav class="col-8">
      <ul class="menu m-0 p-0">
        <li class="col">
          <RouterLink @click="store.windowScroll()" to="/">Home</RouterLink>
        </li>
        <li class="col">
          <RouterLink @click="store.windowScroll()" to="/sudime">Su di me</RouterLink>
        </li>
        <li class="col">
          <RouterLink @click="store.windowScroll()" to="/progetti">Progetti</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div class="text-end me-3">
    <font-awesome-icon :icon="['fas', 'bars']" class="hamburger" @click="toggleDropdown"/>
  </div>
  <div class="dropdown" v-if="dropdown === true">
    <ul class="menu-dropdown m-0 p-0">
        <li @click="store.windowScroll()" class="col">
          <RouterLink to="/" @click="dropdown = false">Home</RouterLink>
        </li>
        <li @click="store.windowScroll()" class="col">
          <RouterLink to="/sudime" @click="dropdown = false">Su di me</RouterLink>
        </li>
        <li @click="store.windowScroll()" class="col">
          <RouterLink to="/progetti" @click="dropdown = false">Progetti</RouterLink>
        </li>
      </ul>
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

  .menu{
    display: none;
  }
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

      &:focus{
        color: var(--main-dark-color);
        font-weight: 500;
        transform: scale(1.1);
        transition: all 0.5s;
      }
    }
  }
}

@media screen and (min-width: 789px){

  .header{
    .menu{
      display: flex;
    }
  }
  .hamburger{
    display: none;
  }
  .dropdown{
    display: none;
  }
}
</style>