<template>
<el-form ref="ruleForm" :model="ruleForm" label-width="80px" :inline="true" style="width:900px;border-radius:25px;font-family:微软雅黑;border:1px solid #d9d9d9; " class="all">
   <div class="block" >
    <el-form-item label="学历时间" style="margin-top:35px;margin-left:58px;"><br/>
    <el-date-picker
      v-model="ruleForm.eduTime1"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
<el-form-item label="学校" style="margin-top:35px;margin-left:-48px;"><br/>
     <el-input v-model="ruleForm.eduSchool1" style="width:190px;margin-left:-42px; "></el-input>
  </el-form-item>
<el-form-item label="专业" style="margin-left:-52px;margin-top:35px" ><br/>
     <el-input v-model="ruleForm.eduMajor1" style="width:150px;margin-left:-39px;"></el-input>
  </el-form-item>

   <el-form-item label="学历" style="margin-left:-52px;margin-top:35px"><br/>
    <el-select v-model="ruleForm.eduCation1" placeholder="请选择学历"  style="width: 90%;margin-left:-39px;">
      <el-option label="初中/高中/中职" value="初中/高中/中职"></el-option>
      <el-option label="专科" value="专科"></el-option>
      <el-option label="本科" value="本科"></el-option>
      <el-option label="硕士" value="硕士"></el-option>
      <el-option label="博士" value="博士"></el-option>
    </el-select>
  </el-form-item>


<el-form-item label="" style="margin-top:-5px;margin-left:138px;">
      <el-date-picker
      v-model="ruleForm.eduTime2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
<el-form-item label="" style="margin-top:-5px;margin-left:-20px;" >
     <el-input v-model="ruleForm.eduSchool2" style="width:190px;margin-left:10px; "></el-input>
  </el-form-item>
<el-form-item label="" style="margin-left:-30px;margin-top:-5px" >
     <el-input v-model="ruleForm.eduMajor2" style="width:150px;margin-left:18px;"></el-input>
  </el-form-item>

   <el-form-item label="" style="margin-left:-15px;margin-top:-5px">
    <el-select v-model="ruleForm.eduCation2" placeholder="请选择学历"  style="width: 75%;margin-left:4px;">
      <el-option label="初中/高中/中职" value="初中/高中/中职"></el-option>
      <el-option label="专科" value="专科"></el-option>
      <el-option label="本科" value="本科"></el-option>
      <el-option label="硕士" value="硕士"></el-option>
      <el-option label="博士" value="博士"></el-option>
    </el-select>
  </el-form-item>

<el-form-item label="" style="margin-top:-5px;margin-left:138px;">
     <el-date-picker
      v-model="ruleForm.eduTime3"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker></el-form-item>
<el-form-item label="" style="margin-top:-5px;margin-left:-20px;" >
     <el-input v-model="ruleForm.eduSchool3" style="width:190px;margin-left:10px; "></el-input>
  </el-form-item>
<el-form-item label="" style="margin-left:-30px;margin-top:-5px" >
     <el-input v-model="ruleForm.eduMajor3" style="width:150px;margin-left:18px;"></el-input>
  </el-form-item>

   <el-form-item label="" style="margin-left:-15px;margin-top:-5px">
    <el-select v-model="ruleForm.eduCation3" placeholder="请选择学历"  style="width: 75%;margin-left:4px;">
      <el-option label="初中/高中/中职" value="初中/高中/中职"></el-option>
      <el-option label="专科" value="专科"></el-option>
      <el-option label="本科" value="本科"></el-option>
      <el-option label="硕士" value="硕士"></el-option>
      <el-option label="博士" value="博士"></el-option>
    </el-select>
  </el-form-item>

   <el-form-item label="工作时间" style="margin-top:5px;margin-left:58px;"><br/>
    <el-date-picker
      v-model="ruleForm.jobTime1"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="工作单位" style="margin-top:5px;margin-left:-22px;" ><br/>
      <el-input v-model="ruleForm.jobUnit1" style="width:190px;margin-left:-68px; "></el-input>
    </el-form-item>
    <el-form-item label="科室" style="margin-left:-52px;margin-top:5px" ><br/>
     <el-input v-model="ruleForm.department1" style="width:150px;margin-left:-39px;"></el-input>
    </el-form-item>

   <el-form-item label="" style="margin-top:-45px;margin-left:138px;"><br/>
    <el-date-picker
      v-model="ruleForm.jobTime2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px;" ><br/>
      <el-input v-model="ruleForm.jobUnit2" style="width:190px;margin-left:-10px; "></el-input>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px" ><br/>
     <el-input v-model="ruleForm.department2" style="width:150px;margin-left:-10px;"></el-input>
    </el-form-item>
   
     <el-form-item label="" style="margin-top:-45px;margin-left:138px;"><br/>
    <el-date-picker
      v-model="ruleForm.jobTime3"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      format="yyyy-MM-dd" value-format="yyyy-MM-dd"
      :picker-options="pickerOptions2" style="width:250px;margin-top:-70px;margin-left:-70px;">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px;" ><br/>
      <el-input v-model="ruleForm.jobUnit3" style="width:190px;margin-left:-10px; "></el-input>
    </el-form-item>
    <el-form-item label="" style="margin-top:-45px" ><br/>
     <el-input v-model="ruleForm.department3" style="width:150px;margin-left:-10px;"></el-input>
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

  <el-form-item label="主要成就" prop="mainResult" style="margin-left:58px;"><br/><span>dfefe</span>
    <el-input type="textarea" v-model="ruleForm.mainResult" style="margin-left:-107px;width:600px;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-top:0px;margin-left:70px;">下一步</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
 </div>



  
