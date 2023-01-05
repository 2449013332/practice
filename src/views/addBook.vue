<template>
  <div>
    <el-table :data="tableData" style="width: 500px">
      <el-table-column prop="name" label="书名"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-form label-width="80px" :model="form">
      <el-form-item label="书名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="add">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        author: "",
        price: "",
      },
      tableData: [
        {
          id: 1,
          name: "啊啊啊1",
          author: "aaa",
          price: 12,
        },
        {
          id: 2,
          name: "啊啊啊2",
          author: "aaa",
          price: 12,
        },
        {
          id: 3,
          name: "啊啊啊3",
          author: "aaa",
          price: 12,
        },
      ],
    };
  },
  methods: {
    handleDelete(row) {
      let index = this.tableData.findIndex((item) => item.id == row.id);
      this.tableData.splice(index, 1);
    },
    reset() {
      var o = Object.assign(this.form, this.$options.data().form);
    },
    add() {
      let obj = Object.assign({}, this.form);
      obj["id"]=Math.radom()
      this.tableData.push(obj);
      this.reset();
    },
  },
};
</script>

<style>
</style>