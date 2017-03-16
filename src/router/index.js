import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Class from '@/components/Class'
import Search from '@/components/Search'
import Detail from '@/components/Detail'
import Aclass from '@/components/Aclass'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
     
      component: Index
    },
    {
      path:'/class',
      
      component: Class
    },
    {
      path:'/search',
     
      component: Search
    },
    {
      path:'/detail',
      component: Detail
    },
    {
      path:'/aclass',
      component: Aclass 
    }
  ]
})
