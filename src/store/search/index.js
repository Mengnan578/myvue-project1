// store是仓库，是存储数据的地方
const state = {};
// mutations: 修改store的唯一手段
const mutations = {};
// action： 处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {};
// getters: 理解为计算属性，用来简化仓库数据，让组件获取仓库的数据更更方便
const getters = {};

// 对外暴露一个Store类的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}