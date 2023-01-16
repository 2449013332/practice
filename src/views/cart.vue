<template>
  <div>
    <div>
      <h1>{{ kind }}</h1>
      <h2>{{ money * num }}</h2>
      <h2>{{ total }}</h2>
    </div>
    <div style="display: flex; flex-wrap: wrap">
      <div>口味：</div>
      <div
        v-for="(item, index) in typeList"
        :key="index"
        class="item_box"
        :class="{ color: isActive == index }"
        @click="change(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div>
      数量：<el-input-number
        v-model="num"
        @change="handleChange"
        :step="1"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
    </div>
    <div class="circle_box">
        <div class="circle" :class="{goldYellow:isShow}" @click="collection"></div>收藏
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.kind  = this.typeList[0].title;
    this.money = this.typeList[0].price;
  },
  data() {
    return {
      isShow:true,  
      isActive: 0,
      num: 0,
      kind: "",
      money: 0,
      typeList: [
        {
          title: "三顿半|精品咖啡速溶123号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "123号混合装15杯",
          price: 10,
        },
        {
          title: "三顿半|精品咖啡速溶456号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "456号混合装15杯",
          price: 15,
        },
        {
          title: "三顿半|精品咖啡速溶999号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "999号混合装15杯",
          price: 12,
        },
        {
          title: "三顿半|精品咖啡速溶100号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "100号混合装15杯",
          price: 14,
        },
        {
          title: "三顿半|精品咖啡速溶111号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "111号混合装15杯",
          price: 14,
        },
        {
          title: "三顿半|精品咖啡速溶222号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "222号混合装15杯",
          price: 18,
        },
        {
          title: "三顿半|精品咖啡速溶333号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "333号混合装15杯",
          price: 19,
        },
        {
          title: "三顿半|精品咖啡速溶444号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "444号混合装15杯",
          price: 17,
        },
        {
          title: "三顿半|精品咖啡速溶555号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "555号混合装15杯",
          price: 16,
        },
        {
          title: "三顿半|精品咖啡速溶666号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "666号混合装15杯",
          price: 15,
        },
        {
          title: "三顿半|精品咖啡速溶777号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "777号混合装15杯",
          price: 14,
        },
        {
          title: "三顿半|精品咖啡速溶888号美式无蔗糖冷萃冻干纯黑咖啡粉 15颗*3g",
          name: "888号混合装15杯",
          price: 13,
        },
      ],
    };
  },
  computed: {
    total() {
      let total = this.money * this.num;
      return total;
    },
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    change(item, index) {
     this.isActive = index;
      
      this.kind = item.title;
      this.money = item.price;
    },
    collection(){
      this.isShow=!this.isShow
    }
  },
};
</script>

<style scoped>
.item_box {
  width: 200px;
  height: 30px;
  margin: 10px;
  background: #f0f0f0;
  /* border: 1px solid #f0f0f0; */
  box-sizing: border-box;
  
}
.color {
  width: 200px;
  height: 30px;
  margin: 10px;
  background: #f0f0f0;
  border: 1px solid orange;
  color: orange;
}
.circle_box{
    display: flex;
}
.circle{
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-right: 10px;
}
.goldYellow{
    background: goldenrod;
}
</style>