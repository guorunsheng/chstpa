<template>
  <div class="bottom-info">
   
          <span style="font-size:20px;font-weight:bold;margin-left:10px;padding-top:-15px;">友情链接</span>
         <template style="width:100%">
            <el-select v-model="value1" clearable placeholder="请选择" class="select" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

             <el-select v-model="value2" clearable placeholder="请选择" class="select">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

             <el-select v-model="value3" clearable placeholder="请选择" class="select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

             <el-select v-model="value4" clearable placeholder="请选择" class="select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </template>
      </div>
  
</template>
<script>
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
        options1: [{
          value: '选项1',
          label: '黄金糕哈哈'
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
        value1: '',
        value2:'',
        value3:'',
        value4:''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .select{
    margin-left:10px;
  }
    
</style>


