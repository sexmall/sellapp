import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MAin',
    component: Main,
    children:[
      {path:'/goods',name:'goods',component:()=> import('../views/Goods.vue')},
      {path:'/evaluate',name:'evaluate',component:()=> import('../views/Evaluate.vue')},
      {path:'/merchant',name:'merchant',component:()=> import('../views/Merchant.vue')},
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
