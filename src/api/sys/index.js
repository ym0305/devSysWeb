import axios from "@/plugins/axios";
export default {
  login(params) {
    return axios.post("/sys/login", {
      params,
    });
  },
};
