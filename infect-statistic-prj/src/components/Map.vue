<template>
  <div id="back">
    <div id="map"></div>
    <Button></Button>
  </div>
</template>

<script>
import {init} from '../comm/js/MyEcharts/map.js'
import {EventBus} from '../comm/js/tools/bus.js'
import Button from '../components/Button.vue'
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
    axios.get('api/getData_bottom.php', {
      params: {
        province: '全国'
      }
    }).then(function(res) {
      window.console.log(res.data)
      var ajaxi = res.data.length
      var i0 = 0
      dataList0 = []
      dataList1 = []
      while (i0 < ajaxi) {
        dataList0.push({
          name: res.data[i0]['省份名'],
          value: res.data[i0]['现有确诊']
        })
        dataList1.push({
          name: res.data[i0]['省份名'],
          value: res.data[i0]['累计确诊']
        })
        i0 += 1
      }
      init('map', dataList0)
    }).catch(function (error) {
      dataList0 = dataListForTest
      dataList1 = dataListForTest
      init('map', dataListForTest)
      console.log(error)
    })
    EventBus.$on('ChangeState', (msg) => {
      if(msg === '累计确诊') {
          init('map', dataList1)
      } else {
          init('map', dataList0)
      }
    })
  },
  components: {
    Button
  }
}
var dataList0 = []
var dataListForTest = [
  {name: '南海诸岛', value: 0},
  {name: '北京', value: 206},
  {name: '天津', value: 57},
  {name: '上海', value: 83},
  {name: '重庆', value: 239},
  {name: '河北', value: 86},
  {name: '河南', value: 377},
  {name: '云南', value: 57},
  {name: '辽宁', value: 52},
  {name: '黑龙江', value: 250},
  {name: '湖南', value: 298},
  {name: '安徽', value: 344},
  {name: '山东', value: 429},
  {name: '新疆', value: 49},
  {name: '江苏', value: 213},
  {name: '浙江', value: 447},
  {name: '江西', value: 320},
  {name: '湖北', value: 46418},
  {name: '广西', value: 143},
  {name: '甘肃', value: 13},
  {name: '山西', value: 45},
  {name: '内蒙古', value: 48},
  {name: '陕西', value: 85},
  {name: '吉林', value: 37},
  {name: '福建', value: 122},
  {name: '贵州', value: 45},
  {name: '广东', value: 581},
  {name: '青海', value: 0},
  {name: '西藏', value: 0},
  {name: '四川', value: 262},
  {name: '宁夏', value: 15},
  {name: '海南', value: 58},
  {name: '台湾', value: 25},
  {name: '香港', value: 61},
  {name: '澳门', value: 50}
]
var dataList1 = []
</script>
<style scoped>
  #back{
    width:750px;
    height:750px;
    border:0px solid #ddd;
    background: rgb(255, 255, 255);
  }
  #map{
    width:550px;
    height:500px;
    border:0px solid #ddd;
    margin: auto;
    background: rgb(255, 255, 255);
  }
</style>
