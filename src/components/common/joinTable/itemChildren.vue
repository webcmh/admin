<!-- 组件说明 -->
<template>
  <div>
    <el-table-column width="1" align="center" /><!-- 解决不按顺序显示BUG -->
    <el-table-column v-for="(children,index) in itemData" :key="index" :label="children.text" :prop="children.key" align="center">
      <ItemChildren v-if="children.children" :key="children.id" :item-data="children.children" />
    </el-table-column>
  </div>
</template>

<script>
export default {
    name: 'ItemChildren',
    props: { itemData: { type: Array, default: () => [] }}
}
</script>
