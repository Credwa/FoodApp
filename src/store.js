import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        srhtext: '',
        ZNavKey: '',
        currentUser: {
            username: '',
            password: ''
        },
    },
    mutations: {
        setSrhtext(state, newValue) {
            //if (this.debug) console.log('setMessageAction triggered with', newValue)
            state.srhtext = newValue;
        },
        clearSrhtext() {
            //if (this.debug) console.log('clearMessageAction triggered')
            state.srhtext = '';
        },
        setZNavKey(state, newValue) {
            state.ZNavKey = newValue;
        },
        clearZNavKey() {
            //if (this.debug) console.log('clearMessageAction triggered')
            state.ZNavKey = '';
        },
        setCurrentUser(state, username, password) {
            state.currentUser.username = username;
            state.currentUser.password = password;
        }
    },
    getters: {
        getZNavKey: state => state.ZNavKey
    }
});
export default store;
