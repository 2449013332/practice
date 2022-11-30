<template>
  <div>
    <Watch :name="name"></Watch>
  </div>
</template>
<script>
import Watch from "./watch.vue";
export default {
  components: { Watch },
  data() {
    return {
      name: "😁",
    };
  },
  mounted() {
    this.name = "😀";
  },
  created() {},
  watch: {
    a() {},
    b() {},
    c() {},
  },
  methods: {
    fn() {},
    fn2() {},
  },
};
</script>
