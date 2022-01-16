<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
</template>


<script>
import NavBar from "../components/layout/NavBar.vue";
export default {
    components: {NavBar},
    setup() {
        
    },
}
</script>