<template>
  <div>
    dashboard

    <el-button size="small" @click="test">测试按钮</el-button>
    <el-button size="small" @click="test2">测试按钮2</el-button>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {};
  },
  methods: {
    test() {
      console.log(this.$api);
      this.$api.test.hello({}).then((res) => {
        console.log(res);
      });
    },
    test2() {
      console.log(this.$api);
      this.$api.test.world({}).then((res) => {
        if (res) {
          console.log(res);
        }
      });
    },
  },
  components: {},
};
</script>
<style scoped></style>
