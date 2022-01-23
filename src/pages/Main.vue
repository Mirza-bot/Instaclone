<template>
    <nav-bar></nav-bar>
    <post-modal></post-modal>
    <router-view></router-view>
</template>


<script>
import NavBar from "../components/layout/NavBar.vue";
import PostModal from "../components/layout/PostModal.vue";
export default {
    components: { NavBar, PostModal },
    setup() {
        
    },
}
</script>