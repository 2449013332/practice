<template>
  <div>
    <div>金额{{ p }}</div>
    <div>{{ p2("@") }}</div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>

    <button @click="log">log</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: 100,
      list: [],
    };
  },
  computed: {
    p() {
      return this.prices + "$";
    },
  },

  methods: {
    p2(i) {
      return this.prices + i;
    },
    log() {
      console.log("out log");
    },
  },
  mounted() {},
};
</script>

<style>
</style>