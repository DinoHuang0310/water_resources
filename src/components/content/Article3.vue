<template>
  <div id="article3" class="area">
    <h2><span style="margin-right: 1em">省水標章器材助攻</span>年省近1500萬噸水</h2>
    <p>自2018年4月1日起，依《自來水法》規定，洗衣機、馬桶等用水器材，必須具備省水標章，才可在國內銷售。據水利署估算，國內洗衣機、馬桶省水標章使用量，分別從2017年的61.8萬、79.2萬，一路增至2019年的67.7萬、103.2萬，2019年共計省下1466萬噸水。</p>
    <div class="content chartarea">
      <h4>近三年洗衣機、馬桶省水標章使用數量</h4>
      <div class="chartbox">
        <ECharts :options="bar" autoresize />
      </div>
    </div>
    <p>水利署資料顯示，近2年（2018、2019），具備省水標章的洗衣機、馬桶數量，年增率分別為7%、2%和11.7%、16.7%。</p>
    <div class="readmore" style="text-align: right;">
      <a href="https://pse.is/3actlu" target="_blank">詳全文>></a>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'

export default {
  components: {
    ECharts
  },
  data() {
    return {
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
        legend: {
          data: ['洗衣機省水量', '馬桶省水量']
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '4%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['2017', '2018', '2019']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: function(val) {
              const format = val / 10000;
              return format === 0 ? `0` : `${format}萬`;
            }
          }
        },
        series: [
          {
            name: '洗衣機省水量',
            type: 'bar',
            color:'#4dade8',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [617563, 660891, 676627]
          },
          {
            name: '馬桶省水量',
            type: 'bar',
            color:'#236fc1',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [791525, 884247, 1031786]
          }
        ]
      }
    }
  }
}
</script>

<style>
#article3 .chartbox {
  position: relative;
  padding-bottom: 60%;
}
#article3 .content {
  background: rgba(255, 255, 255, .8);
  margin-bottom: 2em;
}
</style>
