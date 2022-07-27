<template>
  <div>
    <Header/>
    <div style="display: flex;width: 100%">
      <Nav/>
      <div class="main_box">
        <router-view class="box"></router-view>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

import Header from "../components/header/index.vue"
import Nav from "../components/Nav/index.vue"

</script>
<style scoped lang="scss">
  .main_box{
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #409EFF;
    .box{
      height: calc(100% - 40px);
      background-color: aqua;
      margin: 20px;
      border-radius: 5px;
    }
  }
</style>
