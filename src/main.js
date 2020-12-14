import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles' //粒子
Vue.use(ElementUI);
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')