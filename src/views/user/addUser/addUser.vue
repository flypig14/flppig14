<template>
    <div class="addUser">
        <header>
             {{$route.meta.title}}
        </header>
        <!-- 第一个 -->
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab">
        <el-tab-pane label="添加用户" name="first" class="tab1">
            <el-input v-model="input1" placeholder="请输入用户名" class="ipt1"></el-input>
            <el-input v-model="input2" placeholder="请输入密码" class="ipt2"></el-input>
            <el-select v-model="value1" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDate"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_text">
    </el-option>
  </el-select>
            <div class="btn">
            <el-button type="primary" class="button1" @click="addUser">确定</el-button>
            <el-button class="button2">重置</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="更新用户" name="second" class="tab2">
            <el-select v-model="value2" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableData"
            :key="item.user_id"
            :label="item.user_name"
            :value="item.user_name">
    </el-option>
  </el-select>
            <el-input v-model="input3" placeholder="请输入用户名" class="ipt1"></el-input>
            <el-input v-model="input4" placeholder="请输入密码" class="ipt2"></el-input>
            <el-select v-model="value3" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDate"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_text">
    </el-option>
  </el-select>
            <div class="btn">
            <el-button type="primary" class="button1" @click="updateUser">确定</el-button>
            <el-button class="button2">重置</el-button>
            </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第二个 -->
        <el-tabs type="border-card" class="tab3">
        <el-tab-pane label="添加身份" class="tab4">
        <el-input v-model="input5" placeholder="请输入身份名称" class="ipt1"></el-input>
        <div class="btn">
            <el-button type="primary" class="button1" @click="addId">确定</el-button>
            <el-button class="button2">重置</el-button>
        </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第三个 -->
        <el-tabs type="border-card" class="tab5">
        <el-tab-pane label="添加api接口权限" class="tab6">
        <el-input v-model="input6" placeholder="请输入api接口权限名称" class="ipt1"></el-input>
        <el-input v-model="input7" placeholder="请输入api接口权限url" class="ipt1"></el-input>
        <el-input v-model="input8" placeholder="请输入api接口权限方法" class="ipt1"></el-input>
        <div class="btn">
            <el-button type="primary" class="button1" @click="addApiFn">确定</el-button>
            <el-button class="button2">重置</el-button>
        </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第四个 -->
        <el-tabs type="border-card" class="tab7">
        <el-tab-pane label="添加视图接口权限" class="tab8">
        <el-select v-model="value4" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDatb"
            :key="item.view_authority_id"
            :label="item.view_authority_text"
            :value="item.view_authority_text">
    </el-option>
  </el-select>
        <div class="btn">
            <el-button type="primary" class="button1" @click="addView">确定</el-button>
            <el-button class="button2">重置</el-button>
        </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第五个 -->
        <el-tabs type="border-card" class="tab9">
        <el-tab-pane label="给身份设置api接口权限" class="tab10">
        <el-select v-model="value5" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDate"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_text">
    </el-option>
  </el-select>
        <el-select v-model="value6" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDatc"
            :key="item.api_authority_id"
            :label="item.api_authority_text"
            :value="item.api_authority_text">
    </el-option>
  </el-select>
        <div class="btn">
            <el-button type="primary" class="button1" @click="updataApiFn">确定</el-button>
            <el-button class="button2">重置</el-button>
        </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第六个 -->
        <el-tabs type="border-card" class="tab11">
        <el-tab-pane label="给身份设置视图权限" class="tab12">
        <el-select v-model="value7" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDate"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_text">
    </el-option>
  </el-select>
        <el-select v-model="value8" placeholder="请选择" class="autoipt">
            <el-option
            v-for="item in tableDatb"
            :key="item.view_authority_id"
            :label="item.view_authority_text"
            :value="item.view_authority_text">
    </el-option>
  </el-select>
        <div class="btn">
            <el-button type="primary" class="button1" @click="updataViewFn">确定</el-button>
            <el-button class="button2">重置</el-button>
        </div>
        </el-tab-pane>
        </el-tabs> 
        </div>
        
