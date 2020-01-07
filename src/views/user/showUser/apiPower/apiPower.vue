<template>
    <div class="apiPower">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="api权限名称"
        style="width: 25%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="api权限url"
        style="width: 50%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="api权限方法"
        style="width: 25%">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
}
</script>

<style>

</style>
