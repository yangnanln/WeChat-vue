/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Home.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});
