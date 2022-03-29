<template>
  <div class="link">
    <router-link style="text-align: center" :to="address">
      <el-avatar :size="100">
        <slot></slot>
      </el-avatar>
      <p>{{title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name:"LinkAvatar",
  props:{
    address:{
      type:String,
      default:"",
    },
    title:{
      type:String,
      default:"",
    }
  }
}
</script>

<style scoped>
.link{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>