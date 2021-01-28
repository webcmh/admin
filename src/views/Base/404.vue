<!-- 组件说明 -->
<template>
  <div class="">
    404 页面不存在！
    <el-button @click="logout">退出登录</el-button>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
        logout() {
            window.localStorage.clear()
            this.$router.push('/')
        }
    }
}
</script>

<style lang='scss' scoped>
.el-button{
    margin: 10px;
}
</style>
