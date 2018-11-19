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
            <el-button type="text" size="small">查看资料</el-button>
       </template>
    </el-table-column>
  </el-table></div>
</template>

<script>
  export default {
    data() {
      return {
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