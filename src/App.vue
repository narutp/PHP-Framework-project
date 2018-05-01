<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    <!-- <el-row v-if="$route.path !== '/'">
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
    <el-row v-else>
      <el-col :span="24">
        <el-row class="routerWrapper">
          <router-view/>
        </el-row>
      </el-col>
    </el-row> -->
    <router-view/>
  </div>
</template>

<script>
import VerticalNav from '@/components/Navbar/VerticalNavbar'
import HorizontalNav from '@/components/Navbar/HorizontalNavbar'
import FooterBar from '@/components/Footer'

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
    HorizontalNav,
    FooterBar
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
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  /* set important because preventing modal to set a new padding to body! */
  padding: 0 !important;
}
.routerWrapper {
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
