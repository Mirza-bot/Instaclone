<template>
  <nav
    class="navbar navbar-expand navbar-light border-bottom sticky-top p-1"
  >
    <div class="container-fluid nav__content p-0">
      <router-link to="/">
        <img class="main__logo" :src="Logo" alt="Instaclone-Logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form class="d-flex mx-auto">
          <input
            class="form-control me-2 border-0"
            type="search"
            aria-label="Suchen"
            placeholder="        Suchen"
            name="Search"
            :id="placeholderSwitch"
            v-model="searchValue"
          />
        </form>
        <ul class="shortcut__links navbar-nav mb-2 mb-lg-0">
          <li class="nav-item px-1">
            <router-link to="/">
              <ButtonVue
                class="my-1"
                :iconName="'HouseIcon'"
                :status="'inactive'"
                :altValue="'Homebutton'"
              >
              </ButtonVue>
            </router-link>
          </li>
          <li class="nav-item px-1">
            <router-link to="/inbox">
              <ButtonVue
                class="my-1"
                :iconName="'PaperplaneIcon'"
                :status="'inactive'"
                :altValue="'Inboxbutton'"
              ></ButtonVue>
            </router-link>
          </li>
          <li class="nav-item px-1">
            <ButtonVue
              class="my-1"
              :iconName="'PlusIcon'"
              :status="'inactive'"
              :altValue="'Newpostbutton'"
            ></ButtonVue>
          </li>
          <li class="nav-item px-1">
            <router-link to="/explore">
              <ButtonVue
                class="my-1"
                :iconName="'CompassIcon'"
                :status="'inactive'"
                :altValue="'Browsebutton'"
              ></ButtonVue>
            </router-link>
          </li>
          <li class="nav-item px-1">
            <ButtonVue
              class="my-1"
              :iconName="'HeartIcon'"
              :status="'inactive'"
              :altValue="'Activitesbutton'"
            ></ButtonVue>
          </li>
          <li class="nav-item ps-2">
            <div class="user__image">
              <img :src="UserImage" alt="Profile-Picture" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../../assets/img/Instaclone_logo.jpg";
import UserImage from "../../assets/img/Mirza.webp";
import { computed, ref } from "@vue/reactivity";
import ButtonVue from "../buttons/Button.vue";
export default {
  components: { ButtonVue },
  setup() {
    const searchValue = ref("");

    const placeholderSwitch = computed(() => {
      if (searchValue.value !== "") return "";
      else return "searchbar";
    });

    return {
      Logo,
      UserImage,
      searchValue,
      placeholderSwitch,
    };
  },
};
</script>

<style scoped>
.main__logo {
  height: 45px;
  width: 110px;
  margin-right: 100px;
}

nav {
  background-color: white;
  margin-bottom: 30px;
}

div.nav__content {
  margin: 0 calc(20vw);
}


a.nav-link > img {
  width: 1.5rem;
}

div.user__image {
  width: 30px;
  clip-path: circle();
  background: lightgray;
  transform: scale(0.98);
}

div.user__image > img {
  width: 30px;
  clip-path: circle();
}

img:hover {
  cursor: pointer;
}

img {
  transform: scale(0.98);
}

input.form-control:placeholder-shown {
  background-color: rgb(241, 241, 241);
}

#searchbar {
  background-image: url("../../assets/icons/search.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 15px;
}
</style>
