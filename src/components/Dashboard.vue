<template>
    <div class="dashboard--container">
        <el-row>
            
        </el-row>
        <el-row>
            <el-col :span="4">
                <nav-bar></nav-bar>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple-dark">a</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import NavBar from '@/components/Navbar'
export default {
    data() {
        return {
        }
    },
    components: {
        NavBar
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
