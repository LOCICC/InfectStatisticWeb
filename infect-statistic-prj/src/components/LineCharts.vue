<template>
  <div id="LineChart"></div>
</template>

<script>
  import {init} from '../comm/js/MyEcharts/LineCharts.js'
  import {EventBus} from '../comm/js/tools/bus.js'
  import Vue from 'vue'
  export default {
    mounted () {
      init('LineChart', '新增疑似', data1, '全国')
      Vue.prototype.$Type = '新增疑似'
      EventBus.$on('ChangeLineCharts', (msg) => {
        Vue.prototype.$Type = msg
        switch (msg) {
          case '新增疑似':
            init('LineChart', msg, data1, this.$Area)
            break
          case '新增确诊':
            init('LineChart', msg, data0, this.$Area)
            break
          case '治愈':
            init('LineChart', msg, data2, this.$Area)
            break
          case '死亡':
            init('LineChart', msg, data3, this.$Area)
            break
        }
      })
      EventBus.$on('ChangeArea', (msg) => {
        init('LineChart', this.$Type, data1, msg)
      })
    }
  }
  var data0 = [2714, 4586, 7135, 11177, 16678, 22112, 27100, 31728, 33366, 48026, 51986, 54406, 58182]
  var data1 = [1291, 1032, 1347, 2103, 3156, 2447, 2147, 2097, 14840, 2420, 1933, 1639, 631]
  var data2 = [9, 10, 13, 21, 31, 47, 47, 57, 48, 53, 65, 63, 63]
  var data3 = [29, 32, 47, 21, 31, 24, 21, 17, 15, 19, 15, 10, 7]
</script>

<style scoped>
#LineChart{
  height: 380px;
  width:650px;
}
</style>
