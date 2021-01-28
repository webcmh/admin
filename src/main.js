import Vue from 'vue'
import App from './App.vue'
import store from '@/Vuex/index'
import router from '@/routers'
import ElementUI from 'element-ui'
import Has from '@/utils/Permission'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles' // 粒子
Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.directive(Has)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
