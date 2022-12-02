<template>
  <div id="app">
    <div>
      <router-link to="watch">watch</router-link>
      <router-link to="home">home</router-link>
      <router-link to="count">count</router-link>
      <router-link to="score">score</router-link>
      <router-link to="lifeCycle">lifeCycle</router-link>
      <router-link to="father">father</router-link>
      <router-link to="change">change</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  display: flex;
}
a {
  color: orange;
  padding: 20px;
  font-size: 30px;
  text-decoration: none;
  display: block;
}
</style>