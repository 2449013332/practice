<template>
  <div class="content">
    <div
      v-for="(item, index) in num"
      :key="index"
      class="box"
      :class="{ pink: isActive == index }"
      @click="change(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [1, 2, 3, 4, 5, 6],
      isActive: 0,
    };
  },
  methods: {
    change(index) {
      if (this.isActive == index) {
        this.isActive = null;
      } else {
        this.isActive = index;
      }
    },
    
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.box {
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  color: #666;
  margin-right: 30px;
  margin-top: 20px;
  border: 1px solid pink;
}
.pink {
  background: pink;
}
</style>