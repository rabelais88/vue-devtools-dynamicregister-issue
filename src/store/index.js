import Vue from 'vue';
import Vuex from 'vuex';
import staticStore from './static-store';
// import parent from './parent';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    'static-parent': staticStore,
  },
});
