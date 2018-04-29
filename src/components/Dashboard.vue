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
                <div class="dashboard--subcontainer">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        prop="date"
                        label="Date"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="Name"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="Address">
                        </el-table-column>
                    </el-table>
                </div>
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
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
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
.dashboard--subcontainer {
    padding: 30px;
}
</style>
