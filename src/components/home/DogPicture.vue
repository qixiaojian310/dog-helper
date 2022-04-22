<template>
  <figure class="effect-oscar">
    <img :src="pictureSrc" alt="img01" />
    <figcaption>
      <h2 :class="{ 'thumb-h2': isThumbs }">|{{ title }}|</h2>
      <div v-if="!isThumbs">
        <p>{{ hoverTitle }}</p>
        <br />
        <p title="1" @click="changeIndex">聆听</p>
        <p>
          {{activeLyric}}
        </p>
      </div>
    </figcaption>
  </figure>
</template>

<script>

export default {
  name: "DogPicture",
  props: {
    title: {
      type: String,
      default: "",
    },
    hoverTitle: {
      type: String,
      default: "",
    },
    pictureSrc: {
      type: String,
      default: "",
    },
    figureWidth: {
      type: Number,
      default: 80,
    },
    isThumbs: {
      type: Boolean,
    },
    pictureIndex: {
      type: Number,
      default: 0,
    },
    pictureIrcSrc: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeIndex() {
      this.$store.commit("setMusicIndex", this.pictureIndex);
    },
  },
  computed:{
    activeLyric(){
      return this.$store.state.activeLyric;
    },
  }
};
</script>


<style scoped>
figcaption {
  box-sizing: border-box;
}
</style>
<style src="../../assets/css/set.css">
</style>

<style scoped>
figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0;
  text-align: center;
  cursor: pointer;
}
.thumb-h2 {
  opacity: 0;
}
p {
  font-size: 2rem;
}
</style>