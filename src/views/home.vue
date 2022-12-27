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
     <div>text:{{text}}</div>
    <input type="text" v-model="text">
   </div>
    <Input v-model="text"></Input>

    <box v-model="show"></box>
    <button @click="show=!show">开关{{show}}</button>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Input from "../components/input.vue";
export default {
  components: { Card ,Input},
  data() {
    return {
      text:1,
      show:true,
      isActive: false,
      obj:{name:"x"}
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