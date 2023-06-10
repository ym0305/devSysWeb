import axios from "@/plugins/axios";
export default {
  hello(params) {
    return axios.get("/test/hello", {
      params,
    });
  },

  world(params) {
    return axios.get("/test/world", {
      params,
    });
  },
};
