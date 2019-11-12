import child from './child';
import { MUTATIONS_DYNAMIC, ACTIONS_DYNAMIC } from './actions';

export default {
  namespaced: true,
  state: {
    isParent: true,
    isDynamic: true,
    count: 0,
  },
  mutations: {
    [MUTATIONS_DYNAMIC.SET_PARENT_COUNT](state, newcount) {
      state.count = newcount;
    },
  },
  actions: {
    [ACTIONS_DYNAMIC.CALL_PARENT]({ commit, state }) {
      commit(MUTATIONS_DYNAMIC.SET_PARENT_COUNT, state.count + 1);
    },
  },
  modules: { child },
};
