<template>
  <div style="margin-top: 15px">
      <el-input v-model="input" placeholder="请输入内容" class="input_box"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
    </div>
</template>

<script>
export default {
data(){
    return{
          input:"",
    }
},
methods:{
    add(){
        let obj={
            id:Math.random(),
            name:this.input,
            completed:false
        }
        this.$emit("handleClick",obj)
        this.input=""
    }
}
}
</script>

<style>

</style>