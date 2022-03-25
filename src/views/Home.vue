<template>
  <div class="topbar animated fadeInLeftBig"></div>

  <!-- Header Starts -->
  <div class="navbar-wrapper">
    <div class="container">
      <div
        class="navbar navbar-default navbar-fixed-top"
        role="navigation"
        id="top-nav"
      >
        <div class="container">
          <div class="navbar-header">
            <!-- Logo Starts -->
            <!-- <a class="navbar-brand" href="#home"><img src="../assets/images/logo.png" alt="logo"></a> -->
            <!-- #Logo Ends -->

            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <!-- Nav Starts -->
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right scroll">
              <li class="active"><a href="#works">陈燕和导盲犬</a></li>
              <li><a href="#about">h5作品</a></li>
              <li><a href="#partners">图表展示</a></li>
              <li><a href="#contact">图表展示2</a></li>
            </ul>
          </div>
          <!-- #Nav Ends -->
        </div>
      </div>
    </div>
  </div>
  <!-- #Header Starts -->

  <!-- works -->
  <div id="works" class="clearfix grid">
    <dog-picture v-for="picture in pictures" :key="picture.index" :title="picture.title" :hover-title="picture.hoverTitle" :picture-src="picture.src"></dog-picture>
    <!-- <figure class="effect-oscar wowload fadeIn">
      <img src="../assets/../assets/images/portfolio/1.jpg" alt="img01" />
      <figcaption>
        <h2>|你是我的眼|</h2>
        <p>
          “盲⼈也有⾃由，导盲⽝也有尊严。”<br />
          <a
            href="../assets/../assets/images/portfolio/1.jpg"
            title="1"
            data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure>
    <figure class="effect-oscar wowload fadeInUp">
      <img src="../assets/images/portfolio/2.jpg" alt="img01" />
      <figcaption>
        <h2>|不能分开的灵魂|</h2>
        <p>
          “在前往客户家前，不告诉客户⾃⼰是盲⼈。”<br />
          <a href="../assets/images/portfolio/2.jpg" title="1" data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure>
    <figure class="effect-oscar wowload fadeInUp">
      <img src="../assets/images/portfolio/3.jpg" alt="img01" />
      <figcaption>
        <h2>|导盲犬的出现|</h2>
        <p>
          “没想到《导盲⽝⼩Q》电影⾥的原型真实地出现在我的⽣活⾥。”<br />
          <a href="../assets/images/portfolio/3.jpg" title="1" data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure>
    <figure class="effect-oscar wowload fadeInUp">
      <img src="../assets/images/portfolio/4.jpg" alt="img01" />
      <figcaption>
        <h2>|导盲犬的辛酸|</h2>
        <p>
          “北京是⼀座导盲⽝更容易被“拒绝”的城市”<br />
          <a href="../assets/images/portfolio/4.jpg" title="1" data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure>
    <figure class="effect-oscar wowload fadeInUp">
      <img src="../assets/images/portfolio/5.jpg" alt="img01" />
      <figcaption>
        <h2>|排除歧视|</h2>
        <p>
          “对不起，这⾥不属于公共场所的范畴”<br />
          <a href="../assets/images/portfolio/5.jpg" title="1" data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure>

    <figure class="effect-oscar wowload fadeInUp">
      <img src="../assets/images/portfolio/6.jpg" alt="img01" />
      <figcaption>
        <h2>|未来的路|</h2>
        <p>
          “我希望⼤连导盲⽝基地能培养出更多盲⼈们的眼睛”<br />
          <a href="../assets/images/portfolio/6.jpg" title="1" data-gallery
            >聆听</a
          >
        </p>
      </figcaption>
    </figure> -->
  </div>
</template>

<script>
import DogPicture from '@/components/home/DogPicture.vue'

export default {
  name: "Home",
  data() {
    return {
      pictures: [
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/1.jpg"),
        },
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/2.jpg"),
        },
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/3.jpg"),
        },
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/4.jpg"),
        },
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/5.jpg"),
        },
        {
          title: "你是我的眼",
          hoverTitle: "“盲⼈也有⾃由，导盲⽝也有尊严。”",
          src: require("@/assets/images/portfolio/6.jpg"),
        },
      ],
    };
  },
  components: {
    DogPicture,
  },
  mounted() {},
};
</script>

<style src="../../src/assets/css/home.css">
</style>

