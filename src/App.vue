<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    setup() {
        const windowWidth = window.innerWidth;
        const mobileScreen = () => {
            if (windowWidth < 1100) {
                return false;
            }
            else
                return true;
        };
        return {
            mobileScreen,
            windowWidth
        };
    },
};
</script>

<style scoped>
div {
  height: 90vh;
}

</style>
