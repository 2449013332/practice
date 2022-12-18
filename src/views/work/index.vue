<template>
  <div>
    <div
      class="btn"
      v-for="(item, index) in list"
      :key="index"
      @click="change(item)"
      :class="{ box: active == item.id }"
    >
      {{ item.name }}
    </div>
    <!-- <div>
      <component :is="curName" :id="active" />
    </div> -->
    <div>
      <A v-show="curName == 'A'" :id="active"></A>
      <B v-show="curName == 'B'" :id="active"> </B>
      <C v-show="curName == 'C'" :id="active"></C>
    </div>
  </div>
</template>

<script>
import A from "./components/a";
import B from "./components/b";
import C from "./components/c";

export default {
  components: { A, B, C },
  mounted() {
    this.list.push({ name: "c", id: "3", tagName: "C" });
  },
  data() {
    return {
      active: "1",
      curName: "A",
      list: [
        { name: "a", id: "1", tagName: "A" },
        { name: "b", id: "2", tagName: "B" },
      ],
    };
  },
  methods: {
    change(item) {
      if (item.id) {
        this.curName = item.tagName;
        this.active = item.id;
      }
    },
  },
};
</script>

<style>
.btn {
  border: 1px solid #999;
  color: cornflowerblue;
  cursor: pointer;
  display: inline-block;
  border-radius: 8px;
  margin-right: 10px;
  padding: 5px 20px;
  font-size: 16px;
}
.box {
  background: orange;
}
</style>
