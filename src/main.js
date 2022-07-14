import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 三级联动组件 --- 注册为全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  // 注册路由：地下的写法kv一致省略v
  // 注册路由信息：当这里书写router的饿时候，组件身上偶读拥有$route,$router属性
  router
}).$mount('#app')
