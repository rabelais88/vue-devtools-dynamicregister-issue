# VUE-DEVTOOLS issue with dynamically registered module.

## version info
```
  "dependencies": {
    "core-js": "^3.3.2",
    "vue": "^2.6.10",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.0.0",
    "@vue/cli-plugin-eslint": "^4.0.0",
    "@vue/cli-plugin-vuex": "^4.0.0",
    "@vue/cli-service": "^4.0.0",
    "@vue/eslint-config-airbnb": "^4.0.0",
    "babel-eslint": "^10.0.3",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "vue-template-compiler": "^2.6.10"
  }
// vue-devtools: 5.3.2(Oct, 30, 2019) - latest
```

## what does it reproduce?

1. `yarn install`
2. `yarn serve`
3. open *Vue-devtools* on browser &rarr; without backward compatibility settings, dynamically registered modules will appear missing.
4. (modules are dynamically registered internally via beforeMount)
5. press buttons to provoke actions. actions will be muted. &rarr; even with backward compatibility settings

When a store module is registered [*Dynamically*](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration), the dynamically added store module would appear as a blank(non-existent) in *vue-devtools* but correctly observed by components; Other statically registered modules would appear alright on *vue-devtools*. also *vuex actions* inspection will be broken once a module is dynamically registered, with or without backward compatibility settings.