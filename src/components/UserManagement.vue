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
                    </div>
                    <div align="left">
                        <div class="user-management--title-wrapper">
                            <el-row>
                                <b>Address</b>
                            </el-row>
                            <hr>
                            <el-row>
                                <p>78/56 moo1 sukhumvit road chonburi 20180</p>
                            </el-row>
                        </div>
                        <div class="user-management--title-wrapper">
                            <b>Contact</b>
                            <hr>
                            <el-row>
                                <el-col :span="4">
                                    <p>Facebook</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>Narut Poovorakit</p>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <p>Phone number</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>0818189081</p>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="4">
                                    <p>Email</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>narut.p@ku.th</p>
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
          name: "Narut Poovorakit"
      }
  },
  async mounted() {
      let getUser
      try {
          getUser = await getUserAPI.getUser()
      } catch (error) {
          console.log(error)
      }
      console.log('get user: ', getUser)
  },
  methods: {
      editUser() {
          this.editUserList.dialogVisible = true
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

