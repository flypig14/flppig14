<template>
    <div class="userData">
        <el-table
      :data="tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="用户名"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="user_pwd"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="identity_text"
        label="身份"
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
        ...mapState('userData', ['tableData'])
    },
    data() {
        return {
            token:cookie.get('token'),
            pagesize:5,
            currentpage:1
        }
    },
    methods: {
        ...mapActions('userData', ['getList']),
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