</template>

<script>
import cookie from 'js-cookie'
import {mapActions, mapState} from 'vuex'
export default {
    data() {
        return {
            data:[],
            token:cookie.get('token'),
            activeName2: 'first',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            timeout:  null,
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:'',
            input8:''
        };
    },
    computed:{
        ...mapState('addUser', ['tableDate', 'tableData', 'tableDatb', 'tableDatc'])
    },
    created(){
        this.getListId();
        this.getListUser();
        this.getListView();
        this.getListApi();
    },
    methods: {
        ...mapActions('addUser', ['getList', 'upDate', 'getListId', 'getListUser', 'getId', 'getApi', 'getView', 'getListView', 'getListApi', 'updataApi', 'updataView']),
        addUser(){
            this.getList({user_name:this.input1, user_pwd:this.input2});
        },
        updateUser(){
            this.upDate({user_name:this.input3, user_pwd:this.input4, id:this.value2})
        },
        addId(){
            this.getId({identity_text:this.input5})
        },
        addApiFn(){
            this.getApi({api_authority_text:this.input6, api_authority_url:this.input7, api_authority_method:this.input8})
        },
        addView(){
            this.getView({view_authority_text:this.value4})
        },
        updataApiFn(){
            this.updataApi({identity_id:this.value5, api_authority_id:this.value6})
        },
        updataViewFn(){
            this.updataView({identity_id:this.value7, view_authority_id:this.value8})
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    mounted() {
       
    },
}
</script>

<style lang="scss">
header{
  width: 100%;
  height: 60px;
  line-height: 30px;
  font-size: 22px;
}
.tab{
    width:33%;
    display: inline-block;
    .tab1{
        width:100%;
        height:200px;
        .ipt1{
            width:90%;
            margin-top: 10px;
        }
        .ipt2{
            width:90%;
            margin-top: 10px;
        }
        .autoipt{
            width:45%;
            margin-top: 10px;
        }
        .btn{
            margin-top: 10px;
            .button1{
                width:100px;
            }
        }
    }
    .tab2{
        width:100%;
        height:250px;
        .autoipt{
            width:35%;
            margin-top: 10px;
        }
        .ipt1{
                width:90%;
                margin-top: 10px;
            }
            .ipt2{
                width:90%;
                margin-top: 10px;
            }
            .btn{
            margin-top: 10px;
            .button1{
                width:100px;
            }
        }
    }
}
.tab3{
    width:33%;
    display: inline-block;
    .tab4{
        width:100%;
        height:200px;
    }
    .btn{
        margin-top: 10px;
            .button1{
                width:100px;
            }
    }
}
.tab5{
    width:33%;
    display: inline-block;
    .tab6{
        width:100%;
        height:200px;
    .ipt1{
            width:90%;
            margin-top: 10px;
        }
    }
    .btn{
        margin-top: 10px;
            .button1{
                width:100px;
            }
    }
}
.tab7{
    width:33%;
    display: inline-block;
    .tab8{
        width:100%;
        height:200px;
        .autoplay{
            width:45%;
            margin-top: 10px;
        }
        .btn{
        margin-top: 10px;
            .button1{
                width:100px;
            }
    }    
    }
}
.tab9{
    width:33%;
    display: inline-block;
    .tab10{
        width:100%;
        height:200px;
        .autoipt{
            width:75%;
            margin-top: 10px;
            display: block;
        }
        .btn{
        margin-top: 10px;
            .button1{
                width:100px;
            }
        }
    }
}
.tab11{
    width:33%;
    display: inline-block;
    .tab12{
        width:100%;
        height:200px;
        .autoipt{
            width:75%;
            margin-top: 10px;
            display: block;
        }
        .btn{
        margin-top: 10px;
            .button1{
                width:100px;
            }
        }
    }

}

</style>
