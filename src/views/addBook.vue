<template>
  <div>
    <h1>价格总数{{ total }}</h1>
    <div>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
      >
      </el-input>
    </div>
    <el-table :data="filterData">
      <el-table-column prop="name" label="书名">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            placeholder="请输入内容"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="price" label="价格">
        <template slot-scope="scope"> {{ scope.row.price }}￥ </template>
      </el-table-column>
      <el-table-column prop="type" label="价格类型">
        <template slot-scope="scope">
          <el-select
            size="small"
            v-model="tableData[scope.$index].type"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="discount" label="优惠后价格">
        <template slot-scope="scope"> {{ afterPrice(scope.row) }}￥ </template>
      </el-table-column>
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
      <el-form-item label="价格类型">
        <el-select size="small" v-model="form.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="add">添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyTableData: [],
      input: "",
      options: [
        {
          value: "预售价",
          label: "预售价",
        },
        {
          value: "大促价",
          label: "大促价",
        },
        {
          value: "返厂价",
          label: "返厂价",
        },
        {
          value: "尝鲜价",
          label: "尝鲜价",
        },
      ],
      form: {
        name: "",
        author: "",
        price: "",
        type: "",
      },
      tableData: [
        {
          id: 1,
          name: "啊啊啊1",
          author: "aaa",
          price: 120,
          type: "预售价",
          discount: 0,
        },
        {
          id: 2,
          name: "啊啊啊2",
          author: "aaa",
          price: 120,
          type: "大促价",
          discount: 0,
        },
        {
          id: 3,
          name: "啊啊啊3",
          author: "aaa",
          price: 200,
          type: "返厂价",
          discount: 0,
        },
        {
          id: 4,
          name: "啊啊啊4",
          author: "aaa",
          price: 120,
          type: "尝鲜价",
          discount: 0,
        },
      ],
    };
  },
  computed: {
    // 只会展示你return的值
    total() {
      let sum = 0;
      this.tableData.forEach((item) => {
        sum += Number(item.price);
      });
      return sum;
    },

    filterData() {
      let data = this.tableData.filter((item) => {
        return item.name.indexOf(this.input) != -1;
      });
      return data;
    },
  },
  methods: {
    afterPrice(row) {
      // 策略模式
      if (row.type == "预售价") {
        return presalePrice(row.price);
      }
      if (row.type == "大促价") {
        return bigPromotionPrice(row.price);
      }
      if (row.type == "返厂价") {
        return returnFactoryPrice(row.price);
      }
      if (row.type == "尝鲜价") {
        return tasteFreshPrice(row.price);
      }
      function presalePrice(originPrice) {
        if (originPrice >= 100) {
          return originPrice - 20;
        }
        return originPrice;
      }
      function bigPromotionPrice(originPrice) {
        if (originPrice >= 100) {
          return originPrice - 30;
        }
        return originPrice;
      }
      function returnFactoryPrice(originPrice) {
        if (originPrice >= 200) {
          return originPrice - 50;
        }
        return originPrice;
      }
      function tasteFreshPrice(originPrice) {
        return originPrice / 2;
      }
    },
    handleDelete(row) {
      let index = this.tableData.findIndex((item) => item.id == row.id);
      this.tableData.splice(index, 1);
    },
    reset() {
      var o = Object.assign(this.form, this.$options.data().form);
    },
    add() {
      let obj = Object.assign({}, this.form);
      obj["id"] = Math.random();
      this.tableData.push(obj);
      this.reset();
    },
  },
};
</script>

<style>
</style>