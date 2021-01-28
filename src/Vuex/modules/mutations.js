// Vuex 根级别mutations
import router from '@/routers'

const mutations = {
    // 动态路由整合
    AddRouter(state) {
        router.addRoutes(state.AsyncRouters)
        router.push(state.AsyncRouters[0].path)
    }
}

// 导出
export default mutations
