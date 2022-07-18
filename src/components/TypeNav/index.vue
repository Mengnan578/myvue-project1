<template>
  <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseleave="leaveIndex()" @mouseenter="enterShow()">
                <!-- 事件委派 -->
                    <h2 class="all">全部商品分类</h2>
                    <!-- 三级联动 -->
                    <div class="sort" v-show="show">
                        <!-- 利用事件委派和编程时导航结合实现路由跳转和传参 -->
                    <div class="all-sort-list2" @click.prevent="goSearch">
                        <div class="item" v-for="(c1,index) in categoryList":key="c1.categoryId" :class="{cur:currentedIndex==index}">
                            <h3 @mouseenter="changeIndex(index)">
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId" href="">{{c1.categoryName}}-{{index}}</a>
                            </h3>
                            <!-- 二级联动 -->
                            <div class="item-list clearfix" :style="{display:currentedIndex==index?'block':'none'}">
                                <div class="subitem" v-for="(c2,index) in c1.categoryChild":key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId" href="">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild":key="c3.categoryId">
                                                <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId" href="">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
</template>

<script>
import {mapState} from "vuex";
import throttle from 'lodash/throttle'
export default {
    name:"TypeNav",
    data(){
        return {
            // 存储用户鼠标移上哪一个分类
            currentedIndex: -1,
            // 一级分类的显示和隐藏 
            show:true,
        }
    },
    // 当组件挂载
    mounted(){
        // 通知vue发送请求，获取数据，存储在仓库中
        this.$store.dispatch("categoryList");
        // 当组件挂载完毕，让show改变
        // 如果不是home组件，默认隐藏
        if(this.$route.path!="/home"){
            this.show = false
        }
    },
    computed:{
        ...mapState({
            // 右侧需要的使用一个函数
            categoryList:state=> state.home.categoryList
        })
    },
    methods:{
        // 三级联动节流  鼠标移入一级分类回调
        changeIndex:throttle(function(index){
            this.currentedIndex = index
        },50),
        // 鼠标移除三级分类回调
        leaveIndex(){
            if(this.$route.path!="/home"){
                this.currentedIndex=-1,
                this.show = false
            }
        },
        enterShow(){
            if(this.$route.path!="/home"){
                this.show=true
            }
        },
        goSearch(event) {
      //第一个问题:div父节点子元素太多【h3、h2、em、dt、dd、dl...a】？你怎么知道你点击的一定是a
      //第二个问题:要区分一级分类、二级分类、三级分类的a标签【category1Id|category2Id|category2Id】
      let targetNode = event.target;
      //获取触发事件节点的自定义属性【a:data-categoryName】
      let { categoryname, category1id, category2id, category3id } =
        targetNode.dataset;
      //判断点击的是a【不管是1|2|3】
      if (categoryname) {
        //点击只要是a,就是往search模块跳转
        var locations = {
          name: "search",
          query: { categoryName: categoryname },
        };
        //一级分类的a
        if (category1id) {
          locations.query.category1Id = category1id;
        } else if (category2id) {
          //二级分类的a
          locations.query.category2Id = category2id;
        } else {
          //三级分类的a
          locations.query.category3Id = category3id;
        }
        //点击商品分类按钮的时候,如果路径当中携带params参数,需要合并携带给search模块
        if (this.$route.params.keyword) {
          locations.params = this.$route.params;
        }
        //目前商品分类这里携带参数只有query参数
        this.$router.push(locations);
      }
    }, 
    }
}
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                    // 三级联动样式写法-：css写法
                    // .item:hover{
                    //     background: skyblue;
                    // }
                    .cur{
                        background: skyblue;
                    }
                }
            }
        }
    }
</style>