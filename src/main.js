import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/permission";
import "./plugins/element.js";

// 导入全局样式
import "@/styles/global.css";

// 导入字体库
import "@/assets/fonts/iconfont.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
