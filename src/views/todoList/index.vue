<template>
  <div>
    <Top @handleClick="handleClick"></Top>
    <List :list="list" @deleteHandle="deleteHandle"></List>
    <Bottom :list="list" @changeAll="changeAll" @deleteAll="deleteAll"></Bottom>
  </div>
</template>

<script>
import Top from "./components/top.vue";
import Bottom from "./components/bottom.vue";
import List from "./components/list.vue";
export default {
  components: {
    Top,
    Bottom,
    List,
  },
  data() {
    return {
      listItem: {},
      list: [
        { id: "1", name: "学习", completed: true },
        { id: "2", name: "吃饭", completed: false },
        { id: "3", name: "睡觉", completed: false },
      ],
      curIndex: 0,
    };
  },
  methods: {
    handleClick(obj) {
      console.log(obj);
      if (obj.name) {
        this.list.push(obj);
      }
    },
    deleteHandle(todoObj) {
      this.list.forEach((item, index) => {
        if (item.id == todoObj.id) {
          this.curIndex = index;
        }
      });
      this.list.splice(this.curIndex, 1);
    },
    changeAll(checked) {
      if (checked) {
        this.list.forEach((item) => {
          item.completed = true;
        });
      } else {
        this.list.forEach((item) => {
          item.completed = false;
        });
      }
    },
    deleteAll() {
      this.list.forEach((item, index) => {
        if (item.completed) {
          this.list.splice(index, 1);
        }
      });
    },
  },
};
</script>

<style>
.input_box {
  width: 300px;
}
</style>