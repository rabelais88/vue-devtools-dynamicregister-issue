import child from './child';

export default {
  namespaced: true,
  state: {
    isParent: true,
    isDynamic: true,
  },
  mutations: {},
  actions: {},
  modules: { child },
};
