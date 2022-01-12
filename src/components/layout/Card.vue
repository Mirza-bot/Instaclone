<template>
  <div class="card mb-4">
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
        <img :src="ChatIcon" alt="Like-Button" />
      </button>
      <button>
        <img :src="PaperPlaneIcon" alt="Like-Button" />
      </button>
      <button class="float-end">
        <img :src="BookmarkIcon" alt="Like-Button" />
      </button>
      <p class="card-text mt-3">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="input-group border-top">
        <input
          type="text"
          class="form-control"
          placeholder="Kommentieren ..."
          aria-label="Kommentieren ..."
          aria-describedby="button-addon2"
          style="border: none;"
        />
        <button
          class="btn m-0 p-0"
          type="button"
          id="button-addon2"
          style="color: rgb(188, 238, 255); transform:scale(0.85)"
        >
          <strong>Posten</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../../assets/img/instaclone_logo.jpg";
import DotMenuIcon from "../../assets/icons/three-dots.svg";
import UserTiles from "./UserTiles.vue";
import PaperPlaneIcon from "../../assets/icons/send.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import ChatIcon from "../../assets/icons/chat.svg";
export default {
  setup() {
    return {
      Logo,
      DotMenuIcon,
      PaperPlaneIcon,
      HeartIcon,
      BookmarkIcon,
      ChatIcon,
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
  top: 15px;
  right: 25px;
  transform: scale(1.2);
}

button {
  border: none;
  background-color: white;
  margin: 0 10px 0 0;
  transform: scale(1.5);
}

input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgray;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: lightgray;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: lightgray;
}
</style>
