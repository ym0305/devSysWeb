<template>
  <div>
    login page
    <button @click="login">登录</button>
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
      sessionStorage.setItem("token", "loginSuccess");
      this.$router.push({
        path: "/",
      });
    },
  },
  components: {},
};
</script>
<style scoped></style>
