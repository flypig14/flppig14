<template>
    <div class="addUser">
        <!-- 第一个 -->
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab">
        <el-tab-pane label="用户管理" name="first" class="tab1">
            <el-input v-model="input1" placeholder="请输入用户名" class="ipt1"></el-input>
            <el-input v-model="input2" placeholder="请输入密码" class="ipt2"></el-input>
            <el-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="请选择身份id"
                @select="handleSelect"
                class="autoipt"
            ></el-autocomplete>
            <div class="btn">
            <el-button type="primary" class="button1">确定</el-button>
            <el-button class="button2">重置</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second" class="tab2">
            <el-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="请选择登录人身份id"
                @select="handleSelect"
                class="autoipt"
            ></el-autocomplete>
            <el-input v-model="input1" placeholder="请输入用户名" class="ipt1"></el-input>
            <el-input v-model="input2" placeholder="请输入密码" class="ipt2"></el-input>
            <el-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="请选择身份id"
                @select="handleSelect"
                class="autoipt"
            ></el-autocomplete>
            <div class="btn">
            <el-button type="primary" class="button1">确定</el-button>
            <el-button class="button2">重置</el-button>
            </div>
        </el-tab-pane>
        </el-tabs>
        <!-- 第二个 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName2: 'first',
            restaurants: [],
            state4: '',
            timeout:  null
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
            ];
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
}
</script>

<style lang="scss">
.tab{
    width:33%;
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

</style>
