<template>
  <div class="input">
    <div>我是子组件的text{{ value }}</div>
    <input v-model="value" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  watch: {
    value() {
      this.$emit("input", this.value);
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