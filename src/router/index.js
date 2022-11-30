import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export const routes = [
  {
    path: "/home",
    component: (resolve) => require(["../views/home.vue"], resolve),
  },
  {
    path: "/about",
    component: (resolve) => require(["../views/about.vue"], resolve),
  },
  {
    path: "/watch",
    component: (resolve) => require(["../views/watch/index.vue"], resolve),
  },
  {
    path: "/count",
    component: (resolve) => require(["../views/count.vue"], resolve),
  },
];

export default new Router({
  mode: "hash",
  routes: routes,
});
