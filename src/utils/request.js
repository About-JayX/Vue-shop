import axios from "axios";

const request = axios.create({
  baseURL: "http://122.112.219.250:8888/api/private/v1",
});

// 请求拦截器
request.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (config) => {
    let { status } = config.data.meta;
    if (status !== 200)
      return Promise.reject(new Error("用户名或密码输入错误！"));
    return config.data.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
