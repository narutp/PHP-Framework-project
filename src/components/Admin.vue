<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Users table">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-table
              id="testTable"
              :data="user"
              border
              style="width: 100%">
              <el-table-column
                prop="id"
                label="Id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="Name">
              </el-table-column>
              <el-table-column
                prop="type"
                label="Role">
              </el-table-column>
              <el-table-column
                prop="department"
                label="Department">
              </el-table-column>
            </el-table>
          </div>
          <div style="padding-top: 1rem;">
            <el-button @click="printReport()">Print Report</el-button>
          </div>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="Create user">
        <el-form ref="form2" :model="form" :rules="rules" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Name: " prop="name" align="left">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="E-mail: " prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Line ID: " prop="lineid">
              <el-input v-model="form.lineid"></el-input>
            </el-form-item>
            <el-form-item label="Address: " prop="address">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="Type" align="left">
              <el-select v-model="form.type" placeholder="type">
                <el-option label="Admin" value="admin"></el-option>
                <el-option label="Supervisor" value="supervisor"></el-option>
                <el-option label="Subordinates" value="subordinate"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Facebook: " prop="facebook">
              <el-input v-model="form.facebook"></el-input>
            </el-form-item>
            <el-form-item label="Phone Number: " prop="phone_number">
              <el-input v-model="form.phone_number"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="createUser('form2')">Create</el-button>
            </el-form-item>
          </div>
          
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Set hierarchy of roles">
        <el-form ref="form" :model="form" label-width="120px">
          <!-- <div style="padding-left: 300px; padding-right: 300px;"> -->
            <el-form-item label="" align="center">
              <el-select v-model="form.supervisor_id" placeholder="supervisors">
                <el-option v-for='item in supervisor' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" align="center">
              <el-select v-model="form.subordinate_id" placeholder="subordinates">
                <el-option v-for='item in subordinate' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="setHierarchy()">Confirm</el-button>
            </el-form-item>
          <!-- </div> -->
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Set department">
        <el-form ref="form4" :model="form" :rules="rules2" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Name" align="left">
              <el-select v-model="form.id_edit" placeholder="Name">
                <el-option v-for='item in user' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Department: " prop="department" align="left">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="setDepartment('form4')">Confirm</el-button>
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
import { getSupervisorAPI } from './Resource'
import { getSubordinateAPI } from './Resource'
import { setDepartmentAPI } from './Resource'
import { updateImageAPI } from './Resource'
import { setHierarchyAPI } from './Resource'
import { getReportFileAPI } from './Resource'
import firebase from './Libraries/firebase'
import fileSaver from 'file-saver'

let storage = firebase.storage();
let storageRef = storage.ref();
let imagesRef = storageRef.child('images');

export default {
    name: 'Admin',
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the name'));
        } else {
          callback();
        }
      };
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the email'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          callback();
        }
      };
      var validateLineid = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the Line id'));
        } else {
          callback();
        }
      };
      var validateAddress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the address'));
        } else {
          callback();
        }
      };
      var validateFacebook = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the Facebook'));
        } else {
          callback();
        }
      };
      var validatePhoneNumber = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the phone number'));
        } else {
          callback();
        }
      };
      var validateDepartment = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the department'));
        } else {
          callback();
        }
      };
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
          department: '',
          supervisor_id: '',
          subordinate_id: ''
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          lineid: [
            { validator: validateLineid, trigger: 'blur' }
          ],
          address: [
            { validator: validateAddress, trigger: 'blur' }
          ],
          facebook: [
            { validator: validateFacebook, trigger: 'blur' }
          ],
          phone_number: [
            { validator: validatePhoneNumber, trigger: 'blur' }
          ]

        },
        rules2: {
          department: [
            { validator: validateDepartment, trigger: 'blur' }
          ],
        },
        supervisor: [],
        subordinate: [],
        user: [],
        fileList: []
      }
    },
    async mounted(){
      let users,supervisors,subordinates
      try {
          users = await getUsersAPI.getUsers()
          supervisors = await getSupervisorAPI.getSupervisorList()
          subordinates = await getSubordinateAPI.getSubordinateList()
      } catch (error) {
          console.log(error)
      }
      this.user = users.data
      this.supervisor = supervisors.data
      this.subordinate = subordinates.data
    },
    methods: {
      async createUser(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            console.log('error submit!!');
            return false;
          } else {
            this.createUserConfirm();
          }
        });
        
      },
      async createUserConfirm() {
        let createRes
        let is_admin = !(this.form.type == "supervisor" || this.form.type == "subordinate")
        try {
            createRes = await createUserAPI.createUser(this.form.name, this.form.email, 
            this.form.password, this.form.lineid, is_admin, this.form.type, this.form.address, this.form.facebook, this.form.phone_number)
        } catch (error) {
            console.log(error)
        }
        location.reload();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Delete ${ file.name }？`);
      },
      async manageUser() {
        let createRes
        try {
            createRes = await manageUserAPI.manageUser(this.form.id_edit, this.form.type_edit)
        } catch (error) {
            console.log(error)
        }
        location.reload();
      },
      async printReport() {
        let createRes
        try {
            createRes = await getReportFileAPI.getReportFile()
            var file = new File([createRes.data], "report.xlsx", {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fileSaver.saveAs(file);
        } catch (error) {
            console.log(error)
        }
      },
      async setHierarchy() {
        let createRes
        try {
            createRes = await setHierarchyAPI.setHierarchy(this.form.supervisor_id, this.form.subordinate_id)
        } catch (error) {
            console.log(error)
        }
        location.reload();
      },
      async setDepartment(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            console.log('error submit!!');
            return false;
          } else {
            this.setDepartmentConfirm();
          }
        });
        
      },
      async setDepartmentConfirm() {
        let createRes
        try {
            createRes = await setDepartmentAPI.setDepartment(this.form.id_edit, this.form.department)
        } catch (error) {
            console.log(error)
        }
        location.reload();
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

