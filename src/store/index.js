import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
    // 用来存放交互数据
    state: {
        name: '张三',
        obj: { name: '哈哈', age: 20 },
        goodsList: []
    },
    mutations: {
        changeName(state, name) {
            state.name = name;
        },
        // 初始化商品列表
        initGoodsList(state, newarr) {
            state.goodsList = newarr
        },
        // 改变商品数量+1
        AddNum(state, name) {
            for (let obj of state.goodsList) {
                for (let res of obj.foods) {
                    if (res.name == name) {
                        res.num += 1
                    }
                }
            }
        },
        // 改变商品数量-1
        DecNum(state, name) {
            for (let obj of state.goodsList) {
                for (let res of obj.foods) {
                    if (res.name == name) {
                        res.num += -1
                    }
                }
            }
        },
    },

    getters: {
        getGoods(state) {
            // 获取点击得到的商品数组
            var arr = [];
            for (let obj of state.goodsList) {
                obj.foods.map(v => {
                    if (v.num > 0) {
                        arr.push(v);
                    }
                })
            }
            // 数组去重
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i]
                for (var j = i + 1; j < arr.length; j++) {
                    if (item.name == arr[j].name) {
                        arr.splice(j, 1)
                        i--
                    }
                }
            }
            console.log(arr)
            return arr
        },


        // getTotal(state){
        //     var sum = 0;
        //     for(let obj of state.goodsList){
        //         console.log(obj.num)
        //         return sum+=obj.num*obj.price
        //     }
        // },
    }
})



