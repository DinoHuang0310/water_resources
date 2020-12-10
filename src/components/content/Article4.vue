<template>
  <div id="article4" class="area">
    <h2><span style="margin-right: 1em">台積電一滴水用3.5次</span>友達製程用水回收率超過92%</h2>
    <p>台積電自2016年以來，每年節水量持續上升，從2016年的141萬公噸，提高到2019年的793萬公噸；友達也在2019年創下歷年最佳節水成效，不但總用水量較前一年減少約590萬噸，單位面積用水量，更來到每平方公尺0.35噸的新低，製程水回收率則超越目標，創下92.3%新高。</p>
    <div class="content chartarea">
      <Slick :options="slickOptions">
        <div>
          <h4>台積電歷年節水量</h4>
          <div class="chartbox">
            <ECharts :options="bar" autoresize />
          </div>
          <p><small>由台積電CSR報告書內容可得知，該公司節水量逐年上升。</small></p>
        </div>
        <div>
          <h4>台積電水資源回收量及回收率</h4>
          <div class="chartbox">
            <ECharts :options="bar2" autoresize />
          </div>
          <p><small>台積電在製程中產生的廢水，會透過38種機台分流，使一滴水可用3.5次。</small></p>
        </div>
        <div>
          <h4>友達歷年製程總用水量及單位面積製程用水量</h4>
          <div class="chartbox">
            <ECharts :options="bar3" autoresize />
          </div>
          <p><small>經過多年努力，友達部分廠區透過多階段回收再利用方式，將製程用水全回收，達成「不再讓一滴生產用水流入自然水域」的成績。</small></p>
        </div>
      </Slick>
    </div>
    <div class="readmore" style="text-align: right;">
      <a href="https://pse.is/3ap2rp" target="_blank">詳全文>></a>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import ECharts from 'vue-echarts'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

export default {
  components: {
    Slick,
    ECharts
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed : 5000,
        adaptiveHeight: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              arrows: false,
              dots: true
            }
          },
        ]
      },
      bar: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['累積節水量(萬公噸)', '新增節水量(萬公噸)']
        },
        xAxis: {
          type: 'category',
          data: ['2016', '2017', '2018', '2019']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '累積節水量(萬公噸)',
            type: 'bar',
            stack: '總量',
            color:'#236fc1',
            label: {
              normal: {
                show: true,
                textStyle: { color: '#ffffff' }
              }
            },
            data: [141, 338, 465, 465]
          },
          {
            name: '新增節水量(萬公噸)',
            type: 'bar',
            stack: '總量',
            color:'#4dade8',
            label: {
              normal: {
                show: true,
                textStyle: { color: '#ffffff' }
              }
            },
            data: [null, null, null, 328]
          }
        ]
      },
      bar2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['總回收水量(萬公噸)', '平均製程用水回收率(%)']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 150
          },
          {
            type: 'value',
            min: 0,
            max: 100,
            // interval: 5,
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ],
        series: [
          {
            name: '總回收水量(萬公噸)',
            type: 'bar',
            data: [85.6, 94.3, 103.4, 129, 133.6],
            color:'#236fc1',
            label: {
              normal: {
                show: true
              }
            }
          },
          {
            name: '平均製程用水回收率(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [87.3, 87.4, 87.5, 87.5, 86.7],
            color:'#ff5722',
          }
        ]
      },
      bar3: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['製程總用水量(百萬公噸)', '單位面積製程用水量(公噸/平方公尺)']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 30
          },
          {
            type: 'value',
            min: 0,
            max: 0.5
          }
        ],
        series: [
          {
            name: '製程總用水量(百萬公噸)',
            type: 'bar',
            data: [25, 24.4, 28.48, 28.7, 22.88],
            color:'#236fc1',
            label: {
              normal: {
                show: true
              }
            }
          },
          {
            name: '單位面積製程用水量(公噸/平方公尺)',
            type: 'line',
            yAxisIndex: 1,
            data: [0.47, 0.43, 0.43, 0.42, 0.35],
            color: '#ff5722'
          }
        ]
      }
    }
  }
}
</script>

<style>
#article4 .chartbox {
  position: relative;
  padding-bottom: 60%;
}
#article4 .content {
  background: rgba(255, 255, 255, .8);
  margin-bottom: 3em;
}
.chartarea .slick-arrow {
  position: absolute;
  top: 50%;
  font-size: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
}
.chartarea .slick-arrow::before {
  display: block;
  width: 40px;
  font-size: 50px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  line-height: 1;
}
.chartarea .slick-dots {
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 0.5em;
}
.chartarea .slick-dots li {
  display: inline-block;
}
.chartarea .slick-dots li button {
  font-size: 0;
  background: none;
  border: none;
  padding: 5px 7px;
}
.chartarea .slick-dots li button::before {
  content: '';
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #236fc1;
  opacity: .4;
}
.chartarea .slick-dots li.slick-active button::before {
  opacity: 1;
}
.chartarea .slick-disabled {
  opacity: .3;
}
</style>
