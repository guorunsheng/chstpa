import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Index from '@/components/Index'
import Pages from '@/components/Pages'
import allPages from '@/components/allPages'
import YzmForm from '@/components/YzmForm'
import VIPSearch from '@/components/VIPSearch'
import DownLoad from '@/components/DownLoad'
import NotFound from '@/components/NotFound'
import Member from '@/components/Member/member'
import step1 from '@/components/Member/step1'
import step2 from '@/components/Member/step2'
import step3 from '@/components/Member/step3'
import step4 from '@/components/Member/step4'

import middle from '@/managePlatform/middle'
import publishPage from '@/managePlatform/publishPage'
import pageList from '@/managePlatform/pageList'
import uploadFile from '@/managePlatform/uploadFile'
import uploadList from '@/managePlatform/uploadList'
import verifyMemberQ from '@/managePlatform/verifyMemberQ'
import memberList from '@/managePlatform/memberList'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'Pages',
          name: '文章',
          component: Pages
        },
        {
          path: 'allPages',
          name: '所有文章',
          component: allPages
        },
        {
          path: 'YzmForm',
          name: '找回密码',
          component: YzmForm
        },
        {
          path: 'VIPSearch',
          name: '会员搜索',
          component: VIPSearch
        },
        {
          path: 'downLoad',
          name: '表格下载',
          component: DownLoad
        },
        {
          path: 'member',
          name: '会员认证',
          component: Member,
          children: [
            {
              path: 'step1',
              name: '会员认证',
              component: step1
            },
            {
              path: 'step2',
              name: '会员认证',
              component: step2
            },
            {
              path: 'step3',
              name: '会员认证',
              component: step3
            },
            {
              path: 'step4',
              name: '会员认证',
              component: step4
            }
          ]
        }
      ]
    },
    {
      path: '/backPlatform',
      name: 'middle',
      component: middle,
      redirect: 'backPlatform/publishPage',
      children: [
        {
          path: 'publishPage',
          name: '文章发布',
          component: publishPage
        },
        {
          path: 'pageList',
          name: '文章列表',
          component: pageList
        },
        {
          path: 'uploadFile',
          name: '上传文件',
          component: uploadFile
        },
        {
          path: 'uploadList',
          name: '上传文件列表',
          component: uploadList
        },
        {
          path: 'verifyMemberQ',
          name: '会员审核',
          component: verifyMemberQ
        },
        {
          path: 'memberList',
          name: '会员列表',
          component: memberList
        }
      ]
    },
    {
      path: '*',
      name: 'nopage',
      component: NotFound
    }
  ],
  mode: 'history'
})

export default router
