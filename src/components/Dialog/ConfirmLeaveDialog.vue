<template>
  <div class="confirm-leave-dialog--container">
    <el-dialog
        title="Confirm request"
        :visible.sync="confirmList.dialogVisible"
        size="tiny">
        <div align="left">
            <b>Name:</b> <p>{{ confirmList.name }}</p>
            <b>Type:</b> <p>{{ confirmList.type }}</p>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="rejectLeave()">Reject</el-button>
            <el-button type="primary" @click="confirmLeave()">Approve</el-button>
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
      rejectLeave() {
          confirmList.dialogVisible = false
      }
  }
}
</script>
<style scoped>
.leave-form-dialog--dialog {
    margin: 20px;
}
</style>


