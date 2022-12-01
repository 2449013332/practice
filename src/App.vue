<template>
  <div id="app">
    <router-link to="watch">watch</router-link>
    <router-link to="home">home</router-link>
    <router-link to="count">count</router-link>
    <router-link to="score">score</router-link>
    <router-link to="lifeCycle">lifeCycle</router-link>
    <router-link to="father">father</router-link>
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
a {
  color: pink;
  margin-right: 20px;
  font-size: 20px;
  text-decoration: none;
}

</style>