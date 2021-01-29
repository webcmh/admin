<!-- 组件说明 -->
<template>
  <div class="box">
    <!-- <div class="red mb10 p20">权限管理</div> -->
    <joinTable :table-data="tableData" />
    <!-- <div class="red mt30 p20">
      <el-button @click="to">用户管理</el-button>
    </div> -->
  </div>
</template>

<script>
import joinTable from '@/components/common/joinTable/joinTable.vue'
export default {
    components: { joinTable },
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]

        }
    },

    methods: {
        to() {
            this.$router.push('/UserAdmin')
        }
    }
}
</script>

<style lang='scss' scoped>
.box {
    // padding: 20px;
    width: 100%;
}
.wfull {
    width: 50%;
    margin: 5px;
}
</style>
