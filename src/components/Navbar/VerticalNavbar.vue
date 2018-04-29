<template>
    <div class="navbar--container">
        <el-menu default-active="1" class="navbar--navWrapper" @open="handleOpen" @close="handleClose">
            <img class="navbar--thumbnail" src="@/assets/logo.png"/>
            <el-submenu index="1">
                <template slot="title">Navigator One</template>
                <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">Navigator Two</el-menu-item>
            <el-menu-item index="3">Navigator Three</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar--container {
    margin: 0;
}
.navbar--thumbnail {
    width: 75px;
    height: 75px;
}
.navbar--navWrapper {
    padding-top: 15px;
}
</style>
