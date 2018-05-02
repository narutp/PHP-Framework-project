<template>
  <div class="edit-user-dialog--container">
    <el-dialog
        title="Edit user"
        :visible.sync="editUserList.dialogVisible"
        size="small"
        :before-close="handleClose">
        <el-form class="edit-user-dialog--dialog" ref="form" :model="form" label-width="120px" label-position="left">
            <el-form-item label="Name">
                <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Address">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="Facebook">
                <el-input type="text" v-model="form.facebook"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Phone number">
                <el-input type="text" v-model="form.phone"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editUserList.dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="editUser()">Confirm</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['editUserList'],
  data () {
      return {
          form: {
              name: '',
              address: '',
              facebook: '',
              email: '',
              phone: ''
          }
      }
  },
  methods: {
      editUser() {
          this.editUserList.dialogVisible = false
      }
  }
}
</script>
<style scoped>
.edit-user-dialog--container {
}
.edit-user-dialog--dialog {
    margin: 20px;
}
</style>


