export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
  setUserData(state, payload) {
    state.username = payload.username;
    state.firstname = payload.firstname;
    state.lastname = payload.lastname;
  },
  setAllPosts(state, payload) {
    state.allPosts.push(payload);
    console.log(state.allPosts);
  },
};
