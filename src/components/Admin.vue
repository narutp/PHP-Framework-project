<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Create">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Name: " prop="username" align="left">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="E-mail: ">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Line ID: ">
              <el-input v-model="form.lineid"></el-input>
            </el-form-item>
            <el-form-item label="Profile Picture: ">
              <el-input v-model="form.profile_picture"></el-input>
            </el-form-item>
            <el-form-item label="Address: ">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="Type" align="left">
              <el-select v-model="form.type" placeholder="type">
                <el-option label="Admin" value="admin"></el-option>
                <el-option label="Supervisor" value="supervisor"></el-option>
                <el-option label="Subordinates" value="subordinate"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Facebook: ">
              <el-input v-model="form.facebook"></el-input>
            </el-form-item>
            <el-form-item label="Phone Number: ">
              <el-input v-model="form.phone_number"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="createUser()">Create</el-button>
            </el-form-item>
          </div>
          
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Set roll">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Name" align="left">
              <el-select v-model="form.id_edit" placeholder="Name">
                <el-option v-for='item in user' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Type" align="left">
              <el-select v-model="form.type_edit" placeholder="type">
                <el-option label="Admin" value="admin"></el-option>
                <el-option label="Supervisor" value="supervisor"></el-option>
                <el-option label="Subordinates" value="subordinate"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="manageUser()">Confirm</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Set department">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Name" align="left">
              <el-select v-model="form.id_edit" placeholder="Name">
                <el-option v-for='item in user' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Department: " align="left">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="setDepartment()">Confirm</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import { createUserAPI } from './Resource'
import { manageUserAPI } from './Resource'
import { getUsersAPI } from './Resource'
import { setDepartmentAPI } from './Resource'
export default {
    name: 'Admin',
    data() {
      return {
        header: "Admin",
        form: {
          name: '',
          email: '',
          password: '',
          lineid: '',
          is_admin: false,
          type: '',
          address: '',
          facebook: '',
          phone_number: '',
          name_edit: '',
          type_edit: '', 
          users: [],
          id_edit: null,
          department: ''
        },
        user: []
      }
    },
    async mounted(){
      let users
      try {
          users = await getUsersAPI.getUsers()
      } catch (error) {
          console.log(error)
      }
      this.user = users.data
    },
    methods: {
      async createUser() {
        let createRes
        let is_admin = !(this.form.type == "supervisor" || this.form.type == "subordinate")
        try {
            createRes = await createUserAPI.createUser(this.form.name, this.form.email, 
            this.form.password, this.form.lineid, is_admin, this.form.type, this.form.address, this.form.facebook, this.form.phone_number)
        } catch (error) {
            console.log(error)
        }
      },
      async getUsers() {
        let users
        try {
            users = await GetUsersAPI.getUsers()
        } catch (error) {
            console.log(error)
        }
        this.users = users
      },
      async manageUser() {
        let createRes
        try {
            createRes = await manageUserAPI.manageUser(this.form.id_edit, this.form.type_edit)
        } catch (error) {
            console.log(error)
        }
      },
      async setDepartment() {
        let createRes
        try {
            createRes = await setDepartmentAPI.setDepartment(this.form.id_edit, this.form.department)
        } catch (error) {
            console.log(error)
        }
      }
    }
  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

