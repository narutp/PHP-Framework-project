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
                <el-table v-loading.body="loading" :data="tableLeave" border style="width: 100% margin-bottom: 20px">
                    <el-table-column
                        prop="created_at" label="Request date" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="user.name" label="Name">
                    </el-table-column>
                    <el-table-column
                        prop="type" label="Type" width="140">
                    </el-table-column>
                    <el-table-column
                        label="Start date">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.start_date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="End date">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.end_date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="Status"
                        align="center">
                        <template scope="scope">
                            <el-tag
                            :type="scope.row.status === 'requested' ? 'info' : scope.row.status === 'approved' ? 'success' : 'danger'"
                            close-transition>{{scope.row.status}}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="Options"
                        width="90"
                        align="center">
                        <template scope="scope">
                            <el-button icon="menu" 
                                type="info" 
                                size="mini"
                                @click="confirmRequest(scope.row.id, scope.row.user.name, scope.row.type)" 
                            />
                        </template>
                    </el-table-column>
                </el-table>
                </el-row>
            </el-col>
        </el-row>
        <confirm-leave-dialog :confirmList="confirmList"/>
    </div>
</template>
<script>
import HorizontalNav from './Navbar/HorizontalNavbar'
import VerticalNav from './Navbar/VerticalNavbar'
import ConfirmLeaveDialog from './Dialog/ConfirmLeaveDialog'
import { getLeavesRequestAPI } from './Resource/index'

export default {
    data() {
        return {
            loading: false,
            tableLeave: [{
                id: '',
                'user.name': '',
                created_at: '',
                type: '',
                start_date: '',
                end_date: '',
                status: ''
            }],
            confirmList: {
                dialogVisible: false,
                leaveId: '',
                name: '',
                type: ''
            }
        }
    },
    async mounted() {
        this.loading = true
        this.fetchRequest()
    },
    methods: {
        async fetchRequest() {
            let user_type = await localStorage.getItem('user_type')
            let res
            if (user_type === 'subordinate') {
                try {
                    res = await getLeavesRequestAPI.getLeavesRequest()
                } catch (error) {
                    consoe.log(error)
                }
            } else {
                try {
                    res = await getLeavesRequestAPI.getSubordinateLeaves()
                } catch (error) {
                    console.log(error)
                }
            }
            console.log('get leave', res)
            this.tableLeave = res.data
            this.loading = false
        },
        confirmRequest(leaveId, name, type) {
            this.confirmList.leaveId = leaveId
            this.confirmList.name = name
            this.confirmList.type = type
            this.confirmList.dialogVisible = true
            console.log('leaveId', name)
        }
    },
    components: {
        HorizontalNav,
        VerticalNav,
        ConfirmLeaveDialog
    }
}
</script>
<style scoped>

</style>


