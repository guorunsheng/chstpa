<template>
  <div class="all" >
    <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
    </el-steps>  
    <router-view :ruleForm="ruleForm"></router-view>

  </div>  
</template>
<script>
import step1 from './step1.vue';
import step2 from './step2.vue';
import step3 from './step3.vue';
import step4 from './step4.vue';
export default {
  data() {
    return {
       active: 0,   
       ruleForm: {
          name: '',
          sex: '',
          nativePlace: '',
          rankName: '',
          tel: '',
          phone: '',
          email: '',
          presentAdd: '',
          reTwoInchPhoto: '',
          reTwoInchPhotoPath: '',
          otherPost:'',
          eduSchool1: '',
          eduSchool2: '',
          eduSchool3: '',
          eduMajor1: '',
          eduMajor2: '',
          eduMajor3: '',
          eduCation1: '',
          eduCation2: '',
          eduCation3: '',
          mainResult: '',
          eduTime1: '',
          eduTime2: '',
          eduTime3: '',
          jobTime1: '',
          jobTime2: '',
          jobTime3: '',
          idCardUrlZ: '',
          idCardUrlF: '',
          diplomaCertUrl: '',
          postCertUrl: '',
          otherCertUrl: '',
          signature: '',
        },
    }
  },
  created() {
        this.httpFc('https://chstpa.chstpa.com/member/AuthMember').then(res => {
            if (+res.err.code === 200) {
                this.ruleForm = res.data.member
                this.ruleForm.reTwoInchPhoto = res.data.member.reTwoInchPhoto
                if(res.data.member.eduTime1!=null){
                  this.ruleForm.eduTime1 = [res.data.member.eduTime1.substring(2,12),res.data.member.eduTime1.substring(15,25)];
                }
                if(res.data.member.eduTime2!=null){
                  this.ruleForm.eduTime2 = [res.data.member.eduTime2.substring(2,12),res.data.member.eduTime2.substring(15,25)]
                }
                if(res.data.member.eduTime3!=null){
                  this.ruleForm.eduTime3 = [res.data.member.eduTime3.substring(2,12),res.data.member.eduTime3.substring(15,25)]
                }
                if(res.data.member.jobTime1!=null){
                  this.ruleForm.jobTime1 = [res.data.member.jobTime1.substring(2,12),res.data.member.jobTime1.substring(15,25)]
                }
                if(res.data.member.jobTime2!=null){
                  this.ruleForm.jobTime2 = [res.data.member.jobTime2.substring(2,12),res.data.member.jobTime2.substring(15,25)]
                }
                if(res.data.member.jobTime3!=null){
                  this.ruleForm.jobTime3 = [res.data.member.jobTime3.substring(2,12),res.data.member.jobTime3.substring(15,25)]
                }
            }else{
                console.log(res)
            }
        })
    },
  methods: {
    next() {
         if (this.active++ > 2) this.active = 0;
      },
      httpFc(v) {
          return this.http
          .get(v)
      },
  },
  components:{
    step1,
    step2,
    step3,
    step4
  }
}
</script>

<style lang="scss" scoped type="text/css">
  .all{
   width: 1100px;
   //height: 1000px;
   margin: 0px auto;
   margin-top: 10px;
  }
</style>
