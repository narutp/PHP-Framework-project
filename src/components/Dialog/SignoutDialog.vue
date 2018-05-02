<template>
    <div class="signout-dialog--container">
        <el-dialog
            title="Sign out"
            :visible.sync="signoutList.dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <span>Are you sure you want to signout?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="signoutList.dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="confirmSignout()">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: ['signoutList'],
    methods: {
        confirmSignout() {
            localStorage.clear()
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>

</style>


