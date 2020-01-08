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
import http from '../../../../utils/request.js'
import cookie from 'js-cookie'
export default {
    data() {
        return {
            tableData: [],
            token:cookie.get('token'),
            total:null,
            page:5 
        }
    },
    methods: {
        getList(){
            http.get('/api/user/user').then(res=>{
                if(res.data.code === 1){
                    this.tableData = res.data.data.slice(0, this.page);
                    this.total = res.data.data.length;
                }
            })
       
        }
    },
    created() {
        this.getList()
    },
}
</script>

<style>

</style>
