<template>
  <div class="container" :style="Object.assign(mainBgStyle, { height: mainBgHeight + 'px' })" >
    <div>
      <el-row>
        <el-col :span="24">
          <p>世界导盲犬分布情况</p>
        </el-col>
      </el-row>
      <el-row style="width:100%">
        <el-col :span="24">
          <div class="dog-map" :style="{height:this.$store.state.windowHeight+'px'}">
            <dog-map></dog-map>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import dogMap from '@/components/map/dogMap'

export default {
  name: 'Map',
  components: {
    dogMap
  },
  data(){
    return{
      mainBgStyle: {
        backgroundImage: `url(${require("@/assets/images/mainBg.jpg")})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
      },
    }
  }
}
</script>

<style scoped>
p{
  font-size: 20px;
  text-align: center;
  color: #fff;
}
</style>