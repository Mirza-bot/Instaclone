<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow px-4">
    <div class="container-fluid">
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
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <ul class="shortcut__links navbar-nav mb-2 mb-lg-0">
          <li class="nav-item px-2">
            <a class="nav-link" href="#">
              <img :src="HouseIcon" alt="Home" />
            </a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#"
              ><img :src="PaperPlaneIcon" alt="Messages"
            /></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#"
              ><img :src="PlusIcon" alt="PlusIcon"
            /></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#"
              ><img :src="CompassIcon" alt="Explore"
            /></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#"
              ><img :src="HeartIcon" alt="Activity"
            /></a>
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
import HouseIcon from "../../assets/icons/house-door-fill.svg";
import CompassIcon from "../../assets/icons/compass.svg";
import PaperPlaneIcon from "../../assets/icons/send.svg";
import PlusIcon from "../../assets/icons/plus-square.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import UserImage from "../../assets/img/Mirza.webp"
export default {
  setup() {
    return {
      Logo,
      HouseIcon,
      CompassIcon,
      PaperPlaneIcon,
      PlusIcon,
      HeartIcon,
      UserImage
    };
  },
};
</script>

<style scoped>
.main__logo {
  max-height: 5vh;
}

nav {
  margin-bottom: 3rem;
}

a.nav-link > img {
  width: 1.5rem;
}

div.user__image {
    width: 30px;
    clip-path: circle();
    background: black;
}

div.user__image > img {
    width: 30px;
    clip-path: circle();
}

img:hover {
 cursor: pointer;
}

</style>
