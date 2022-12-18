<template>
  <div>
    <h1>b组件的内容</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam illo
      blanditiis nulla amet animi reiciendis ducimus necessitatibus voluptates
      sequi, vitae molestias. Corporis pariatur nam dicta, distinctio recusandae
      voluptas officiis?
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