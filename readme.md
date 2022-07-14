### day1：初始化项目

##### 	1，在目录文件夹下输入：

```javascript
vue create app
```

##### 	2，运行项目自动打开

```javascript
package.json
    "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
    },
```

##### 	3，关闭eslint校验工具（不关闭会有各种规范，不按照规范就会报错）

​		根目录下创建vue.config.js,进行配置

```javascript
module.exports = {
  //关闭eslint
  lintOnSave: false
  }
```

##### 	4，如果报错：“Parsing error: No Babel config file detected for xxx”

​		package.json文件，在parserOptions里添加"requireConfigFile": false，就可以解决红色波浪线问题

```javascript
"requireConfig": false
```

##### 	5， src文件夹配置别名,创建jsconfig.json，用@/代替src/，exclude表示不可以使用该别名的文件 

```javascript
{
    "compilerOptions": {
        "baseUrl": "./",
            "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },

    "exclude": [
        "node_modules",
        "dist"
    ]
 }
```

##### 	5，下载less

```javascript
npm install --save less less-loader@5
```

​	如果下载报错，则在后面加上--legacy-peer-deps 

##### 	6，搭建Header和Footer路由（路由组件，放在pages中，非路由组件放在components中）

```javascript
<!--  Footerer路由 -->
<template>
  <!-- 底部 -->
        <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>购物指南</h4>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行/团购</li>
                            <li>常见问题</li>
                            <li>购物指南</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h4>配送方式</h4>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>支付方式</h4>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                            <li>公司转账</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>售后服务</h4>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                            <li>取消订单</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>特色服务</h4>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>尚品汇E卡</li>
                            <li>尚品汇通信</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>帮助中心</h4>
                        <img src="./images/wx_cz.jpg">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                    <p>京ICP备19006430号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped  lang="less">
    .footer {
        background-color: #eaeaea;

        .footer-container {
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;

            .footerList {
                padding: 20px;
                border-bottom: 1px solid #e4e1e1;
                border-top: 1px solid #e4e1e1;
                overflow: hidden;
                padding-left: 40px;

                .footerItem {
                    width: 16.6666667%;
                    float: left;

                    h4 {
                        font-size: 14px;
                    }

                    .footerItemCon {
                        li {
                            line-height: 18px;
                        }
                    }

                    &:last-child img {
                        width: 121px;
                    }
                }
            }

            .copyright {
                padding: 20px;

                .helpLink {
                    text-align: center;

                    li {
                        display: inline;

                        .space {
                            border-left: 1px solid #666;
                            width: 1px;
                            height: 13px;
                            background: #666;
                            margin: 8px 10px;
                        }
                    }
                }

                p {
                    margin: 10px 0;
                    text-align: center;
                }
            }
        }
    }
</style>
```

```javascript
<-- Header 路由  -->
<template>
  <div>
    <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <a href="###">登录</a>
                            <a href="###" class="register">免费注册</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="尚品汇" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                    </form>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
// export default {
//   //给组件起一个名字,开发者工具中显示这个组件的时候，显示的就是这个名字
//   name: "Header",
//   data() {
//     return {
//       //收集用户输入的关键字
//       keyword: "",
//     };
//   },
//   methods: {
//     //搜索按钮的回调
//     goSearch() {
//       //路由的跳转,采用的是编程式导航.
//       //路由传递参数

//       //第一种传递query参数
//       // this.$router.push({path:'/search',query:{keyword:this.keyword}});

//       //第二种传递params参数 [一定要注意,面试的时候经常问]
//       // this.$router.push({name:'search',params:{keyword:this.keyword}})

//       //第三种传递query+params
//       // this.$router.push({
//       //   name: "search",
//       //   params: { keyword: this.keyword },
//       //   query: { keyword: "ABC" },
//       // });

//       //验证Vue-Router引入Promise技术,最笨的方法,给push传递第二个、第三个参数【回调函数】
//       //下面这种写法：治标不治本！！！！
//       // let result = this.$router.push({name: "search",params: { keyword: this.keyword|| undefined}},()=>{},()=>{});

//       //问题1:push方法,里面this是谁? vueRouter类的实例
//       // this.$router.push({name:'search',params:{keyword:this.keyword}});
//       //问题2:push方法里面的this是谁?windows
//       // let result = this.$router.push;
//       // result({name:'search',params:{keyword:this.keyword}})

//       //点击搜索按钮之前,如果路径当中有query参数,需要携带给search

//       let locations = {
//         name: "search",
//         params: { keyword: this.keyword || undefined },
//       };
//       //确定路径当中有query参数
//       if (this.$route.query.categoryName) {
//         locations.query = this.$route.query;
//       }

//       this.$router.push(locations);
//     },
//     //退出登录的按钮的回调
//     logout(){
//        //派遣action退出登录
//        this.$store.dispatch('logout');
//     }
//   },
//   mounted() {
//     //清除关键字
//     this.$bus.$on("clearKeyword", () => {
//       console.log(123);
//       this.keyword = "";
//     });
//   },
// };
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
```

