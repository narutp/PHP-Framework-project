<template>
    <div class="navbar--container">
        <el-menu v-if="user_type === 'supervisor'" default-active="1" class="navbar--navWrapper" @open="handleOpen" @close="handleClose">
            <img class="navbar--thumbnail" src="@/assets/thumbnail.png"/>
            <p class="navbar--user-name" v-on:click="editUser()">{{ name }}</p>
            <p style="margin-bottom: 20px; color: grey; font-size: 12px;">{{ user_type }}</p>
            <el-menu-item index="1" @click="navigateToHome()"><div align="left">Home</div></el-menu-item>
            <el-menu-item index="2" @click="navigateToLeaveRequest()"><div align="left">Leave request</div></el-menu-item>
        </el-menu>
        <el-menu v-else default-active="1" class="navbar--navWrapper" @open="handleOpen" @close="handleClose">
            <img class="navbar--thumbnail" src="@/assets/thumbnail.png"/>
            <p class="navbar--user-name" v-on:click="editUser()">{{ name }}</p>
            <p style="margin-bottom: 20px; color: grey; font-size: 12px;">{{ user_type }}</p>
            <el-menu-item index="1" @click="navigateToHome()"><div align="left">Home</div></el-menu-item>
            <el-menu-item index="2" @click="navigateToLeaveRequest()"><div align="left">Leave request</div></el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { getUserAPI } from '../Resource/index'
export default {
    data() {
        return {
            name: '',
            user_type: ''
        }
    },
    async mounted() {
        await this.fetchUser()
    },
    methods: {
        editUser() {
            this.$router.push('user')
        },
        navigateToHome() {
            this.$router.push('dashboard')
        },
        navigateToLeaveRequest() {
            this.$router.push('leave-request')
        },
        async fetchUser() {
            let loader = this.$loading.show()
            let userType = await localStorage.getItem('user_type')
            let getUserRes
            try {
                getUserRes = await getUserAPI.getUser()
                // loader.hide()
            } catch (error) {
                console.log(error)
            }
            this.name = getUserRes.data.name
            this.user_type = userType
            loader.hide()
        }
    }
}
</script>
<style scoped>
.navbar--container {
    margin: 0;
    min-height: 150vh;
    background-color: #EEF1F6;
}
.navbar--user-name:hover {
    cursor: pointer;
    color:blue;
}
.navbar--thumbnail {
    width: 75px;
    height: 75px;
}
.navbar--navWrapper {
    padding-top: 15px;
}
</style>
