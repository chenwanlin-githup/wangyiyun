import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "",
        name: "find",
        component: () => import("../views/child/findMusic.vue")
      },
      {
        path: "/me",
        name: "me",
        component: () => import("../views/child/meMusic.vue")
      },
      {
        path: "/friend",
        name: "friend",
        component: () => import("../views/child/friend.vue")
      },
      {
        path: "/account",
        name: "account",
        component: () => import("../views/child/account.vue")
      },
      {
        path: "/mv",
        name: "mv",
        component: () => import("../views/child/mv.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/play",
    name: "play",
    component: () => import("../views/child/play.vue")
  },
];

const router = new VueRouter({
  routes //配置路由规则的
  //linkActiveClass: 'vant-active', //覆盖默认路由高亮的类
});

export default router;
