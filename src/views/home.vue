<template>
  <div>
    <div class="home_box" :class="{ pink: isActive }">box</div>
    <el-button type="primary" @click="toggle">点我换皮肤</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
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