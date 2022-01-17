export default {
    setUser(state, payload) {
        state.token = payload.token
        state.userId = payload.userId
        state.tokenExpiration = payload.tokenExpiration
    },
    setUserData(state, payload) {
        state.username = payload.username
        state.firstname = payload.firstname
        state.lastname = payload.lastname
    }
}