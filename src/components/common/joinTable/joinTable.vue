<!-- 组件说明 -->
<template>
  <div class="joinTable">
    <el-table :data="tableData" size="mini">
      <el-table-column width="1" /><!-- 解决不按顺序显示BUG -->
      <el-table-column v-for="(item,index) in tableHead" :key="index" :label="item.text" :prop="item.key" align="center">
        <ItemChildren v-if="item.children" :key="index" :item-data="item.children" />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ItemChildren from './itemChildren'
export default {
    components: { ItemChildren },
    props: {
        tableData: { type: Array, default: () => [] }
    },
    data() {
        return {
            tableHead: [
                { text: '日期', key: 'date' },
                { text: '配送信息', key: 'date',
                    children: [
                        { text: '姓名', key: 'name' },
                        { text: '地址', key: 'name',
                            children: [
                                { text: '省份', key: 'province' },
                                { text: '市区', key: 'city' },
                                { text: '地址', key: 'address' },
                                { text: '邮编', key: 'zip' }
                            ]
                        }
                    ] }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
.joinTable{
    font-size: 14px;
}
</style>
