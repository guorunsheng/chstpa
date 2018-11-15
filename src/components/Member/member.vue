<template>
  <div class="all" >
    <el-steps :active="active" finish-status="success">
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
    this.$router.push('/member/step2')
  },
  methods: {
    next() {
        //console.log(v);
        //this.active = step;
         if (this.active++ > 2) this.active = 0;
      }
  },
  components:{
    step1
  }
}
</script>

<style lang="scss" scoped type="text/css">
  .all{
   width: 1100px;
   height: 1300px;
   margin: 0px auto;
   margin-top: 10px;
  }
</style>
