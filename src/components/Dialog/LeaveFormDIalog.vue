<template>
  <div class="leave-form-dialog--container">
    <el-dialog
        title="Create leave form"
        :visible.sync="leaveList.dialogVisible"
        size="small"
        :before-close="handleClose">
        <el-form class="leave-form-dialog--dialog" ref="form" :model="form" label-width="120px" label-position="left">
            <el-form-item label="Reason to leave">
                <el-input type="textarea" v-model="form.reason"></el-input>
            </el-form-item>
            <el-form-item label="Type">
                <div align="left">
                    <el-select v-model="form.type" placeholder="Please select your type">
                        <el-option label="Vacation leave" value="Vacation leave"></el-option>
                        <el-option label="Personal Errand leave" value="Personal Errand leave"></el-option>
                        <el-option label="Sick leave" value="Sick leave"></el-option>
                    </el-select>
                </div>
            </el-form-item>
            <el-form-item label="Select period">
                <div align="left">
                    <el-date-picker type="daterange" placeholder="Pick a date" v-model="form.date"></el-date-picker>
                </div>
            </el-form-item>
            <el-form-item label="Select substitute user">
                <div align="left">
                    <el-select v-model="form.chosenUser" placeholder="Please select substitute">
                        <el-option label="A" value="A"></el-option>
                        <el-option label="B" value="B"></el-option>
                        <el-option label="C" value="C"></el-option>
                    </el-select>
                </div>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="leaveList.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmLeave()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['leaveList'],
  data () {
      return {
          form: {
              reason: '',
              type: '',
              date: '',
              chosenUser: ''
          }
      }
  },
  methods: {
      confirmLeave() {
          this.leaveList.dialogVisible = false
      }
  }
}
</script>
<style scoped>
.leave-form-dialog--container {
}
.leave-form-dialog--dialog {
    margin: 20px;
}
</style>


