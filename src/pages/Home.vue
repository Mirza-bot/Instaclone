<template>
  <div class="container">
    <div class="row">
      <div :class="mobileScreen()? 'col-xl-8' : 'col-xl-12 p-0'">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div class="col-2 fixed-top" v-if="mobileScreen()">
        <ul class="m-0 p-0">
          <li class="mb-1 ms-2">
            <UserMenu></UserMenu>
          </li>
          <li class="mb-1">
            <strong style="color: gray"> Vorschläge für dich</strong>
            <strong class="float-end mt-2">Alle anzeigen</strong>
          </li>
          <li>
            <ul class="m-0 p-0">
              <li>
                <UserTiles></UserTiles>
              </li>
              <li>
                <a href="#" class="follow_button">
                  <strong class="me-1">Folgen</strong>
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
  setup() {


    const windowWidth = window.innerWidth

    const mobileScreen = () => {
      if (windowWidth < 1100) {
        return false
      } else return true
    }

    return {
      mobileScreen,
    }
  }
};
</script>

<style scoped>

div.container {
  width: 950px;
  margin-top: 20px;
  padding: 0;
}

div.row {
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 1000px) {
  div.container {
    width: 100vw;
  }

  div.container > div.row {
    width: 100vw;
  }

  div.fixed-top {
    display: none;
  }
}

ul {
  list-style: none;
}

.fixed-top {
  top: 110px;
  left: calc(150px + 50vw) ;
  width: 280px;
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
