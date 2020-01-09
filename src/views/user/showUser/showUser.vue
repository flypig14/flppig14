<template>
    <div class="showUser">
        <h2>用户展示</h2>
        <div class="tab">
            <router-link to="/home/showUser/userData" tag="span">用户数据</router-link>
            <router-link to="/home/showUser/idData" tag="span">身份数据</router-link>
            <router-link to="/home/showUser/apiPower" tag="span">api接口权限</router-link>
            <router-link to="/home/showUser/apiRelation" tag="span">身份和api接口关系</router-link>
            <router-link to="/home/showUser/intoPower" tag="span">进入接口权限</router-link>
            <router-link to="/home/showUser/viewPower" tag="span">身份和视图权限关系</router-link>qqqq
        </div>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.showUser {
  width: 100%;
  height: 100%;
}
.tab{
  width:100%;
  height:45px;
  border-bottom:1px solid #000;
  margin-top: 25px;
  span{
        margin-left: 20px;
        padding-left: 15px;
        padding-right: 15px;
  }
}
.router-link-active{
    color:darkcyan;
    padding-bottom: 23px;
    
}
</style>
