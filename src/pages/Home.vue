<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <Card></Card>
      </div>
      <div class="col-3">
        <ul>
          <li>
            <UserMenu></UserMenu>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <UserTiles></UserTiles>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/layout/Card.vue";
import UserMenu from "../components/layout/UserMenu.vue";
import UserTiles from "../components/layout/UserTiles.vue";
export default {
  components: { Card, UserMenu, UserTiles },
};
</script>

<style scoped>
@media only screen and (min-width: 991px) {
  div.container {
    width: 80vw;
    margin: auto;
  }
}

ul {
  list-style: none;
}

</style>
