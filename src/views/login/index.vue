<template>
  <div>
    login page
    <button @click="login">登录</button>
    <button @click="hello">测试</button>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$api.sys.login({}).then((res) => {
        sessionStorage.setItem("token", "auth-token:12345");
        this.$router.push({
          path: "/",
        });
        console.log(res);
      });
    },
    hello() {
      this.$api.test.hello({}).then((res) => {
        console.log(res);
      });
    },
  },
  components: {},
};
</script>
<style scoped></style>
