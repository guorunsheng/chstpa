<template>
  <div >
    <el-steps :active="active" finish-status="success" >
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
    </el-steps>  
    <router-view></router-view>

  </div>  
</template>
<script>
import step1 from './step1.vue';
export default {
  data() {
    return {
       active: 0
    }
  },
   created() {
    this.$router.push('/member/step1')
  },
  methods: {
    next(v) {
        console.log(v);
        //this.active = step;
         if (this.active++ > 2) this.active = 0;
      }
  },
  components:{
    step1
  }
}
</script>
<style>
  /* .el-button>span {
    font-size: 14px;
  } */
</style>

<style lang="scss" scoped type="text/css">

</style>
