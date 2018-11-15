<template>
<el-form ref="form" :model="form" label-width="80px" :inline="true" style="width:900px;border-radius:25px;font-family:微软雅黑;border:1px solid #d9d9d9; " class="all">
   <div class="block" >
    <el-form-item label="学历时间" style="margin-top:35px;margin-left:58px;"><br/>
    <el-date-picker
      v-model="value6"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
<el-form-item label="学校" style="margin-top:35px;margin-left:-48px;" ><br/>
     <el-input v-model="form.name" style="width:190px;margin-left:-42px; "></el-input>
  </el-form-item>
<el-form-item label="专业" style="margin-left:-52px;margin-top:35px" ><br/>
     <el-input v-model="form.name1" style="width:150px;margin-left:-39px;"></el-input>
  </el-form-item>

   <el-form-item label="学历" style="margin-left:-52px;margin-top:35px"><br/>
    <el-select v-model="form.region" placeholder="请选择学历"  style="width: 90%;margin-left:-39px;">
      <el-option label="初中/高中/中职" value="shanghai"></el-option>
      <el-option label="专科" value="beijing"></el-option>
      <el-option label="本科" value="shanghai"></el-option>
      <el-option label="硕士" value="shanghai"></el-option>
      <el-option label="博士" value="shanghai"></el-option>
    </el-select>
  </el-form-item>


<el-form-item label="" style="margin-top:-5px;margin-left:138px;">
      <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
<el-form-item label="" style="margin-top:-5px;margin-left:-20px;" >
     <el-input v-model="form.name3" style="width:190px;margin-left:10px; "></el-input>
  </el-form-item>
<el-form-item label="" style="margin-left:-30px;margin-top:-5px" >
     <el-input v-model="form.name4" style="width:150px;margin-left:18px;"></el-input>
  </el-form-item>

   <el-form-item label="" style="margin-left:-15px;margin-top:-5px">
    <el-select v-model="form.region2" placeholder="请选择学历"  style="width: 75%;margin-left:4px;">
      <el-option label="初中/高中/中职" value="shanghai"></el-option>
      <el-option label="专科" value="beijing"></el-option>
      <el-option label="本科" value="shanghai"></el-option>
      <el-option label="硕士" value="shanghai"></el-option>
      <el-option label="博士" value="shanghai"></el-option>
    </el-select>
  </el-form-item>

<el-form-item label="" style="margin-top:-5px;margin-left:138px;">
     <el-date-picker
      v-model="value"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker></el-form-item>
<el-form-item label="" style="margin-top:-5px;margin-left:-20px;" >
     <el-input v-model="form.name5" style="width:190px;margin-left:10px; "></el-input>
  </el-form-item>
<el-form-item label="" style="margin-left:-30px;margin-top:-5px" >
     <el-input v-model="form.name6" style="width:150px;margin-left:18px;"></el-input>
  </el-form-item>

   <el-form-item label="" style="margin-left:-15px;margin-top:-5px">
    <el-select v-model="form.region3" placeholder="请选择学历"  style="width: 75%;margin-left:4px;">
      <el-option label="初中/高中/中职" value="shanghai"></el-option>
      <el-option label="专科" value="beijing"></el-option>
      <el-option label="本科" value="shanghai"></el-option>
      <el-option label="硕士" value="shanghai"></el-option>
      <el-option label="博士" value="shanghai"></el-option>
    </el-select>
  </el-form-item>

   <el-form-item label="工作时间" style="margin-top:5px;margin-left:58px;"><br/>
    <el-date-picker
      v-model="value6"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="工作单位" style="margin-top:5px;margin-left:-22px;" ><br/>
      <el-input v-model="form.name" style="width:190px;margin-left:-68px; "></el-input>
    </el-form-item>
    <el-form-item label="科室" style="margin-left:-52px;margin-top:5px" ><br/>
     <el-input v-model="form.name1" style="width:150px;margin-left:-39px;"></el-input>
    </el-form-item>

   <el-form-item label="" style="margin-top:-45px;margin-left:138px;"><br/>
    <el-date-picker
      v-model="value6"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px;" ><br/>
      <el-input v-model="form.name" style="width:190px;margin-left:-10px; "></el-input>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px" ><br/>
     <el-input v-model="form.name1" style="width:150px;margin-left:-10px;"></el-input>
    </el-form-item>
   
     <el-form-item label="" style="margin-top:-45px;margin-left:138px;"><br/>
    <el-date-picker
      v-model="value6"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px;" ><br/>
      <el-input v-model="form.name" style="width:190px;margin-left:-10px; "></el-input>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px" ><br/>
     <el-input v-model="form.name1" style="width:150px;margin-left:-10px;"></el-input>
    </el-form-item>
    <!-- <el-form-item label="本人主要" prop="desc" style="margin-left:58px;"><br/>
     <el-input type="textarea" v-model="ruleForm.desc" style="margin-left:-70px;width:600px;"></el-input>
    </el-form-item>
     <el-form-item label="成果," prop="desc" style="margin-left:-592px;"><br/>
    </el-form-item>
     <el-form-item label="论文著作" prop="desc" style="margin-left:-37px;"><br/>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:-172px;width:90px;height:40px; margin-top:125px;">下一步</el-button>
    <el-button @click="resetForm('ruleForm')" style="width:90px;height:40px;">重置</el-button>
  </el-form-item> -->

  <el-form-item label="主要成就" prop="desc" style="margin-left:58px;"><br/><span>dfefe</span>
    <el-input type="textarea" v-model="ruleForm.desc" style="margin-left:-107px;width:600px;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-top:0px;margin-left:70px;">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
 </div>



  
</el-form>
</template>
<script>
  export default {
    data() {
      return {
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },value6: '',
        value7: '',
        value8:''
      ,
        form: {
          name: '',
        
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules:{
           desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        ruleForm:{
desc: ''
        }
      }
    }
  }
</script>

<style>
 
</style>
