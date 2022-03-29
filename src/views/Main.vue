<template>
  <div
    :style="Object.assign(mainBgStyle, { height: mainBgHeight + 'px' })"
    @scroll="changePage"
  >
    <el-container>
      <el-header>
        <p class="main-title">上车了 导盲犬！</p>
        <p class="main-sub-title">一个钢琴家和她的导盲犬的故事</p>
      </el-header>
    </el-container>
    <div class="down-icon">
      <i class="fa fa-5x fa-arrow-circle-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      mainBgStyle: {
        backgroundImage: `url(${require("@/assets/images/mainBg.jpg")})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
      },
    };
  },
  computed: {
    mainBgHeight() {
      return this.$store.state.windowHeight;
    },
  },
  methods: {
    changePage() {
      this.$emit("changePage");
    },
  },
};
</script>

<style scoped>
.el-container {
  padding-top: 7%;
  padding-bottom: 10%;
  padding-left: 20%;
  padding-right: 20%;
  height: 100%;
  box-sizing: border-box;
}
.main-title {
  color: white;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
}
.main-sub-title {
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
.down-icon {
  position: absolute;
  bottom: 20%;
  left: 50%;
  color: white;
  margin-left: -2.5rem;
  transform: translateX(-24px);
  -webkit-transform: translateX(-24px);
  animation: arrow 2s linear infinite;
  -webkit-animation: arrow 2s linear infinite;
}
@keyframes arrow {
  0% {
    bottom: 20%;
  }
  50% {
    bottom: 15%;
  }
  100% {
    bottom: 20%;
  }
}
</style>