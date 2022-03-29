<template>
  <div class="musicPlay">
    <audio
      :src="musicUrl"
      class="playMusicAudio"
      ref="audio"
      autoplay
      @canplay="getDuration"
      @play="changePlayState"
      @pause="changePauseState"
      @timeupdate="durationUpdate"
    ></audio>
    <!-- 播放进度条 -->
    <el-row>
      <el-col :span="3" :offset="4"
        ><p>
          {{ this.musicDurationShow }}/{{ this.musicAllDurationShow }}
        </p></el-col
      >
      <el-col :span="13" :offset="1">
        <el-slider
          v-model="musicDuration"
          :max="musicAllDuration"
          :show-tooltip="false"
          @change="changeMusicDuration"
          @mousedown="isChange = true"
          @mouseup="isChange = false"
          style="margin-top: 15px"
        ></el-slider>
      </el-col>
      <el-col :span="1" :offset="0"
        ><p>{{ this.progress }}%</p></el-col
      >
    </el-row>
    <el-row id="audioFunc">
      <el-col :span="10" :offset="7">
        <el-row justify="space-around">
          <div id="stepBack" @click="backAudio">
            <i class="fa fa-2x fa-step-backward"></i>
          </div>
          <!-- 快进十秒 -->
          <div id="backSong" @click="backward">
            <i class="fa fa-2x fa-backward"></i>
          </div>
          <!-- 播放与暂停 -->
          <div>
            <div id="pause" v-if="isPlaying" @click="pauseSong">
              <i class="fa fa-2x fa-pause"></i>
            </div>
            <div id="play" v-else @click="playSong">
              <i class="fa fa-2x fa-play"></i>
            </div>
          </div>
          <!--  后退十秒 -->
          <div id="nextSong" @click="forward">
            <i class="fa fa-2x fa-forward"></i>
          </div>
          <div id="stepForward" @click="nextAudio">
            <i class="fa fa-2x fa-step-forward"></i>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    musicUrls: {
      type: Array,
      default: () => [],
    },
    musicIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data() {
    return {
      // 判断当前是否在播放
      isPlaying: false,
      //歌曲总时长
      musicAllDuration: 0,
      // 歌曲当前时长
      musicDuration: 0,
      //判断是否被拖动
      isChange: false,
    };
  },
  mounted() {
    this.$store.commit("setIsPlaying",this.isPlaying)
  },
  computed: {
    musicUrl() {

      return this.musicUrls[this.$store.state.musicIndex];
    },
    musicDurationShow() {
      return this.transform(this.musicDuration);
    },
    musicAllDurationShow() {
      return this.transform(this.musicAllDuration);
    },
    progress() {
      return ((this.musicDuration / this.musicAllDuration) * 100).toFixed(0);
    },
  },
  methods: {
    nextAudio() {
      this.$store.commit("nextAudio",this.musicUrls.length);
      this.isPlaying = true;
      this.playSong();
    },
    backAudio() {
      this.$store.commit("backAudio",this.musicUrls.length);
      this.isPlaying = true;
      this.playSong();
    },
    backward() {
      this.isChange = true;
      if (this.musicDuration > 10) {
        this.musicDuration -= 10;
        this.$refs.audio.currentTime = this.musicDuration;
      } else {
        this.musicDuration = 0;
        this.$refs.audio.currentTime = this.musicDuration;
      }
      this.isChange = false;
    },
    forward() {
      this.isChange = true;
      if (this.musicDuration < this.musicAllDuration - 10) {
        this.musicDuration += 10;
        this.$refs.audio.currentTime = this.musicDuration;
      } else {
        this.musicDuration = this.musicAllDuration;
        this.$refs.audio.currentTime = this.musicDuration;
      }
      this.isChange = false;
    },
    transform(secs) {
      if (secs && parseInt(secs.toString())) {
        var second = parseFloat((secs % 60).toFixed(0));
        var minute = Math.floor(secs / 60);
        var hour = Math.floor(secs / 3600);
        hour = this.formatNumber(Math.floor(minute / 60));
        minute = this.formatNumber(minute % 60);
        second = this.formatNumber(second);
        return hour + ":" + minute + ":" + second;
      } else {
        return "00:00:00";
      }
    },
    formatNumber(num) {
      return num < 10 ? "0" + num : num;
    },
    // 播放音乐
    playSong() {
      if (this.musicUrls.length <= 0) {
        const h = this.$createElement;
        this.$message.error({
          message: h("p", null, [
            h("span", null, "列表中没有可播放的歌曲"),
            h(
              "i",
              {
                style: "color: red",
              },
              ""
            ),
          ]),
          offset: 280,
          center: true,
          showClose: true,
        });
        return;
      }
      this.isPlaying = true;
      this.$refs.audio.play();
    },
    // 暂停音乐
    pauseSong() {
      this.isPlaying = false;
      this.$refs.audio.pause();
    },
    //获得播放歌曲总时长
    getDuration() {
      this.musicAllDuration = this.$refs.audio.duration;
    },
    //更新当前时长
    durationUpdate() {
      if (this.isChange === true) return;
      this.musicDuration = this.$refs.audio.currentTime;
    },
    //鼠标拖拽松开时
    changeMusicDuration() {
      if (this.musicAllDuration === 0) return;
      this.$refs.audio.currentTime = this.musicDuration;
      this.isChange = false;
    },
    changePlayState() {
      this.isPlaying = true;
      this.$store.commit("setIsPlaying",this.isPlaying)
    },
    changePauseState() {
      this.isPlaying = false;
      this.$store.commit("setIsPlaying",this.isPlaying)
    },
  },
  watch:{
    isPlaying(newValue){
      this.$store.commit("setIsPlaying",newValue);
    }
  }
};
</script>

<style scoped>
/* 音乐播放栏 */

.musicPlay {
  box-shadow: 0 0 1px 1px #b9b5b5;
  bottom: 0;
  width: 100%;
  background: #f6f6f8;
}
/* 音乐操作 */

#play,
#pause {
  cursor: pointer;
  border-radius: 100%;
  /* width: 40px; */
  height: 40px;
  line-height: 40px;
  text-align: center;
}

#play:hover,
#pause:hover {
  color: #ed6566;
}

#playOrd,
#backSong,
#nextSong,
#stepBack,
#stepForward {
  cursor: pointer;
  border-radius: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

#playOrd:hover,
#backSong:hover,
#nextSong:hover,
#stepBack :hover,
#stepForward :hover {
  color: #ed6566;
}

#album {
  cursor: pointer;
  border-radius: 100%;
  height: 40px;
  line-height: 36px;
  text-align: center;
}

#audioFunc {
}
/* 播放条样式 */

#playSlider {
  width: 43%;
  margin-top: -5px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>