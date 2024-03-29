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
  {
    path: "/score",
    component: (resolve) => require(["../views/score.vue"], resolve),
  },
  {
    path: "/lifeCycle",
    component: (resolve) => require(["../views/lifeCycle.vue"], resolve),
  },
  {
    path: "/father",
    component: (resolve) => require(["../views/communication/father.vue"], resolve),
  },
  {
    path: "/change",
    component: (resolve) => require(["../views/change.vue"], resolve),
  },
  {
    path: "/arry",
    component: (resolve) => require(["../views/arry.vue"], resolve),
  },
  {
    path: "/arryDedup",
    component: (resolve) => require(["../views/arryDedup.vue"], resolve),
  },
  {
    path: "/randomColor",
    component: (resolve) => require(["../views/randomColor.vue"], resolve),
  },
  {
    path: "/add",
    component: (resolve) => require(["../views/add.vue"], resolve),
  },
  {
    path: "/table",
    component: (resolve) => require(["../views/table.vue"], resolve),
  },
  {
    path: "/work",
    component: (resolve) => require(["../views/work/index.vue"], resolve),
  },
  {
    path: "/todoList",
    component: (resolve) => require(["../views/todoList/index.vue"], resolve),
  },
  {
    path: "/todo",
    component: (resolve) => require(["../views/todo.vue"], resolve),
  },
  {
    path: "/cemetery",
    component: (resolve) => require(["../views/cemetery.vue"], resolve),
  },
  {
    path: "/computed",
    component: (resolve) => require(["../views/computed.vue"], resolve),
  },
  {
    path: "/addBook",
    component: (resolve) => require(["../views/addBook.vue"], resolve),
  },
  {
    path: "/addPerson",
    component: (resolve) => require(["../views/addPerson.vue"], resolve),
  },
  {
    path: "/cart",
    component: (resolve) => require(["../views/cart.vue"], resolve),
  },
  {
    path: "/video",
    component: (resolve) => require(["../views/video.vue"], resolve),
  },
  {
    path: "/time",
    component: (resolve) => require(["../views/time.vue"], resolve),
  },
  {
    path: "/todo1",
    component: (resolve) => require(["../views/todo1.vue"], resolve),
  },
  {
    path: "/lazy",
    component: (resolve) => require(["../views/lazy.vue"], resolve),
  },
];

export default new Router({
  mode: "hash",
  routes: routes,
});
