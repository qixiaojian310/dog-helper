<template>
  <swiper-main-dog :pictures="pictures"></swiper-main-dog>
</template>

<script>
import DogPicture from "@/components/home/DogPicture.vue";
import SwiperMainDog from "@/components/home/SwiperMainDog.vue";

export default {
  name: "Home",
  data() {
    return {
      pictures: [
        {
          title: "你是我的眼",
          hoverTitle: '"盲⼈也有⾃由，导盲⽝也有尊严。"',
          src: require("@/assets/images/portfolio/1.jpg"),
        },
        {
          title: "不能分开的灵魂",
          hoverTitle: '"在前往客户家前，不告诉客户⾃⼰是盲⼈。"',
          src: require("@/assets/images/portfolio/2.jpg"),
        },
        {
          title: "导盲犬的出现",
          hoverTitle:
            "“没想到《导盲⽝⼩Q》电影⾥的原型真实地出现在我的⽣活⾥。”",
          src: require("@/assets/images/portfolio/3.jpg"),
        },
        {
          title: "导盲犬的辛酸",
          hoverTitle: "“北京是⼀座导盲⽝更容易被“拒绝”的城市”",
          src: require("@/assets/images/portfolio/4.jpg"),
        },
        {
          title: "排除歧视",
          hoverTitle: "“对不起，这⾥不属于公共场所的范畴”",
          src: require("@/assets/images/portfolio/5.jpg"),
        },
        {
          title: "未来的路",
          hoverTitle: "“我希望⼤连导盲⽝基地能培养出更多盲⼈们的眼睛”",
          src: require("@/assets/images/portfolio/6.jpg"),
        },
      ],
    };
  },
  components: {
    DogPicture,
    SwiperMainDog,
  },
  methods: {
    getSlideHeight() {
      console.log(
        document.getElementsByClassName("thumb-picture-box")[0].offsetHeight
      );
      this.thumbSlideHeight =
        document.getElementsByClassName("thumb-picture-box")[0].offsetHeight;
    },
  },
  mounted() {},
};
</script>

<style src="../../src/assets/css/home.css">
</style>

