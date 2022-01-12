<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped>
div {
  background-color: rgb(252, 252, 252);
  min-height: 100vh;
}

</style>
