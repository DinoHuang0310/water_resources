<template>
  <div id="article2" class="area">
    <h2><span style="margin-right: 1em">台水、北水攜手合作</span>一年省下1.27座石門水庫水量</h2>
    <p>台灣自來水公司自2013年起，開始執行「降低漏水率計畫」，漏水率預計可從2012年的19.55%，降至2022年的13.45%，且期待能在2031年，進一步降至10%；截至2019年底，漏水率已降至14.49%。另一方面，台北自來水事業處，也持續進行漏水改善計畫，2002年，台北的漏水率一度高達28.44%，但2019年已降至12.71%。</p>
    <ul class="half chartarea">
      <li>
        <h4>台灣自來水公司降低漏水率計畫(2012-2022年)</h4>
        <div class="chartbox">
          <ECharts :options="bar" autoresize />
        </div>
      </li>
      <li>
        <h4>台北自來水事業處漏水改善計畫(2002-2019年)</h4>
        <div class="chartbox">
          <ECharts :options="bar2" autoresize />
        </div>
      </li>
    </ul>
    <p>據水利署估算，2019年，台水公司減少的漏水量，約1.7億噸；北水處減少的漏水量約1.1億噸，共計2.8億噸，大約是<mark>1.27座石門水庫的容量</mark>。</p>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'

export default {
  components: {
    ECharts
  },
  data() {
    return {
      bar: {
        title: {
          text: '台灣自來水公司'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '8%',
            containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [19.55, 18.9, 18.25, 17.6, 16.95, 16.35, 15.58,15.45, 15.05, 14.65, 14.25],
          type: 'bar',
          name: '漏水率%',
          stack: '總量',
          color:'#00b4d8',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
        }]
      },
      bar2: {
        title: {
          text: '台北自來水事業處',
          left:'42%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          top: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012' , '2013', '2014', '2015', '2016', '2017', '2018', '2019']
        },
        series: [
          {
            name: '漏水率%',
            type: 'bar',
            stack: '總量',
            color:'#66aad6',
            label: {
              show: true,
              position: 'insideLeft',
              width:'2%'
            },
            data: [28.44, 27.25, 26.7, 26.99, 25.77, 24.19, 23.16, 22.02, 21.6, 20.51, 19.1, 17.88, 16.71, 15.88, 14.95, 14.18, 13.52, 12.71]
          }
        ]
      }
    }
  },
}
</script>

<style>
#article2 .half li {
  width: 45%;
  margin-bottom: 2em;
  background: rgba(255, 255, 255, .8);
}
#article2 .chartbox {
  position: relative;
  padding-bottom: 100%;
}

@media screen and (max-width: 480px) {
  #article2 .half li {
    width: 100%;
  }
}

</style>