##### 	7，使用Header和Footer

```javascript
<template>
  <div>
    <!-- 使用非路由组件 -->
    <Header></Header>
    我是根组件
    <Footer></Footer>
  </div>
</template>

// 导入路由
import Header from './components/Header'
import Footer from './components/Footer'

// 注册路由
export default {
  name: '',
  // 注册非路由组件
  components: {
      Header,
      Footer
  }
}
```

如果遇到文件无法修改名字，需要将项目关闭后再修改



### day2：路由组件

##### 1，路由组件的搭建（Login，Home，Search等）

​	下载vue-Router

```javascript
npm install --save vue-router 
```

##### 2，新建五个文件夹，Login，Home，Register， Search和配置路由的文件router

​	在router中新建router.js，在其中配置路由组件

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/Home",
            component: Home
        },
        {
            path: "/Search",
            component: Search
        },
        {
            path: "/Register",
            component: Register
        },
        // 重定向
        {
            path: '*',
            redirect: "/home"
        }
    ]
})
```

##### 3，在入口文件main.js中注册路由

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
new Vue({
  render: h => h(App),
  // 注册路由：地下的写法kv一致省略v
  // 注册路由信息：当这里书写router的饿时候，组件身上偶读拥有$route,$router属性
  router
}).$mount('#app')
```

##### 4，在app.vue中使用

```javascript
<router-view></router-view>
```

##### 笔记：

​	路由组件和非路由组件区别：

    非路由组件放在components中，路由组件放在pages或views中
    非路由组件通过标签使用，路由组件通过路由使用
    在main.js注册玩路由，所有的路由和非路由组件身上都会拥有$router $route属性
    $router：一般进行编程式导航进行路由跳转
    $route： 一般获取路由信息（name path params等）

​	路由跳转方式

    声明式导航router-link标签 ,可以把router-link理解为一个a标签，它 也可以加class修饰
    编程式导航 ：声明式导航能做的编程式都能做，而且还可以处理一些业务
##### 5，用router-link将Home组件中的一些连接进行改造

##### 6，footer组件的显示和隐藏

​	方法一：添加路由元信息

```javascript
// 添加路由原信息 
meta: { show: true }
// footer组件根据路由原信息显示或者隐藏
<Footer v-show="$route.meta.show"></Footer>
```

​	方法二：根据当前所在的组件用v-show进行判断显示或者隐藏，该方法比较蠢不易用

##### 7，路由的传参数

```javascript
// 第一种路由传参数：字符串形式
      //this.$router.push("/search"+this.keyWord+"?k="+this.keyWord.toUpperCase())
      // 第二种，模板字符串
      //this.$router.push(`/search/${this.keyWord}?k=${this.keyWord.toUpperCase()}`)
      // 第三种，对象（常用），需要给路由起一个名字
      this.$router.push({name:"search",params:{keyWord:this.keyWord},query:{k:this.keyWord.toUpperCase()}})
      //this.$router.push('/search')
```

query、params两个属性可以传递参数
query参数：不属于路径当中的一部分，类似于get请求，地址栏表现为 /search?k1=v1&k2=v2
query参数对应的路由信息 path: "/search"
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 /search/v1/v2
params参数对应的路由信息要修改为path: "/search/:keyword" 这里的/:keyword就是一个params参数的占位符



### day3：home拆分组件

1，三级联动注册为全局组件	

​	全局组件需要有名字，在组件的script中加入名字

```javascript
<script>
export default {
    name:"TypeNav"
}
</script>
```

​	在main.js中注册全局组件

```javascript
// 三级联动组件 --- 注册为全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav);
```

2，注册一般组件



### 面试题：

​	1，路由传递参数（对象写法）path是否可以和params一起使用

路由跳转传参时候，对象的写法可以是name，path形式，但是需要注意的是，path写法不能和params一起使用

​	2，如何指定params参数可传可不传？

在配合路由的时候，在占位后面加上一个问号。

​	3，params参数可以传递也可以不传递，但是如果传递是空串，如何解决？

传空串url会出现问题，所以在空串后面加入一个||undefined

​	4，路由组件能不能传递props数据？

可以，有三种写法。分别是布尔值写法，函数写法，对象写法，函数写法用处比较多