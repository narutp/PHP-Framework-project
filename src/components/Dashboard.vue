<template>
    <div class="dashboard--container">
        <el-row>
            <div v-if="type === 'supervisor'" class="dashboard--subcontainer">
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
                <el-table v-loading.body="loading" :data="tableTask" border style="width: 100% margin-bottom: 20px">
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

                <div class="dashboard--title" align="left">
                    <b>Leave history</b>
                </div>
                <el-table v-loading.body="loading" :data="tableHistory" border style="width: 100% margin-bottom: 20px">
                    <el-table-column
                        prop="user.name" label="Name" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="user.phone_number" label="Phone number" width="180">
                    </el-table-column>
                    <el-table-column
                        label="Start date" width="140">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.start_date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="End date" width="180">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.end_date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="Status">
                        <template scope="scope">
                            <el-tag
                            :type="scope.row.status === 'requested' ? 'info' : scope.row.status === 'approved' ? 'success' : 'danger'"
                            close-transition>{{scope.row.status}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- subordinate part -->
            <div v-else>
                <div align="right">
                    <el-button @click="transferTask()" style="margin-bottom: 10px" type="warning">Transfer task</el-button>
                    <el-button @click="createLeaveForm()" style="margin-bottom: 10px" type="info">Create leave form <i class="fas fa-plus"></i></el-button>
                </div>
                <div class="dashboard--title" align="left">
                    <b>List of tasks</b>
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
            </div>
        </el-row>
        <leave-form-dialog :leaveList="leaveFormList"></leave-form-dialog>
        <create-task-dialog :taskList="taskList"></create-task-dialog>
        <transfer-task-dialog :transferList="transferList"></transfer-task-dialog>
    </div>
</template>

<script>
import LeaveFormDialog from '@/components/Dialog/LeaveFormDialog'
import CreateTaskDialog from '@/components/Dialog/CreateTaskDialog'
import TransferTaskDialog from '@/components/Dialog/TransferTaskDialog'
import { getSubordinateAPI, getTaskAPI, getHistoryAPI } from './Resource/index'

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
            transferList: {
                dialogVisible: false,
                subordinateList: [],
                taskId: ''
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
            tableSubTask: [{
                created_at: '',
                task_name: '',
                description: '',
                start_date: '',
                end_date: ''
            }],
            tableHistory: [{
                'user.name': '',
                'user.photo_number': '',
                start_date: '',
                end_date: '',
                status: ''
            }],
            loading: false
        }
    },
    async mounted() {
        this.loading = true
        this.type = await localStorage.getItem('user_type')
        await this.fetchSubordinate()
        await this.fetchTask()
        await this.fetchHistory()
        await this.fetchSubordinateTask()
        this.loading = false
        console.log('type', this.type)
    },
    methods: {
        transferTask () {
            this.transferList.dialogVisible = true
        },
        async fetchSubordinate () {
            let fetchRes
            try {
                fetchRes = await getSubordinateAPI.getSubordinateList()
            } catch (error) {
                console.log(error)
            }
            console.log('fetchRes', fetchRes)
            this.transferList.subordinateList = fetchRes.data
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
        },
        async fetchHistory() {
            let fetchRes
            try {
                fetchRes = await getHistoryAPI.getHistory()
            } catch(error) {
                console.log(error)
            }
            console.log('history', fetchRes.data)
            this.tableHistory = fetchRes.data
            // fetchRes.data.forEach(element => {
            //     console.log('in', element.user)
            // });
        },
        async fetchSubordinateTask() {
            let fetchRes
            try {
                fetchRes = await getTaskAPI.getSubordinateTask()
            } catch (error) {
                console.log(error)
            }
            console.log('fetch response', fetchRes)
            this.transferList.taskId = fetchRes.data[0].id
            console.log('bbbbbbbbbbbb', fetchRes.data[0].id)
            this.tableSubTask = fetchRes.data
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
        CreateTaskDialog,
        TransferTaskDialog
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
    margin-top: 10px;
}
</style>
