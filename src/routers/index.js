import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由

const routes = [
    { path: "/", redirect: '/login' },
    {
        path: "/login",
        component: () => import( /* webpackChunkName: "base" */ '@/views/login'),
        meta: { title: "登录" }
    },
    {
        path: "/UserAdmin",
        component: () => import( /* webpackChunkName: "base" */ '@/views/UserAdmin'),
        meta: { title: "用户管理" }
    },

]

// ---------------------------------------------------------
Vue.use(VueRouter) // 模块化机制 要调用 Vue.use(VueRouter)  -

// 注册路由表
const router = new VueRouter({ routes })

// 路由守卫
// -----------------------------
router.beforeEach((to, from, next) => {
    const _token = localStorage.getItem('_token');
    // console.log(to, from, next, _token);
    // console.log(to);
    // if (_token) {
    //     router.addRoutes([{
    //         path: "/UserAdmin",
    //         component: () => import( /* webpackChunkName: "base" */ '@/views/UserAdmin'),    
    //         meta: { title: "用户管理" }
    //     }])
    // } else {
    //     next({ path: '/login' })
    // }
    if (!_token && to.path !== '/login') {
        next('/login')
    } else {
        window.document.title = `${to.meta.title} | 后台管理`;
        next()
    }
})

// 导出路由实例
export default router;
// ---------------------------------------------------------