import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)
export const TestRouter = {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
    meta: {
        title: '租户管理-管理中心'
    }
} as RouteConfig

export const TenantRouter = {
    path: 'tenant',
    name: 'Tenant',
    component: () => import('@/components/tenant/Tenant.vue'),
    meta: {
        title: '租户管理-管理中心'
    }
} as RouteConfig

export const DashboardRouter = {
    path: 'dashboard',
    name: 'DashBoard',
    component: () => import('@/components/dashboard/Dashboard.vue'),
    meta: {
        title: '仪表盘-管理中心'
    }
} as RouteConfig

export const ServiceRouter = {
    path: 'service',
    name: 'Service',
    component: () => import('@/components/service/Service.vue'),
    meta: {
        title: '服务管理-管理中心'
    }
} as RouteConfig

export const RootRouter = {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue'),
    meta: {
        title: '首页'
    },
    redirect: to => DashboardRouter
    // children: [
    //   ServiceRouter,
    //   DashboardRouter,
    //   TenantRouter
    // ]
} as RouteConfig

export const HomeRouter = {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
        title: '管理中心'
    },
    children: [
        ServiceRouter,
        DashboardRouter,
        TenantRouter
    ],
    redirect: to => DashboardRouter
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
    AboutRouter,
    TestRouter
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
