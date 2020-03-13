import echarts from 'echarts'
import 'echarts/map/js/china'
function init (id, name, data, area) {
  var dom = document.getElementById(id)
  echarts.dispose(document.getElementById(id))
  var myChart = echarts.init(dom)
  var option = null
  option = {
    title: {
      text: area + name + '趋势',
      subtext: '',
      left: 'center',
      align: 'right'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['2.13', '2.14', '2.15', '2.16', '2.17', '2.18', '2.19', '2.20', '2.21', '2.22', '2.23', '2.24',
        '2.25', '2.26', '2.27', '2.28', '2.29', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9']
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
      name: name,
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
