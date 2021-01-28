<!-- 组件说明 -->
<template>
  <div class="box">
    <div class="red mb10 p20">权限管理</div>
    <el-button v-has="{name:'Add'}" type="success" class="wfull">新增</el-button>
    <el-button v-has="{name:'Edit'}" type="primary" class="wfull">编辑</el-button>
    <el-button v-has="{name:'Delete'}" type="danger" class="wfull">删除</el-button>
    <el-button v-has="{name:'Search'}" type="info" class="wfull">查询</el-button>
    <div class="red mt30 p20">
      <el-button @click="to">用户管理</el-button>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },

    methods: {
        to() {
            this.$router.push('/UserAdmin')
        }
    }
}
</script>

<style lang='scss' scoped>
.box{
    padding: 20px;
}
.wfull{
    width:50%;
    margin: 5px;
}
</style>
