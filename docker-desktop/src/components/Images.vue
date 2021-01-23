<template>
  <div id="images">
    <el-table :data="tableData" height="500">
      <el-table-column label="Repository" prop="repository"></el-table-column>
      <el-table-column label="Tag" prop="tag"></el-table-column>
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Size" prop="size"></el-table-column>
      <el-table-column fixed="right" label="Operations" width="168">
        <template>
          <el-button
            type="primary"
            icon="el-icon-caret-right"
            circle
          ></el-button>
          <el-button type="secondary" icon="el-icon-upload2" circle></el-button>
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
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
        },
        {
          repository: "ubuntu",
          tag: "20.04",
          id: "f643c72bc252",
          size: "72.9MB"
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