</el-form>
</template>
<script>
  export default {
    name: 'step2',
    props:["ruleForm"],
    data() {
      return {
          value: '',
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
        },
        // time1: '',
        // time2: '',
        // time3: '',
        // time4: '',
        // time5: '',
        // time6: '',
        // form: {
        //   eduSchool1: '',
        //   eduSchool2: '',
        //   eduSchool3: '',
        //   eduMajor1: '',
        //   eduMajor2: '',
        //   eduMajor3: '',
        //   eduCation1: '',
        //   eduCation2: '',
        //   eduCation3: '',
        //   mainResult: '',
        //   eduTime1: '',
        //   eduTime2: '',
        //   eduTime3: '',
        //   jobTime1: '',
        //   jobTime2: '',
        //   jobTime3: '',

        // },
        rules:{
           desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
      }
    },
    created() {
      // this.httpFc('http://127.0.0.1:8888/member/AuthMember').then(res => {
      //     if (+res.err.code === 200) {
      //       this.form = res.data.member
      //       if(res.data.member.eduTime1!=null){
      //         this.time1 = [res.data.member.eduTime1.substring(2,12),res.data.member.eduTime1.substring(15,25)];
      //       }
      //       if(res.data.member.eduTime2!=null){
      //         this.time2 = [res.data.member.eduTime2.substring(2,12),res.data.member.eduTime2.substring(15,25)]
      //       }
      //       if(res.data.member.eduTime3!=null){
      //         this.time3 = [res.data.member.eduTime3.substring(2,12),res.data.member.eduTime3.substring(15,25)]
      //       }
      //       if(res.data.member.jobTime1!=null){
      //         this.time4 = [res.data.member.jobTime1.substring(2,12),res.data.member.jobTime1.substring(15,25)]
      //       }
      //       if(res.data.member.jobTime2!=null){
      //         this.time5 = [res.data.member.jobTime2.substring(2,12),res.data.member.jobTime2.substring(15,25)]
      //       }
      //       if(res.data.member.jobTime3!=null){
      //         this.time6 = [res.data.member.jobTime3.substring(2,12),res.data.member.jobTime3.substring(15,25)]
      //       }
          
      //     }else{
      //         console.log(res)
      //     }
      // })
    },
    methods:{
      submitForm(ruleForm) {
        // this.ruleForm.eduTime1 = this.time1;
        // this.ruleForm.eduTime2 = this.time2;
        // this.ruleForm.eduTime3 = this.time3;
        // this.ruleForm.jobTime1 = this.time4;
        // this.ruleForm.jobTime2 = this.time5;
        // this.ruleForm.jobTime3 = this.time6;
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.http
            .post('http://chstpa.chstpa.com/member/FirInfo', this.ruleForm)
            .then(res => {
                if (+res.err.code === 200) {
                    //alert("200");
                    //this.$emit('step',"1");
                    //console.log("step");
                    this.$parent.next();
                    this.$router.push('step3')
                    
                } else {
                    this.$message.error(res.err.desc);
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
     resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      httpFc(v) {
          return this.http
          .get(v)
      },
      // dateChangebirthday(val) {
      //   console.log(val);
      //   //this.form.birthdayName = val;
      // }

    }
  }
</script>

<style>
 
</style>
