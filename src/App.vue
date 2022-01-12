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


<style lang="sass">

</style>
