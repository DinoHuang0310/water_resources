<template>
  <div id="main" ref="mainbox">
    <VideoBackground
      id="media-background"
      v-if="mainheight"
      :mainheight="mainheight"
      :style="{'height': windowHeight + 'px'}"
    />
    <div class="wrapper">
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
      <Report :slider="slider" />
    </div>
    <BtnetFooter :goTop="false" />
  </div>
</template>

<script>
import VideoBackground from './VideoBackground'
import Article1 from './content/Article1'
import Article2 from './content/Article2'
import Article3 from './content/Article3'
import Article4 from './content/Article4'
import Article5 from './content/Article5'
import Report from './report/Report'
import BtnetFooter from './BtnetFooter'

export default {
  components: {
    VideoBackground,
    Article1,
    Article2,
    Article3,
    Article4,
    Article5,
    Report,
    BtnetFooter
  },
  props: {
    windowHeight: {
      type: Number,
      required: true
    },
    windowWidth: {
      type: Number,
      required: true
    },
    slider: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mainheight: null
    }
  },
  watch: {
    windowWidth: function() {
      this.$nextTick(() => {
        this.setHeight();
      })
    }
  },
  methods: {
    setHeight() {
      this.mainheight = this.$refs.mainbox.clientHeight;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setHeight();
    })
  }
}
</script>

<style>
#main {
  position: relative;
}
</style>
