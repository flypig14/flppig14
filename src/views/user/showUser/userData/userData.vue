<template>
    <div class="userData">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="用户名"
        style="width: 25%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="密码"
        style="width: 50%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="身份"
        style="width: 25%">
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
            token:cookie.get('token')
        }
    },
    methods: {
        getList(){
            http.get('/api/user/user', {header:token}).then(res=>{
                console.log(res)
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
