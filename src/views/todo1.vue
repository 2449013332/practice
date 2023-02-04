<template>
  <div>
   <div   style="display:flex">
          <el-input v-model="input" placeholder="请输入内容" :clearable="true"></el-input><el-button type="primary">添加</el-button>    
   </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        input: ''
    }
 }
/*
1、新建一个输入框和添加按钮
2、声明一个todoList,里面存对象，对象里有id,事项的名称，是否完成，v-for渲染在页面
3、输入框输入待办事件，点击添加按钮，给todoList添加item【push】
4、选中取消一个待办事项：根据item里面的是否已完成来实现是否选中 
5、删除一个待办事项：根据id删除todoList的那一项【遍历数组，通过id来获取下标,然后用splice方法来删除】
6、全选：声明一个变量isAllChecked,遍历数组，如果isCheckedAll是true那么就把数组的每一项的是否完成全部改成已完成
7、全选删除：全选之后把数组的每一项都删除
8、统计全部待办事件的数量就是用数组的length
9、统计已完成的就是遍历数组筛选出已经完成的，装进一个新数组，用他的length
 */
}
</script>

<style>

</style>



  