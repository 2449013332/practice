<template>
  <div>
    <div
      class="box"
      :class="{ color: active >= index }"
      v-for="(item, index) in list"
      :key="index"
    >
       <span v-if="index != 0">————</span>{{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    active: Number,
  },
};
</script>

<style scoped>
.color {
  color: pink;
}
.box {
  display: inline-block;
}
</style>