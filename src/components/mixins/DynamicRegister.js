import parentStore from '../../store/parent';

export default {
  beforeMount() {
    console.log('module is dynamically registered');
    this.$store.registerModule('dynamic-parent', parentStore);
  },
  beforeDestroy() {
    this.$store.unregisterModule('dynamic-parent');
  },
};
