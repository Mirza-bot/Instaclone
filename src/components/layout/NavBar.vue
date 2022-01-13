<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom sticky-top">
    <div class="container-fluid p-0">
      <a class="navbar-brand" href="#"
        ><img class="main__logo" :src="Logo" alt="Instaclone-Logo"
      /></a>
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
            class="form-control me-2"
            type="search"
            aria-label="Suchen"
            placeholder="     Suchen"
            name="Search"
            :id="placeholderSwitch"
            v-model="searchValue"
          />
        </form>
        <ul class="shortcut__links navbar-nav mb-2 mb-lg-0">
          <li class="nav-item px-1">
            <ButtonVue class="" :iconName="'HouseIcon'" :status="'inactive'" :altValue="'Homebutton'"></ButtonVue>
          </li>
          <li class="nav-item px-1">
            <ButtonVue class="" :iconName="'PaperplaneIcon'" :status="'inactive'" :altValue="'Inboxbutton'"></ButtonVue>
          </li>
          <li class="nav-item px-1">
            <ButtonVue class="" :iconName="'PlusIcon'" :status="'inactive'" :altValue="'Newpostbutton'"></ButtonVue>
          </li>
          <li class="nav-item px-1">
            <ButtonVue class="" :iconName="'CompassIcon'" :status="'inactive'" :altValue="'Browsebutton'"></ButtonVue>
          </li>
          <li class="nav-item px-1">
            <ButtonVue class="" :iconName="'HeartIcon'" :status="'inactive'" :altValue="'Activitesbutton'"></ButtonVue>
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
import { computed, ref } from '@vue/reactivity';
import ButtonVue from "../buttons/Button.vue";
export default {
  components: {ButtonVue},
  setup() {
    const searchValue = ref("");

    const placeholderSwitch = computed(() => {
      if (searchValue.value !== "") return "";
      else return "searchbar"

    });

    return {
      Logo,
      UserImage,
      searchValue,
      placeholderSwitch
    };
  },
};
</script>

<style scoped>
.main__logo {
  max-height: 4vh;
}

nav {
  margin-bottom: 3rem;
  background-color: white;
}

div.container-fluid {
  margin: 0 15vw 0 15vw;
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
  background-color: rgb(246, 246, 246);
}

#searchbar {
  background-image: url("../../assets/icons/search.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 15px;
}
</style>
