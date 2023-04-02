<template>
  <div>
    <Card shadow="always">
      <div slot="header">header</div>
      <div>content</div>
    </Card>
    <Card shadow="hover">
      <div>content</div>
    </Card>
    <div class="home_box" :class="{ pink: isActive }">box</div>
    <el-button type="primary" @click="toggle">点我换皮肤</el-button>
    <hr>

   <div>
    外面
     <div>text:{{text}} </div>
    <input type="text" v-model="text">
   </div>
    <Input v-model="text" :bbb1="bbb2"></Input>

    <Box v-model="show"></Box>
    <button @click="show=!show">开关{{show}}</button>
    <hr/>
    <h1>active:{{active}}</h1>
    <Steps :list="['aaa','bbb','ccc']" :active="active"></Steps>
    <el-button type="primary" size="small" @click="next">下一步</el-button>
  </div>
  
</template>

<script>
import Card from "../components/Card.vue";
import Input from "../components/input.vue";
import Box from "../components/Box.vue"
import Steps from "../components/steps.vue"
export default {
  components: { Card ,Input,Box,Steps},
  data() {
    return {
      active:2,
      text:1,
      show:true,
      isActive: false,
      obj:{name:"x"},
      bbb2:"123123123123"
    };
  },
  watch:{},
  mounted(){
    this.$set(this.obj,"name","y")
    setInterval(()=>{
      // this.text++
    },1000)
  },
  methods: {
    next(){
      if(this.active++ >=2)this.active=0
    },
    toggle() {
      // if (this.isActive) {
      //   this.isActive = false;
      // } else {
      //   this.isActive = true;
      // }
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.home_box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: solid 1px;
  margin-bottom: 20px;
  line-height: 100px;
  text-align: center;
}
.pink {
  background: pink;
}
</style>