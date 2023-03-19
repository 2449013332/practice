<template>
  <div id="app">
    <div style="flex-wrap: wrap; display: flex">
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      routeList: routes,
      // row:row
    };
  },
  async mounted() {
    // console.log(this.$store.state.name);
    console.log(this.name);
    //console.log(this.$store.getters.getNumber);
    console.log(this.getNumber);
    // this.$store.commit("changeNum", { number: 55 });
    this.changeNum({ number: 55 });
    // this.$store.dispatch("changeNum", { number: 55 });
    await this.setNum({number:99})
     console.log(this.$store.state.number);
  },
  computed: {
    // getStateName() {
    //   return this.$store.state.name;
    // },
    ...mapState(["name"]),
    ...mapGetters(["getNumber"]),
  },
  methods: {
    ...mapMutations(["changeNum"]),
    ...mapActions(["setNum"]),
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