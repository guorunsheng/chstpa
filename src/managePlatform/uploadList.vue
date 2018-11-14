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
            style="width: 100%">   
            <el-table-column
            prop="title"
            label="名称"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px"><img :src="scope.row.icon" class="pre-cion">{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期">

            </el-table-column>
            <el-table-column
            prop="oper"
            label="操作" style="width: 20%">
            <template slot-scope="scope">
                <el-button @click="delPage(scope.row.id)" type="text" size="small">删除</el-button>
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
export default {
    data() {
        return {
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
          .get('http://chstpa.chstpa.com/upload/getDownload', {
              params: {
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
        }
    }
}
</script>
<style scoped lang='scss'>
    .upload-list {
        padding-top: 20px;
       // padding-top: 2em;
        .row-search {
        margin-bottom: 10px;
        margin-top: -4px;
        //    margin-bottom: 1em;
        }
        .pag {
            text-align: right;
            margin-top: 2em;
        } 
    }
</style>
