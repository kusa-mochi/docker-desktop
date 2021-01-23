<template>
  <div id="containers">
    <el-table :data="tableData" height="500">
      <el-table-column label="Container ID" prop="containerId">
      </el-table-column>
      <el-table-column label="Image" prop="image"></el-table-column>
      <el-table-column label="Name" prop="containerName"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="112">
        <template>
          <el-button
            type="primary"
            icon="el-icon-caret-right"
            circle
          ></el-button>
          <el-button type="info" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        },
        {
          containerId: "f643c72bc252",
          image: "abcde/ubuntu:20.04",
          containerName: "my-container"
        }
      ]
    };
  },
  name: "Containers"
};
</script>

<style lang="scss" scoped></style>
