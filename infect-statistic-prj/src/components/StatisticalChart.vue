<template>
    <div id="StatisticalChart"></div>
</template>

<script>
  import {init} from '../comm/js/MyEcharts/StatisticalChart.js'
  import {EventBus} from '../comm/js/tools/bus.js'
  export default {
    mounted () {
      init('StatisticalChart', dataList0, '全国')
      EventBus.$on('ChangeArea', (msg) => {
        if(msg === '全国') {
          init('StatisticalChart', dataList0, '全国')
        } else {
          init('StatisticalChart', getData(), msg)
        }
      })
    }
  }
  function randomNum(minNum, maxNum) {
    if (arguments.length === 1) {
      return parseInt(Math.random() * minNum + 1, 10)
    } else if (arguments.length === 2) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    } else {
      return 0
    }
  }
  function getData () {
    var dataList = [
      ['1.27', '1.29', '1.31', '2.2', '2.4', '2.6', '2.10', '2.12', '2.14', '2.16', '2.18', '2.20', '2.22', '2.24'],
      generateData(5),
      [randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30),
        randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30),
        randomNum(0, 30), randomNum(0, 30), randomNum(0, 30)],
      [randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5),
        randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5), randomNum(0, 5),
        randomNum(0, 5), randomNum(0, 5), randomNum(0, 5)],
      [randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30),
        randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30), randomNum(0, 30),
        randomNum(0, 30), randomNum(0, 30), randomNum(0, 30)]
  ]
    return dataList
  }
  function generateData (begin) {
    var datalist = ['1.27', '1.29', '1.31', '2.2', '2.4', '2.6', '2.10', '2.12', '2.14', '2.16', '2.18', '2.20', '2.22', '2.24']
    datalist[0] = begin
    for (var i = 1; i < 10; i++) {
      datalist[i] = datalist[i - 1] + randomNum(0, 10)
    }
    for (i = 10; i < 14; i++) {
      datalist[i] = datalist[i - 1] - randomNum(0, 5)
    }
    return datalist
  }
  var dataList0 = [
    ['1.27', '1.29', '1.31', '2.2', '2.4', '2.6', '2.10', '2.12', '2.14', '2.16', '2.18', '2.20', '2.22', '2.24'],
    [4535, 7440, 11319, 16402, 22980, 29032, 33788, 37693,
      52599, 56951, 58010, 57886, 55475, 51689, 47760],
    [6973, 12167, 17988, 21558, 26395, 28942, 21675,
      16067, 8969, 7264, 5248, 5206, 4148, 2824],
    [106, 170, 259, 361, 491, 812, 1017, 1368, 1524, 1772,
      2006, 2239, 2445, 2666],
    [60, 126, 243, 457, 892, 2651, 3998, 5915, 8101, 9425,
      14387, 18279, 22907, 27353]
  ]
</script>

<style scoped>
  #StatisticalChart{
    width:420px;
    height:300px;
    border:0px solid #ddd;
    background: rgb(255, 255, 255);
  }
</style>
