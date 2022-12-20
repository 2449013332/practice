<template>
  <div class="box">
    <el-checkbox v-model="checked" @change="change">
      <span>已完成{{ completedList.length }}/全部{{ list.length }}</span>
    </el-checkbox>

    <el-button type="danger" class="button_box" @click="delAll">全部清除</el-button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      finished: 0,
      total: 0,
      completedList: [],
      checked: false,
    };
  },
  watch: {
    list: {
      handler(val) {
        this.filter();
      },
      deep: true,
      immediate: true,
    },

    list(){
       this.filter();
    },
  },
  methods: {
    filter() {
      this.completedList = this.list.filter((item) => {
        return item.completed == true;
      });
    },
    change() {
      this.$emit("changeAll", this.checked);
    },
    delAll(){
      this.$emit("deleteAll");
    }
  },
};
</script>

<style>
.box {
  margin-top: 20px;
}
</style>