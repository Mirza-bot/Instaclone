<template>
  <div class="card mb-4">
    <div class="card-header story__header py-3">
      <UserTiles></UserTiles>
      <a href="#" class="dots__menu">
        <img :src="DotMenuIcon" alt="" />
      </a>
    </div>
    <img :src="Logo" class="card-img-top" alt="Instastory" />
    <div class="card-body">
      <Button :iconName="'HeartIcon'" :status="'inactive'" :altValue="'Likebutton'"></Button>
      <Button :iconName="'ChatIcon'" :status="'inactive'" :altValue="'Commentsbutton'"></Button>
      <Button :iconName="'PaperplaneIcon'" :status="'inactive'" :altValue="'Sharebutton'"></Button>
      <Button class="float-end" :iconName="'BookmarkIcon'" :status="'inactive'" :altValue="'Savebutton'"></Button>
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
import Button from "../buttons/Button.vue";
export default {
  setup() {
    return {
      Logo,
      DotMenuIcon,
    };
  },
  components: { UserTiles, Button },
};
</script>

<style scoped>
.story__header {
  background-color: white;
}
.dots__menu {
  position: absolute;
  top: 25px;
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
