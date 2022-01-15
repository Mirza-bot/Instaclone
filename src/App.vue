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
    setup() {

    const windowWidth = window.innerWidth

    const mobileScreen = () => {
      if (windowWidth < 1100) {
        return false
      } else return true
    }

    return {
      mobileScreen,
      windowWidth
    }
  }
};
</script>

<style scoped>
div {
  height: 90vh;
}

</style>
