<template>
  <div>
    <div class="box" :class="{ pink: isActive }">box</div>
    <button @click="toggle">点我换皮肤</button>
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
.box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: solid 1px;
}
.pink {
  background: pink;
}
</style>