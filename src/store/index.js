import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
import home from './home'
import search from './search';
// 对外暴露一个Store类的一个实例
export default new Vuex.Store({
    modules: {
        home,
        search
    }
})