<template>
  <div>
    <h1>c组件的内容</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas
      cupiditate earum nisi labore nam dicta totam ab architecto est laborum
      consequatur explicabo voluptatem eligendi, consectetur sequi quae eaque
      maiores!
    </div>
    <div>
      <h2>ID:{{id}}</h2>
      <h2>num:{{id}}-{{random()}}</h2>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        id:String
    },
    methods:{
        random(){
            return  parseInt(Math.random()*99999)
        }
    }
}
</script>