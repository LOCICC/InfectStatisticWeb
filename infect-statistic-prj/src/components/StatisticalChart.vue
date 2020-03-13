<template>
    <div id="StatisticalChart"></div>
</template>

<script>
  import {init} from '../comm/js/MyEcharts/StatisticalChart.js'
  import {EventBus} from '../comm/js/tools/bus.js'
  import axios from 'axios'
  export default {
    created() {
      EventBus.$off('ChangeArea') // 解决一次总线请求多次响应的问题
    },
    mounted () {
      axios.get('api/getData.php', {
        params: {
          province: '全国'
        }
      }).then(function(res) {
        window.console.log(res.data)
        var ajaxi = res.data.length
        var i0 = 0
        dataList0 = []
        dataOfTime = []
        dataOfCure = []
        dataOfDeath = []
        dataOfIp = []
        dataOfSp = []
        while (i0 < ajaxi) {
          dataOfTime.push(res.data[i0]['日期'])
          dataOfIp.push(res.data[i0]['现有确诊'])
          dataOfSp.push(res.data[i0]['现有疑似'])
          dataOfDeath.push(res.data[i0]['累计死亡'])
          dataOfCure.push(res.data[i0]['累计治愈'])
          i0 += 1
        }
        dataList0.push(dataOfTime)
        dataList0.push(dataOfIp)
        dataList0.push(dataOfSp)
        dataList0.push(dataOfDeath)
        dataList0.push(dataOfCure)
        init('StatisticalChart', dataList0, '全国')
      }).catch(function (error) {
        console.log(error)
      })
      EventBus.$on('ChangeArea', (msg) => {
          axios.get('api/getData.php', {
            params: {
              province: msg
            }
          }).then(function(res) {
            window.console.log(res.data)
            var ajaxi = res.data.length
            var i0 = 0
            dataList0 = []
            dataOfTime = []
            dataOfCure = []
            dataOfDeath = []
            dataOfIp = []
            dataOfSp = []
            while (i0 < ajaxi) {
              dataOfTime.push(res.data[i0]['日期'])
              dataOfIp.push(res.data[i0]['现有确诊'])
              dataOfSp.push(res.data[i0]['现有疑似'])
              dataOfDeath.push(res.data[i0]['累计死亡'])
              dataOfCure.push(res.data[i0]['累计治愈'])
              i0 += 1
            }
            dataList0.push(dataOfTime)
            dataList0.push(dataOfIp)
            dataList0.push(dataOfSp)
            dataList0.push(dataOfDeath)
            dataList0.push(dataOfCure)
            init('StatisticalChart', dataList0, msg)
          }).catch(function (error) {
            console.log(error)
          })
      })
    }
  }
  var dataList0 = []
  var dataOfTime = []
  var dataOfIp = []
  var dataOfSp = []
  var dataOfDeath = []
  var dataOfCure = []
</script>

<style scoped>
  #StatisticalChart{
    width:420px;
    height:300px;
    border:0px solid #ddd;
    background: rgb(255, 255, 255);
  }
</style>
