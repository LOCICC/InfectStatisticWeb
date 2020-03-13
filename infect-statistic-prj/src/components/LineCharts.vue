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
      EventBus.$off('ChangeState')
    },
    destroyed() {
      EventBus.$off('ChangeArea')
      EventBus.$off('ChangeLineCharts')
      EventBus.$off('ChangeState')
    },
    mounted () {
      Vue.prototype.$Area = '全国'
      Vue.prototype.$Type = '新增疑似'
      axios.get('api/getData_mid.php', {
        params: {
          type: '新增疑似',
          province: this.$Area
        }
      }).then(function(res) {
        dataOfLineChart = []
        var ajaxi = res.data.length
        var i0 = 0
        while (i0 < ajaxi) {
          var temp = res.data[i0]['新增疑似']
          dataOfLineChart.push(temp)
          i0 += 1
        }
        init('LineChart', '新增疑似', dataOfLineChart, '全国')
      }).catch(function (error) {
        console.log(error)
      })
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
          while (i0 < ajaxi) {
            var temp = res.data[i0][msg]
            dataOfLineChart.push(temp)
            i0 += 1
          }
          init('LineChart', msg, dataOfLineChart, tempArea)
        }).catch(function (error) {
          console.log(error)
        })
      })
      EventBus.$on('ChangeArea', (msg) => {
        var tempType = this.$Type
        axios.get('api/getData_mid.php', {
          params: {
            type: this.$Type,
            province: msg
          }
        }).then(function(res) {
          dataOfLineChart = []
          var ajaxi = res.data.length
          var i0 = 0
          while (i0 < ajaxi) {
            var temp = res.data[i0][tempType]
            dataOfLineChart.push(temp)
            i0 += 1
          }
          init('LineChart', tempType, dataOfLineChart, msg)
        }).catch(function (error) {
          console.log(error)
        })
      })
    }
  }
  var dataOfLineChart = []
</script>

<style scoped>
#LineChart{
  height: 380px;
  width:650px;
}
</style>
