<template>
    <div class="dashboard--container">
        <el-row>
            <horizontal-nav></horizontal-nav>
        </el-row>
        <el-row>
            <el-col :span="4">
                <vertical-nav></vertical-nav>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple-dark">a</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import VerticalNav from '@/components/Navbar/VerticalNavbar'
import HorizontalNav from '@/components/Navbar/HorizontalNavbar'
export default {
    data() {
        return {
        }
    },
    components: {
        VerticalNav,
        HorizontalNav
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
}
</script>

<style scoped>
.dashboard--container {
    padding: 0;
    margin: 0;
}
</style>
