<template>
  <div>
    <p>{{name}}</p>
    <el-button @click="changeName">点我换名字</el-button>
  </div>
</template>

<script>
export default {
props:{
  name:{
    type:String
  }
},
data(){
  return{
    newName:'你是大黄'
  }
},
methods:{
  changeName(){
    this.$emit('changeName',this.newName)
  }
}
}
</script>

<style>

</style>