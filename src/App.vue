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
      <router-link to="arry">arry</router-link>
      <router-link to="arryDedup">arryDedup</router-link>
      <router-link to="randomColor">randomColor</router-link>
      <router-link to="add">add</router-link>
       <router-link to="table">table</router-link>
    </div>
    <router-view class="right_content"></router-view>
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
a:focus {
  color: green;
}
.right_content {
  margin-top: 40px;
  margin-left: 20px;
}
</style>