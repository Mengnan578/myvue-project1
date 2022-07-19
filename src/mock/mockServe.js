// 实现模拟数组
import Mock from 'mockjs'
// 引入json文件
// webpack 默认对外暴露的：图片文件和json数据格式，如下两个文件
import banner from './banner.json'
import floor from './floor.json'

// mock数据
Mock.mock("./mock/banner", { code: 200, data: banner })
Mock.mock("./mock/floor", { code: 200, data: floor })