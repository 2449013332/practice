<template>
  <div class="video_box">
    <div class="type">
      <el-dropdown @command="change1">
        <span class="el-dropdown-link">
          {{ menus[0] }}<span class="dot">...</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">{{ menus[1] }}</el-dropdown-item>
          <el-dropdown-item command="2">{{ menus[2] }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div @click="open">展开</div>
    </div>

    <el-table v-show="show" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menus: ["1", "2", "3"],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    open() {
      this.show = !this.show;
    },
    change1(val) {
      console.log(val);
      if (val == 1) {
        let a = this.menus[0];
        this.$set(this.menus, 0, this.menus[1]);
        this.$set(this.menus, 1, a);
        console.log(this.menus);
      }else{
         let a = this.menus[0];
        this.$set(this.menus, 0, this.menus[2]);
        this.$set(this.menus, 2, a);
        console.log(this.menus);
      }
    },
  },
};
</script>

<style scoped>
.type {
  display: flex;
  width: 500px;
  justify-content: space-between;
}
.dot {
  transform: rotate(90deg);
  display: inline-block;
  margin: 0 10px;
}
</style>