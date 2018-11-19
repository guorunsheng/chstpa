<template>
<el-form :model="ruleForm" :rules="rules" :inline="true" ref="ruleForm" label-width="300px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name" style="padding-top:30px;margin-left:-45px"><br/>
    <el-input v-model="ruleForm.name" style="width: 100%;margin-left:-50px;"></el-input>
  </el-form-item>
  <el-form-item label="籍贯" prop="nativePlace" style="margin-left:-300px;margin-top:30px;"><br/>
    <el-input v-model="ruleForm.nativePlace" style="width: 100%;margin-left:-52px;"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex" style="margin-top:30px;margin-left:-310px"><br/>
    <!-- <el-select v-model="ruleForm.sex" placeholder="请选择性别" style="width: 80%;margin-left:-40px;">
      <el-option label="男" value="0"></el-option>
      <el-option label="女" value="1"></el-option>
    </el-select> -->
    <el-radio v-model="radio" label="1" style="margin-left:-38px">男</el-radio>
    <el-radio v-model="radio" label="2" style="margin-left:0px">女</el-radio>
  </el-form-item>
 <el-form-item label="职称/职务" prop="rankName" style="margin-left:-10px;margin-top:-10px;"><br/>
    <el-input v-model="ruleForm.rankName" style="width: 130%;margin-left:-85px;"></el-input>
  </el-form-item>
  <el-form-item label="办公电话" prop="tel" style="margin-top:-102px;margin-left:150px;"><br/>
    <el-input v-model="ruleForm.tel" style="width: 130%;margin-left:-80px;"></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="phone" style="margin-top:-121px;margin-left:318px;"><br/>
    <el-input v-model="ruleForm.phone" style="width: 130%;margin-left:-78px;"></el-input>
  </el-form-item>
  <el-form-item label="电子邮箱" prop="email" style="margin-top:-50px;margin-left:-15px;"><br/>
    <el-input v-model="ruleForm.email" style="width: 120%;margin-left:-78px;"></el-input>
  </el-form-item>
  <el-form-item label="现居地址" prop="presentAdd" style="margin-top:-102px;margin-left:150px;"><br/>
    <el-input v-model="ruleForm.presentAdd" style="width: 130%;margin-left:-80px;"></el-input>
  </el-form-item>
   <el-form-item label="其他社会事务" prop="otherPost" style="margin-top:-120px;margin-left:345px;"><br/>
    <el-input v-model="ruleForm.otherPost" style="width: 160%;margin-left:-105px;"></el-input>
  </el-form-item>
  <el-form-item label="近期二寸照片" prop="reTwoInchPhoto" style="margin-top:-52px;margin-left:7px;"><br/>
      <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto?name=reTwoInchPhoto"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"  style="margin-left:20px;margin-top:5px;margin-left:-98px;">
    <img v-if="ruleForm.reTwoInchPhoto" :src="ruleForm.reTwoInchPhoto" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:-98px;width:90px;height:38px; margin-top:10px;">下一步</el-button>
    <el-button @click="resetForm('ruleForm')" style="width:90px;height:40px;">重置</el-button>
  </el-form-item> 
  </el-form-item>
  <!-- <el-form-item label="籍贯" prop="nativePlace">
    <el-input v-model="ruleForm.nativePlace" style="width: 30%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="职称/职务" prop="rankName">
    <el-input v-model="ruleForm.rankName" style="width: 30%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="办公电话" prop="tel">
    <el-input v-model="ruleForm.tel" style="width: 30%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="phone">
    <el-input v-model="ruleForm.phone" style="width: 30%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="电子邮箱" prop="email">
    <el-input v-model="ruleForm.email" style="width: 30%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="现居地址" prop="presentAdd">
    <el-input v-model="ruleForm.presentAdd" style="width: 40%;margin-left:20px;"></el-input>
  </el-form-item>
  <el-form-item label="近期二寸照片" prop="reTwoInchPhoto">
      <el-upload
    class="avatar-uploader"
    action="http://127.0.0.1:8888/member/uploadPhoto"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"  style="margin-left:20px;">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" >
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
  <el-input v-model="ruleForm.reTwoInchPhotoPath" v-show class="reTwoInchPhotoPath"></el-input>
  <el-form-item>

  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left:20px;width:90px;height:40px; margin-bottom:20px;">下一步</el-button>
    <el-button @click="resetForm('ruleForm')" style="width:90px;height:40px;">重置</el-button>
  </el-form-item> -->
 </el-form>
</template>


<script>
  export default {
    name: 'step1',
    props:["ruleForm"],
    data() {
      return {
         radio: '1',
        //  imageUrl: '',
        //   ruleForm: {
        //   name: '',
        //   sex: '',
        //   nativePlace: '',
        //   rankName: '',
        //   tel: '',
        //   phone: '',
        //   email: '',
        //   presentAdd: '',
        //   reTwoInchPhoto: '',
        //   reTwoInchPhotoPath: '',
        //   otherPost:''
        // },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          nativePlace: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          rankName: [
            { required: true, message: '请输入职称/职务', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { min: 7, max: 12, message: '长度在 7 到 12 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 11, max: 16, message: '长度在 11 到 13 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          presentAdd: [
            { required: true, message: '请输入先居住地', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    //   created() {
    //     this.httpFc('http://127.0.0.1:8888/member/AuthMember').then(res => {
    //         if (+res.err.code === 200) {
    //             this.ruleForm = res.data.member
    //             this.imageUrl = res.data.member.reTwoInchPhoto
    //             console.log(this.imageUrl)
    //         }else{
    //             console.log(res)
    //         }
    //     })
    // },
    methods: {
        
      handleAvatarSuccess(res, file) {
        this.ruleForm.reTwoInchPhoto = res.data.url;
        this.ruleForm.reTwoInchPhotoPath = res.data.path;
        this.comm.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    //   uploadHttp: function(file) {
	// 		var fd = new FormData();
	// 		fd.append('file', file.file);
	// 		$.ajax({
    //             url:"http://127.0.0.1:8888/member/uploadPhoto",
	// 			type: 'post',
	// 			contentType: false,
	// 			data: fd,
	// 			async: false,
	// 			processData: false,  //使用ajax上传图片要设置的
	// 			success: function(res) {
    //                 var parsedJson = jQuery.parseJSON(res);
    //                 //console.log(parsedJson);
	// 				if (parsedJson.err.code=="200") {
	// 					console.log(parsedJson.data);
	// 					//上传成功
	// 				} else {
    //                     //上传失败
    //                     console.log(res);
	// 					return;
	// 				}
 
	// 			},
    //             error: function(res) {
	// 			    alert("请求错误");
	// 			}
 
	// 		});
 
	// 	},
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.http
            .post('http://127.0.0.1:8888/member/FirInfo', this.ruleForm)
            .then(res => {
                if (+res.err.code === 200) {
                    //alert("200");
                    //this.$emit('step',"1");
                    //console.log("step");
                    this.$parent.next();
                    this.$router.push('step2')
                    
                } else {
                    this.$message.error(res.err.desc);
                }
            })
          } else {
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

  }
}
</script>
<style>
  .demo-ruleForm{
    width: 900px;
    margin: 0px auto;
    margin-top: 15px;
    border-radius:25px;
    font-family:微软雅黑;
    border:1px solid #d9d9d9;
    background-color:white;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: rgb(148, 149, 150);
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 158px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 200px;
    display: block;
  }
</style>
