<template>
  <div class="horizontal-navbar--container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" v-on:click="navigateHome()"><b>Task management system</b></el-menu-item>
        <!-- <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    navigateHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

