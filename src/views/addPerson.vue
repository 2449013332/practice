<template>
  <div class="card_box">
    <h3>平均年龄：{{ averageAge }}</h3>
    <div>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
      >
      </el-input>
    </div>
    <div
      style="display: flex; width: 1200px; flex-wrap: wrap"
      v-if="filterName.length > 0"
    >
      <div
        v-for="(item, index) in filterName"
        :key="index"
        class="card"
        @click="open(item)"
      >
        <p>姓名：{{ item.name }}</p>
        <p>年龄：{{ item.age }}</p>
        <p>岗位：{{ item.work }}</p>
        <p>工资：{{ findItem(item.work).money }}</p>
        <p>时间：{{ findItem(item.work).time }}</p>
        <span class="del" @click="remove(index)">❌</span>
      </div>
    </div>
    <div v-else>
      <el-empty description="暂无数据，请添加数据"></el-empty>
    </div>
    <el-button type="primary" @click="openAdd">添加</el-button>
    <el-dialog
      :title="type == 'add' ? '新增person' : '修改信息'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model.number="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="岗位" :label-width="formLabelWidth">
          <el-select size="small" v-model="form.work" placeholder="请选择">
            <el-option
              v-for="item in workList"
              :key="item.work"
              :label="item.work"
              :value="item.work"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="type == 'add'"
          >确 定</el-button
        >
        <el-button type="primary" @click="edit" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: {},
      type: "",
      input: "",
      workList: [
        { work: "清洁工", money: "3k", time: "4h" },
        { work: "保安", money: "4k", time: "24h" },
        { work: "程序员", money: "8k", time: "8h" },
        { work: "律师", money: "8.8k", time: "6h" },
        { work: "医生", money: "9k", time: "24h" },
        { work: "老师", money: "10k", time: "12h" },
      ],
      personList: [
        { name: "qqq1", age: "12", work: "老师" },
        { name: "qqq2", age: "121", work: "程序员" },
        { name: "qqq3", age: "122", work: "律师" },
        { name: "qqq4", age: "123", work: "保安" },
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        age: "",
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    filterName() {
      let data = this.personList.filter((item) => {
        return item.name.indexOf(this.input) != -1;
      });
      return data;
    },
    averageAge() {
      let average = 0;
      let sum = 0;
      this.filterName.map((item) => {
        sum += Number(item.age);
      });
      average = sum / this.filterName.length;
      return average;
    },
  },
  methods: {
    findItem(work) {
      return this.workList.find((item) => work == item.work) || {};
    },
    open(item) {
      this.selectedItem = item;
      this.type = "edit";
      this.dialogFormVisible = true;
      this.form.name = item.name;
      this.form.age = Number(item.age);
    },
    edit() {
      this.selectedItem.name = this.form.name;
      this.selectedItem.age = Number(this.form.age);
      this.dialogFormVisible = false;
      this.reset();
    },
    openAdd() {
      this.dialogFormVisible = true;
      this.type = "add";
    },
    add() {
      this.dialogFormVisible = false;
      if (this.form.name && this.form.age && !isNaN(this.form.age * 1)) {
        this.personList.push({
          name: this.form.name,
          age: Number(this.form.age),
          work: this.form.work,
        });
      }
      this.reset();
    },
    reset() {
      Object.assign(this.form, this.$options.data().form);
    },
    remove(idx) {
      this.personList.splice(idx, 1);
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  width: 200px;
  margin: 20px;
  border: 1px solid #f0f0f0;
  text-align: center;
  background: rgb(38, 90, 117);
  color: white;
  position: relative;
}
.del {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10px;
}
</style>