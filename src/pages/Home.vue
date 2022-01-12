<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div class="col-2 fixed-top">
        <ul class="m-0 p-0">
          <li class="mb-1 ms-2">
            <UserMenu></UserMenu>
          </li>
          <li class="mb-1">
            <strong style="color: gray"> Vorschläge für dich</strong>
          </li>
          <li>
            <ul class="m-0 p-0">
              <li>
                <UserTiles></UserTiles>
              </li>
              <li>
                <a href="#" class="follow_button">
                  <strong>Folgen</strong>
                </a>
              </li>
            </ul>
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
    width: 60vw;
    margin: auto;
  }
}

ul {
  list-style: none;
}

.fixed-top {
  top: 13vh;
  left: 60vw;
}

strong {
  font-size: 0.7rem;
}

a.follow_button {
  border: none;
  background-color: white;
  float: right;
}

a {
    text-decoration: none;
}
</style>
