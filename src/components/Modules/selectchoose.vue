<template>
  <div class="bottom-info">
      <div class="select">
          <span style="font-size:20px;font-weight:bold;margin-left:20px;padding-top:-15px;">友情链接</span>
         <template>
            <el-select v-model="value5" multiple collapse-tags
                style="margin-left: 40px;margin-top:8px;" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
               <el-select v-model="value5" multiple collapse-tags
                style="margin-left: 10px;" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-select
                v-model="value11"
                multiple
                collapse-tags
                style="margin-left: 10px;"
                placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
               <el-select v-model="value5" multiple collapse-tags
                style="margin-left: 10px;" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select> 
        </template>
      </div>
  </div>
</template>
<script>
// import bottomInfoData from "../../data/bottomInfo";
export default {
    data() {
       return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        value11: []
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
  
      .select{
            width: 100%;
            height: 60px;
            background-color:whitesmoke;
        }
</style>

