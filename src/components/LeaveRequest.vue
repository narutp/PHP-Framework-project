<template>
    <div class="leave-request--container">
        <el-row>
            <horizontal-nav></horizontal-nav>
            <el-col :span="4">
                <vertical-nav></vertical-nav>
            </el-col>
            <el-col :span="20">
                <el-row class="routerWrapper">
                    <div class="dashboard--title" align="left">
                    <b>Leave request</b>
                </div>
                <el-table v-loading.body="loading" :data="tableSubTask" border style="width: 100% margin-bottom: 20px">
                    <el-table-column
                        prop="created_at" label="Registered date" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="task_name" label="Task Name" width="140">
                    </el-table-column>
                    <el-table-column
                        prop="description" label="Description" width="180">
                    </el-table-column>
                    <el-table-column
                        label="Start date">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.start_date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="End date">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.end_date }}</span>
                        </template>
                    </el-table-column>
                </el-table>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import HorizontalNav from './Navbar/HorizontalNavbar'
import VerticalNav from './Navbar/VerticalNavbar'
import { getLeavesRequestAPI } from './Resource/index'

export default {
    data() {
        return {
            loading: false,
        }
    },
    components: {
        HorizontalNav,
        VerticalNav
    }
}
</script>
<style scoped>

</style>


