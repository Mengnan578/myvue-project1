
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
Vue.use(VueRouter);

//备份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push
// 参数一：告诉原来的push方法，你往哪儿跳转
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call和apply
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call和apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
// 重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login,
            // meta，路由原信息，用来控制footer是否在当前路由下显示
            meta: { show: false }
        },
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyWord?",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        // 重定向
        {
            path: '*',
            redirect: "/home"
        }
    ]
})