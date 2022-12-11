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
};
</script>

<style>
</style>