<template scope="scope">
    <div class="upload-list" >
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
            prop="name"
            label="姓名">
            </el-table-column>
            <el-table-column
            prop="phone"
            label="手机号码">
            </el-table-column>
            <el-table-column
            prop="appliTime"
            label="申请时间">
            </el-table-column>
            <el-table-column
            prop="oper"
            label="操作" style="width: 20%">
            <template slot-scope="scope">
                <el-button @click="searchData(scope.row.userName)" type="text" size="small">
                    <router-link :to="{ path:'/searchData', name:{idCard: 'scope.row.userName'}}" style="text-decoration:none;color:black">查看资料</router-link>
                </el-button>
            </template>
            </el-table-column>
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
import verifyMemberQ from '../managePlatform/verifyMemberQ.vue';
export default {
    data() {
        return {
            dialogVisible:false,
            member: [],
            searchContent: '',
            initNum: 0,
            nums: 0,
            table: [],
        }
    },
    created() {
        this.getAllPages('', 0)
    },
    methods: {
        getAllPages(v, num = 0) {
           this.http
          .get('http://chstpa.chstpa.com/member/verifyMemberQ', {
              params: {
                  name: String(v),
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
        searchData(idCard) {
            console.log(idCard)

            this.http
            .get('http://chstpa.chstpa.com/member/verifyMemberQD', {
                params: {
                    idCard: String(idCard),
                }
          })
          .then(res => {
              if (+res.err.code === 200) {
                  this.table = '';
                  this.table = res.data.member[0];
                  console.log(this.table)
            }
          })
            // console.log(id);
            // console.log(this.member[id-1]);
            // this.table = "";
            // this.table = this.member[id-1];
            // console.log("123");
            // console.log(this.table);
          this.dialogVisible=true;
        },
        searchPages(v) {
            this.getAllPages(v, 0)
        },
        changePage(v) {
            let _this = this
            this.getAllPages(_this.searchContent, (+v-1))
        },
        verify(state){
            this.http
            .get('http://chstpa.chstpa.com/member/verifyMember', {
              params: {
                  userName: String(this.table.userName),
                  state:state,
              }
            })
            

            console.log(this.table.id);
        },
        func(){

        }
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
