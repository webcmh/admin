// Vuex 根级别state
const state = {

    AsyncRouters: [ // 动态路由表
        { path: '/RoleAdmin', meta: { title: '权限管理', btnPermissions: ['Delete', 'Add', 'Edit'] }, component: () => import(/* webpackChunkName: "base" */ '@/views/RoleAdmin') },
        { path: '/UserAdmin', meta: { title: '用户管理', btnPermissions: ['Delete', 'Search'] }, component: () => import(/* webpackChunkName: "base" */ '@/views/UserAdmin'),
            children: [
                { path: 'Test', meta: { title: '用户管理-Test' }, component: () => import(/* webpackChunkName: "base" */ '@/views/UserAdmin/Test.vue') }
            ]
        }
    ]
}

// 导出
export default state
