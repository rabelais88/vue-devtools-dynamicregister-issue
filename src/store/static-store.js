import { MUTATIONS_STATIC, ACTIONS_STATIC } from './actions';

const childStatic = {
  namespaced: true,
  state: {
    isDynamic: false,
    isChild: true,
    count: 0,
  },
  mutations: {
    [MUTATIONS_STATIC.SET_CHILD_COUNT](state, newcount) {
      state.count = newcount;
    },
  },
  actions: {
    [ACTIONS_STATIC.CALL_CHILD]({ state, commit }) {
      commit(MUTATIONS_STATIC.SET_CHILD_COUNT, state.count + 1);
    },
  },
};
export default {
  state: {
    isDynamic: false,
    isParent: true,
    count: 0,
  },
  namespaced: true,
  modules: { child: childStatic },
  mutations: {
    [MUTATIONS_STATIC.SET_PARENT_COUNT](state, newcount) {
      state.count = newcount;
    },
  },
  actions: {
    [ACTIONS_STATIC.CALL_PARENT]({ state, commit }) {
      commit(MUTATIONS_STATIC.SET_PARENT_COUNT, state.count + 1);
    },
  },
};
