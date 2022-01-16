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
        <button
          type="submit"
          class="btn btn-primary mt-1 mb-3"
          @click.prevent="login"
        >
          Anmelden
        </button>
      </form>
      <span class="mt-3">
        Du hast kein Konto? <a href="#">Registrieren</a>
      </span>
      <hr class="dropdown-divider mt-3" />
      <div>
        <span> Oder probiere es erst mal mit dem: </span>
        <button
          type="submit"
          class="btn btn-primary mt-3"
          @click.prevent="demo"
        >
          Demo-Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import store from "../store";
import Logo from "../assets/img/instaclone_logo.jpg";
import router from "../routes";
export default {
  setup() {
    let eMail = ref("");
    let password = ref("");

    const login = () => {
      store.dispatch("login", {
        eMail: eMail.value,
        password: password.value,
      });
      router.push("/home");
    };
    const demo = () => {
      store.dispatch("login", {
        eMail: 'test@test.com',
        password: '',
      });
      router.push("/home");
    };
    return {
      Logo,
      eMail,
      password,
      login,
      demo
    };
  },
};
</script>

<style scoped>
div.login__container {
  max-width: 350px;
  height: 450px;
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
