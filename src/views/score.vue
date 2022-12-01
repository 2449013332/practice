<template>
  <div>
    <div>
      <input type="text" v-model="value" />
      <span v-if="value > 80 && value <= 100">优秀</span>
      <span v-else-if="70 < value && value <= 80">及格</span>
      <span v-else-if="value == ''"></span>
      <span v-else>不及格</span>
    </div>

    <br />
    <div>text: {{ text }}</div>
  </div>
</template>

<script>
export default {
  watch: {
    value() {
      // if (!this.value) {
      //   this.text = "请输入";
      //   return;
      // }
      // if (this.value > 80 && this.value <= 100) {
      //   this.text = "优秀";
      // } else if (70 < this.value && this.value <= 80) {
      //   this.text = "及格";
      // } else {
      //   this.text = "不及格";
      // }

      let table = [
        { min: 80, max: 100, title: "优秀" },
        { min: 70, max: 79, title: "及格" },
        { min: 0, max: 69, title: "不及格" },
      ];
      table.find((item) => {
        if (item.min < this.value && this.value < item.max) {
          this.text = item.title;
        }
      });
    },
  },
  data() {
    return {
      value: "",
      text: "请输入",
    };
  },
};
</script>

<style>
</style>