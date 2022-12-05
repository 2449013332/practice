<template>
  <div>
    <div class="color_box" :style="{ background: randomColor() }"></div>

    <div>数组：{{ arr }}</div>
    <el-button @click="delet">删除大于30的数据</el-button
    ><span>删除后的数组：{{ newArr }}</span>
    <div>
      <el-button>点我返回柯里化求和</el-button><span>{{all}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [23, 41, 22, 55, 12, 33],
      newArr: [],
      all:0
    };
  },
  methods: {
    randomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    },
    delet() {
      this.newArr = this.arr.map((item) => {
        if (item <= 30) {
          this.newArr.push(item);
        }
        return this.newArr;
      });
    },

    //写一个函数柯里化，调用函数时，返回函数的第一个括号和第二个括号相加的值
    sum(){
      function add(x, y) {
      return x + y;
     }
     return this.all=add(1)(2)
    }
  },
};
</script>

<style>
.color_box {
  width: 100px;
  height: 100px;
}
</style>