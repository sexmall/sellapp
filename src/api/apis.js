// 所有请求封装接口文件
import axios from 'axios'

// 创建一个请求对象
// 方法一
// axios.defaults.baseURL = ''

// 方法二
let req = axios.create({
    baseURL: 'http://192.168.0.105:3000', // 基本路径
    timeout:  10000  
})

// 商家详情
export function getSeller(){
    return req.get('/api/seller')
}

// 商家列表
export function getGoods(){
    return req.get('/api/goods')
}

// 评论列表
export function getRatings(){
    return req.get('/api/ratings')
}