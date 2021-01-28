<!-- 用户管理 -->
<template>
  <div class="box">
    <div class="red mb10 p20">用户管理</div>
    <el-table :data="Data.tableData" border style="width: 100%">
      <template v-for="(item, index) in Data.tableHeader">
        <el-table-column :key="index" :prop="item.key" :label="item.text">
          <template slot-scope="{row}">
            <span v-if="item.type == 'text'">{{ row[item.key] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-button v-has="{name:'Add'}" type="success" class="wfull">新增</el-button>
    <el-button v-has="{name:'Edit'}" type="primary" class="wfull">编辑</el-button>
    <el-button v-has="{name:'Delete'}" type="danger" class="wfull">删除</el-button>
    <el-button v-has="{name:'Search'}" type="info" class="wfull">查询</el-button>
    <div class="red mt30 p20">
      <el-button @click="to">权限管理</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Data: { // 数据集合- 包含表头、表内容
                tableHeader: [ // 渲染表头
                    { type: 'text', text: '日期', key: 'date' }, // text - 表头显示文字  key - 表头显示文字所对应的数据字段
                    { type: 'text', text: '姓名', key: 'name' },
                    { type: '', text: '地址', key: 'address' }
                ],
                tableData: [ // 渲染表内容
                    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' }
                ]
            }
        }
    },
    methods: {
        to() {
            this.$router.push('/RoleAdmin')
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
