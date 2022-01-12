<template>
  <div class="card">
    <div class="card-header story__header">
      <UserTiles></UserTiles>
      <a href="#" class="dots__menu">
        <img :src="DotMenuIcon" alt="" />
      </a>
    </div>
    <img :src="Logo" class="card-img-top" alt="Instastory" />
    <div class="card-body">
      <button>
        <img :src="HeartIcon" alt="Like-Button" />
      </button>
      <button>
        <img :src="HeartIcon" alt="Like-Button" />
      </button>
      <button>
        <img :src="PaperPlaneIcon" alt="Like-Button" />
      </button>
      <button class="float-end">
        <img :src="HeartIcon" alt="Like-Button" />
      </button>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
import Logo from "../../assets/img/instaclone_logo.jpg";
import DotMenuIcon from "../../assets/icons/three-dots.svg";
import UserTiles from "./UserTiles.vue";
import PaperPlaneIcon from "../../assets/icons/send.svg";
import HeartIcon from "../../assets/icons/heart.svg";
export default {
  setup() {
    return {
      Logo,
      DotMenuIcon,
      PaperPlaneIcon,
      HeartIcon,
    };
  },
  components: { UserTiles },
};
</script>

<style scoped>
.story__header {
  background-color: white;
}
.dots__menu {
  position: absolute;
  top: 20px;
  right: 20px;
  transform: scale(1.5);
}

button {
    border: none;
    background-color: white;
    margin: 5px;
}
</style>
