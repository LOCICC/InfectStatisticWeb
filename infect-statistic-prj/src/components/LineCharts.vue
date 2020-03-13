<template>
  <div id="LineChart"></div>
</template>

<script>
  import {init} from '../comm/js/MyEcharts/LineCharts.js'
  import {EventBus} from '../comm/js/tools/bus.js'
  import Vue from 'vue'
  import axios from 'axios'
  export default {
    created() {
      EventBus.$off('ChangeArea') // 解决一次总线请求多次响应的问题
      EventBus.$off('ChangeLineCharts')
    },
    mounted () {
      init('LineChart', '新增疑似', data1, '全国')
      Vue.prototype.$Area = '全国'
      Vue.prototype.$Type = '新增疑似'
      EventBus.$on('ChangeLineCharts', (msg) => {
        var tempArea = this.$Area
        Vue.prototype.$Type = msg
        axios.get('api/getData_mid.php', {
          params: {
            type: msg,
            province: this.$Area
          }
        }).then(function(res) {
          dataOfLineChart = []
          var ajaxi = res.data.length
          var i0 = 0
          window.console.log(res)
          while (i0 < ajaxi) {
            var temp = res.data[i0][msg]
            dataOfLineChart.push(temp)
            i0 += 1
          }
          init('LineChart', msg, dataOfLineChart, tempArea)
          window.console.log(dataOfLineChart)
        }).catch(function (error) {
          console.log(error)
        })
      })
      EventBus.$on('ChangeArea', (msg) => {
        init('LineChart', this.$Type, data1, msg)
      })
    }
  }
  var data1 = [1291, 1032, 1347, 2103, 3156, 2447, 2147, 2097, 14840, 2420, 1933, 1639, 631]
  var dataOfLineChart = []
</script>

<style scoped>
#LineChart{
  height: 380px;
  width:650px;
}
</style>
