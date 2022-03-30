<template>
  <div
    @wheel="windowAddMouseWheel"
    @keydown.up="decreaseIndex"
    @keydown.down="increaseIndex"
  >
    <div class="logo">
      <el-button
        class="logo-btn"
        type="info"
        :round="true"
        :size="60"
        @click="changeQRStatus"
      >
        <el-avatar :class="{ showing: this.qrcodeShowing }" :size="60">
          <svg
            t="1648310484016"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2815"
            width="60"
            height="60"
          >
            <path
              d="M426.666667 955.733333H238.933333c-75.093333 0-136.533333-61.44-136.533333-136.533333v-187.733333c0-20.48 13.653333-34.133333 34.133333-34.133334h290.133334c20.48 0 34.133333 13.653333 34.133333 34.133334V921.6c0 20.48-13.653333 34.133333-34.133333 34.133333zM170.666667 665.6V819.2c0 37.546667 30.72 68.266667 68.266666 68.266667h153.6v-221.866667H170.666667zM426.666667 494.933333H136.533333c-20.48 0-34.133333-13.653333-34.133333-34.133333V273.066667c0-75.093333 61.44-136.533333 136.533333-136.533334h187.733334c20.48 0 34.133333 13.653333 34.133333 34.133334v290.133333c0 20.48-13.653333 34.133333-34.133333 34.133333z m-256-68.266666h221.866666V204.8H238.933333c-37.546667 0-68.266667 30.72-68.266666 68.266667v153.6zM887.466667 494.933333h-290.133334c-20.48 0-34.133333-13.653333-34.133333-34.133333V170.666667c0-20.48 13.653333-34.133333 34.133333-34.133334H785.066667c75.093333 0 136.533333 61.44 136.533333 136.533334v187.733333c0 20.48-13.653333 34.133333-34.133333 34.133333z m-256-68.266666H853.333333V273.066667c0-37.546667-30.72-68.266667-68.266666-68.266667h-153.6v221.866667z"
              fill="#333333"
              p-id="2816"
            ></path>
            <path
              d="M853.333333 955.733333c-20.48 0-34.133333-13.653333-34.133333-34.133333v-290.133333c0-20.48 13.653333-34.133333 34.133333-34.133334s34.133333 13.653333 34.133334 34.133334V921.6c0 20.48-13.653333 34.133333-34.133334 34.133333zM631.466667 955.733333c-20.48 0-34.133333-13.653333-34.133334-34.133333v-290.133333c0-20.48 13.653333-34.133333 34.133334-34.133334s34.133333 13.653333 34.133333 34.133334V921.6c0 20.48-13.653333 34.133333-34.133333 34.133333z"
              fill="#FFAF00"
              p-id="2817"
            ></path>
          </svg>
        </el-avatar>
      </el-button>
      <el-button
        class="logo-btn"
        type="primary"
        :circle="true"
        :size="60"
        @click="changeDrawerStatus"
      >
        <el-avatar
          :class="{ listening: this.$store.state.isPlaying }"
          :size="60"
        >
          <svg
            t="1648304605578"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3517"
            width="60"
            height="60"
          >
            <path
              d="M508.7 927.6c-56.2 0-110.6-11-161.9-32.7-49.5-21-94-50.9-132.2-89.1-38.2-38.2-68.2-82.7-89.1-132.2-21.7-51.3-32.7-105.8-32.7-161.9 0-56.2 11-110.6 32.7-161.9 21-49.5 50.9-94 89.1-132.2 38.2-38.2 82.7-68.2 132.2-89.1 51.3-21.7 105.8-32.7 161.9-32.7s110.6 11 161.9 32.7c49.5 21 94 50.9 132.2 89.1 38.2 38.2 68.2 82.7 89.1 132.2 21.7 51.3 32.7 105.8 32.7 161.9 0 56.2-11 110.6-32.7 161.9-21 49.5-50.9 94-89.1 132.2-38.2 38.2-82.7 68.2-132.2 89.1-51.2 21.7-105.7 32.7-161.9 32.7z m0-800c-51.8 0-102.1 10.2-149.5 30.2-45.7 19.3-86.8 47-122.1 82.3s-63 76.3-82.3 122.1c-20 47.3-30.2 97.6-30.2 149.5 0 51.8 10.2 102.1 30.2 149.5 19.3 45.7 47 86.8 82.3 122.1s76.3 63 122.1 82.3c47.3 20 97.6 30.2 149.5 30.2s102.1-10.2 149.5-30.2c45.7-19.3 86.8-47 122.1-82.3s63-76.3 82.3-122.1c20-47.3 30.2-97.6 30.2-149.5 0-51.8-10.2-102.1-30.2-149.5-19.3-45.7-47-86.8-82.3-122.1s-76.3-63-122.1-82.3c-47.3-20-97.6-30.2-149.5-30.2z"
              fill=""
              p-id="3518"
            ></path>
            <path
              d="M710.4 540h-400V286.3c0-6.9 6.8-11.7 13.3-9.4l159.2 55.7c17.8 6.2 37.2 6.2 55 0l159.2-55.7c6.5-2.3 13.3 2.6 13.3 9.4V540z"
              fill="#FFA625"
              p-id="3519"
            ></path>
            <path
              d="M726.4 556h-432V286.3c0-8.4 4.1-16.3 11-21.2 6.9-4.9 15.7-6.1 23.6-3.3l159.2 55.7c14.3 5 30.1 5 44.4 0l159.2-55.7c7.9-2.8 16.8-1.5 23.6 3.3 6.9 4.9 11 12.8 11 21.2V556z m-400-32h368V294.7l-151.2 52.9c-21.1 7.4-44.4 7.4-65.5 0l-151.2-52.9V524z"
              fill="#231F20"
              p-id="3520"
            ></path>
            <path
              d="M565.1 740H456.3c-80.1 0-145.6-65.5-145.6-145.6V485.6c0-80.1 65.5-145.6 145.6-145.6h108.8c80.1 0 145.6 65.5 145.6 145.6v108.8c0 80.1-65.5 145.6-145.6 145.6z"
              fill="#FFA625"
              p-id="3521"
            ></path>
            <path
              d="M565.1 756H456.3c-43 0-83.5-16.9-114.1-47.5-30.6-30.6-47.5-71.1-47.5-114.1V485.6c0-43 16.9-83.5 47.5-114.1S413.3 324 456.3 324h108.8c43 0 83.5 16.9 114.1 47.5 30.6 30.6 47.5 71.1 47.5 114.1v108.8c0 43-16.9 83.5-47.5 114.1-30.5 30.6-71.1 47.5-114.1 47.5zM456.3 356c-34.5 0-67 13.5-91.5 38.1s-38.1 57.1-38.1 91.5v108.8c0 34.5 13.5 67 38.1 91.5 24.6 24.6 57.1 38.1 91.5 38.1h108.8c34.5 0 67-13.5 91.5-38.1 24.6-24.6 38.1-57.1 38.1-91.5V485.6c0-34.5-13.5-67-38.1-91.5-24.6-24.6-57.1-38.1-91.5-38.1H456.3z"
              fill="#231F20"
              p-id="3522"
            ></path>
            <path
              d="M460.3 727.5h100.2c73.8 0 134.1-60.4 134.1-134.1v-2.8c-6.2-1.1-12.6-1.7-19.1-1.7-29.1 0-55.6 11.3-75.3 29.8-18.9-33.2-54.6-55.5-95.5-55.5-37.6 0-70.7 18.9-90.5 47.6-18.4-13.8-41.2-21.9-65.9-21.9-7.6 0-15 0.8-22.2 2.2v2.2c0.1 73.8 60.4 134.2 134.2 134.2z"
              fill="#FFFFFF"
              p-id="3523"
            ></path>
            <path
              d="M467.3 610.5a40.6 25.3 0 1 0 81.2 0 40.6 25.3 0 1 0-81.2 0Z"
              fill=""
              p-id="3524"
            ></path>
            <path
              d="M470.8 439.4l-2-7.4c-4-15.1-22.9-20.1-33.9-9.1-11 11-6 29.9 9.1 33.9l7.4 2c11.8 3.2 22.6-7.6 19.4-19.4zM551.5 439.4l2-7.4c4-15.1 22.9-20.1 33.9-9.1 11 11 6 29.9-9.1 33.9l-7.4 2c-11.7 3.2-22.5-7.6-19.4-19.4z"
              fill="#FFFFFF"
              p-id="3525"
            ></path>
            <path
              d="M463.3 683.9c-27.6 0-50-22.4-50-50 0-4.4 3.6-8 8-8s8 3.6 8 8c0 18.7 15.2 34 34 34s34-15.2 34-34c0-4.4 3.6-8 8-8s8 3.6 8 8c0 27.5-22.4 50-50 50z"
              fill=""
              p-id="3526"
            ></path>
            <path
              d="M548.5 683.9c-27.6 0-50-22.4-50-50 0-4.4 3.6-8 8-8s8 3.6 8 8c0 18.7 15.2 34 34 34s34-15.2 34-34c0-4.4 3.6-8 8-8s8 3.6 8 8c0 27.5-22.4 50-50 50z"
              fill=""
              p-id="3527"
            ></path>
            <path
              d="M395.6 530.1c-3.8 0-7.6-1.3-10.6-4-6.6-5.9-7.2-16-1.3-22.6 25.5-28.7 69.7-31.3 98.4-5.8 6.6 5.9 7.2 16 1.3 22.6-5.9 6.6-16 7.2-22.6 1.3-15.5-13.8-39.4-12.4-53.2 3.1-3.2 3.6-7.6 5.4-12 5.4zM551 529.1c-4.1 0-8.2-1.5-11.3-4.6-6.3-6.2-6.3-16.4-0.1-22.6 27.1-27.3 71.3-27.4 98.6-0.3 6.3 6.2 6.3 16.4 0.1 22.6-6.2 6.3-16.4 6.3-22.6 0.1-14.7-14.6-38.7-14.6-53.3 0.2-3.2 3-7.3 4.6-11.4 4.6z"
              fill="#231F20"
              p-id="3528"
            ></path>
          </svg>
        </el-avatar>
      </el-button>
    </div>
    <div
      id="QR-box"
      class="animate__animated"
      :class="{
        animate__bounceOutRight: !this.qrcodeShowing,
        animate__bounceInRight: this.qrcodeShowing,
      }"
    >
      <p>二维码</p>
      <QRCodeVue3
        :width="200"
        :height="200"
        value="https://v4pre.h5sys.cn/play/o2VSgSYG"
        :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
        :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
        :dotsOptions="{
          type: 'dots',
          color: '#Ef9b6c',
          gradient: {
            type: 'linear',
            rotation: 0,
            colorStops: [
              { offset: 0, color: '#Ef9b6c' },
              { offset: 1, color: '#Ef9b6c' },
            ],
          },
        }"
        :backgroundOptions="{ color: '#ffffff' }"
        :cornersSquareOptions="{ type: 'dot', color: '#7c492b' }"
        :cornersDotOptions="{ type: undefined, color: '#7c492b' }"
        :image="require('@/assets/images/doge.png')"
        fileExt="png"
        myclass="my-qur"
        imgclass="img-qr"
      />
    </div>

    <!-- 播放器 -->
    <div
      class="audio-box"
      :style="{
        width: this.$store.state.windowWidth * showAudioPlayer + 'px',
      }"
    >
      <audio-player
        v-show="showAudioPlayerBox"
        :music-urls="audioSources"
      ></audio-player>
    </div>
    <router-view />
  </div>
