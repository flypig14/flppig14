<template>
    <div class="apiPower">
         <el-table
      :data="tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)"
      style="width: 100%">
      <el-table-column
        prop="api_authority_text"
        label="api权限名称">
      </el-table-column>
      <el-table-column
        prop="api_authority_url"
        label="api权限url">
      </el-table-column>
      <el-table-column
        prop="api_authority_method"
        label="api权限方法"
        min-width="20%">
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pagesize"
        :current-page="currentpage"
        @current-change="handleCurrentChange">
    </el-pagination>
    </div>
</template>

<script>
import cookie from 'js-cookie'
import {mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState('apiPower', ['tableData'])

    },
    data() {
        return {
            token:cookie.get('token'),
            pagesize:5,
            currentpage:1
        }
    },
    methods: {
        ...mapActions('apiPower', ['getList']),
        handleCurrentChange:function(currentpage){
            this.currentpage = currentpage;
        }
    },
    created() {
        this.getList()
    },
}
</script>

<style lang="scss">
.pages{
    float: right;
    margin-top: 25px;
}
</style>
