import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      username: null,
      userId: null,
      token: null,
      tokenExpiration: null,
      firstname: null,
      lastname: null,
      allPosts: null,
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
