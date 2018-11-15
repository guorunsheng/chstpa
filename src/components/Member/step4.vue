<template>
<el-form :model="ruleForm"  label-width="300px" class="demo-ruleForm" >
  <el-form-item label="签字回传" prop="signature">
      <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="Fsignature"
    :before-upload="beforeAvatarUpload"  style="margin-left:20px;">
    <img v-if="ruleForm.signature" :src="ruleForm.signature" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:20px;width:90px;height:40px;" class="sub">提交</el-button>
    <a :href="this.url" class="sub">下载</a>
  </el-form-item>
<br/>
 </el-form>
</template>


<script>
  export default {
    data() {
      return {
          url: '',
           ruleForm: {
            signature: '',
        },
      };
    },
    created() {
        this.httpFc('http://127.0.0.1:8888/member/WordExport').then(res => {
            if (+res.err.code === 200) {
                this.url = res.data.url
                console.log(this.url);
            }else{
                console.log(res)
            }
        })
    },
    methods: { 
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
        },
        httpFc(v) {
          return this.http
          .get(v)
        } 
    }
  }
</script>
<style>
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
