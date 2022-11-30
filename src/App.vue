<template>
  <div id="app">
    <a href="#/home">home</a>
    <div class="box">box</div>
    <br />

    <router-link to="watch">watch</router-link>
    <router-link to="home">home</router-link>
    <router-link to="count">count</router-link>
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
  margin-right: 10px;
  text-decoration: none;
}
.box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: pink;
}
</style>