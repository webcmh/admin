
// ---------------------------------------------------------
// 根据用户角色判断按钮级权限 - 全局
// 后台数据结构：用户登录后返回该用户对应的路由表AsyncRouters，表中包含用户可访问的页面级权限（路由）、可操作的按钮级权限 > BtnPermission字段
// 视图层逻辑：当某按钮需要判定是否需要权限时，绑定上v-Has指令；
// 代码逻辑：通过v-Has指令获取到当前按钮，传递参数为对应的权限name；在AsyncRouters > BtnPermission查找是否拥有该name，即可判定是否拥有该操作按钮权限！
// 代码逻辑：若不存在则直接删除DOM，存在则保留！

import Vue from 'vue'

const Has = Vue.directive('Has', {
    inserted: function(el, binding, vnode) {
        console.log(binding.value)
        if (binding.value.name) {
            const btnPermissions = vnode.context.$route.meta.btnPermissions
            if (!btnPermissions.includes(binding.value.name)) {
                el.parentNode.removeChild(el)
            } else {
                return
            }
        } else {
            throw new Error('使用Has指令，必须传递有效的name属性！')
        }
    }
})

// ---------------------------------------------------------
// 导出
export default { Has }
