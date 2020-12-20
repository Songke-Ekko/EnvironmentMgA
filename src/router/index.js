import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import IndexPage1 from '@/components/IndexPage1'
import register from '@/components/register'
import login from '@/components/login'
import helpCenter from '@/components/helpCenter'
import IndexPageEngilsh from '@/components/IndexPageEngilsh'
import nearby from '@/components/nearby'
import aboutEnvironment from '@/components/aboutEnvironment'
import news from '@/components/news'
import personnel from '@/components/personnel'
import treesTable from '@/components/treesTable'
import flowersTable from '@/components/flowersTable'
import glassesTable from '@/components/glassesTable'
import editPsd from '@/components/editPsd'
import operationLog from '@/components/operationLog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/IndexPage1',
      name: 'IndexPage1',
      component: IndexPage1
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: helpCenter
    },
    {
      path: '/IndexPageEngilsh',
      name: 'IndexPageEngilsh',
      component: IndexPageEngilsh
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: nearby
    },
    {
      path: '/aboutEnvironment',
      name: 'aboutEnvironment',
      component: aboutEnvironment
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: personnel
    },
    {
      path: '/treesTable',
      name: 'treesTable',
      component: treesTable
    },
    {
      path: '/flowersTable',
      name: 'flowersTable',
      component: flowersTable
    },
    {
      path: '/glassesTable',
      name: 'glassesTable',
      component: glassesTable
    },
    {
      path: '/editPsd',
      name: 'editPsd',
      component: editPsd
    },
    {
      path: '/operationLog',
      name: 'operationLog',
      component: operationLog
    }
  ]
})
