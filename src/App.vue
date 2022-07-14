<template>
  <div>
    <!-- 使用非路由组件 -->
    <Header></Header>
    <!-- l路由组件展示地方 -->
    <router-view></router-view>
    <!-- v-show：控制显示或者隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>

</template>

<script>
// 引入非路由组件
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',
  // 注册非路由组件
  components: {
      Header,
      Footer
  }
}
</script>

<style>

</style>
