// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import router from './router';
import { sync } from 'vuex-router-sync';

/* eslint-disable no-new */
sync(store, router);
const app = new Vue({
  el: '#app',
  router,
  store,
  ...App, // Object spread copying everything from App.vue
});

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
