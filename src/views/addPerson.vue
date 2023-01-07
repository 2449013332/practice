<template>
  <div class="card_box">
    <h3>平均年龄：{{averageAge}}</h3>
      <div>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
      > 
      </el-input>
    </div>
   <div style="display:flex;width:1200px" v-if="filterName.length>0">
     <div v-for="(item, index) in filterName" :key="index" class="card">
      <p>姓名：{{ item.name }}</p>
      <p>年龄：{{ item.age }}</p>
      <span class="del" @click="remove(index)">❌</span>
    </div>
   </div>
   <div v-else>
      <el-empty description="暂无数据，请添加数据"></el-empty>
   </div>
    <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog title="新增person" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        input:"",
      personList: [
        { name: "qqq1", age: "12" },
        { name: "qqq2", age: "121" },
        { name: "qqq3", age: "122" },
        { name: "qqq4", age: "123" },
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        age:"",
      },
      formLabelWidth: "120px",
    };
  },
  computed:{
      filterName(){
      let data = this.personList.filter((item) => {
        return item.name.indexOf(this.input) !=-1
      });
      return data
    },
    averageAge(){
      let average=0
      let sum =0
      this.filterName.map(item=>{
         sum+=Number(item.age)
         average=sum/this.filterName.length
      })
      return average
    }
  },
  methods:{
    add(){
        this.dialogFormVisible = false
        let obj={}
        obj["name"]=this.form.name
        obj["age"]=this.form.age
        this.personList.push(obj)
        this.reset()
    },
    reset(){
      Object.assign(this.form, this.$options.data().form);
    },
    remove(idx){
       this.personList.splice(idx,1)
    }
  }
};
</script>

<style scoped>

 .card{
    width: 200px;
    height: 100px;
    margin: 20px;
    border: 1px solid #f0f0f0;
    text-align: center;
    background: rgb(38, 90, 117);
    color: white;
    position: relative;
 }
 .del{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 10px;
 }
</style>