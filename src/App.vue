<template>
  <div id="app">
    <div>
      <router-link
        v-for="(item, index) in routeList"
        :key="index"
        :to="item.path"
        >{{ filter(item.path) }}</router-link
      >
    </div>
    <router-view class="right_content"></router-view>
  </div>
</template>

<script>
import { routes } from "./router/index";
export default {
  name: "App",
  data() {
    return {
      routeList: routes,
      // row:row
    };
  },
  mounted() {
  },
  methods: {
    filter(item) {
      return item.replace("/", "");
    },
  },
};
</script>

<style>
a {
  color: orange;
  padding: 20px;
  font-size: 16px;
  text-decoration: none;
}
a:focus {
  color: green;
}
.right_content {
  margin-top: 40px;
  margin-left: 20px;
}
</style>