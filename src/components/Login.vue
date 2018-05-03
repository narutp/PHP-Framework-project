<template>
  <div class="login--container" style="background-color: black">
    <el-row style="min-height: 100px">
      <div style="position: absolute">
        <img class="login--bg" src="@/assets/bg.jpg"/>
      </div>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="grid-content">
          <el-row>
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="top" label-width="80px" class="demo-ruleForm">
              <p class="title">LOGIN</p>
              <div style="padding-left: 50px; padding-right: 50px">
                <el-form-item label="Username" prop="username" align="left">
                  <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="pass" align="left">
                  <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="width: 100%" type="primary" @click="submitForm('loginForm')">SUBMIT</el-button>
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
import { setAuth } from './Libraries/Helper'
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
            this.$message({
              showClose: true,
              message: 'Incorrect format!',
              type: 'error'
            });
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
          loader.hide()
          // set type in local storage
          await setAuth(loginResponse.data)
          this.$router.push('dashboard')
        } else {
          loader.hide()
          this.$message({
            showClose: true,
            message: 'Your username or password is incorrect!',
            type: 'error'
          });
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.login--bg {
  opacity: 0.5;
  min-width: 1366px;
  min-height: 500px;
}
.grid-content {
  z-index: 9999;
  margin-bottom: 50px;
  background-color: white;
  border: 0.5px solid grey;
  padding: 30px;
  border-radius: 4px;
  min-height: 36px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, .2);
}
.row-bg {
  padding: 5px 0;
  background-color: #f9fafc;
}
.title {
  font-size: 16px;
}
</style>

