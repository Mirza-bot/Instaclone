<template>
  <div class="row">
    <ul>
      <li class="float-start">
        <div class="user__image">
          <img :src="Logo" alt="Profile-Picture" />
        </div>
      </li>
      <li class="float-start">
        <ul>
          <li>
            <p class="ps-3 mt-1 mb-0"><strong>Name</strong></p>
          </li>
          <li>
            <p class="ps-3 mt-1 mb-0">HI</p>
          </li>
        </ul>
      </li>
      <li class="logout__button">
        <a class="float-end logout__button"><strong>Wechseln</strong></a>
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
div.user__image {
  width: 55px;
  clip-path: circle();
  background: lightgray;
  transform: scale(0.98);
}

div.user__image > img {
  width: 55px;
  clip-path: circle();
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.logout__button {
  margin: 10px 0 auto 0;
}

a {
    text-decoration: none;
    font-size: 0.7rem;
}
</style>
