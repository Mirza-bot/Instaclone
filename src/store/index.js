import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const store = createStore({
    state() {
        return{
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    actions,
    mutations,
    getters
})

export default store