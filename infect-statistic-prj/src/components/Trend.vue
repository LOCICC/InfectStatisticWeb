<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="right">
    <el-tab-pane label="新增确诊趋势" name="新增确诊" style="font-size: 5px" ></el-tab-pane>
    <el-tab-pane label="新增疑似趋势" name="新增疑似"></el-tab-pane>
    <el-tab-pane label="治愈趋势" name="治愈"></el-tab-pane>
    <el-tab-pane label="死亡趋势" name="死亡"></el-tab-pane>
  </el-tabs>
</template>

<script>
  import {EventBus} from '../comm/js/tools/bus.js'
  export default {
    data() {
      return {
        activeName: '新增疑似'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.name, event)
        EventBus.$emit('ChangeLineCharts', tab.name)
      }
    }
  }
</script>

<style scoped>

</style>
