<template>
<el-form :model="ruleForm"  label-width="400px" class="demo-ruleForm" style="margin-top:20px;">
  <el-form-item label="" style="font-size:20px;font-weight:bold;">
      <h2>查看资料页</h2>
  </el-form-item>
   <el-form-item label="" style="font-size:20px;font-weight:bold;">
       <table style="width:100%;height:100%;margin-top:-20px;margin-left:-320px;">
         <tr>
            <td><label style="margin-left:100px;">身份证复印件正面</label></td>
            <td><label style="margin-left:150px;">身份证复印件反面</label></td>
         </tr>
         <tr>
           <td><img v-image-preview  id = "idCardUrlZ"  style="width:340px;height:200px;margin-top:6px;" :src="this.ruleForm.idCardUrlZ"  alt=""></td>
           <td><img v-image-preview style="width:340px;height:200px;margin-left:48px;" :src="this.ruleForm.idCardUrlF" alt=""></td>
         </tr>
          <tr>
            <td><label style="margin-left:100px;">学历学位证书</label></td>
            <td><label style="margin-left:135px;">职称/职位证书</label></td>
         </tr>
         <tr>
           <td><img v-image-preview style="width:340px;height:200px;margin-top:6px;" :src="this.ruleForm.diplomaCertUrl" alt=""></td>
           <td><img v-image-preview style="width:340px;height:200px;margin-left:48px;" :src="this.ruleForm.postCertUrl" alt=""></td>
         </tr>
           <tr style="margin-top:10px;">
            <td><label style="margin-left:80px;margin-top:10px;">其他</label></td>
            <td><label style="margin-left:-40px;">会员登记表</label></td>
         </tr>
         <tr>
           <td><img v-image-preview style="width:200px;height:280px;margin-top:6px;"  :src="this.ruleForm.otherCertUrl"  alt=""></td>
           <td><img v-image-preview style="width:200px;height:280px;margin-left:-90px;" :src="this.ruleForm.signature" alt=""></td>
           <!-- <td> 
             <img v-image-preview id="image" src="../assets/4.jpg" alt="Picture" style="width:100px;height:100px;margin-left:-50px;">
           </td> -->
         </tr>
         <div>
         
        </div>
        
       </table>
  </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="verify(2)" style="margin-left:-318px;">审核通过</el-button>
      <el-button type="primary" @click="verify(0)">资料重传</el-button>
      <el-button  type="primary">
        <router-link to='/backPlatform/verifyMemberQ' style="text-decoration:none;color:white;">返回会员审核</router-link>
      </el-button>
  </el-form-item><br/>
 </el-form>
 
</template>
<script>
import Viewer from 'viewerjs';

  export default {
    data() {
      return {
            ruleForm: this.$route.query.idCard,
            // idCard:this.$route.query.idCard.diplomaCertUrl,
            // url:this.$route.query.idCard.diplomaCertUrl,
            //url:"http://127.0.0.1:8888/uploadFiles/upload/member/bfbbc770-62d7-4816-addc-e3a90b77d87c.jpg"
      };
    },
    beforeCreate(){

    },
    created() {
        // console.log(this.idCard)
        //     this.http
        //     .get('http://127.0.0.1:8888/member/verifyMemberQD', {
        //         params: {
        //             idCard: this.idCard,
        //         }
        //   })
        //   .then(res => {
        //       if (+res.err.code === 200) {
        //           this.ruleForm = '';
        //           this.ruleForm = res.data.member[0];
        //           //$("#idCardUrlZ").attr('src', this.ruleForm.idCardUrlZ);
        //           //alert("123")
        //           //console.log("123")
        //           // var anElement = $("#idCardUrlZ");
        //           // anElement.attr("v-image-preview");
                  
        //     }
        //   })
          
    },
    updated(){
      // var ll = $(".idCardUrlZ td").html();
      // alert(ll)
      // var src = this.ruleForm.idCardUrlZ;

      // $("#idCardUrlZ").replaceWith('<img v-image-preview  id = "idCardUrlZ" src="http://127.0.0.1:8888/uploadFiles/upload/member/bfbbc770-62d7-4816-addc-e3a90b77d87c.jpg" style="width:340px;height:200px;margin-top:6px;"   alt="">')
      // console.log(this.ruleForm)
    },
    methods: {
        verify(state){
            this.http
            .get('http://192.168.1.101:8888/member/verifyMember', {
              params: {
                  userName: String(this.ruleForm.userName),
                  state:state,
              }
            })
            .then(res => {
              if (+res.err.code === 200) {
                alert("审核通过成功！");
                this.$router.push("/backPlatform/verifyMemberQ");
            }
            if (+res.err.code === 201) {
                alert("联系会员重传资料！");
                this.$router.push("/backPlatform/verifyMemberQ");
            }
          })
        }
    
}}
</script>
<style scoped>
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
  .avatar {
    width: 340px;
    height: 200px;
    display: block;
    
  }
  .sub{
      margin-top: -50px;
      
  }
</style>

