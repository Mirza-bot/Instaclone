<template>
  <nav class="sticky-top">
    <div class="row">
      <router-link to="/home" class="col-3">
        <img class="main__logo" :src="Logo" alt="Instaclone-Logo" />
      </router-link>
      <div class="nav__content col-9 p-0">
        <form class="d-flex mx-auto float-start">
          <input
            class="form-control my-1 border-0"
            type="search"
            aria-label="Suchen"
            placeholder="        Suchen"
            name="Search"
            :id="placeholderSwitch"
            v-model="searchValue"
          />
        </form>
        <ul class="mb-2 ms">
          <li class="pe-1">
            <router-link to="/home">
              <ButtonVue
                class="my-1"
                :iconName="'HouseIcon'"
                :status="'inactive'"
                :altValue="'Homebutton'"
              >
              </ButtonVue>
            </router-link>
          </li>
          <li class="pe-1">
            <router-link to="/inbox">
              <ButtonVue
                class="my-1"
                :iconName="'PaperplaneIcon'"
                :status="'inactive'"
                :altValue="'Inboxbutton'"
              ></ButtonVue>
            </router-link>
          </li>
          <li class="pe-1">
            <ButtonVue
              class="my-1"
              :iconName="'PlusIcon'"
              :status="'inactive'"
              :altValue="'Newpostbutton'"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#newPost"
            ></ButtonVue>
          </li>
          <li class="px-1">
            <router-link to="/explore">
              <ButtonVue
                class="my-1"
                :iconName="'CompassIcon'"
                :status="'inactive'"
                :altValue="'Browsebutton'"
              ></ButtonVue>
            </router-link>
          </li>
          <li>
            <ButtonVue
              class="mt-2"
              :iconName="'HeartIcon'"
              :status="'inactive'"
              :altValue="'Activitesbutton'"
            ></ButtonVue>
          </li>
          <li>
            <div class="btn-group border-0">
              <button
                class="bg-white btn-sm border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="user__image">
                  <img :src="placeholderImg" alt="Profile-Picture" />
                </div>
              </button>
              <ul class="dropdown-menu dropdown-menu-end profile__menu">
                <router-link to="/profile">
                  <li class="dropdown-item">Profil</li>
                </router-link>
                <li class="dropdown-item">Gespeichert</li>
                <li class="dropdown-item">Einstellungen</li>
                <li class="dropdown-item">Konto wechseln</li>
                <li class="dropdown-item" @click="logout">Abmelden</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../../assets/img/Instaclone_logo.jpg";
import placeholderImg from "../../assets/img/placeholder_user.webp";
import { computed, ref } from "@vue/reactivity";
import ButtonVue from "../buttons/Button.vue";
import store from "../../store";
import router from "../../routes";
export default {
  components: { ButtonVue },
  setup() {
    const searchValue = ref("");

    const placeholderSwitch = computed(() => {
      if (searchValue.value !== "") return "";
      else return "searchbar";
    });

    const logout = () => {
      store.dispatch("logout")
      router.replace("/login")
    } 

    return {
      Logo,
      placeholderImg,
      searchValue,
      placeholderSwitch,
      logout
    };
  },
};
</script>

<style scoped>
nav {
  background-color: white;
  border-bottom: 1px solid lightgray;
  width: 100%;
}

nav > div {
  margin: 0 auto;
  width: 950px;
  padding-top: 5px;
}
.main__logo {
  height: 45px;
  width: 110px;
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

li {
  display: inline-block;
}

input.form-control:placeholder-shown {
  background-color: rgb(241, 241, 241);
  margin: 0 110px;
}

#searchbar {
  background-image: url("../../assets/icons/search.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 15px;
}

.profile__menu {
  font-size: 0.8rem;
  z-index: 2;
}

.dropdown-item:hover {
  cursor: pointer;
}
</style>
