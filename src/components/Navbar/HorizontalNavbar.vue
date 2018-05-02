<template>
  <div class="horizontal-navbar--container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" v-on:click="navigateHome()"><b>Task management system</b></el-menu-item>
        <!-- <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu> -->
        <div style="position: absolute; right: 0">
          <el-menu-item index="3" @click="signOut()"><p>Sign out</p></el-menu-item>
        </div>
    </el-menu>
    <signout-dialog :signoutList="signout"></signout-dialog>
  </div>
</template>
<script>
import SignoutDialog from '@/components/Dialog/SignoutDialog'
export default {
  data() {
    return {
      activeIndex: '1',
      signout: {
        dialogVisible: false
      }
    }
  },
  methods: {
    navigateHome() {
      this.$router.push('/dashboard')
    },
    signOut() {
      this.signout.dialogVisible = true
    }
  },
  components: {
    SignoutDialog
  }
}
</script>

<style scoped>

</style>

