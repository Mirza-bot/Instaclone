<template>
  <div class="card">
    <div class="card-header"></div>
    <img :src="Logo" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
import Logo from "../../assets/img/instaclone_logo.jpg";
export default {
  setup() {
    return {
      Logo,
    };
  },
};
</script>
