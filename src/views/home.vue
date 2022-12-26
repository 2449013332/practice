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
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      isActive: false,
      obj:{name:"x"}
    };
  },
  mounted(){
    this.$set(this.obj,"name","y")
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