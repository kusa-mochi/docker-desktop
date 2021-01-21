<template>
  <div id="app">
    <el-tabs tab-position="left">
      <el-tab-pane label="Containers">
        <containers></containers>
      </el-tab-pane>
      <el-tab-pane label="Images">
        <images></images>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Containers from "@/components/Containers.vue";
import Images from "@/components/Images.vue";

export default {
  components: {
    Containers,
    Images
  },
  name: "app"
};
</script>

<style lang="scss" scoped></style>
