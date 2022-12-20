<template>
  <div class="box">
    <Item v-for="item in list" :key="item.id" :todoObj="item" @delHandle="delHandle"></Item>
  </div>
</template>

<script>
import Item from "./item.vue";
export default {
  components: {
    Item,
  },
  props: {
    list:Array
  },
  data() {
    return {
     
    };
  },
  methods: {
    delHandle(todoObj){
        this.$emit("deleteHandle",todoObj)
    }
  },
};
</script>

<style>
</style>