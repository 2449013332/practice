<template>
  <div>
    count1: <span>{{ count1 }}</span>
    <el-button @click="add">+ +</el-button>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
  data() {
    return {
      count1: 0,
    };
  },
  mounted() {
    this.count1 = this.count;
  },
  methods: {
    add() {
      this.count1++;
      this.$emit("add", this.count1);
    },
  },
};
</script>

<style>
</style>