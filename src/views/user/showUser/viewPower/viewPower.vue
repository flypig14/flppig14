<template>
    <div class="viewPower">
        <el-table
      :data="tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)"
      style="width: 100%">
      <el-table-column
        prop="view_authority_id"
        label="身份">
      </el-table-column>
      <el-table-column
        prop="view_authority_text"
        label="向前名称">
      </el-table-column>
      <el-table-column
        prop="view_id"
        label="前id">
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
        ...mapState('viewPower', ['tableData'])
    },
    data() {
        return {
            token:cookie.get('token'),
            pagesize:10,
            currentpage:1
        }
    },
    methods: {
        ...mapActions('viewPower', ['getList']),
        handleCurrentChange:function(currentpage){
            this.currentpage = currentpage;
        }
    },
    created() {
        this.getList();
    },
}
</script>

<style>

</style>

