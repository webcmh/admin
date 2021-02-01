<!-- 组件说明 -->
<template>
  <div class="Login-Box">
    <particles />
    <el-collapse-transition>
      <div v-show="ISlogin" class="Login">
        <transition name="slide-fade">
          <el-form v-show="ISForm" ref="Login" :model="Login">
            <!-- 项目名 -->
            <el-form-item class="t-c"><h1 class="module-title">工程建设后台管理系统</h1> </el-form-item>
            <!-- 用户名 -->
            <el-form-item>
              <el-input v-model="Login.userName" clearable placeholder="请输入账号">
                <template slot="prepend"><i class="el-icon-s-custom" style="font-size:20px" /></template>
              </el-input>
            </el-form-item>
            <!-- 密 码 -->
            <el-form-item>
              <el-input v-model="Login.password" type="password" show-password placeholder="请输入密码">
                <template slot="prepend"><i class="el-icon-s-grid" style="font-size:20px" /></template>
              </el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item>
              <el-input v-model="Login.userCode" placeholder="请输入验证码">
                <template slot="prepend"> <i class="el-icon-s-opportunity" style="font-size:20px" /></template>
                <template slot="append"><el-image :src="verifyUrl" @click.native="GetverifyUrl" /></template>
              </el-input>
            </el-form-item>
            <!-- 登 录 -->
            <el-form-item>
              <!-- :disabled="ISdisabled" -->
              <el-button type="success" :loading="ISloading" @click="Submit">{{ Login_Text }}</el-button>
            </el-form-item>
          </el-form>
        </transition>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import particles from '@/components/particles'
export default {
    components: { particles },
    data() {
        return {
            Login: {
                userName: '', // 用户名
                password: '', // 密 码
                userCode: '' // 验证码
            },
            verifyUrl: this.GetverifyUrl(),
            Login_Text: '开 始 使 用', // 按钮显示文字
            ISdisabled: true, // 是否禁用提交按钮
            ISloading: false, // 是否显示提交loading
            ISlogin: false, // 是否显示登录框
            ISForm: false, // 是否显示登录框内form
            MenuList: [] // 模拟菜单数据
        }
    },
    watch: {
        // 校验输入项是否为空
        Login: {
            handler(newName) {
                if (newName.userName && newName.password && newName.userCode) {
                    this.ISdisabled = false
                    return
                }
                this.ISdisabled = true
            },
            deep: true
        }
    },
    created() {
        this.GetverifyUrl()
    },
    mounted() {
        setTimeout(() => (this.ISlogin = true), 800)
        setTimeout(() => (this.ISForm = true), 1000)
    },
    methods: {
        // 提交登录
        Submit() {
            this.ISloading = true // 显示提交loading
            this.Login_Text = '正在验证用户信息'
            localStorage.setItem('_Token', 'dqwdslndqwdnqwkndqwakllq') // 模拟token
            this.$store.commit('AddRouter')
        },
        // 获取验证码
        GetverifyUrl() {}
    }
}
</script>

<style scoped lang="scss">
/* 容器 */
.Login-Box {
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/login/login-bg.jpg") no-repeat center;
    background-size: 100% 100%;
    .Login {
        width: 30%;
        height: 50%;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.5);
        position: relative;
        top: 50%;
        opacity: 0.8;
        border-radius: 10px;
        border: 1px solid red;
        transform: translateY(-50%);
        -webkit-box-shadow: 5px 4px 36px 0px rgba(31, 0, 153, 1);
        -moz-box-shadow: 5px 4px 36px 0px rgba(31, 0, 153, 1);
        box-shadow: 5px 4px 36px 0px rgba(31, 0, 153, 1);
        .el-form {
            margin: 10% 0px;
        }
        .el-form-item {
            margin: 30px 30px;
        }
        .el-button {
            width: 100%;
            height: 50px;
            color: white;
            transition: 0.5s all;
            background: #67c23a;
            border: none;
        }
        .module-title {
            font-size: 20px;
            color: rgb(255, 41, 38);
        }
    }
}
</style>
<style>
/* 输入框聚焦 */
.Login-Box .Login input:focus {
    height: 60px;
    border: 1px solid blueviolet;
    border-radius: 5px;
    transition: 0.3s all;
}

/* 输入框失焦 */
.Login-Box .Login input:valid {
    transition: 0.3s all;
}

/* 输入框头部icon */
.Login-Box .Login .el-input-group__prepend {
    color: blueviolet;
    font-weight: 900;
    background: white;
}

.Login-Box .Login .is-disabled {
    transition: 0.5s all;
    background: #f96332 !important;
}
/* 登录页面输入框字体颜色 */
.Login-Box .Login .el-form-item__label {
    color: red !important;
    font-size: 16px;
}
/* 输入样式 */
.Login-Box .Login input {
    color: blueviolet;
    font-weight: 900;
    background: white;
    height: 50px;
}

/* 登录界面动画 */
.Login-Box .slide-fade-enter-active {
    transition: all 0.8s ease;
}
.Login-Box .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.Login-Box .slide-fade-enter,
.Login-Box .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
.Login .el-image {
    height: 46px;
    width: 80px;
    display: block;
    cursor: pointer;
}
.Login .el-input-group__append {
    padding: 0 0px;
}
</style>
