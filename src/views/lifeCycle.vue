<template>
  <div>
    <p>当前的值是：{{ num }}</p>
    <el-button type="primary" @click="add">num+1</el-button>
   <p></p>
    <el-button type="primary" @click="bye">拜拜了您嘞</el-button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods:{
   add(){
     console.log("加了加了真加了")
    this.num++
   },
   bye(){
    console.log("轻轻的你走了，正如你轻轻地来")
     this.$destroy() 
   }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>