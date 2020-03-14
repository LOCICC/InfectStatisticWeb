<template>
  <div>
    <div v-for="(item,i) in items" :key="item" :class="sstt[i]" style="width: 80px;height: 65px">
      <p style="font-size: 17px;font-weight: bolder;height: 19px;color:rgb(166, 166, 166);">{{item.title}}</p>
      <p style="font-weight: bolder;font-size: 24px;margin-top: -10px">{{item.data}}</p>
      <p style="font-size: 15px;font-weight: bolder;margin-top: -25px;color:rgb(166, 166, 166);">昨日 {{item.data1}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {EventBus} from '../comm/js/tools/bus.js'
  export default {
    name: 'BigData',
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
      return {
        items: dataList,
        sstt: [
          'ss1',
          'ss2',
          'ss3',
          'ss4',
          'ss5',
          'ss6'
        ]
      }
    },
    methods: {
      getData: function (msg) {
        let that = this
        axios.get('api/getData_bottom.php', {
          params: {
          }
        }).then(function(res) {
          var ajaxi = res.data.length
          var i0 = 0
          while (i0 < ajaxi) {
            if (msg === res.data[i0]['省份名']) {
              var temp = [
              {title: '现有确诊', data: res.data[i0]['现有确诊'], data1: res.data[i0]['确诊变动']},
              {title: '现有疑似', data: res.data[i0]['现有疑似'], data1: res.data[i0]['新增疑似']},
              {title: '现有重症', data: res.data[i0]['现有重症'], data1: res.data[i0]['新增重症']},
              {title: '累计确诊', data: res.data[i0]['累计确诊'], data1: res.data[i0]['新增确诊']},
              {title: '累计治愈', data: res.data[i0]['治愈'], data1: res.data[i0]['新增治愈']},
              {title: '累计死亡', data: res.data[i0]['死亡'], data1: res.data[i0]['新增死亡']}
              ]
              that.items = temp // vue的this不能直接用在ajax的then里，要在ajax之外额外定义个that=this来调用
              window.console.log(this.items)
              break
              }
            i0 += 1
          }
        }).catch(function (error) {
          console.log(error)
        })
    }
    },
    mounted () {
      this.getData('全国')
      EventBus.$on('ChangeArea', (msg) => {
        this.getData(msg)
      })
    }
  }
  var dataList = []
</script>

<style scoped>
  .ss1{
    color: rgb(255, 97, 79);
    margin-top: 50px;
    margin-left: 0px;
  }
  .ss2{
    color: rgb(235, 145, 65);
    margin-top: -82px;
    margin-left: 150px;
  }
  .ss3{
    color: rgb(74, 111, 164);
    margin-top:-82px;
    margin-left: 300px;
  }
  .ss4{
    color: rgb(230, 31, 32);
    margin-top:50px;
    margin-left: 0px;
  }
  .ss5{
    color:rgb(111, 172, 178);
    margin-top:-82px;
    margin-left: 150px;
  }
  .ss6{
    color:rgb(0, 0, 0);
    margin-top:-82px;
    margin-left: 300px;
  }

</style>
