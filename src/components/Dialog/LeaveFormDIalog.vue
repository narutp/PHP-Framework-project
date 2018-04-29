<template>
  <div class="leave-form-dialog--container">
    <el-dialog
        title="Create leave form"
        :visible.sync="leaveList.dialogVisible"
        size="small"
        :before-close="handleClose">
        <el-form class="leave-form-dialog--dialog" ref="form" :model="form" label-width="120px" label-position="left">
            <el-form-item label="Reason to leave">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
                <div align="left">
                    <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </div>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
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


