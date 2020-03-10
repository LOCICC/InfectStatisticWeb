import echarts from 'echarts'
import 'echarts/map/js/china'
function init (id, name, data) {
  var dom = document.getElementById(id)
  var myChart = echarts.init(dom)
  var option = null
  option = {
    title: {
      text: '湖北' + name + '趋势',
      subtext: '',
      left: 'center',
      align: 'right'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['1.27', '1.29', '1.31', '2.2', '2.4', '2.6', '2.8', '2.10', '2.12', '2.14', '2.16', '2.18', '2.20']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      x: 45,
      x2: 0,
      y2: 30
    },
    series: [{
      name: '新增确诊',
      data: data,
      type: 'line',
      smooth: true
    }]
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}
export {
  init
}
