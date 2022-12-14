<template>
  <el-table :data="tableData" style="width: 100%" @row-click="open">
    <el-table-column prop="name" label="名称" width="180"></el-table-column>
    <el-table-column prop="id" label="id" width="180"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: "a", id: "1" },
        { name: "b", id: "2" },
        { name: "b", id: "2" },
      ],
    };
  },
  methods: {
    open(row) {
      this.$alert(`${row.id}`, "提示", {
        confirmButtonText: "确定",
      });
    },
  },
  mounted() {
    var color = "blue";
    function changeColor() {
      let anotherColor = "red";
      function swapColors() {
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        console.log(1, color);//red
      }
      swapColors();
    }
    console.log(2, color);//blue
    changeColor();
    console.log(3, color);//red
  },
};
</script>

<style>
</style>