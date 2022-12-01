<template>
  <div>
    <Son :name="name" @changeName="changeName"></Son>
  </div>
</template>

<script>
import Son from "./son.vue"
export default {
  components:{
    Son
  },
 data(){
  return{
    name:"我是你爸爸"
  }
 },
 methods:{
  changeName(data){
     this.name=data
  }
 }
}
</script>

<style>

</style>