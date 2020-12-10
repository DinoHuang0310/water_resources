<template>
  <div id="report" class="area">
    <h2><span style="margin-right: 1em">學者建議、他國經驗</span>助台灣遠離缺水風險</h2>
    <p>政府、產業攜手節水，盼為台灣留住更多珍貴的水資源，在此同時，學者意見、他國政府和產業的經驗，也可做為借鏡，助台灣遠離缺水風險。</p>
    <div class="report-box" v-if="slider">
      <BtnetSlider :sliderData="slider" />
    </div>
  </div>
</template>

<script>
import BtnetSlider from './BtnetSlider'

export default {
  components: {
    BtnetSlider
  },
  props: {
    slider: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
#report {
  overflow: hidden;
}
.report-box {
  /* padding: 2em 2%; */
}
.report-box h3 {
  text-align: center;
  font-size: 1.4em;
  margin: 0 0 0.5em;
}

</style>
