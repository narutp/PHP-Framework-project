<template>
    <div class="dashboard-layout--container">
        <el-row>
            <horizontal-nav></horizontal-nav>
            <el-col :span="4">
                <vertical-nav></vertical-nav>
            </el-col>
            <el-col :span="20">
                <el-row class="routerWrapper">
                    <dashboard />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Dashboard from '../components/Dashboard'
import HorizontalNav from '../components/Navbar/HorizontalNavbar'
import VerticalNav from '../components/Navbar/VerticalNavbar'

export default {
    data() {
        return{}
    },
    components: {
        Dashboard,
        HorizontalNav,
        VerticalNav
    }
}
</script>
<style scoped>

</style>


