<template>
<el-form :model="ruleForm"  label-width="400px" class="demo-ruleForm" >
  <el-form-item label="身份证复印件正面" prop="idCardUrlZ" style="margin-top:10px;margin-left:-200px;"><br/>
      <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="FidCardUrlz"
    :before-upload="beforeAvatarUpload"  style="margin-left:-125px;margin-top:0px;">
    <img v-if="ruleForm.idCardUrlZ" :src="ruleForm.idCardUrlZ" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
  <el-form-item label="身份证复印件反面" prop="idCardUrlF" style="margin-top:-300px;margin-left:70px;"><br/>
    <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="FidCardUrlf"
    :before-upload="beforeAvatarUpload"  style="">
    <img v-if="ruleForm.idCardUrlF" :src="ruleForm.idCardUrlF" class="avatar" style="margin-top:10px;" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
   <el-form-item label="学历学位证书" prop="diplomaCertUrl" style="margin-left:-225px;margin-top:-25px;"><br/>
    <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="FdiplomaCertUrl"
    :before-upload="beforeAvatarUpload"  style="margin-top:5px;margin-left:-100px;">
    <img v-if="ruleForm.diplomaCertUrl" :src="ruleForm.diplomaCertUrl" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
    </el-upload>
  </el-form-item>

   <el-form-item label="职称/职位证书" prop="postCertUrl" style="margin-top:-284px;" ><br/>
    <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="FotherCertUrl"
    :before-upload="beforeAvatarUpload"  style="margin-left:72px;margin-top:5px;">
    <img v-if="ruleForm.postCertUrl" :src="ruleForm.postCertUrl" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
  <el-form-item label="其他" prop="otherCertUrl" style="margin-left:-275px;margin-top:-25px;"><br/>
    <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="FotherCertUrl"
    :before-upload="beforeAvatarUpload"  style="margin-left:-50px;margin-top:6px;">
    <img v-if="ruleForm.otherCertUrl" :src="ruleForm.otherCertUrl" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:-325px;width:90px;height:40px;" class="sub">下一步</el-button>
    <!-- <el-button type="primary" @click="down()" style="margin-left:20px;width:90px;height:40px;" class="sub">下载</el-button>
    <a href="http://127.0.0.1:8888/uploadFiles/upload/member/郭润会员登记表.docx">下载</a> -->
  </el-form-item>
<br/>
 </el-form>
</template>


<script>
  export default {
    data() {
      return {
        // idCardUrlZ: '',
        // idCardUrlF: '',
        // diplomaCertUrl: '',
        // postCertUrl: '',
        // otherCertUrl: '',
        ruleForm: {
            idCardUrlZ: '',
            idCardUrlF: '',
            diplomaCertUrl: '',
            postCertUrl: '',
            otherCertUrl: ''
        },
      };
    },
    created() {
        this.httpFc('http://127.0.0.1:8888/member/AuthMember').then(res => {
            if (+res.err.code === 200) {
                this.ruleForm = res.data.member
            }else{
                console.log(res)
            }
        })
    },
    methods: {
      FidCardUrlz(res, file) {
          this.ruleForm.idCardUrlZ = res.data.url;
          //this.idCardUrlZ = URL.createObjectURL(file.raw);
      },
      FidCardUrlf(res, file) {
          this.ruleForm.idCardUrlF = res.data.url;
          //this.idCardUrlF = URL.createObjectURL(file.raw);
      },
      FdiplomaCertUrl(res, file) {
          this.ruleForm.diplomaCertUrl = res.data.url;
          //this.diplomaCertUrl = URL.createObjectURL(file.raw);
      },
      FpostCertUrl(res, file) {
          this.ruleForm.postCertUrl = res.data.url;
          //this.postCertUrl = URL.createObjectURL(file.raw);
      },
      FotherCertUrl(res, file) {
          this.ruleForm.otherCertUrl = res.data.url;
          //this.otherCertUrl = URL.createObjectURL(file.raw);
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
      submitForm(ruleForm) {
            this.http
            .post('http://127.0.0.1:8888/member/FirInfo', this.ruleForm)
            .then(res => {
                if (+res.err.code === 200) {
                    //alert("200");
                    //this.$emit('step',"1");
                    //console.log("step");
                    this.$parent.next();
                    this.$router.push('step4')
                    
                } else {
                    this.$message.error(res.err.desc);
                }
            })
            alert('submit!');
          },
          down() {
            this.httpFc('http://127.0.0.1:8888/member/WordExport')
          },
          httpFc(v) {
          return this.http
          .get(v)
      } 
    }
  }
</script>
<style>
  .demo-ruleForm{
      width:900px;
      border-radius:25px;
      font-family:微软雅黑;
      margin: 0px auto;
      border:1px solid #d9d9d9;
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
    width: 338px;
    height: 200px;
    line-height: 178px;
    text-align: center;
  }
  /* .avatar {
    width: 18px;
    height: 178px;
    display: block;
    
  } */
  .sub{
      margin-top: -50px;
  }
</style>
