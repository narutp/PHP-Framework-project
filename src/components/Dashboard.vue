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
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                        prop="date" label="Registered date" width="180">
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
            </div>
            <div v-if="type === 'subordinate'" class="dashboard--subcontainer">
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

export default {
    data() {
        return {
            type: 'supervisor',
            leaveFormList: {
                dialogVisible: false
            },
            taskList: {
                dialogVisible: false
            },
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                email: 'a@a.com'
                }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                email: 'a@a.com'
                }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                email: 'a@a.com'
                }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                email: 'd@a.com'
            }]
        }
    },
    methods: {
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
