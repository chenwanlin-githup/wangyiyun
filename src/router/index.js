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
        redirect: "tuijian",
        component: () => import("../views/child/findMusic.vue"),
        children: [
          {
            path: "tuijian",
            name: "tuijian",
            component: () => import("../views/DFH/Tuijian.vue")
          },
          {
            path: "gedan",
            name: "gedan",
            component: () => import("../views/DFH/Gedan.vue")
          },
          {
            path: "diantai",
            name: "diantai",
            component: () => import("../views/DFH/Diantai.vue")
          },
          {
            path: "/paihang",
            name: "paihang",
            component: () => import("../views/DFH/Paihang.vue")
          }
        ]
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
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/loginiPhone",
    name: "loginiPhone",
    component: () => import("../views/loginiPhone.vue")
  },
  {
    path: "/loginRegister",
    name: "loginRegister",
    component: () => import("../views/loginRegister.vue")
  },
  {
    path: "/loginVerify",
    name: "loginVerify",
    component: () => import("../views/loginVerify.vue")
  },
  {
    path: "/loginName",
    name: "loginName",
    component: () => import("../views/loginName.vue")
  },
  {
    path: "/playMusic",
    name: "playMusic",
    component: () => import("../views/playMusic/playMusic.vue")
  },
  {
    path: "/friend/mv",
    name: "mv",
    component: () => import("../views/friend/mv.vue")
  },
  {
    path: "/friend/dynamic",
    name: "dynamic",
    component: () => import("../views/friend/dynamic.vue")
  },
  {
    path: "/friend/LBT-song",
    name: "LBT-song",
    component: () => import("../views/friend/LBT-song.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/DFH/Search.vue")
  },
  {
    path: "/tinggeshiqu",
    name: "tinggeshiqu",
    redirect: "shiqu",
    component: () => import("../views/DFH/Tinggeshiqu.vue"),
    children: [
      {
        path: "/shiqu",
        name: "shiqu",
        component: () => import("../views/DFH/shiqu.vue")
      },
      {
        path: "/lishi",
        name: "lishi",
        component: () => import("../views/DFH/lishi.vue")
      }
    ]
  },
  {
    path: "/geshoufenlei",
    name: "geshoufenlei",
    component: () => import("../views/DFH/geshoufenlei.vue")
  },
  {
    path: "/paihangbang",
    name: "paihangbang",
    component: () => import("../views/DFH/paihangbang.vue")
  }
];

const router = new VueRouter({
  routes //配置路由规则的
  //linkActiveClass: 'vant-active', //覆盖默认路由高亮的类
});

export default router;
