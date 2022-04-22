import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: 0,
    windowHeight: 0,
    musicIndex:0,
    isPlaying:false,
    activeLyric:""
  },
  mutations: {
    setWindowWidth(state, width) {
      state.windowWidth = width
    },
    setWindowHeight(state, height) {
      state.windowHeight = height
    },
    setMusicIndex(state, index) {
      state.musicIndex = index
    },
    nextAudio(state, length){
      state.musicIndex++;
      if (state.musicIndex >= length) {
        state.musicIndex = 0;
      }
      state.isPlaying = true

    },
    backAudio(state, length){
      state.musicIndex--;
      if (state.musicIndex < 0) {
        state.musicIndex = length - 1;
      }
      state.isPlaying = true

    },
    setIsPlaying(state, isPlaying) {
      state.isPlaying = isPlaying
    },
    setActiveLyric(state, activeLyric) {
      state.activeLyric = activeLyric
    }
  },
  actions: {
  },
  modules: {
  }
})
