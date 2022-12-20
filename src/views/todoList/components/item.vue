<template>
  <div class="box">

    <input type="checkbox"  v-model="todoObj.completed" />
    <span class="content">{{ todoObj.name }}</span>
    <el-button type="danger" class="button_box" @click="del">删除</el-button>
  </div>
</template>

<script>
export default {
  props: {
    todoObj: Object,
  },
  data() {
    return {};
  },
  methods: {
    del() {
      this.$emit("delHandle", this.todoObj);
    },
  },
};
</script>

<style>
.button_box {
  height: 20px;
  line-height: 4px;
  margin-left: 50px;
}
</style>