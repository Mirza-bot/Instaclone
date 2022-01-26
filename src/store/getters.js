export default {
  authenticated(state) {
    return state.userId;
  },
  getUsername(state) {
    return state.username;
  },
  getFullname(state) {
    return state.firstname + " " + state.lastname;
  },
  getToken(state) {
    return state.token;
  },
  getDataBase(state) {
    return state.allPosts;
  },
  generateUniqueId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId;
  },
};
