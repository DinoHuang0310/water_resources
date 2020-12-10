<template>
  <div>
    <video ref="myVideo" autoplay muted playsinline>
      <source src="../assets/images/water.mp4" type="video/mp4">
      <!-- <source src="https://event.businesstoday.com.tw/edm/dinoTest/water_resources/media/demo.mp4" type="video/mp4"> -->
    </video>
  </div>
</template>

<script>
export default {
  props: {
    mainheight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      videoSize: 28 // 影片總長度
    }
  },
  methods: {
    handleMousewheel(e) {
      e.preventDefault();
      const wheelDelta = event.wheelDelta;
      const currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const self = this;
      const video = this.$refs.myVideo;
      video.addEventListener('loadedmetadata', function() {
        video.pause();
        function scrollPlay() {
          const N = self.videoSize / self.mainheight;
          const frameNumber = window.pageYOffset * N;
          video.currentTime = frameNumber;
          window.requestAnimationFrame(scrollPlay);
        }
        window.requestAnimationFrame(scrollPlay);
      });
    })
    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
      window.addEventListener('mousewheel', this.handleMousewheel);
    }
  },
  beforeDestroy() {
    window.removeEventListener('mousewheel', this.handleMousewheel);
  }
}
</script>

<style>
#media-background {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: -1;
}
#media-background video {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
