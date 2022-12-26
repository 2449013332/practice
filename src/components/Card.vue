<template>

  <div class="card" :class="shadow">
    <div class="header">
      <slot></slot>
    </div>
    <div class="content" :class="shadow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shadow: String,
  },
};
</script>

<style   scoped>
.hover:hover{
     box-shadow: 0 3px 3px 0 #666;
}
.always{
    box-shadow: 0 3px 3px 0 #666;
}
.card {
  border: solid 1px #666;
  
  border-radius: 4px;
  max-width: 400px;
  margin: 10px;
  color: pink;
}
.content {
  color: #333;
}
.header {
  border-bottom: 1px solid #f0f0f0;
}
</style>