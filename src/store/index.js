import { createStore } from 'vuex'
import actions from './actions'
import methods from './methods'
import getters from './getters'


const store = createStore({
    state() {
        
    },
    actions,
    methods,
    getters
})

export default store