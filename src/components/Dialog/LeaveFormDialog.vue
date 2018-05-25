<template>
  <div class="leave-form-dialog--container">
    <el-dialog
        title="Create leave form"
        :visible.sync="leaveList.dialogVisible"
        size="small"
        :before-close="handleClose">
        <el-form class="leave-form-dialog--dialog" ref="form" :model="form" label-width="120px" label-position="left">
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
            <!-- <el-form-item label="Select substitute user">
                <div align="left">
                    <el-select v-model="form.substitute" placeholder="Please select substitute">
                        <el-option
                            v-for="item in chosenUser" 
                            :key="item.id"
                            :label="item.name" 
                            :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </el-form-item> -->
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="leaveList.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmLeave()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { createLeaveAPI, getColleagueAPI } from '../Resource/index'
import moment from 'moment'

export default {
  props: ['leaveList'],
  data () {
      return {
          form: {
              type: '',
              date: '',
              substitute: ''
          },
          chosenUser: ''
      }
  },
  async mounted() {
      console.log('in')
      await this.fetchColleague()
  },
  methods: {
      async fetchColleague() {
          let getColRes
          try {
              getColRes = await getColleagueAPI.getColleague()
          } catch (error) {
              console.log(error)
          }
          console.log('getCOl', getColRes)
          this.chosenUser = getColRes.data
      },
      async confirmLeave() {
          let date1 = moment(this.form.date[0]).format('YYYY-MM-DD')
          let date2 = moment(this.form.date[1]).format('YYYY-MM-DD')
          let res
          try {
              res = await createLeaveAPI.createLeaveForm(this.form.type, date1, date2)
          } catch (error) {
              console.log(error)
          }
          console.log('res', res)
          if (res.data.success === false) {
              this.$message(res.data.message)
          } else {
              this.leaveList.dialogVisible = false
          }
      }
  }
}
</script>
<style scoped>
.leave-form-dialog--dialog {
    margin: 20px;
}
</style>


