import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MyPage from '../views/MyPage'
import Login from '../views/Login'
import Join from '../views/Join'
import Payments from '../views/Payments'
import AdminPhoto from '../views/AdminPhoto'
import AdminPayments from '../views/AdminPayments'
import Notice from '../views/Notice'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: MyPage,
  },
  {
    path:'/login',
    name:'login',
    components:{
      login:Login
    }
  },
  {
    path:'/join',
    name:'join',
    components:{
      join:Join 
    }
  },
  {
    path:'/payments',
    name:'payments',
    components:{
      payments:Payments 
    }
  },
  {
    path:'/adminPhoto',
    name:'adminPhoto',
    components:{
      adminPhoto:AdminPhoto
    }
  },
  {
    path:'/adminPayments',
    name:'adminPayments',
    components:{
      adminPayments:AdminPayments
    }
  },
  {
    path:'/Notice',
    name:'Notice',
    components:{
      Notice:Notice
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
