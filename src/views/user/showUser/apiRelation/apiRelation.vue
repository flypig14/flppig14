<template>
    <div class="apiRelation">
         <el-table
      :data="tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)"
      style="width: 100%">
      <el-table-column
        prop="identity_text"
        label="身份名称"
        min-width="40%">
      </el-table-column>
      <el-table-column
        prop="api_authority_text"
        label="api权限名称"
        min-width="40%">
      </el-table-column>
      <el-table-column
        prop="api_authority_url"
        label="api权限url">
      </el-table-column>
      <el-table-column
        prop="api_authority_method"
        label="api权限方法"
        min-width="30%">
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
import {mapState, mapActions} from 'vuex'
import cookie from 'js-cookie'
export default {
    computed:{
        ...mapState('apiRelation', ['tableData'])
    },
    data() {
        return {
            token:cookie.get('token'),
            pagesize:5,
            currentpage:1
        }
    },
    methods: {
        ...mapActions('apiRelation', ['getList']),
        handleCurrentChange:function(currentpage){
            this.currentpage = currentpage;
        }
        // getList(){
        //     http.get('/api/user/identity_api_authority_relation').then(res=>{
        //         if(res.data.code === 1){
        //             this.tableData = res.data.data;
        //             this.tableData = res.data.data.slice(0, this.page);
        //             this.total = res.data.data.length;
        //         }
        //     })
        // }
    },
    created() {
        this.getList()
    },
}
</script>

<style>

</style>

