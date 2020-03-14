<template>
  <div id="back">
    <div id="map" class="block"></div>
      <div id="timeSelector">
        <el-tooltip class="item" effect="dark" content="由于数据局限性，请选择2.13-3.9间的日期" placement="right">
          <el-date-picker
        v-model="valueOfTimeSelector"
        value-format="yyyy-MM-dd"
        style="width: 195px"
        type="date"
        @change="change"
        placeholder="选择日期">
      </el-date-picker>
        </el-tooltip>
      </div>
      <Button style="margin: 10px auto"></Button>
  </div>
</template>

<script>
import {init} from '../comm/js/MyEcharts/map.js'
import {EventBus} from '../comm/js/tools/bus.js'
import Button from '../components/MapTypeButton.vue'
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
  data() {
    return{
      valueOfTimeSelector: '2020-03-09'
    }
  },
  methods: {
    judgeDate: function(a, b) {
      var arr = a.toString().split('-')
      var starttime = new Date(arr[0], arr[1], arr[2])
      var starttimes = starttime.getTime()
      var arrs = b.toString().split('-')
      var endTime = new Date(arrs[0], arrs[1], arrs[2])
      var endTimes = endTime.getTime()
      // 进行日期比较
      if (endTimes >= starttimes) {
        return 'true'
      }else{
        return 'false'
      }
    },
    change: function() {
      if ((this.judgeDate(this.valueOfTimeSelector, '2020-03-09') === 'true') &&
        ((this.judgeDate('2020-02-13', this.valueOfTimeSelector) === 'true'))) {
        this.getData(this.valueOfTimeSelector)
      } else {
        this.$notify.error({
          title: '错误',
          message: '日期不在范围',
          position: 'top-left',
          offset: 300
        })
      }
    },
    getData: function (date) {
      axios.get('api/getData_map.php', {
        params: {
          date: date,
          province: '全国'
        }
      }).then(function(res) {
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
        if (Vue.prototype.$TypeOfMap === '现有确诊') {
          init('map', dataList0)
        } else {
          init('map', dataList1)
        }
        return 1
      }).catch(function (error) {
        dataList0 = dataListForTest
        dataList1 = dataListForTest
        init('map', dataListForTest)
        console.log(error)
        return 0
      })
    }
  },
  mounted () {
    this.getData('2020-03-09')
    Vue.prototype.$TypeOfMap = '现有确诊'
    EventBus.$on('ChangeState', (msg) => {
      if(msg === '累计确诊') {
          Vue.prototype.$TypeOfMap = '累计确诊'
          this.getData(this.valueOfTimeSelector)
      } else {
          Vue.prototype.$TypeOfMap = '现有确诊'
          this.getData(this.valueOfTimeSelector)
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
  #timeSelector{
    margin-left: 276px;
  }
  #timeSelector{
    width: 100px;
  }
</style>
