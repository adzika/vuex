import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});