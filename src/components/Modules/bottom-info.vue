<template>
  <!-- <div class="bottom-info">
    <div class="wrap-item">
        <P><img src="../../assets/bottom.jpg" class="img-bot"></P>
        <p>地址：北京市朝阳区东三环北路甲2号京信大厦1334室</p>
        <p>邮编：100027</p>
        <p>备案号：京ICP备18045235号-1</p>
    </div>
    <div class="wrap-item">
        <p>电话：010-62057688</p>
        <p>网址：<a href="http://www.chstpa.com">www.chstpa.com</a></p>
        <p>邮箱：bangongshi@chstpa.com</p>
    </div>
  </div> -->
  
   <div class="oper-col">
        <div class="oper-col-item" style="margin-left:50px; ">
          <ul style="float:left;margin-top:15px;width:70px;height:100%;">
           <li><img src="../../assets/bottom.jpg" class="img-bot" style="width:50px;height:50px;"></li>
          </ul>
         <ul>
           <li style="">网址：<a href="http://www.chstpa.com">www.chstpa.com</a></li>
           <li>备案号：京ICP备18045235号-1</li> 
           <li>地址：北京市朝阳区东三环北路甲2号京信大厦1334室</li>
         </ul>
       </div>
        <div class="oper-col-item" style="margin-left:-20px;" >
         <ul style="">
         <li>邮编：100027</li>
         <li>邮箱：bangongshi@chstpa.com</li> 
          <li>电话：010-62057688</li> 
        
         </ul>
        </div>
   </div>
</template>


<script>
// import bottomInfoData from "../../data/bottomInfo";
export default {
    data() {
        return {
            // infoData: [1,2,3]
        }
    },
  components:{
  },
  created() {
    //   this.infoData = bottomInfoData.bottomInfoDate;
    //   console.log(bottomInfoData)
  }
}
</script>
<style lang="scss" scoped>
            .oper-col {
            height:120px; 
            width: 100%;
            border-top: solid 2px #f6f6f6;
            overflow: hidden;
            border-left: solid 1px #f6f6f6;
            border-right: solid 1px #f6f6f6;
            float:left;
            .oper-col-item {
                width: 40%;
                float: left;
                margin-top: 15px;
             
            ul li {
                color: rgb(145, 136, 136);
                font-size: 12px;
                list-style: none;
            }
            a{
                color: rgb(145, 136, 136);
                text-decoration: none;
            }
            a:hover{
                color:red;
            }
            }
            }
</style>
