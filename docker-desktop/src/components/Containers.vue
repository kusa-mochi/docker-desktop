<template>
  <div id="containers">
    <el-table
      :data="tableData"
      height="250"
      :show-header="false"
      style="width: 100%"
    >
      <el-table-column prop="imageName" width="180"> </el-table-column>
      <el-table-column prop="imageId" width="180"> </el-table-column>
      <el-table-column :prop="`${repository}:${tag}`"> </el-table-column>
      <el-table-column prop="size"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        },
        {
          imageId: "f643c72bc252",
          imageName: "2016-05-03",
          repository: "ubuntu",
          size: "72.9MB",
          tag: "20.04"
        }
      ]
    };
  },
  name: "Containers"
};
</script>

<style lang="scss" scoped>
#containers {
}
</style>
