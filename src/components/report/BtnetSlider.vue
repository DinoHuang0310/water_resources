<template>
  <div class="btnetSlider">
    <slick ref="slick" :options="slickOptions">
      <div
        class="slider-list"
        v-for="list in sliderData"
        :key="list.index"
      >
        <a
          :href="list.url"
          target="_blank"
        >
          <figure>
            <div :class="list.isMedia ? 'btnet-slider-mediabox' : ''" >
              <img :src="list.image" :alt="list.title" />
            </div>
            <figcaption>
              <span class="title">{{ list.title }}</span>
              <small><span>{{ list.description }}</span></small>
              <div class="readmore" style="text-align: right;">
                <button>詳全文&gt;&gt;</button>
              </div>
            </figcaption>
          </figure>
        </a>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  props: {
    sliderData: {
      type: Array,
      required: true
    }
  },
  components: {
    Slick,
  },
  data: function() {
    return {
      slickOptions: {
        infinite: true,
        autoplay: true,
        autoplaySpeed : 3000,
        centerMode: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1981,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1
            }
          },
        ]
      },
    }
  }
}
</script>

<style>
.btnetSlider {
  position: relative;
  margin: 0 50px;
}
.btnetSlider .slider-list {
  padding: 0.5em;
}
.btnetSlider .slider-list a {
  display: block;
  background: white;
  padding: 0.8em;
}
.btnet-slider-mediabox {
  position: relative;
}
.btnet-slider-mediabox:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: .5s;
  z-index: 1;
}
.btnet-slider-mediabox:after {
  content: '\f04b';
  font: normal normal normal 14px/1 FontAwesome;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  color: white;
  border: solid 2px white;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, .5);
  text-shadow: 0 0 15px rgba(0, 0, 0, .5);
  opacity: .6;
  transition: .5s;
  z-index: 1;
}
.btnetSlider figure {
  position: relative;
  opacity: 1;
  transition: .5s;
}
.btnetSlider figure > div {
  position: relative;
  padding-bottom: 75%;
  overflow: hidden;
}
.btnetSlider figure > div img {
  position: absolute;
  max-width: inherit;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btnetSlider figcaption {
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.5em 0;
  text-align: left;
  opacity: 1;
  transition: .5s;
}
.btnetSlider figcaption span {
  width: 100%;
  display: block;
  display: -webkit-box;
  max-height: 52px;
  font-size: 20px;
  line-height: 1.3;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.btnetSlider figcaption span.title {
  color: #003459;
  font-weight: bold;
}
.btnetSlider figcaption small {
  display: block;
  margin-top: 0.5em;
}
.btnetSlider figcaption .readmore {
  margin: 1em 0 0;
  font-size: 0.9em;
}
.swiper-slide > a {
  display: block;
}
.btnetSlider .slick-arrow {
  position: absolute;
  top: 50%;
  font-size: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
}
.btnetSlider .slick-arrow::before {
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
.slick-next {
  right: 0;
  transform: translate(100%, -50%);
}
.slick-next::before {
  content: '\f105';
}
.slick-prev {
  left: 0;
  transform: translate(-100%, -50%);
}
.slick-prev::before {
  content: '\f104';
}
.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-pagination {
  transform: translate3d(0, 100%, 0);
  width: 100%;
}
.swiper-pagination-bullet {
  margin: 0.4em;
}

@media (hover: hover) {
  .swiper-slide > a:hover .btnet-slider-mediabox:before {
    background: rgba(0, 0, 0, .75);
  }
  .swiper-slide > a:hover .btnet-slider-mediabox:after {
    opacity: 1;
    box-shadow: 0 0 15px rgba(255, 255, 255, .5);
    text-shadow: 0 0 15px rgba(255, 255, 255, .5);
  }
  .btnetSlider figure:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .swiper-slide > a:hover .btnet-slider-mediabox:before {
    background: rgba(0, 0, 0, .75);
  }
  .swiper-slide > a:hover .btnet-slider-mediabox:after {
    opacity: 1;
    box-shadow: 0 0 15px rgba(255, 255, 255, .5);
    text-shadow: 0 0 15px rgba(255, 255, 255, .5);
  }
  .btnetSlider figure:hover {
    opacity: .7;
  }
}

@media screen and (max-width: 1440px) {
  .btnetSlider figcaption span {
    max-height: 46.8px;
    font-size: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .btnetSlider figcaption span {
    max-height: 41.6px;
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .btnetSlider {
    margin: 0 30px;
  }
  .btnetSlider .slider-list {
    padding: 0;
  }
}

</style>
