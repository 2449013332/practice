<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img v-lazy="item.src" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return{
        list: [
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },
      { src: require("../assets/12.jpg") },
      { src: require("../assets/14.jpg") },
      { src: require("../assets/15.jpg") },
      { src: require("../assets/22.jpg") },

    ]
    }
  },
};
</script>