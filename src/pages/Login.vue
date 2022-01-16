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
      <button type="submit" class="btn btn-primary" @click.prevent="signUser">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import store from "../store";
export default {
  setup() {
    let eMail = ref("");
    let password = ref("");

    const signUser = () => {
      store.dispatch('login', {
          eMail: eMail.value,
          password: password.value
          })
    };
    return {
      eMail,
      password,
      signUser,
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
