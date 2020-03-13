import echarts from 'echarts'
import 'echarts/map/js/china'
import {EventBus} from '../../js/tools/bus.js'
import Vue from 'vue'
function init (id, data) {
  // eslint-disable-next-line no-undef
  echarts.dispose(document.getElementById(id))
  var myChart = echarts.init(document.getElementById(id))
  var option = null

  option = {
    tooltip: {
      formatter: function (params, ticket, callback) {
        return params.seriesName + '<br />' + params.name + '：' + params.value
      } // 数据格式化
    },
    toolbox: {
      // toolbox是echarts统一的工具条，支持下载、查看数据等操作
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    visualMap: {
      type: 'piecewise',
      pieces: [
        {min: 900, color: 'rgb(145, 17, 20)'},
        {min: 500, max: 900, color: 'rgb(195, 37, 38)'},
        {min: 300, max: 500, color: 'rgb(235, 59, 56)'},
        {min: 50, max: 300, color: 'rgb(248, 89, 76)'},
        {min: 20, max: 50, color: 'rgb(255, 137, 122)'},
        {min: 1, max: 20, color: 'rgb(255, 180, 170)'},
        {max: 1, color: 'rgb(255, 255, 255)'}
      ],
      left: 'left',
      top: 'bottom',
      inRange: {
        color: ['rgb(255, 255, 255)', 'rgb(204, 41, 41)', 'rgb(102, 2, 8)'] // 取值范围的颜色,数量自定
      },
      show: true // 图注
    },
    geo: {
      // geo是设置地图区域的关键，不知道为什么官方实例里竟然没给
      map: 'china',
      roam: false, // 不开启缩放和平移
      zoom: 1.23, // 视角缩放比例
      label: {
        normal: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold',
          color: '#ffffff'
        }
      },
      regions: [
        {
          name: '香港',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '澳门',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '新疆',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '安徽',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '福建',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '上海',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '台湾',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '海南',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '西藏',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        },
        {
          name: '青海',
          label: {
            normal: {
              color: '#21243d'
            }
          }
        }
      ],
      itemStyle: {
        normal: {
          borderColor: 'rgba(225, 225, 225, 0.9)', // 这就是大家熟悉的rgb+透明度的写法了
          borderWidth: '1.3' // 设置边框粗细，可以是小数
        },
        emphasis: {
          areaColor: '#f6da63', // 鼠标选择区域颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    series: [
      {
        name: '确诊人数',
        type: 'map',
        geoIndex: 0,
        data: data
      }
    ]
  }
  myChart.setOption(option)
  myChart.on('click', function (params) {
    Vue.prototype.$Area = params.name
    EventBus.$emit('ChangeArea', params.name)
  })
}
export {
  init
}
