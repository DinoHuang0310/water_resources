<template>
  <div id="kvarea" :style="{'height': windowHeight + 'px'}">
    <div id="kv-background" :style="{'transform': setScale(), 'opacity': setOpacity()}">
      <img src="../assets/images/kv_background.png" alt="" @load="imgLoaded" />
      <ul>
        <li v-for="(list, index) in kvArea.textArr" :key="index">
          <VueTyper
            :text='list'
            :repeat='0'
            :typeDelay="50"
            :preTypeDelay="(index + 1) * 300"
            @typed='onTyped'
          />
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <h2 :class="textAnimateDone >= kvArea.textArr.length ? 'show' : null">{{ kvArea.titles.lineone }}</h2>
      <h2 :class="textAnimateDone >= kvArea.textArr.length ? 'show' : null">{{ kvArea.titles.linetwo }}<br>{{ kvArea.titles.linethree }}</h2>
      <h1 :class="textAnimateDone >= kvArea.textArr.length ? 'show' : null">
        <picture>
          <source media="(min-width: 481px)" srcset="../assets/images/slogan.png">
          <source media="(max-width: 480px)" srcset="../assets/images/slogan_m.png">
          <img src="../assets/images/slogan.png" alt="乾旱終將成為台灣的宿命?" />
        </picture>
      </h1>
    </div>
    <transition name="fade">
      <div class="loading" v-if="loading">
        <img src="../assets/images/loading.svg" alt="loading..." />
      </div>
    </transition>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  },
  props: {
    windowHeight: {
      type: Number,
      required: true
    },
    scrollTop: {
      type: Number,
      required: true
    },
    kvArea: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      imgLoader: 0,
      textAnimateDone: 0
    }
  },
  methods: {
    imgLoaded() {
      this.imgLoader++;
      if(this.imgLoader !== 0) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    },
    onTyped() {
      this.textAnimateDone++;
    },
    setScale() {
      if(this.scrollTop < this.windowHeight) {
        const percentage = 0.8 / this.windowHeight;
        return `scale(${this.scrollTop * percentage + 1})`;
      }
    },
    setOpacity() {
      if(this.scrollTop < this.windowHeight) {
        const percentage = 1 / this.windowHeight * -1;
        return `${this.scrollTop * percentage + 1}`;
      }
    }
  }
}
</script>

<style>
.loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 999;
}
#kvarea .loading img {
  display: inline-block;
  width: 50px;
  height: 50px;
  -webkit-animation: setRotate 2s linear infinite;
  -moz-animation: setRotate 2s linear infinite;
  animation: setRotate 2s linear infinite;
}
#kvarea {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background: black;
}
#kv-background { /* ie11 需hack */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#kv-background img {
  position: absolute;
  max-width: initial;
  height: 100%;
  min-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .75;
}
#kvarea h2 {
  color: white;
  text-align: center;
  margin-bottom: 0.5em;
  font-family: 'Noto Serif TC', 'Noto Sans TC', serif;
  letter-spacing: 0.1em;
  opacity: 0;
}
#kvarea h2.show {
  -webkit-animation: fadeIn 2s forwards;
  -moz-animation: fadeIn 2s forwards;
  animation: fadeIn 2s forwards;
}
#kvarea ul {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: white;
}
#kvarea ul li {
  position: absolute;
  white-space: nowrap;
}
#kvarea ul li:first-child {
  top: 25%;
  left: 13%;
}
#kvarea ul li:nth-child(2) {
  top: 30%;
  left: 70%;
}
#kvarea ul li:nth-child(3) {
  top: 70%;
  left: 7%;
}
#kvarea ul li:nth-child(4) {
  top: 85%;
  left: 30%;
}
#kvarea ul li:nth-child(5) {
  top: 80%;
  left: 58%;
}
#kvarea ul li:nth-child(6) {
  top: 70%;
  left: 70%;
}
#kvarea ul li:nth-child(7) {
  top: 47%;
  left: 2%;
}
.vue-typer .custom.char.typed {
  margin-right: 0.1em;
  color: white;
}
.vue-typer .vue-typer-caret-blink,
.vue-typer .vue-typer-caret-blink.complete,
.vue-typer .complete
{
  background-color: white;
}
.vue-typer .vue-typer-caret-blink.complete {
  display: inline-block;
}
#kvarea h1 {
  opacity: 0;
}
#kvarea h1.show {
  -webkit-animation: fadeIn 2s forwards;
  -moz-animation: fadeIn 2s forwards;
  animation: fadeIn 2s forwards;
  animation-delay: 0.5s;
}
#kvarea h1 img {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 1600px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1024px) {
  #kvarea ul li:nth-child(7) {
    left: -5%;
  }
}

/* pad 直式 */
@media screen and (min-width: 768px) and (orientation: portrait) {
  #kvarea ul li:nth-child(7) {
    top: 11%;
    left: 49%;
  }
}

@media screen and (max-width: 767px) {
  #kvarea h1 {
    margin-top: 0;
  }
  #kvarea ul li {
    opacity: .5;
  }
}

@media screen and (max-width: 767px) and (orientation: landscape) {
  #kvarea h1 {
    margin-bottom: 0;
  }
  #kvarea h2 {
    font-size: 4vw;
  }
  #kvarea ul li:first-child {
    top: 12%;
  }
  #kvarea ul li:nth-child(3) {
    top: 78%;
    left: -4%;
  }
  #kvarea ul li:nth-child(4) {
    top: 95%;
    left: 9%;
  }
  #kvarea ul li:nth-child(6) {
    top: 89%;
  }
  #kvarea ul li:nth-child(7) {
    left: -29%;
  }
}

@media screen and (max-width: 480px) {
  #kvarea h1 img {
    width: 90%;
  }
  #kvarea ul li:first-child {
    top: 19%;
    left: 55%;
  }
  #kvarea ul li:nth-child(2) {
    top: 25%;
    left: 18%;
  }
  #kvarea ul li:nth-child(3) {
    top: 72%;
  }
  #kvarea ul li:nth-child(4) {
    top: 94%;
    left: 23%;
  }
  #kvarea ul li:nth-child(5) {
    top: 84%;
    left: -6%;
  }
  #kvarea ul li:nth-child(6) {
    top: 80%;
    left: 65%;
  }
  #kvarea ul li:nth-child(7) {
    top: 14%;
    left: -7%;
  }
}

</style>
