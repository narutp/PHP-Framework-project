<template>
    <div class="user-management--container">
        <el-row>
            <horizontal-nav></horizontal-nav>
            <el-col :span="4">
                <vertical-nav></vertical-nav>
            </el-col>
            <el-col :span="20">
                <el-row class="routerWrapper">
                    <div class="user-management--image-wrapper">
                        <img src="@/assets/logo.png" />
                        <div>
                            {{ name }}
                        <i @click="editUser()" class="fas fa-edit user-management--edit-icon"></i>
                        </div>
                        <p style="margin-bottom: 20px; color: grey; font-size: 12px;">{{ user_type }}</p>
                    </div>
                    <div align="left">
                        <div class="user-management--title-wrapper">
                            <el-row>
                                <b>Address</b>
                            </el-row>
                            <hr>
                            <el-row>
                                <p>{{ address }}</p>
                            </el-row>
                        </div>
                        <div class="user-management--title-wrapper">
                            <b>Contact</b>
                            <hr>
                            <el-row>
                                <el-col :span="4">
                                    <p>Facebook:</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>{{ facebook }}</p>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <p>Phone number:</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>{{ phone_number }}</p>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <p>Email:</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>{{ email }}</p>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <p>Role:</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>{{ role }}</p>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-row>
            </el-col>
        </el-row>
        <edit-user-dialog :editUserList="editUserList"></edit-user-dialog>
    </div>
</template>
<script>
import HorizontalNav from '@/components/Navbar/HorizontalNavbar'
import VerticalNav from '@/components/Navbar/VerticalNavbar'
import EditUserDialog from './Dialog/EditUserDialog'
import { getUserAPI } from './Resource/index'

export default {
  data() {
      return {
          editUserList: {
              dialogVisible: false
          },
          name: 'Narut Poovorakit',
          address: '',
          facebook: '',
          phone_number: '',
          email: '',
          role: '',
          user_type: ''
      }
  },
  async mounted() {
      this.user_type = localStorage.getItem('user_type')
      let getUser
      try {
          getUser = await getUserAPI.getUser()
      } catch (error) {
          console.log(error)
      }
      console.log('get user: ', getUser)
      this.fetchUser(getUser.data)
  },
  methods: {
      editUser() {
          this.editUserList.dialogVisible = true
      },
      fetchUser(data) {
          this.name = data.name
          this.address = data.address
          this.facebook = data.facebook
          this.phone_number = data.phone_number
          this.role = data.type
      }
  },
  components: {
      HorizontalNav,
      VerticalNav,
      EditUserDialog
  }
}
</script>

<style scoped>
.user-management--image-wrapper {
    margin-bottom: 45px;
}
.user-management--title-wrapper {
    margin-bottom: 45px;
}
.user-management--edit-icon {
    margin-left: 5px;
}
.user-management--edit-icon:hover {
    cursor: pointer;
}
</style>

