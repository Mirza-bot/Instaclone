<template>
  <div class="page__container">
    <div class="login__container">
      <div class="logo__container">
        <img :src="Logo" alt="" />
      </div>
      <form>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="E-Mail"
            aria-describedby="emailHelp"
            v-model="eMail"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Passwort"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <div class="mb-3">
          <input
            type="input"
            class="form-control"
            placeholder="Nutzername"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <input
            type="input"
            class="form-control"
            placeholder="Vorname"
            v-model="firstname"
          />
        </div>
        <div class="mb-3">
          <input
            type="input"
            class="form-control"
            placeholder="Nachname"
            v-model="lastname"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary mt-1 mb-3"
          @click.prevent="signup"
        >
          Registrieren
        </button>
      </form>
      <span class="mt-3"> Du hast ein Konto? <a href="#">Anmelden</a> </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import store from "../store";
import Logo from "../assets/img/instaclone_logo.jpg";
import router from "../routes";
export default {
  setup() {
    let eMail = ref("");
    let password = ref("");
    let username = ref("");
    let firstname = ref("");
    let lastname = ref("");

    const status = computed(() => {
      return store.getters.authenticated;
    });

    const signup = async () => {
      await store.dispatch("signup", {
        eMail: eMail.value,
        password: password.value,
      });
      await store.dispatch("sendUserData", {
        username: username.value,
        firstname: firstname.value,
        lastname: lastname.value,
      });
      if (status.value !== null) {
        router.push("/home");
      }
    };
    return {
      Logo,
      eMail,
      username,
      password,
      signup,
      status,
      firstname,
      lastname,
    };
  },
};
</script>

<style scoped>
div.login__container {
  max-width: 350px;
  height: 500px;
  margin: 150px auto 0 auto;
  background-color: white;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 3px;
}

div.logo__container {
  padding: 10px;
  margin: 0 10% 20px 10%;
}

div.logo__container > img {
  width: 200px;
  height: 80px;
}

input {
  height: 30px;
}

button {
  width: 100%;
  height: 30px;
  padding: 0;
}
</style>
