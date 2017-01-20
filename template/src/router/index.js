import Vue from 'vue';
import Router from 'vue-router';
import FooView from '../views/FooView';
import BarView from '../views/BarView';

Vue.use(Router);

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
