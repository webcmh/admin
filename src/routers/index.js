import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Message } from 'element-ui'

const BaseRoutes = [ // 基础路由表
    { path: '/', redirect: '/Home' }, // 主架
    { path: '*', component: () => import(/* webpackChunkName: "base" */ '@/views/Base/404'), meta: { title: 'Not Found!' }},
    { path: '/login', component: () => import(/* webpackChunkName: "base" */ '@/views/Login'), meta: { title: '登录' }},
    { path: '/RoleAdmin', meta: { title: '权限管理', btnPermissions: ['Delete', 'Add', 'Edit'] }, component: () => import(/* webpackChunkName: "base" */ '@/views/RoleAdmin') },
    { path: '/UserAdmin', meta: { title: '用户管理', btnPermissions: ['Delete', 'Search'] }, component: () => import(/* webpackChunkName: "base" */ '@/views/UserAdmin'),
        children: [
            { path: 'Test', meta: { title: '用户管理-Test' }, component: () => import(/* webpackChunkName: "base" */ '@/views/UserAdmin/Test.vue') }
        ]
    }
]

// ---------------------------------------------------------
Vue.use(VueRouter)

// 注册路由表
const router = new VueRouter({ routes: [...BaseRoutes] })

// 路由守卫
// -----------------------------
router.beforeEach((to, from, next) => {
    const _Token = window.localStorage.getItem('_Token')
    if (!_Token && to.path !== '/login') { // token不存在 且跳转的地址非登录页 就默认跳转登录页面
        next('/login')
    } else { // token存在 ? 正常跳转至下一页面
        window.document.title = `${to.meta.title} | 工程建设后台管理系统` // 设置当前页标题
        next()
    }
})

// ---------------------------------------------------------
// 解决重复路由！
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
// 导出路由实例
export default router
// ---------------------------------------------------------
