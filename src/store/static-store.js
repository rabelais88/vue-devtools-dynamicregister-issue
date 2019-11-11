const childStatic = {
  namespaced: true,
  state: {
    isDynamic: false,
    isChild: true,
  },
};
export default {
  state: {
    isDynamic: false,
    isParent: true,
  },
  namespaced: true,
  modules: { child: childStatic },
};
