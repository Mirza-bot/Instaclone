export default {
    authenticated(state) {
        return state.userId
    },
    getUsername(state) {
        return state.username
    },
    getFullname(state) {
        return state.firstname + " " + state.lastname
    },
    getToken(state) {
        return state.token
    },
    getDataBase(state) {
        return state.allPosts
    }
}