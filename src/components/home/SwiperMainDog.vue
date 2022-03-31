<template>
  <div style="display: flex; background: #000">
    <div :style="{ width: windowWidth * 0.8 + 'px' }">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :thumbs="{ swiper: thumbSwiper }"
        :effect="'cube'"
        :keyboard="{ enabled: true, onlyInViewport: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- :thumbs="{ swiper:thumbSwiper }" -->
        <swiper-slide v-for="(picture, index) in pictures" :key="index">
          <div
            class="swiper-picture-box"
            :style="{
              width: windowWidth * 0.8 + 'px',
              height: windowHeight + 'px',
            }"
          >
            <dog-picture
              :hover-title="picture.hoverTitle"
              :picture-src="picture.src"
              :picture-irc-src="picture.ircSrc"
              :title="picture.title"
              :picture-index="index"
              :isThumbs="false"
              :figureWidth="100"
            >
            </dog-picture>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div
      :style="{ width: windowWidth * 0.2 + 'px', height: windowHeight + 'px' }"
      class="thumb-swiper"
    >
      <swiper
        :modules="thumbModules"
        watch-slides-progress
        @swiper="setThumbSwiper"
        :slides-per-view="4"
        :free-mode="false"
        :direction="'vertical'"
        :style="{ height: 100 + '%' }"
      >
        <swiper-slide
          class="thumb-slide"
          v-for="(picture, index) in pictures"
          :key="index"
        >
          <div
            class="swiper-picture-box"
            :style="{ width: windowWidth * 0.2 + 'px' }"
            ref="thumbSlide"
          >
            <dog-picture
              :hover-title="picture.hoverTitle"
              :picture-src="picture.src"
              :title="picture.title"
              :picture-index="index"
              :figureWidth="100"
              :isThumbs="true"
            ></dog-picture>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  EffectCube,
  FreeMode,
  Keyboard,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/thumbs/thumbs.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/keyboard/keyboard.min.css";
import DogPicture from "./DogPicture.vue";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    DogPicture,
  },
  data() {
    return {
      thumbSlideHeight: 0,
      modules: [Pagination, Scrollbar, A11y, Thumbs, EffectCube, Keyboard],
      thumbModules: [Thumbs, FreeMode],
      thumbSwiper: null,
      thumbSlideHeight: this.$store.state.windowHeight / 4,
    };
  },
  computed: {
    windowHeight() {
      this.thumbSlideHeight = this.$store.state.windowHeight / 4;
      return this.$store.state.windowHeight;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  props: {
    pictures: Array,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      console.log(swiper);
    },
    setThumbSwiper(swiper) {
      this.thumbSwiper = swiper;
    },
  },
  watch: {
    thumbSlideHeight(newValue, oldValue) {
      for (let index = 0; index < this.$refs.thumbSlide.length; index++) {
        const element = this.$refs.thumbSlide[index];
        element.style.height = newValue + "px";
      }
      for (
        let index = 0;
        index < document.getElementsByClassName("thumb-slide").length;
        index++
      ) {
        const element = document.getElementsByClassName("thumb-slide")[index];
        element.style.height = newValue + "px";
      }
    },
  },
  mounted() {
    for (let index = 0; index < this.$refs.thumbSlide.length; index++) {
      const element = this.$refs.thumbSlide[index];
      console.log(element);
      element.style.height = this.thumbSlideHeight + "px";
    }
    for (
      let index = 0;
      index < document.getElementsByClassName("thumb-slide").length;
      index++
    ) {
      const element = document.getElementsByClassName("thumb-slide")[index];
      element.style.height = this.thumbSlideHeight + "px";
    }
  },
};
</script>

<style scoped>
.swiper-picture-box {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.swiper-slide-thumb-active {
  opacity: 0.4;
}
</style>
