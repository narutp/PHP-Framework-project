<template>
  <div class="transfer-task-dialog--container">
    <el-dialog
        title="Transfer task"
        :visible.sync="transferList.dialogVisible"
        size="tiny">
        <div align="center">
            <el-select style="width: 300px" v-model="user" placeholder="Please select user to transfer task">
                <el-option
                    v-for="item in this.transferList.subordinateList" 
                    :key="item.id"
                    :label="item.name" 
                    :value="item.id">
                </el-option>
            </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="cancle()">Cancle</el-button>
            <el-button type="primary" @click="transferTask()">Submit</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { confirmLeaveRequestAPI } from '../Resource/index'
export default {
  props: ['transferList'],
  data () {
      return {
          user: ''
      }
  },
  mounted() {
      console.log('aaa', this.transferList.subordinateList)
  },
  methods: {
      cancle() {
          this.transferList.dialogVisible = false
      },
      transferTask() {
          
      }
  }
}
</script>
<style scoped>
.leave-form-dialog--dialog {
    margin: 20px;
}
</style>


