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
            <el-form-item label="Task description">
                <el-input type="textarea" v-model="task.description"></el-input>
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
            <el-button type="primary" @click="createTask()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { createTaskAPI } from '../Resource'
import axios from 'axios'
import moment from 'moment'

export default {
    props: ['taskList'],
    data() {
        return {
            task: {
                name: '',
                description: '',
                date: '',
                user: ''
            }
        }
    },
    mounted() {
    },
    methods: {
        async createTask() {
            let createRes
            try {
                // let createRes = await axios.post('localhost:8000/create_task', {
                //      task_name: 'Kuay',
                //     description: 'Nahee',
                //     start_date: new Date(),
                //     end_date: new Date(),
                //     assignee_id: '1',
                //     assignor_id: '1'
                // }, {
                //     headers: {
                //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3Mjg2OTk4Y2NiNmZiNGI3N2VmNDE3ZGI0Y2NjYmRkODEzZTc0MWUyYWUzNWVmMTZjMWY1MDBkMDFjYWU1OTA2MzJmMjdlMWIyNzIyZDM1In0.eyJhdWQiOiIyIiwianRpIjoiNTcyODY5OThjY2I2ZmI0Yjc3ZWY0MTdkYjRjY2NiZGQ4MTNlNzQxZTJhZTM1ZWYxNmMxZjUwMGQwMWNhZTU5MDYzMmYyN2UxYjI3MjJkMzUiLCJpYXQiOjE1MjUyMTM5NTksIm5iZiI6MTUyNTIxMzk1OSwiZXhwIjoxNTU2NzQ5OTU5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.kVO6gm1KfUUuTPEcNKW7V28j2LxzheWM16piLxE4iG5UJMXsnRlMC0Im7BMskpXLbSKjOz5SdJYcDiHr15OYWa2RSC9KRPIbf61RvTevYjkS3RuUm6aU6e27dLV1Un2SKRK_AIYwn83rFzNFLTip0Yjb3YpbC9e8Q48ojH6GIr8ba3ZY4xKzywcLEYp9oXoFaQgeI-OA4oQXuNbyy_PvBQdQwlg_qvPsoQxSZXSoKHBHK6Sf0WufoJPRCDLJ7b9s_nXinJRCOVcBwvURlnl-P2xhbv48dKY_wZaVQ7DSFoSYLHELfPSN1ZM0g6Vguk59r4IzUYw6H4DYhI228vHcvD_5jJ_ZNvuP7stFX84gEiiKBz2o00XOwq9ypyDPs5tPHab042r48naGCG7iTcZzzi0JWH_ruH2mDz3Nh9vgSlTbgPshqKBv2U4uOa_bEO1Mb36mM05G6OThPAUB7ICuGtqQrWKKt2lGa7rqk_jvc8uHTIbhzEVthGVjVA4Jo4FhtCqJ2gCL-1YpO_iioiw5J08Qqm9SgxW2t9keVKtQi7FhVCBK7VL343zjnle16p7Mju6jiRk6dO6dEzxGSibABsfbMPpON4zdd79c0IYEkapwkiDAB-ytWRpI8XY6OtE2C63AW2_Uqxz2LvjWjAT7496UWi3EYgZADTIfNAjpn-I'
                //     }
                // })
                let createRes = await createTaskAPI.createTask('Kuay', 'Nahee', this.task.date[0], this.task.date[1], 1, 1)
            } catch (error) {
                console.log(error)
            }
            console.log('create response', createRes)
            let date1 = moment(this.task.date[0]).format('YYYY-MM-DD')
            console.log('Date1 ', date1)
            console.log('Date2 ', this.task.date[1])
            
        }
    }
}
</script>
<style scoped>

</style>


