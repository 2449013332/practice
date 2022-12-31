<template>
  <div>
    <h1 v-if="show==true">123</h1>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      show: false,
    };
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("input", val);
    },
  },
}
</script>

<style>

</style>