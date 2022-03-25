<template>
  <figure class="effect-oscar wowload fadeIn">
    <img :src="pictureSrc" alt="img01" />
    <figcaption>
      <h2>|{{title}}|</h2>
      <p>
        {{hoverTitle}}<br />
        <a
          href="../assets/../assets/images/portfolio/1.jpg"
          title="1"
          data-gallery
          >聆听</a
        >
      </p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "DogPicture",
  props: {
    title: {
      type: String,
      default: '',
    },
    hoverTitle: {
      type: String,
      default: '',
    },
    pictureSrc:{
      type: String,
      default: '',
    },
  },

};
</script>


<style scoped>
figcaption{
  box-sizing: border-box ;
}
</style>
<style src="../../assets/css/set.css">
</style>