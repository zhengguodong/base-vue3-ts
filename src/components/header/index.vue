<template>
    <div class="box">
        <div style="float:right;line-height:70px;display: flex">
            <LangSelect/>
            <div style="margin:0 10px">{{name}}</div>
            <div>
                <el-button type="text" >登出</el-button>
            </div>

        </div>
  </div>
</template>

<script lang="ts" setup>
import LangSelect from "../lang_select/index.vue"
import {ref} from "vue"
    let name=ref<string>("admin")
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 70px;
    background-color: lightblue;
}
</style>


