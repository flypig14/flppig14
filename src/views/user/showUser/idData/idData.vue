<template>
    <div class="idData">
        <el-table
      :data="tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)"
      style="width: 100%">
      <el-table-column
        prop="identity_text"
        label="身份名称">
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
        ...mapState('idData', ['tableData'])
    },
    data() {
        return {
            token:cookie.get('token'),
            pagesize:5,
            currentpage:1
        }
    },
    methods: {
        ...mapActions('idData', ['getList']),
        handleCurrentChange:function(currentpage){
            this.currentpage = currentpage;
        }
        // getList(){
        //     http.get('/api/user/identity').then(res=>{
        //         if(res.data.code === 1){
        //             this.tableData = res.data.data
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
