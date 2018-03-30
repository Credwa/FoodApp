import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        srhtext: '',
        ZNavKey: ''
    },
    mutations: {
        setSrhtext(state, newValue) {
            //if (this.debug) console.log('setMessageAction triggered with', newValue)
            state.srhtext = newValue
        },
        clearSrhtext() {
            //if (this.debug) console.log('clearMessageAction triggered')
            state.srhtext = ''
        },
        setZNavKey(state, newValue) {
            state.ZNavKey = newValue
        },
        clearZNavKey() {
            //if (this.debug) console.log('clearMessageAction triggered')
            state.ZNavKey = ''
        },
    }

})
export default store