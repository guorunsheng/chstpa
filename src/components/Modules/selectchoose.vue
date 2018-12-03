<template>
    <div class="oper-col">
         <div class="oper-col-item" style="margin-left:40px;">
           <ul style="">
            <li style="font-size:16px;">协会介绍</li> 
            <li><a href="#">管理制度</a></li> 
            <li><a href="#">协会领导</a></li> 
            <li><a href="#">职能部门</a></li> 
            <li><a href="#">工作委员会</a></li> 
            <li><a href="#">自律维权</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div class="oper-col-item">
          <ul style="">
            <li style="font-size:16px;">党建工作</li>
            <li><a href="#">党建动态</a></li> 
            <li><a href="#">党章党规</a></li> 
            <li><a href="#">系列讲话</a></li> 
          </ul>
        </div>
        <div class="oper-col-item">
          <ul style="">
            <li style="font-size:16px;">组织建设</li>
            <li><a href="#">通知公告</a></li> 
            <li><a href="#">工作动态</a></li> 
            <li><a href="#">专业委员会</a></li> 
            <li><a href="#">管理制度</a></li> 
          </ul>
        </div>
        <div class="oper-col-item">
          <ul style="">
            <li style="font-size:16px;">继续教育</li>
            <li><a href="#">通知公告</a></li> 
            <li><a href="#">工作动态</a></li> 
            <li><a href="#">技术推广</a></li> 
            <li><a href="#">健康教育</a></li> 
            <li><a href="#">网上学习</a></li>
          </ul>
        </div>
        <div class="oper-col-item">
          <ul>
           <li style="font-size:16px;">学术会议</li> 
           <li><a href="#">会议动态</a></li> 
           <li><a href="#">行业交流</a></li>
           <li><a href="#">国际交流</a></li>
          </ul>
        </div>
        <div class="oper-col-item">
          <ul>
            <li style="font-size:16px;">公益慈善</li>
            <li><a href="#">公益活动</a></li> 
            <li><a href="#">科普宣传</a></li>
            <li><a href="#">生命银行</a></li> 
        </ul>
        </div>
        <div class="oper-col-item">
          <ul>
           <li style="font-size:16px;">科研转化</li>
           <li><a href="#">科研成果</a></li> 
           <li><a href="#">孵化基金</a></li> 
          </ul>
        </div>
        <div class="oper-col-item">
          <ul>
            <li style="font-size:16px;">会员专区</li> 
            <li><a href="#">入会申请</a></li> 
            <li><a href="#">会员单位</a></li>
            <li><a href="#">理事单位</a></li> 
            <li><a href="#">会员登录</a></li> 
            <li><a href="#">网上申报</a></li>
          </ul>
        </div>
        <div class="oper-col-item" @click="jumpTo('downLoad')">
          <ul>
            <li style="font-size:16px;">下载专区</li> 
            <li><a href="#">入会资料</a></li> 
            <li><a href="#">培训资料</a></li> 
            <li><a href="#">数据中心</a></li> 
            <li><a href="#">协会刊物</a></li>
            <li><a href="#">视频专区</a></li>
            <li><a href="#">其他资料</a></li>
          </ul>
        </div>
        </div>
</template>
<script>
  export default {
    data() {
      return {
       
      }
    }
  }
</script>
<style lang="scss" scoped>
    .oper-col {
     height:190px; 
position: relative;
    border-top: 2px solid #f6f6f6;
    text-align:center;
   margin-top: 8px;
    .oper-col-item {
      float: left;
        text-align: center;
        width: 10%;
    ul li {
        color: black;
        font-size: 12px;
        padding-top: 5px;
         list-style: none;
      margin-left: -20px;
      font-family: "微软雅黑";
    }
    a{
      text-decoration: none;
      color: black;
    }
    a:hover{
      color: red;
    }
}
}
</style>