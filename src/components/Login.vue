<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <el-row>
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="top" label-width="120px" class="demo-ruleForm">
              <p class="title">LOGIN</p>
              <div style="padding-left: 75px; padding-right: 75px;">
                <el-form-item label="Username" prop="username" align="left">
                  <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="pass" align="left">
                  <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="width: 100%" type="primary" @click="submitForm('loginForm')">Submit</el-button>
                </el-form-item>
              </div>
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
            { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.login()
          } else {
            console.log('error submit!!')
            return false;
          }
        });
      },
      async login() {
        // show loading
        let loader = this.$loading.show()
        let loginResponse = await axios.post('http://localhost:8000/api/login', {
          email: this.loginForm.username,
          password: this.loginForm.pass
        })
        if (loginResponse.data.message === 'Authenticated') {
          console.log('in')
          loader.hide()
          this.$router.push('dashboard')
        } else {
          // TODO: something when login failed
        }
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
.grid-content {
  border: 0.5px solid grey;
  padding: 20px;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  font-size: 16px;
}
</style>

