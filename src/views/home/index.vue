<template>
  <div>
    home page
    <button @click="logout">退出</button>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      this.$router.push({
        path: "/login",
      });
    },
  },
  components: {},
};
</script>
<style scoped></style>
