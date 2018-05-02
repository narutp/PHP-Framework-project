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
import { editUserAPI } from '../Resource/index'
import { getUserAPI } from '../Resource/index'

export default {
  props: ['editUserList'],
  data () {
      return {
          form: {
              name: '',
              address: '',
              facebook: '',
              phone: ''
          }
      }
  },
  async mounted() {
      await this.fetchUser()
  },
  methods: {
      async fetchUser() {
        let loader = this.$loading.show()
        let getUser
        try {
              getUser = await getUserAPI.getUser()
              this.form.name = getUser.data.name
              this.form.address = getUser.data.address
              this.form.facebook = getUser.data.facebook
              this.form.phone = getUser.data.phone_number
        } catch (error) {
            loader.hide()
            console.log(error)
        }
        loader.hide()
      },
      async editUser() {
          let editUserRes
          try {
              editUserRes = await editUserAPI.editUser(this.form.name, this.form.address, this.form.facebook, this.form.phone)
          } catch(error) {
              console.log(error)
          }
          console.log('edit user: ', editUserRes)
          this.editUserList.dialogVisible = false
          this.$router.go()
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


