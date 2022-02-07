<template>
  <div class="card mb-4">
    <div class="card-header story__header py-3">
      <UserTiles :username="username"></UserTiles>
      <a href="#" class="dots__menu">
        <img :src="DotMenuIcon" alt="" />
      </a>
    </div>
    <img :src="image" class="card-img-top" alt="Instastory" />
    <div class="card-body">
      <Button
        class="m-1"
        :iconName="'HeartIcon'"
        :status="'inactive'"
        :altValue="'Likebutton'"
      ></Button>
      <Button
        class="m-1"
        :iconName="'ChatIcon'"
        :status="'inactive'"
        :altValue="'Commentsbutton'"
      ></Button>
      <Button
        class="m-1"
        :iconName="'PaperplaneIcon'"
        :status="'inactive'"
        :altValue="'Sharebutton'"
      ></Button>
      <Button
        class="float-end"
        :iconName="'BookmarkIcon'"
        :status="'inactive'"
        :altValue="'Savebutton'"
      ></Button>
      <p class="card-text mt-3">
        {{ postTitle }}
      </p>
      <div class="input-group border-top">
        <input
          type="text"
          class="form-control"
          placeholder="Kommentieren ..."
          aria-label="Kommentieren"
          aria-describedby="button-addon2"
          style="border: none"
        />
        <button
          class="btn m-0 p-0"
          type="button"
          style="color: rgb(188, 238, 255); transform: scale(0.85)"
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
import Button from "../buttons/Button.vue";
export default {
  components: { UserTiles, Button },
  props: ["username", "image", "postTitle"],
  setup() {
    return {
      Logo,
      DotMenuIcon,
    };
  },
};
</script>

<style scoped>
.story__header {
  background-color: white;
}
.dots__menu {
  position: absolute;
  top: 20px;
  right: 25px;
}
.dots__menu > img {
  width: 20px;
  height: 20px;
}

input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgray;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: lightgray;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: lightgray;
}

/* zum entfernen der BS-Umrandung beim darauf klicken */
input:focus,
button:focus {
  -webkit-appearance: none;
  border-color: #ffffff;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
