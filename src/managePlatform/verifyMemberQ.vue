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
                <el-button @click="searchData(scope.row.userName)" type="text" size="small">查看资料</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog
    title="查看资料页"
    :visible.sync="dialogVisible"
    width="65%">
    <div style="width:100%;height:100%;">
      <table style="margin:0px auto;width:100%;height:100%;margin-top:-20px;">
         <tr>
            <td><label style="margin-left:180px;">身份证复印件正面</label></td>
            <td><label style="margin-left:110px;">身份证复印件反面</label></td>
         </tr>
         <tr>
           <td><img style="width:340px;height:200px;margin-left:60px;" :src="this.table.idCardUrlZ" alt=""></td>
           <td><img style="width:340px;height:200px;margin-left:8px;" :src="this.table.idCardUrlF" alt=""></td>
         </tr>
        <tr>
            <td><label style="margin-left:190px;">学历学位证书</label></td>
            <td><label style="margin-left:135px;">职称/职位证书</label></td>
         </tr>
         <tr>
           <td><img style="width:340px;height:200px;margin-left:60px;" :src="this.table.diplomaCertUrl" alt=""></td>
           <td><img style="width:340px;height:200px;margin-left:8px;" :src="this.table.postCertUrl" alt=""></td>
         </tr>
           <tr style="margin-top:10px;">
            <td><label style="margin-left:150px;margin-top:10px;">其他</label></td>
            <td><label style="margin-left:-70px;">会员登记表</label></td>
         </tr>
         <tr>
           <td><img style="width:200px;height:280px;margin-left:60px;" :src="this.table.otherCertUrl" alt=""></td>
           <td><img style="width:200px;height:280px;margin-left:-130px;" :src="this.table.signature" alt=""></td>
         </tr>
        </table> 
       </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="verify(2)">审核通过</el-button>
      <el-button type="primary" @click="verify(0)">资料重传</el-button>
      <el-button @click="dialogVisible = false">关闭</el-button>
      <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
    </span>
  </el-dialog>
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
            table: [],
        }
    },
    created() {
        this.getAllPages('', 0)
    },
    methods: {
        getAllPages(v, num = 0) {
           this.http
          .get('http://127.0.0.1:8888/member/verifyMemberQ', {
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
            .get('http://127.0.0.1:8888/member/verifyMemberQD', {
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
            .get('http://127.0.0.1:8888/member/verifyMember', {
              params: {
                  userName: String(this.table.userName),
                  state:state,
              }
            })
            .then(res => {
              if (+res.err.code === 200) {
                alert("审核通过成功！");
                this.dialogVisible=false;
                this.$router.go(0);
            }
            if (+res.err.code === 201) {
                alert("联系会员重传资料！");
                this.dialogVisible=false;
                this.$router.go(0);
            }
          })

            console.log(this.table.id);
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
