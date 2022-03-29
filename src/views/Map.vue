<template>
  <div :style="Object.assign(mainBgStyle, { height: mainBgHeight + 'px' })">
    <div class="container">
      <el-row style="height:100px">
        <el-col :span="24">
          <p>{{title}}</p>
        </el-col>
      </el-row>
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="dog-map">
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              :style="{ height: this.$store.state.windowHeight-120 + 'px' }"
              @slideChange="changeTitle"
              :keyboard="{ enabled: true, onlyInViewport: true }"
            >
              <swiper-slide
                :style="{ height: this.$store.state.windowHeight * 0.8 + 'px' }"
                ><dog-map></dog-map
              ></swiper-slide>
              <swiper-slide
                :style="{ height: this.$store.state.windowHeight * 0.8 + 'px' }"
                ><dog-statistics></dog-statistics>
              </swiper-slide>
              <swiper-slide
                :style="{ height: this.$store.state.windowHeight * 0.8 + 'px' }"
                ><dog-china-map></dog-china-map
              ></swiper-slide>
            </swiper>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar,Keyboard } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/keyboard/keyboard.min.css"

import dogChinaMap from "@/components/map/dogChinaMap";
import dogMap from "@/components/map/dogMap";
import dogStatistics from "@/components/map/dogStatistics";

export default {
  name: "Map",
  components: {
    Swiper,
    SwiperSlide,
    dogMap,
    dogChinaMap,
    dogStatistics,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar,Keyboard],
      mainBgStyle: {
        backgroundImage: `url(${require("@/assets/images/mainBg.jpg")})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
      },
      title: "世界导盲犬分布情况"
    };
  },
  computed: {
    mainBgHeight() {
      return this.$store.state.windowHeight;
    },
  },
  methods:{
    changeTitle(swiper){
      if(swiper.activeIndex == 0){
        this.title = "世界导盲犬分布情况"
      }else if(swiper.activeIndex == 1){
        this.title = "北京导盲犬情况"
      }else{
        this.title = "中国导盲犬情况"
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.container {
  height: 100%;
  width: 100%;
  background: #ffffff42;
}
</style>