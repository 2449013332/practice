<template>
  <div>
    <p>list是：{{ list }}</p>
    <p>arr是：{{ arr }}</p>
    <p>newArr是：{{ newArr }}</p>
    <div class="xxx">
      <el-button type="primary" @click="dedup">点我去重</el-button>
      <span>{{ result }}</span>
    </div>
    <div class="xxx">
      <el-button type="primary" @click="returnDedup">点我返回重复项</el-button>
      <span>{{ repet }}</span>
    </div>
    <div class="xxx">
      <el-button type="primary" @click="findSame"
        >点我返回arr与newArr重复的项</el-button
      >
      <span>{{ same }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      repet: [],
      same: [],
      list: [
        { name: "aaa", age: 131 },
        { name: "bbb", age: 15 },
        { name: "ccc", age: 17 },
        { name: "ddd", age: 221 },
        { name: "bbb", age: 15 },
        { name: "aaa", age: 13 },
        { name: "bbb", age: 161 },
      ],
      arr: [
        { name: " aaa", age: 13 },
        { name: "bbb", age: 15 },
        { name: "ccc", age: 17 },
        { name: "ddd", age: 22 },
        { name: "bbb", age: 15 },
        { name: "aaa", age: 13 },
        { name: "bbb", age: 161 },
      ],
      newArr: [
        { name: " aaa", age: 13 },
        { name: "bbb", age: 15 },
        { name: "ccc", age: 17 },
        { name: "ddd", age: 22 },
        { name: "bbb", age: 15 },
        { name: "aaa", age: 13 },
        { name: "bbb", age: 161 },
        { name: "eee", age: 16 },
      ],
    };
  },
  methods: {
    dedup() {
      // let newobj = {};//标记映射
      // this.result = this.list.reduce((current, next) => {
      //   newobj[next.name] ? "": (newobj[next.name] = '123' && current.push(next));
      //   return current;
      // }, []);
      // ----------------------
      let newobj = {}; //标记映射
      let newList = [];
      this.result = this.list.forEach((next) => {
        if (!newobj[next.name]) {
          newobj[next.name] = true;
          newList.push(next);
        }
      });
      this.result = newList;
    },
    returnDedup() {
      // this.list.forEach((item) => {
      //   this.repet = this.list.filter((i) => i.name === item.name);
      //   if (this.repet.length > 1) {
      //     return this.repet;
      //   }
      // });
    },
    findSame() {
      for (let i = 0; i < this.arr.length; i++) {
        let tempArr = this.arr[i];
        for (let j = 0; j < this.newArr.length; j++) {
          let tempNewArr = this.newArr[j];
          if (tempNewArr.name === tempArr.name&&tempNewArr.age === tempArr.age) {
            this.same.push(tempNewArr);
            break;
          }
        }
      }
    },
  },
};
</script>

<style>
.xxx {
  margin-top: 20px;
}
</style>
