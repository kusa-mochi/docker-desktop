<template>
  <div id="images">
    <el-table
      :data="tableData"
      height="250"
      :show-header="false"
      style="width: 100%"
    >
      <el-table-column prop="date" width="180"> </el-table-column>
      <el-table-column prop="name" width="180"> </el-table-column>
      <el-table-column prop="address"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  name: "Images"
};
</script>

<style lang="scss" scoped>
#images {
}
</style>
