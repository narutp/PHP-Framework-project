<template>
  <div id="app">
    <el-row>
      <horizontal-nav></horizontal-nav>
      <el-col :span="4">
        <vertical-nav></vertical-nav>
      </el-col>
      <el-col :span="20">
        <el-row class="routerWrapper">
          <router-view/>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VerticalNav from '@/components/Navbar/VerticalNavbar'
import HorizontalNav from '@/components/Navbar/HorizontalNavbar'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    VerticalNav,
    HorizontalNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
body {
  margin: 0
}
.routerWrapper {
  padding: 30px;
}
</style>
