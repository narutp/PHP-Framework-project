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
                <el-button size="small" type="primary">Upload profile image</el-button>
              </el-upload>
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
import firebase from '../Libraries/firebase'
import { updateImageAPI } from '../Resource'

let storage = firebase.storage();
let storageRef = storage.ref();
let imagesRef = storageRef.child('images');

export default {
  props: ['editUserList'],
  data () {
      return {
          form: {
              name: '',
              address: '',
              facebook: '',
              phone: '',
              imageUrl: ''
          },
          fileList: []
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
              this.form.profile_picture = getUser.data.profile_picture
        } catch (error) {
            loader.hide()
            console.log(error)
        }
        loader.hide()
      },
      async editUser() {
          let editUserRes
          try {
            try {
              await this.handleClickUploadImage()
            } finally {
              editUserRes = await editUserAPI.editUser(this.form.name, this.form.address, this.form.facebook, this.form.phone)
            }
          } catch(error) {
              console.log(error)
          }
          console.log('edit user: ', editUserRes)
          this.editUserList.dialogVisible = false
          // this.$router.go()
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
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      },
      async handleClickUploadImage() {
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
            let createRes
            try {
                createRes = await updateImageAPI.updateImage(downloadURL)
            } catch (error) {
                console.log(error)
            }
            location.reload();
          });
        });
      }
  }
}
</script>
<style scoped>
  .edit-user-dialog--dialog {
      margin: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


