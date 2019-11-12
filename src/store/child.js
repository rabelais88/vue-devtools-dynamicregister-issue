import { MUTATIONS_DYNAMIC, ACTIONS_DYNAMIC } from './actions';

export default {
  namespaced: true,
  state: {
    isChild: true,
    isDynamic: true,
    count: 0,
  },
  mutations: {
    [MUTATIONS_DYNAMIC.SET_CHILD_COUNT](state, newCount) {
      state.count = newCount;
    },
  },
  actions: {
    [ACTIONS_DYNAMIC.CALL_CHILD]({ state, commit }) {
      commit(MUTATIONS_DYNAMIC.SET_CHILD_COUNT, state.count + 1);
    },
  },
};
