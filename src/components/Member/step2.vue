<template>
<el-form ref="form" :model="form" label-width="80px" :inline="true" >
 <el-form-item label="起止时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 70%;"></el-date-picker>
    </el-col>
    <el-col :span="11">
       <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date1" style="width: 70%;"></el-date-picker>
    </el-col>
  </el-form-item>

   <el-form-item label="学校" style="margin-left:-150px;" >
     <el-input v-model="form.name" ></el-input>
     
  </el-form-item>

<el-form-item label="专业">
     <el-input v-model="form.name" style="width: "></el-input>
  </el-form-item>

   <el-form-item label="学历">
    <el-select v-model="form.region" placeholder="请选择学历"  style="width: 40%;">
      <el-option label="本科" value="shanghai"></el-option>
      <el-option label="本科" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
 
</style>
