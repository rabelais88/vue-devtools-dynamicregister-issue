<template>
  <div id="app">
    Vue app running...
    check vuex store from devtools
    <p>is parent Module Dynamically registered? {{ isDynamicParentExist }}</p>
    <p>is child Module Dynamically registered? {{ isDynamicChildExist }}</p>
    <p>is parent module statically registered? {{ isStaticParentExist }}</p>
    <p>is child module statically registered? {{ isStaticChildExist }}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import DynamicRegister from './components/mixins/DynamicRegister';

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
