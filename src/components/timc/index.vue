<template>
  <div>
    <tinymce ref="richText" v-model="content" @on-upload-complete="onEditorUploadComplete">
    </tinymce>
     <div class="mt20">
            <el-button type="primary" class="w100" @click="get">保存</el-button>
            <el-button type="primary" class="w100" @click="set">设置</el-button>
     </div>
  </div>  
</template>
<script>
import tinymce from "../TinyMce/TinyMce"
export default {
  data() {
    return {
        content:'欢迎来到首页'
    }
  },
  methods: {
      onEditorUploadComplete(res) {
      if (res.code == 0) {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
      },
      set() {
      this.$refs.richText.setContent('设置内容')
    },
    get() {
      console.log(this.$refs.richText.getContent())
    },
  },
  components:{
    tinymce
  }
}
</script>
<style>
  
</style>

<style lang="scss" scoped type="text/css">

</style>
