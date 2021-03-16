<template>
  <div id="app" v-if="windowHeight">
    <Header v-if="data" :navList="data.navList" />
    <KvArea v-if="data" :scrollTop="scrollTop" :windowHeight="windowHeight" :kvArea="data.kvArea" />
    <Main
      v-if="data"
      :windowHeight="windowHeight"
      :windowWidth="windowWidth"
      :slider="data.slider"
    />
  </div>
</template>

<script>
import Header from './components/header/Header'
import KvArea from './components/KvArea.vue'
import Main from './components/Main.vue'

import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    Header,
    KvArea,
    Main
  },
  data() {
    return {
      data: null,
      scrollTop: 0,
      windowHeight: null,
      windowWidth: null,
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if(clientWidth !== this.windowWidth) {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.windowWidth = clientWidth;
        this.windowHeight = isMobile ? screen.height : document.documentElement.clientHeight;
      }
    },
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    axios.get(`${this.publicPath}data.json?${new Date().getTime()}`).then(response => {
      this.data = response.data;
      AOS.init();
    }).catch(error => {
      console.log(error);
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>

<style src='./assets/css/style.css'></style>
<style src='./assets/css/all.css'></style>
<style>
</style>
