<template>
    <div class="dashboard--container">
        <el-row>
            <div v-if="this.type === 'supervisor'" class="dashboard--subcontainer">
                <div align="right">
                    <el-button @click="createTask()" style="margin-bottom: 10px" type="info">Create task <i class="fas fa-plus"></i></el-button>
                </div>
                <div class="dashboard--title" align="left">
                    <b>List of subordinates</b>
                </div>
                <el-table v-loading.body="loading" :data="tableData" border style="width: 100%; margin-bottom: 20px">
                    <el-table-column
                        prop="created_at" label="Registered date" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name" label="Name" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address" label="Address">
                    </el-table-column>
                    <el-table-column
                        prop="email" label="Email">
                    </el-table-column>
                </el-table>

                <div class="dashboard--title" align="left">
                    <b>List of tasks</b>
                </div>
                <el-table v-loading.body="loading" :data="tableTask" border style="width: 100%">
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
                        prop="start_date" label="Start date">
                    </el-table-column>
                    <el-table-column
                        prop="end_date" label="End date">
                    </el-table-column>
                </el-table>
            </div>
            <div v-if="this.type === 'subordinate'" class="dashboard--subcontainer">
                <div align="right">
                    <el-button @click="createLeaveForm()" style="margin-bottom: 10px" type="info">Create leave form <i class="fas fa-plus"></i></el-button>
                </div>
                <div class="dashboard--title" align="left">
                    <b>List of tasks</b>
                </div>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="date" label="Date" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name" label="Name" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address" label="Address">
                    </el-table-column>
                </el-table>
            </div>
        </el-row>
        <leave-form-dialog :leaveList="leaveFormList"></leave-form-dialog>
        <create-task-dialog :taskList="taskList"></create-task-dialog>
    </div>
</template>

<script>
import LeaveFormDialog from '@/components/Dialog/LeaveFormDialog'
import CreateTaskDialog from '@/components/Dialog/CreateTaskDialog'
import { getSubordinateAPI, getTaskAPI } from './Resource/index'

export default {
    data() {
        return {
            type: '',
            leaveFormList: {
                dialogVisible: false
            },
            taskList: {
                dialogVisible: false
            },
            tableData: [{
                created_at: '',
                name: '',
                address: '',
                email: ''
            }],
            tableTask: [{
                created_at: '',
                task_name: '',
                description: '',
                start_date: '',
                end_date: ''
            }],
            loading: false
        }
    },
    async mounted() {
        this.loading = true
        this.type = localStorage.getItem('user_type')
        await this.fetchSubordinate()
        await this.fetchTask()
        console.log('type', this.type)
    },
    methods: {
        async fetchSubordinate () {
            let fetchRes
            try {
                fetchRes = await getSubordinateAPI.getSubordinateList()
            } catch (error) {
                console.log(error)
            }
            console.log('fetchRes', fetchRes)
            this.tableData = fetchRes.data
        },
        async fetchTask() {
            let fetchRes
            try {
                fetchRes = await getTaskAPI.getTask()
            } catch (error) {
                console.log(error)
            }
            console.log('taskRes', fetchRes)
            this.tableTask = fetchRes.data
            this.loading = false
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        createLeaveForm () {
            this.leaveFormList.dialogVisible = true
        },
        createTask () {
            this.taskList.dialogVisible = true
        }
    },
    components: {
        LeaveFormDialog,
        CreateTaskDialog
    }
}
</script>

<style scoped>
.dashboard--container {
    padding: 0;
    margin: 0;
}
.dashboard--title {
    margin-bottom: 10px;
}
</style>
