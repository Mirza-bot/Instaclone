<template>
  <div class="page__container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="eMail"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="input"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="input"
          class="form-control"
          id="fullname"
          v-model="username"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="testie">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let eMail = ref("");
    let password = ref("");
    let username = ref("");
    let fullname = ref("");

    const testie = () => {
      console.log("hi");
    };
    return {
      eMail,
      password,
      username,
      fullname,
      testie,
    };
  },
};
</script>

<style scoped>
div.page__container {
  width: 950px;
  height: 500px;
  margin: 130px auto 0 auto;
}
</style>
