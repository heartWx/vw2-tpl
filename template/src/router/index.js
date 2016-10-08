import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import FooView from '../views/FooView.vue';
import BarView from '../views/BarView.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/foo',
      component: FooView,
    },
    {
      path: '/bar',
      component: BarView,
    },
  ],
});
