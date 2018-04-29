<template>
  <div class="leave-form-dialog--container">
    <el-dialog
        title="Tips"
        :visible.sync="leaveList.dialogVisible"
        size="large"
        :before-close="handleClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['leaveList']
}
</script>
<style scoped>
.leave-form-dialog--container {
}
</style>


