<template>
  <div>
    <input type="number" v-model="obj.val1" />
    <select v-model="obj.data">
      <option value="1">+</option>
      <option value="2">-</option>
      <option value="3">*</option>
      <option value="4">/</option>
    </select>
    <input type="number" v-model="obj.val2" />=<input type="number" v-model="result" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        data: "1",
        val1: "",
        val2: "",
      },
      result: "",
    };
  },
  watch: {
    obj: {
      handler() {
        if (this.obj.data == 1) {
          this.result = Number(this.obj.val1) + Number(this.obj.val2);
        } else if (this.obj.data == 2) {
          this.result = Number(this.obj.val1) - Number(this.obj.val2);
        } else if (this.obj.data == 3) {
          this.result = Number(this.obj.val1) * Number(this.obj.val2);
        } else {
          this.result = Number(this.obj.val1) / Number(this.obj.val2);
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>
