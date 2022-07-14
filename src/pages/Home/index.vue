<template>
  <div>
    <!-- 三级联动已经是全局组件了，不需要注册 -->
    <TypeNav></TypeNav>
    <!-- 不是全局组件的需要注册一下 -->
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brank></Brank>
    <Floor></Floor>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListCantainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brank from "@/pages/Home/Brand"
import Footer from '@/pages/Home/Footer';
export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brank,
    Footer
  }
}
</script>

<style>

</style>