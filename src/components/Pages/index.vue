﻿<template>
  <div class="pages-wrap">
      <el-button class="back" icon="el-icon-back" circle @click="goBack"></el-button>
      <h2 class="tit">{{article.title}}</h2>
      <div class="info">
        <span>发布日期：{{article.time}}</span>
        <span>来源：{{article.fromWhere}}</span>
        <span>作者：{{article.person}}</span>
      </div>
      <div class="main-content" v-html='article.article'></div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.getData()
  },
  components:{
  },
  methods: {
    getData() {
      this.http
      .get('https://chstpa.chstpa.com/article/getArticle', {
          params: {
              c: this.$route.query.c,
              id: this.$route.query.id
          }
      })
      .then(res => {
          if (+res.err.code === 200) {
              this.article = res.data
          } else {
              this.$message.error(res.err.desc);
          }
      })
      .catch(e => {
          console.log(e)
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .pages-wrap {
    .tit {
      text-align: center;
      border-bottom: solid 1px rgba(80, 112, 146, .7);
      margin-bottom: 0;
      padding-bottom: 14px;
    }
    .info {
      margin: 2em 0 4em;
      display: flex;
      justify-content: center;
      span+span {
        margin-left: 4em;
      }
    }
    .back {
      margin-bottom: 20px;
    }
    .main-content {
      padding: 0 8em;
    }
  }
</style>
