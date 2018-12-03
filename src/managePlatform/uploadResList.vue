<template scope="scope">
    <div class="upload-list">
        <el-row class="row-search">
            <el-col :span='16'>
                <el-input v-model="searchContent" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span='4' :offset='1'>
                <el-button type="primary" @click="searchPages(searchContent)">搜索</el-button>
            </el-col>
        </el-row>
        <el-table
            :data="pagesData"
            stripe
            border
            style="width: 100%;">  
            <el-table-column
            prop="downloadAdd"
            label="缩略图">
            <template slot-scope="scope">
                    <img v-image-preview :src="scope.row.downloadAdd" style="width:175px">
                </template>
            </el-table-column> 
            <el-table-column
            prop="title"
            label="名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px"><img :src="scope.row.icon" class="pre-cion">{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="downloadAdd"
            label="使用链接">

            </el-table-column>
            <el-table-column
            prop="oper"
            label="操作" style="width: 20%">
            <template slot-scope="scope">
                <el-button @click="delPage(scope.row.id)" type="primary" size="small">删除</el-button>
                <!-- <el-button type="primary" size="small"
                 v-clipboard:copy="message"
                 v-clipboard:success="onCopy"
                 v-clipboard:error="onError"
                >复制</el-button> -->
                <input type="text" v-model="message">
                <button type="button"
                  v-clipboard:copy="message"
                 v-clipboard:success="onCopy"
                 v-clipboard:error="onError"
                >复制</button>
            </template>
            </el-table-column>
        </el-table>
        <div class="pag">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="nums"
                @current-change="changePage">
            </el-pagination>    
        </div>
    </div>
</template>
<script>
import Viewer from 'viewerjs';
export default {
    data() {
        return {
            message:'复制这条',
            pagesData: [],
            searchContent: '',
            initNum: 0,
            nums: 0
        }
    },
    created() {
        this.getAllPages('', 0)
    },
    methods: {
        getAllPages(v, num = 0) {
           this.http
          .get('http://127.0.0.1:8888/upload/getDownload', {
              params: {
                  state: 3,
                  content: String(v),
                  num: num
              }
          })
          .then(res => {
              if (+res.err.code === 200) {
                this.nums = res.data.nums
                this.pagesData = res.data.pages
            }
          })
        },
        delPage(id) {
            let _this = this
            this.http
            .get('http://chstpa.chstpa.com/upload/deleteDownload', {
                params: {
                    id
                }
            })
            .then(res => {
                if (+res.err.code === 200) {
                    this.getAllPages(_this.searchContent, 0)
                }
            })
        },
        searchPages(v) {
            this.getAllPages(v, 0)
        },
        changePage(v) {
            let _this = this
            this.getAllPages(_this.searchContent, (+v-1))
        },
        edit(id) {
            console.log(id)
            this.$router.push({ path: 'publishPage', query: {id: id }});
        },
        onCopy:function(e){
          alert('you just copy'+e.text)
        },
        onError:function(e){
             alert('Failed copy')
        }
      
            }
            }
</script>
<style scoped lang='scss'>
    .upload-list {
        padding-top: 20px;
        .row-search {
        margin-bottom: 14px;
        margin-top: -4px;
        }
        .pag {
            text-align: right;
            margin-top: 2em;
        } 
    }
</style>
