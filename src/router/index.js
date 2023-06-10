import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const HOME_PAGE = "/";
const LOGIN_PAGE = "/login";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由前置处理器
// token无效时跳转到登录页面
// token有效时前往登录页面，
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token");
  console.log("to", to);
  if (to.fullPath === LOGIN_PAGE) {
    if (token) {
      router.push({
        path: HOME_PAGE,
      });
    } else {
      next();
    }
  } else {
    if (token) {
      next();
    } else {
      router.push({
        path: LOGIN_PAGE,
      });
    }
  }
});

export default router;
