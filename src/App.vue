<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box
}
html,body,#app{
  width:100%;
  height:100%;
  padding: 0 !important;
  
}

.el-popup-parent--hidden{
        overflow: auto !important;
    }
.el-table thead{
    background-color: #000 !important;
}
.el-table td, .el-table th.is-leaf{
    padding-left: 10px;
}
// .el-table td, .el-table th{
//   padding: 0 !important;
// }
</style>

