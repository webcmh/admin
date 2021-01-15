<!-- 用户管理 -->
<template>
  <div class="UserAdmin">
    <el-table :data="Data.tableData" border style="width: 100%">
      <el-table-column v-for="(item, index) in Data.tableHeader" :key="index" :prop="item.key" :label="item.text" />
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Data: { // 数据集合- 包含表头、表内容
                tableHeader: [ // 渲染表头
                    { text: '日期', key: 'date' }, // text - 表头显示文字  key - 表头显示文字所对应的数据字段
                    { text: '姓名', key: 'name' },
                    { text: '地址', key: 'address' }
                ],
                tableData: [ // 渲染表内容
                    { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
                    { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' }
                ]
            }
        }
    },
    mounted() {
        const a = [{ a: '1' }]
        const b = [{ b: '1' }]
        const c = [{ c: '1' }]
        const end = a.concat(b, c)
        console.log(end)
    }
}
</script>
