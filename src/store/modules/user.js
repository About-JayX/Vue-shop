import { loginAPI } from "@/api/login";
import { setToken, getToken } from "@/utils/token";
export default {
  namespaced: true,
  state: {
    token: getToken() || "",
  },
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
  },
  actions: {
    async getToken({ commit }, obj) {
      let res = await loginAPI(obj);
      commit("setToken", res.token);
    },
  },
};
