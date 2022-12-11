<template>
  <div>
    <!-- 3:  -->
    <Count @add="add" :count="3"></Count>

    <!-- 5: -->
    <Count @add="add" :count="5"></Count>

    <!-- 10: -->
    <Count ref="dom" @add="add" :count="10"></Count>

    <button @click="btn">btn</button>
  </div>
</template>

<script>
import Count from "../components/count.vue";
export default {
  components: { Count },
  methods: {
    add(count) {
      console.log(count);
    },
    btn(){
        this.$refs.dom.add()
    }
  },
};
</script>

<style>
</style>
