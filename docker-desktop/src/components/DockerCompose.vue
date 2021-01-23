<template>
  <div id="docker-compose">
    <div class="inputs">
      <el-input
        placeholder="docker-compose.yml path"
        v-model="ymlFilePath"
        clearable
        class="yml-path"
      >
        <el-upload
          slot="append"
          class="yml-select-button"
          action="#"
          :file-list="ymlFileList"
          :on-change="OnFileChanged"
          :show-file-list="false"
        >
          <el-button>Select File...</el-button>
        </el-upload>
      </el-input>
      <el-button-group>
        <el-button>Up</el-button>
        <el-button>Down</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ymlFileList: [],
      ymlFilePath: ""
    };
  },
  methods: {
    OnFileChanged(file, fileList) {
      if (file === null || fileList === null) {
        return;
      }
      console.log(file);
      console.log(fileList);
      this.ymlFileList = [
        {
          name: file.name
        }
      ];
      this.ymlFilePath = file.name;
    }
  },
  name: "DockerCompose"
};
</script>

<style lang="scss" scoped>
#docker-compose {
  .inputs {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .yml-path {
    width: 400px;
    margin-right: 24px;
  }
}
</style>
