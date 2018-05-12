<template>
  <div class="leave-form-dialog--container">
    <el-dialog
        title="Create leave form"
        :visible.sync="confirmList.dialogVisible"
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
            <el-form-item label="Select substitute user">
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
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="confirmList.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmLeave()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>

export default {
  props: ['confirmList'],
  data () {
      return {
      }
  },
  methods: {
  }
}
</script>
<style scoped>
.leave-form-dialog--dialog {
    margin: 20px;
}
</style>


