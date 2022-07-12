import store from "./store";
import router from "./router";
import { Message } from "element-ui";
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  if (!store.getters.token) {
    console.log(whiteList.includes(to.path));
    if (whiteList.includes(to.path)) {
      return next();
    } else {
      Message.error("请先登录！");
      return next("/login");
    }
  } else {
    if (to.path === "/login") {
      return next('/layout')
    } else {
      next();
    }
  }
});
