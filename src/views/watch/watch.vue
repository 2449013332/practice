<template>
  <div>
    <div>name: {{ name }}</div>
    <div>text: {{ text }}</div>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  watch: {
    name(val) {
      this.text = val;
    },
  },
  props: {
    name: {
      //数组✔，对象，简单类型✔
      validator: (value) => {
        // The value must match one of these strings
        return ["😀", "😁", "😂"].includes(value);
      },
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>