export default {
    authenticated(state) {
        return state.userId
    },
    getToken(state) {
        return state.token
    }
}