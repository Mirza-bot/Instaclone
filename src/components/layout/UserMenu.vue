<template>
  <div class="row">
    <ul>
      <li class="float-start">
        <div class="user__image">
          <img :src="placeholderImg" alt="Profile-Picture" />
        </div>
      </li>
      <li class="float-start mt-1">
        <ul>
          <li>
            <p class="ps-3 mt-1 mb-0"><strong>{{username}}</strong></p>
          </li>
          <li>
            <p class="ps-3 mt-1 mb-0 real_name">{{realname}}</p>
          </li>
        </ul>
      </li>
      <li class="logout__button">
        <a class="float-end logout__button ms-3"><strong>Wechseln</strong></a>
      </li>
    </ul>
  </div>
</template>

<script>
import placeholderImg from "../../assets/img/placeholder_user.webp";
export default {
  props: ["username", "realname"],
  setup() {
    return {
      placeholderImg,
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
  width: 56px;
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

.real_name {
  font-size: 0.8rem;
}
</style>
