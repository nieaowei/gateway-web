import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Service from '@/components/service/Service.vue'

Vue.use(VueRouter)

export const ServiceRouter = {
  path: '/service',
  name: 'Service',
  component: Service,
  meta: {
    title: '服务管理-管理中心'
  }
} as RouteConfig

export const RootRouter = {
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: '管理中心'
  },
  children: [
    ServiceRouter
  ]
} as RouteConfig

export const HomeRouter = {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '管理中心'
  }
} as RouteConfig

export const LoginRouter = {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  meta: {
    title: '用户登录'
  }
} as RouteConfig

export const AboutRouter = {
  path: '/about',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
} as RouteConfig

const routes: Array<RouteConfig> = [
  RootRouter,
  LoginRouter,
  HomeRouter,
  AboutRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
