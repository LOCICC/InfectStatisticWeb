<template>
  <div id="button">
    <el-radio-group v-model="radio1" text-color="rgb(255,255,255)" fill="rgb(200, 200, 200)">
      <el-radio-button label="现有确诊" @click.native="sendMessage('现有确诊')"></el-radio-button>
      <el-radio-button label="累计确诊" @click.native="sendMessage('累计确诊')"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  import {EventBus} from '../comm/js/tools/bus.js'
  export default {
    created() {
      EventBus.$off('ChangeArea') // 解决一次总线请求多次响应的问题
      EventBus.$off('ChangeLineCharts')
      EventBus.$off('ChangeState')
    },
    data () {
      return {
        radio1: '现有确诊'// 设置默认选中
      }
    },
    destroyed() {
      EventBus.$off('ChangeArea')
      EventBus.$off('ChangeLineCharts')
      EventBus.$off('ChangeState')
    },
    methods: {
      sendMessage: function (msg) {
        EventBus.$emit('ChangeState', msg)
      }
    }
  }
</script>

<style scoped>
</style>
