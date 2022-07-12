import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: () => import("@/views/login") },
  { path: "/layout", name: "layout", component: () => import("@/layout") },
  { path: "*", name: "notFound", component: () => import("@/views/404.vue") },
];

const router = new VueRouter({
  routes,
});
export default router;
