<template>
<el-form :model="ruleForm"  label-width="300px" class="demo-ruleForm" style="height:500px;" ><br/>
  <span style="font-size:25px;margin-left:300px;">会员确认书</span>
  <el-form-item label="" prop="signature"  class="huiyuan" > 
    <el-upload
      class="avatar-uploader"
      action="http://chstpa.chstpa.com/member/uploadPhoto?name=signature"
      :show-file-list="false"
      :on-success="Fsignature"
      :before-upload="beforeAvatarUpload"  style="margin-left:-100px;margin-top:12px; border: 1px dashed #d9d9d9; width: 200px;
      height: 280px;">
      <img v-if="ruleForm.signature" :src="ruleForm.signature" class="avatar" >
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
    <el-input v-show="" v-model="ruleForm.state" style="width: 130%;margin-left:-85px;"></el-input>
   <el-form-item>
    <!-- <a:href="this.url"><el-button type="primary" @click="submitForm('ruleForm')" style="width:80px;height:40px;margin-top:-50px;margin-left:25px;" class="sub" >下载</el-button></a> -->
    <a :href="this.url"><input type="button" style="width:80px;height:40px;margin-left:0px;background-color:#409EFF;border:none;color:white;cursor:pointer" value="下载"></a>
     <!-- <el-button type="primary" @click="submitForm('ruleForm')" style="width:80px;height:40px;margin-top:-100px;margin-left:25px;" class="sub" >提交</el-button>  -->
    <input type="button" @click="submitForm('ruleForm')" style="width:80px;height:40px;margin-top:-100px;margin-left:25px;background-color:#409EFF;border:none;color:white;cursor:pointer" value="提交">
  </el-form-item>
  <el-form-item label="1、您需要下载“会员确认书”打印并签字" style="margin-top:-260px;margin-left:540px;" ></el-form-item>
  <el-form-item label="2、扫描后回传图片等待审核" style="margin-top:-30px;margin-left:475px;" ><br/>
  </el-form-item>
 </el-form>
</template>


<script>
  export default {
    name: 'step4',
    props:["ruleForm"],
    data() {
      return {
          url: '',
          // ruleForm: {
          //   signature: '',
          // },
      };
    },
    created() {
        this.httpFc('http://chstpa.chstpa.com/member/WordExport').then(res => {
            if (+res.err.code === 200) {
                this.url = res.data.url
            }else{
                console.log(res)
            }
        })
      //   this.httpFc('http://127.0.0.1:8888/member/AuthMember').then(res => {
      //       if (+res.err.code === 200) {
      //         this.ruleForm.signature = res.data.member.signature;
      //         console.log(res.data.member.signature)
      //         console.log(this.ruleForm.signature)
      //           this.ruleForm = res.data.member
      //           console.log(this.ruleForm)
      //       }else{
      //           console.log(res)
      //       }
      // })
    },
    methods: { 
      submitForm(ruleForm) {
          this.http
          .post('http://chstpa.chstpa.com/member/FirInfo?names=signature', this.ruleForm)
          .then(res => {
              if (+res.err.code === 200) {
                  //alert("200");
                  //this.$emit('step',"1");
                  //console.log("step");
                  this.$parent.next();
                  this.$router.push('/')
                  
              } else {
                  this.$message.error(res.err.desc);
              }
          })
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 4;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }, 
        Fsignature(res, file) {
          this.ruleForm.signature = res.data.url;
          console.log(this.ruleForm.signature)
        },
        httpFc(v) {
          return this.http
          .get(v)
        } 
    }
  }
</script>
<style>
.huiyuan{
  margin-left:100px;
  margin-top:10px;
  font-size:18px;
  
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 280px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 280px;
    display: block;
  }
</style>
