<template><div>
 <el-row class="row-search" style="margin-top:16px;">
            <el-col :span='16'>
                <el-input v-model="searchContent" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span='4' :offset='1'>
                <el-button type="primary" @click="searchPages(searchContent)">搜索</el-button>
            </el-col>
        </el-row>
   <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:14px;">
    <el-table-column
      prop="Vname"
      label="会员名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="contact"
      label="联系方式">
    </el-table-column>
    <el-table-column
      prop="time"
      label="申请时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="measure"
      label="操作">
       <template slot-scope="scope" style="margin:0px auto">
            <el-button type="text" size="small" @click="dialogVisible = true">查看资料</el-button>
       </template>
    </el-table-column>
  </el-table>
    <el-dialog
    title="查看资料页"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose">
    <div style="width:100%;height:100%;">
      <table style="margin:0px auto;width:100%;height:100%;margin-top:-20px;">
         <tr>
            <td><label style="margin-left:180px;">身份证复印件正面</label></td>
            <td><label style="margin-left:110px;">身份证复印件反面</label></td>
         </tr>
         <tr>
           <td><img style="width:340px;height:200px;margin-left:60px;" src="" alt=""></td>
           <td><img style="width:340px;height:200px;margin-left:8px;" src="" alt=""></td>
         </tr>
        <tr>
            <td><label style="margin-left:190px;">学历学位证书</label></td>
            <td><label style="margin-left:135px;">职称/职位证书</label></td>
         </tr>
         <tr>
           <td><img style="width:340px;height:200px;margin-left:60px;" src="" alt=""></td>
           <td><img style="width:340px;height:200px;margin-left:8px;" src="" alt=""></td>
         </tr>
           <tr style="margin-top:10px;">
            <td><label style="margin-left:150px;margin-top:10px;">其他</label></td>
            <td><label style="margin-left:-70px;">会员登记表</label></td>
         </tr>
         <tr>
           <td><img style="width:200px;height:280px;margin-left:60px;" src="" alt=""></td>
           <td><img style="width:200px;height:280px;margin-left:-130px;" src="" alt=""></td>
         </tr>
        </table>
       </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        tableData: [{
          Vname: 'Rancho',
          contact: '',
          time: '2016-05-02',
         
        }, {
          Vname: 'Rancho',
          contact: '',
          time: '2016-05-02',
        }]
      }
    }
  }
</script>
<style>
table{
        table-layout: fixed; 
        border-collapse: collapse;
        word-break:break-all;
      }
            
</style>
