import axios from "axios";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8800/",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    config.headers["X-AUTH"] = sessionStorage.getItem("token");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
    Message.warning(err.Message);
  }
);

export default instance;
