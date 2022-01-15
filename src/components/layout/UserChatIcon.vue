<template>
  <div class="icon__container">
    <ul>
      <li class="float-start">
        <div class="user__image">
          <img :src="Logo" alt="Profile Picture" />
        </div>
      </li>
      <li class="float-start">
        <div class="user__name">
          <strong class="ps-3">Name</strong>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "../../assets/img/Mirza.webp";
export default {
  setup() {
    return {
      Logo,
    };
  },
};
</script>

<style scoped>
div.icon__container {
  font-size: 0.8rem;
  background-color: rgb(230, 230, 230);
  width: 100%;
  height: 70px;
  padding: 0 15px;
}
div.user__image {
  width: 50px;
  clip-path: circle();
  background: lightgray;
}

div.user__image > img {
  width: 50px;
  clip-path: circle();
  transform: scale(0.99);
}

div.user__name {
    margin: 22px 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
