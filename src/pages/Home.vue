<template>
  <div class="container">
    <div class="row">
      <div :class="mobileScreen() ? 'col-lg-8' : 'col-lg-12 p-0'">
        <Card
          v-for="post in allPosts"
          :key="post.id"
          :username="post.username"
          :postTitle="post.postDescription"
          :image="post.postImage"
        ></Card>
      </div>
      <div class="col-2 fixed-top" v-if="mobileScreen()">
        <ul class="m-0 p-0">
          <li class="mb-1">
            <UserMenu :username="username" :realname="fullname"></UserMenu>
          </li>
          <li class="mb-1">
            <strong style="color: gray"> Vorschläge für dich</strong>
            <strong class="float-end mt-2">Alle anzeigen</strong>
          </li>
          <li>
            <ul class="m-0 p-0">
              <li>
                <UserTiles :showPopular="true"></UserTiles>
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
import { computed } from "@vue/reactivity";
import Card from "../components/layout/Card.vue";
import UserMenu from "../components/layout/UserMenu.vue";
import UserTiles from "../components/layout/UserTiles.vue";
import store from "../store";
export default {
  components: { Card, UserMenu, UserTiles },
  setup() {
    const allPosts = computed(() => {
      return store.getters.getDataBase;
    });

    const username = computed(() => {
      return store.getters.getUsername;
    });

    const fullname = computed(() => {
      return store.getters.getFullname;
    });

    const windowWidth = window.innerWidth;

    const mobileScreen = () => {
      if (windowWidth < 1100) {
        return false;
      } else return true;
    };

    return {
      mobileScreen,
      allPosts,
      fullname,
      username,
    };
  },
};
</script>

<style scoped>
div.container {
  width: 950px;
  margin-top: 30px;
  padding: 0;
}

div.row {
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 1000px) {
  div.container {
    width: 100%;
  }

  div.container > div.row {
    width: 100%;
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
  left: calc(160px + 50vw);
  width: 280px;
  z-index: 1;
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
