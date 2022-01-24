<template>
  <div>
    <ul>
      <li class="float-start">
        <div class="user__image">
          <img :src="placeholderImg" alt="Profile-Picture" />
        </div>
      </li>
      <li class="float-start">
        <ul>
          <li>
            <p class="ps-3 mb-0"><strong> {{ username }} </strong></p>
          </li>
          <li v-show="showPopular">
            <p class="ps-3 mb-0">Beliebt</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import placeholderImg from "../../assets/img/placeholder_user.webp";
export default {
  props: ["username", "showPopular"],
  setup() {
    return {
      placeholderImg,
    };
  },
};
</script>

<style scoped>

div {
    font-size: 0.8rem;
}
div.user__image {
  width: 30px;
  clip-path: circle();
  background: lightgray;
}

div.user__image > img {
  width: 30px;
  clip-path: circle();
  transform: scale(0.99);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
