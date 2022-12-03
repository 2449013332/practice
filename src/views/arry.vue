<template>
  <div>
    <p>{{ arr }}</p>
    <div>
      <el-button type="primary" @click="showString">点我显示"aaa"</el-button
      ><span>{{ stringItem }}</span>
    </div>
    <div>
      <el-button type="primary" @click="add">点我显示每项都加$</el-button
      ><span>{{ addString }}</span>
    </div>
    <div>
      <el-button type="primary" @click="stringFilter">点我显示字符串</el-button
      ><span>{{ filterString }}</span>
    </div>
    <div>
      <el-button type="primary" @click="findBoolean"
        >点我查找部分布尔值</el-button
      ><span>{{ isBoolean }}</span>
    </div>
    <div>
      <el-button type="primary" @click="findAllBoolean">点我查找全部布尔值</el-button>
      <span>{{ isAllBoolean }}</span>
    </div>
    <div>
      <el-button type="primary" @click="addNum">点我数字相加</el-button
      ><span>{{ sum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, "aaa", 34, 21, "str",true],
      stringItem: "",
      addString: "",
      filterString: "",
      isBoolean: null,
      isAllBoolean: null,
      sum: null,
    };
  },
  // mounted(){
  //   setTimeout(()=>{
  //     console.log(111,this.arr)
  //   }, 1000);
  // },
  methods: {
    showString() {
      //    if( this.arr.includes('aaa')){
      //     this.stringItem="'aaa'"
      //    }
      this.stringItem = this.arr.find((item) => {
        return item == "aaa";
      });
      console.log(this.stringItem);
    },
    add() {
      this.addString = this.arr.map((item) => {
        return item + "$";
      })
    },
    stringFilter() {
      this.filterString = this.arr.filter((item) => {
        return typeof item == "string";
      });
    },
    findBoolean() {
      this.isBoolean = this.arr.some((item) => {
       return typeof item == "boolean"
      });
    },
    findAllBoolean() {
      this.isAllBoolean = this.arr.every((item) => {
       return typeof item == "boolean"
      });
    },
    addNum() {
      let num = this.arr.filter((item, index) => {
        if (typeof item == "number") {
          return item;
        }
      });
      let addnum = 0;
      num.forEach((item) => {
        addnum += item
      });
      this.sum = addnum
    },
  },
};
</script>

<style>
</style>