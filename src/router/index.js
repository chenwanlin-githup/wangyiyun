import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/find',
        name: 'find',
        component: () => import('../views/child/findMusic.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/child/meMusic.vue'),
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/child/friend.vue'),
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/child/account.vue'),
      },
    ],
  },
  //  {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //   },
];

const router = new VueRouter({
  routes, //配置路由规则的
  linkActiveClass: 'vant-active', //覆盖默认路由高亮的类
});

export default router;
