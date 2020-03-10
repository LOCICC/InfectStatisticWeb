import echarts from 'echarts'
import 'echarts/map/js/china'
// eslint-disable-next-line no-unused-vars
function init (id, dataList, name) {
  var dom = document.getElementById(id)
  var myChart = echarts.init(dom)
  var option = null
  var itemStyle = {
    normal: {
    },
    emphasis: {
      color: ['#46b3e6'],
      barBorderWidth: 1,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0,0,0,0.5)'
    }
  }
  option = {
    title: {
      text: name + '疫情概览'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [0, 0, 0, 0]
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    xAxis: {
      type: 'category',
      data: dataList[0]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '现有确诊',
        type: 'line',
        data: dataList[1],
        color: 'rgb(232, 49, 50)',
        lineStyle: {
          width: 3
        },
        smooth: true
      },
      {
        name: '现有疑似',
        type: 'line',
        data: dataList[2],
        color: 'rgb(254, 150, 136)',
        lineStyle: {
          width: 3
        },
        smooth: true
      },
      {
        name: '累计死亡',
        type: 'bar',
        stack: '总量',
        color: 'rgb(127, 127, 127)',
        data: dataList[3],
        smooth: true
      },
      {
        name: '累计治愈',
        type: 'bar',
        stack: '总量',
        data: dataList[4],
        color: 'rgb(110, 174, 181, 0.7)',
        itemStyle: itemStyle,
        smooth: true
      }
    ]
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
export {
  init
}
