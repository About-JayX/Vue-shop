import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "@/store/getters";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: getters,
  mutations: {},
  actions: {},
  modules: { user },
});
