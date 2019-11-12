<template>
  <div id="app">
    Vue app running...
    check vuex store from devtools
    <p>is parent Module Dynamically registered? {{ isDynamicParentExist }}</p>
    <button @click.prevent="dynamicParentCall">increse dynamic parent store count</button>
    <p>is child Module Dynamically registered? {{ isDynamicChildExist }}</p>
    <button @click.prevent="dynamicChildCall">increase dynamic child store count</button>
    <p>is parent module statically registered? {{ isStaticParentExist }}</p>
    <button @click.prevent="staticParentCall">increase static parent store count</button>
    <p>is child module statically registered? {{ isStaticChildExist }}</p>
    <button @click.prevent="staticChildCall">increase static parent store count</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import HelloWorld from './components/HelloWorld.vue';
import DynamicRegister from './components/mixins/DynamicRegister';
import { ACTIONS_DYNAMIC, ACTIONS_STATIC } from './store/actions';

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  mixins: [DynamicRegister],
  computed: {
    isDynamicParentExist() {
      return !!this.$store._modulesNamespaceMap['dynamic-parent/'];
    },
    isDynamicChildExist() {
      return !!this.$store._modulesNamespaceMap['dynamic-parent/child/'];
    },
    isStaticParentExist() {
      return !!this.$store._modulesNamespaceMap['static-parent/'];
    },
    isStaticChildExist() {
      return !!this.$store._modulesNamespaceMap['static-parent/child/'];
    },
  },
  methods: {
    ...mapActions({
      dynamicParentCall: `dynamic-parent/${ACTIONS_DYNAMIC.CALL_PARENT}`,
      dynamicChildCall: `dynamic-parent/child/${ACTIONS_DYNAMIC.CALL_CHILD}`,
      staticParentCall: `static-parent/${ACTIONS_STATIC.CALL_PARENT}`,
      staticChildCall: `static-parent/child/${ACTIONS_STATIC.CALL_CHILD}`,
    }),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
