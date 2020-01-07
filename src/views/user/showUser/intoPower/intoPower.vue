<template>
    <div class="intoPower">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="提前权限名称"
        style="width: 25%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="前id"
        style="width: 50%">
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
            }, {
                date: '2016-05-04',
                name: '王小虎',
            }, {
                date: '2016-05-01',
                name: '王小虎',
            }, {
                date: '2016-05-03',
                name: '王小虎',
            }]
        }
    }
}
</script>

<style>

</style>
