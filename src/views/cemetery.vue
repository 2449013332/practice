<template>
  <div class="carousel" ref="carouselRef">
    <div class="container">
      <img
        v-for="(item, index) in imgList"
        :key="index"
        :src="item.src"
        alt=""
      />
    </div>
    <div class="shift">
      <div class="btn left" @click="leftShift">&lt;</div>
      <div class="btn right" @click="rightShift">&gt;</div>
    </div>
    <div class="bottom">
      <div
        class="indicator"
        v-for="(item, index) in imgList"
        :key="index"
        @click="setIndex(index)"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0, //显示图片的下标
      imgCount: 0,
      imgList: [
        { src: require("../assets/12.jpg") },
        { src: require("../assets/14.jpg") },
        { src: require("../assets/15.jpg") },
        { src: require("../assets/22.jpg") },
        
      ],
      autoTimer: null,
    };
  },
  mounted() {
    this.imgCount = this.imgList.length;
    //自动滚动
    this.autoTimer = this.createAuto();
    this.refresh();
  },
  methods: {
    createAuto() {
      return setInterval(() => {
        this.index++;
        this.refresh();
      }, 3000);
    },

    refresh() {
      if (this.index < 0) {
        this.index = this.imgCount - 1;
      } else if (this.index >= this.imgCount) {
        this.index = 0;
      }
      //获取轮播元素
      let carousel = this.$refs.carouselRef;
      console.log(carousel)
      //获取轮播框的宽度
      let width = getComputedStyle(carousel).width;
      width = Number(width.slice(0, -2));
      carousel.querySelector(".container").style.left =
        this.index * width * -1 + "px";
    },

    refreshWrapper(func) {
      return (...args) => {
        //refresh装饰器
        let result = func(...args);
        this.refresh();
        
        //重置自动滚动
        clearInterval(this.autoTimer);
        this.autoTimer = this.createAuto();
        return result;
      };
    },
    leftShift() {
      this.refreshWrapper(() => {this.index--;})()
    },

    rightShift() {
      this.refreshWrapper(() => {
        this.index++;
      })()
    },

    setIndex(i) {
      this.refreshWrapper((idx) => {
        this.index = idx;
      })(i)
    },
  },
};
</script>

<style>
.carousel {
  width: 600px;
  height: 300px;
  /* border: 4px solid #000; */
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.carousel .container {
  height: 100%;
  width: 100%;
  background: orange;
  position: relative;
  left: 0;
  display: flex;
  transition: all 1s;
}
.carousel .container img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover; /*防止图片被压缩*/
}

.carousel .shift .btn {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: teal;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  font-size: 40px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  user-select: none;
  opacity: 0.5;
}
.carousel .shift .left {
  left: 20px;
}
.carousel .shift .right {
  right: 20px;
}
.carousel .bottom {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: max-content;
  margin: 0 auto;
  display: flex;
  gap: 10px; /*设置时期间距*/
}
.carousel .bottom .indicator {
  height: 5px;
  width: 40px;
  background: teal;
  cursor: pointer;
  opacity: 0.5;
}
.carousel:hover .shift .btn {
  opacity: 1;
}
</style>