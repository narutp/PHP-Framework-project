<template>
  <div class="create-task-dialog--container">
    <el-dialog
        title="Create task"
        :visible.sync="taskList.dialogVisible"
        size="small"
        :before-close="handleClose">
        <el-form class="create-task-dialog--dialog" ref="form" :model="form" label-width="120px" label-position="left">
            <el-form-item label="Task name">
                <el-input type="text" v-model="task.name"></el-input>
            </el-form-item>
            <el-form-item label="Select period">
                <div align="left">
                    <el-date-picker type="daterange" placeholder="Pick a date" v-model="task.date"></el-date-picker>
                </div>
            </el-form-item>
            <el-form-item label="Select user">
                <div align="left">
                    <el-select v-model="task.user" placeholder="Please select user">
                        <el-option label="A" value="A"></el-option>
                        <el-option label="B" value="B"></el-option>
                        <el-option label="C" value="C"></el-option>
                    </el-select>
                </div>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="taskList.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmLeave()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
    props: ['taskList'],
    data() {
        return {
            task: {
                name: '',
                date: '',
                user: ''
            }
        }
    }
}
</script>
<style scoped>

</style>


