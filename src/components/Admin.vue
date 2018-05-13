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
                label="Roll">
              </el-table-column>
              <el-table-column
                prop="department"
                label="Department">
              </el-table-column>
            </el-table>
          </div>
          <div style="padding-top: 1rem;">
            <el-button @click="tableToExcel('testTable', 'User Table')">Print Report</el-button>
          </div>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="Create user">
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
      <el-tab-pane label="Set hierarchy of roles">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-form-item label="Supervisors" align="left">
              <el-select v-model="form.id_edit" placeholder="supervisors">
                <el-option v-for='item in supervisor' :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Subordinates" align="left">
              <el-select v-model="form.type_edit" placeholder="subordinates">
                <el-option v-for='item in subordinate' :key='item.id' :label="item.name" :value="item.id"></el-option>
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

      <el-tab-pane label="Set profile picture">
        <el-form ref="form" :model="form" label-width="120px">
          <div style="padding-left: 300px; padding-right: 300px;">
            <el-upload
              class="upload-demo"
              action=""
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :auto-upload="false"
              :multiple="false"
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">Click to upload</el-button>
              <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </el-upload>
            <el-form-item>
              <el-button type="primary" @click="handleClickPrintReport()">Confirm</el-button>
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
import firebase from './Libraries/firebase'

let storage = firebase.storage();
let storageRef = storage.ref();
let imagesRef = storageRef.child('images');

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
      async createUser() {
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
      async handleClickPrintReport() {
        console.log('set profile')
        console.log('file',this.$refs.upload.uploadFiles[0])
        // File or Blob named mountains.jpg
        var file = this.$refs.upload.uploadFiles[0].raw

        // Create the file metadata
        var metadata = {
          contentType: 'image/jpeg'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function() {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(async function(downloadURL) {
            console.log('File available at', downloadURL);
            // let createRes
            // try {
            //     createRes = await updateImageAPI.updateImage(downloadURL)
            // } catch (error) {
            //     console.log(error)
            // }
            // location.reload();
          });
        });
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
      async setDepartment() {
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

