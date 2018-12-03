<template scope="scope">
    <div class="upload-list">
        <el-row class="row-search">
            <el-col :span='16'>
                <el-input v-model="searchContent" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span='4' :offset='1'>
                <el-button type="primary" @click="searchPages(searchContent)">搜索</el-button>
            </el-col>
        </el-row>
        <el-table
            :data="member"
            stripe
            border
            style="width: 100%;">  
            <el-table-column
            prop="jobUnit1"
            label="工作单位">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名">
            </el-table-column>
            <el-table-column
            prop="phone"
            label="手机号码">
            </el-table-column>
            <el-table-column
            prop="email"
            label="邮箱">
            </el-table-column>
            <el-table-column
            prop="appliTime"
            label="申请时间">
            </el-table-column>
            <el-table-column
            prop="state"
            label="状态">
                <template slot-scope="scope">                   
                        <p v-if="scope.row.state=='0'">
                            待认证
                        </p>
                        <p v-else-if="scope.row.state=='1'">
                            待审核
                        </p>
                        <p v-else-if="scope.row.state=='2'">
                            会员
                        </p>                   
                </template>
            </el-table-column>
            <!-- <el-table-column
            prop="oper"
            label="操作" style="width: 20%">
            <template slot-scope="scope">
                <el-button @click="searchData(scope.row.userName)" type="text" size="small">查看资料</el-button>
            </template>
            </el-table-column> -->
        </el-table>
        <div class="pag">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="nums"
                @current-change="changePage">
            </el-pagination>    
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible:false,
            member: [],
            searchContent: '',
            initNum: 0,
            nums: 0,
        }
    },
   created() {
        this.getAllPages('', 0)
    },
    methods: {
        getAllPages(v, num = 0) {
           this.http
          .get('http://chstpa.chstpa.com/member/memberList', {
              params: {
                  name:v,
                  num: num
              }
          })
          .then(res => {
              if (+res.err.code === 200) {
                this.nums = res.data.nums
                this.member = res.data.member
            }
          })
        },
       searchPages(v) {
            this.getAllPages(v, 0)
        },
        changePage(v) {
            let _this = this
            this.getAllPages(_this.searchContent, (+v-1))
        },
    }
}
</script>
<style scoped lang='scss'>
    .upload-list {
        padding-top: 20px;
        .row-search {
        margin-bottom: 14px;
        margin-top: -4px;
        }
        .pag {
            text-align: right;
            margin-top: 2em;
        } 
    }
</style>