</template>


<script>
// import {AOS} from 'aos';
import LinkAvatar from "./components/main/LinkAvatar.vue";
import AudioPlayer from "@/components/audio/AudioPlayer";
import QRCodeVue3 from "qrcode-vue3";

export default {
  components: { LinkAvatar, AudioPlayer, QRCodeVue3 },
  name: "App",
  data() {
    return {
      scrollDirection: "",
      openDrawer: false,
      routerLinks: [
        {
          name: "Main",
          title: "主页",
          path: "",
        },
        {
          name: "Home",
          title: "首页",
          path: "home",
        },
        {
          name: "map",
          title: "导盲犬地图",
          path: "map",
        },
      ],
      nowLinkIndex: 0,
      audioSources: [
        require("@/assets/audio/1.mp3"),
        require("@/assets/audio/2.mp3"),
        require("@/assets/audio/3.mp3"),
        require("@/assets/audio/4.mp3"),
        require("@/assets/audio/5.mp3"),
        require("@/assets/audio/6.mp3"),
      ],
      showAudioPlayer: 0,
      showAudioPlayerBox: false,
      qrcodeShowing: false,
    };
  },
  mounted() {
    this.reloadChange();
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key == "ArrowUp") {
        this.decreaseIndex();
      } else if (e.key == "ArrowDown") {
        this.increaseIndex();
      } else {
      }
      // 下面可以通过keyCode来添加键盘事件
    });
  },
  methods: {
    changeQRStatus() {
      this.qrcodeShowing = !this.qrcodeShowing;
    },
    increaseIndex() {
      console.log("increase");
      this.nowLinkIndex = (this.nowLinkIndex + 1) % this.routerLinks.length;
      this.$router.push({
        path: "/" + this.routerLinks[this.nowLinkIndex].path,
      });
    },
    decreaseIndex() {
      console.log("decrease");
      if (this.routerLinks > 0) {
        this.nowLinkIndex = (this.nowLinkIndex - 1) % this.routerLinks.length;
      } else {
        this.nowLinkIndex = 0;
      }
      this.$router.push({
        path: "/" + this.routerLinks[this.nowLinkIndex].path,
      });
    },
    windowAddMouseWheel(event) {
      var routerGo = "";
      if (event.deltaY > 0) {
        this.scrollDirection = "down";
        // routerGo = this.routerLinks[this.nowLinkIndex].path;
        this.nowLinkIndex = (this.nowLinkIndex + 1) % this.routerLinks.length;
        this.$router.push({
          path: "/" + this.routerLinks[this.nowLinkIndex].path,
        });
        console.log("向下滚动");
      } else if (event.deltaY < 0) {
        this.scrollDirection = "up";
        console.log("向上滚动");
        if (this.routerLinks > 0) {
          this.nowLinkIndex = (this.nowLinkIndex - 1) % this.routerLinks.length;
        } else {
          this.nowLinkIndex = 0;
        }
        this.$router.push({
          path: "/" + this.routerLinks[this.nowLinkIndex].path,
        });
      } else {
        console.log("横向滚动");
      }
    },
    //改变抽屉状态
    changeDrawerStatus() {
      // this.openDrawer = !this.openDrawer;
      if (this.showAudioPlayerBox) {
        setTimeout(() => {
          this.showAudioPlayerBox = false;
        }, 100);
        this.showAudioPlayer = 0;
      } else {
        setTimeout(() => {
          this.showAudioPlayerBox = true;
        }, 100);
        this.showAudioPlayer = 1;
      }
    },
    //监听窗口大小变化
    reloadChange() {
      this.$store.commit("setWindowWidth", window.innerWidth);
      this.$store.commit("setWindowHeight", window.innerHeight);
      window.onresize = () => {
        this.$store.commit("setWindowWidth", window.innerWidth);
        this.$store.commit("setWindowHeight", window.innerHeight);
      };
    },
  },
};
</script>
<style scoped>
.logo {
  position: absolute;
  bottom: 0%;
  left: 0%;
  height: 180px;
  width: 100px;
  z-index: 4;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.logo-btn {
  margin: 0px;
  margin-left: 10px;
  margin-right: 30px;
  height: 60px;
  padding: 0px !important;
}
.hint {
  --animate-duration: 2s;
  font-weight: 500;
}
.link-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.audio-box {
  position: absolute;
  bottom: 0px;
  z-index: 3;
  background: #9c3636ab;
  transition: all 0.5s;
}
.listening {
  animation: listening 1.1s infinite linear;
}
.showing {
  animation: listening 1s ease-in-out;
}
#QR-box {
  position: absolute;
  right: 0;
  bottom: 100px;
  height: 300px;
  width: 220px;
  padding: 10px;
  z-index: 1000;
  background: #ffffffc5;
  border-radius: 7px;
  box-sizing: border-box;
}
#QR-box p {
  font-size: 1.3rem;
  text-align: center;
}
@keyframes listening {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
