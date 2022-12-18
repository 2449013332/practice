<template>
  <div>
    <h1>a组件的内容</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum qui
      quas culpa aliquam, eos veniam enim minus quis adipisci dolorem incidunt
      dolor laudantium mollitia itaque illo. Excepturi, possimus eius?
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
            console.log(123)
            return  parseInt(Math.random()*99999)
        }
    },
    mounted(){
        console.log("mounted")
    }
}
</script>