<template>
    <div class="idData">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="用户名">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '身份名称',
            }, {
                date: '管理者',

            }, {
                date: '出题者',

            }, {
                date: '浏览者',
            }]
        }
    }
}
</script>

<style>

</style>
