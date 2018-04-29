<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <el-row>
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px" class="demo-ruleForm">
              <el-form-item>
                <h1>Login Form</h1>
              </el-form-item>
              <el-form-item label="Username" prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="pass">
                <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">Submit</el-button>
              </el-form-item>
            </el-form>
        </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else if(value.length < 8){
          callback(new Error('At least 8 characters'));
        } else {
          callback();
        }
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the username'));
        } else if(value.length < 8){
          callback(new Error('At least 8 characters'));
        } else {
          callback();
        }
      };
      return {
        header: "Login",
        loginForm: {
          username: '',
          pass: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('http://localhost:8000/api/login', {
              email: this.loginForm.username,
              password: this.loginForm.pass
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  margin-left: 3rem;
  margin-right: 3rem;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

