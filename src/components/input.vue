<template>
  <div class="input">
    <div>我是子组件的text{{ value }}</div>
    <!-- <input v-model="text" type="text" /> -->
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      text: "",
    };
  },
  watch: {
    value(val) {
      this.text = val;
    },
    text(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style>
.input {
  border: solid 3px pink;
  display: inline-block;
  margin: 10px;
}
</style>