<template>
  <div>
    <div class="top-box">
      <el-input
        v-model="value"
        placeholder="请输入内容"
        class="input-box"
      ></el-input>
      <el-button type="primary" @click="add">添加</el-button>
    </div>
    <div class="list-box">
      <div v-for="(item, index) in todoList" :key="item.id" class="item-box">
        <el-checkbox v-model="item.completed"></el-checkbox>
        <el-input v-model="item.name" class="input_box"></el-input>
        <el-button
          type="danger"
          size="small"
          class="button-box"
          @click="del(index)"
          >删除</el-button
        >
      </div>
    </div>
    <div class="bottom-box">
      <el-checkbox v-model="checkedAll" @change="change(checkedAll)">
        已完成{{ completedList.length }}/全部{{ todoList.length }}

        <div>
          computed:{{count}}
        </div>
      </el-checkbox>
      <el-button @click="delAll" size="small" type="danger" class="button-box"
        >批量删除</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: { name: "xx" },
      value: "",
      checkedAll: false,
      completedList: [],
      todoList: [
        { id: "1", name: "睡觉", completed: false },
        { id: "2", name: "吃饭", completed: false },
        { id: "3", name: "打豆豆", completed: false },
        { id: "4", name: "遨游峡谷", completed: false },
        { id: "5", name: "沉迷学习", completed: false },
        { id: "6", name: "思考人生", completed: false },
      ],
    };
  },
  computed: {
    count() {
      var num = 0;
      this.todoList.forEach((item) => {
        if (item.completed) {
          num++;
        }
      });
      return num;
    },
  },
  watch: {
    todoList: {
      handler(val) {
        this.updateCount();
      },
      deep: true,
    },
  },
  methods: {
    add() {
      let obj = {
        id: Math.random(),
        name: this.value,
        completed: false,
      };
      if (obj.name) {
        this.todoList.push(obj);
      }
      this.value = "";
    },
    // 传index删除item
    del(index) {
      this.todoList.splice(index, 1);
    },
    delAll() {
      for (let i = this.todoList.length - 1; i >= 0; i--) {
        if (this.todoList[i].completed) {
          this.del(i);
        }
      }
    },
    change(checkedAll) {
      this.todoList.forEach((item) => {
        if (checkedAll) {
          item.completed = true;
        } else {
          item.completed = false;
        }
      });
    },
    // 负责计数
    updateCount() {
      console.log("update count");
      this.completedList = this.todoList.filter((item) => {
        return item.completed == true;
      });
    },
  },
};
</script>

<style>
.input-box {
  width: 300px;
}
.item-box {
  margin: 20px 0;
  display: flex;
}
.input_box {
  width: 150px;
}
.button-box {
  margin-left: 50px;
}
</style>