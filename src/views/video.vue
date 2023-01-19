<template>
  <div class="video_box">
    <div class="type">
      <div><span>弹幕列表</span><span @click="more">...</span></div>
      <div @click="open">展开</div>
    </div>
    <el-dropdown>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>屏蔽设定</el-dropdown-item>
        <el-dropdown-item>高级弹幕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
    },
  },
};
</script>

<style scoped>
.type {
  display: flex;
  width: 500px;
  justify-content: space-between;
}
</style>