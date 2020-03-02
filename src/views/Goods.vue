<template>
  <div class="goods-div">
    <!-- 左边 -->
    <div class="left-div">
      <ul class="content">
        <li
          v-for="(v,i) in goodsList"
          :key="i"
          @click="clickTitle(i)"
          :class="{selected : i == curSelected}"
        >
          <span>
            <img style="width:12px" v-show="v.type==1" src="../assets/imgs/zhe2.png" alt />
            <img style="width:12px" v-show="v.type==2" src="../assets/imgs/te.png" alt />
          </span>
          <span>{{v.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="right-div">
      <ul class="content">
        <div v-for="(v,i) in goodsList" :key="i" class="right-goods" :id="i">
          <p class="goods-title">{{v.name}}</p>
          <ul class="goods-info">
            <li v-for="(val,i) in v.foods" :key="i">
              <img :src="val.image" alt />
              <div class="goods-dec">
                <h3>{{val.name}}</h3>
                <p style="font-size:12px" class="p-height">{{val.description}}</p>
                <p style="font-size:12px">
                  <span>月售{{val.sellCount}}份</span>
                  <span>好评率{{val.rating}}%</span>
                </p>

                <div class="goods-money">
                    <div style="width:100px">
                        <span class="newprice">￥{{val.price}}</span>
                        <span v-show="val.oldPrice!==''" style="  text-decoration: line-through;">￥{{val.oldPrice}}</span>
                    </div>
                    <div class="change">
                        <button v-show="val.num > 0" @click="clickDec(val.name)">-</button>
                        <h5 v-show="val.num > 0">{{val.num}}</h5>
                        <button  @click="clickAdd(val.name)">+</button>
                    </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
    <!-- 下方 -->
  </div>
  <!-- <div class="shopcar-box"></div> -->
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      name: "",
      curSelected: 0
    };
  },
  methods: {
    clickTitle(index) {
      this.curSelected = index;
      this.rightDiv.scrollToElement(document.getElementById(index), 300);
    },
    // 减
    clickDec(name){
      this.$store.commit('DecNum',name)
    },
    // 加
    clickAdd(name){
      this.$store.commit('AddNum',name)
    }
  },
  created() {
    getGoods().then(res => {
      // this.goodsList = res.data.data;
      // 改变vuex中数据
      this.$store.commit('initGoodsList',res.data.data)
    });
  },
  mounted() {
    // 左侧滚动
    new BScroll(document.querySelector(".left-div"), {
      click: true
    });
    // 右侧滚动
    this.rightDiv = new BScroll(document.querySelector(".right-div"), {
      probeType: 3 //实时派发滚动事件
    });
    // 形参
    this.rightDiv.on("scroll", o => {
      let _y = Math.abs(o.y);
      this.getHeightMath;

      // 进行区间判断
      for (let obj of this.getHeightMath) {
        if (_y >= obj.min && _y < obj.max) {
          this.curSelected = obj.index;
          // console.log(obj.index)
          return;
        }
      }
    });
  },
  computed: {
    // 获取每个食品li的高度
    getHeightMath() {
      let arr = [];
      let total = 0;
      for (let i = 0; i < this.goodsList.length; i++) {
        // 保存高度
        let curHeihht = document.getElementById(i).offsetHeight;
        arr.push({ min: total, max: total + curHeihht, index: i });
        total += curHeihht;
      }
      return arr;
    },

    // 获取vuex中的数据
    goodsList(){
      return this.$store.state.goodsList
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.goods-div {
  display: flex;
  height: 70vh;
  // height:  85%;
  padding-bottom: 50px;
  .left-div {
    width: 80px;
    overflow: scroll;
    ul {
      li {
        padding: 15px 10px;
        border-bottom: 1px solid #e0e1e3;
        background-color: #f4f5f7;
      }
    }
  }
  .right-div {
    overflow: scroll;
    flex: 1;
    .right-goods {
      .goods-title {
        background-color: #f4f5f7;
        padding: 10px;
        height: 40px;
      }
      .goods-info {
        padding: 0 10px;
        li {
          list-style: none;
          display: flex;
          border-bottom: 1px solid #ccc;
          padding: 10px 0;
          img {
            width: 80px;
            height: 80px;
          }
          .goods-dec {
            margin-left: 10px;
            .newprice {
              color: red;
              font-size: 20px;
              font-weight: bold;
            }
            .goods-money {
              display: flex;
              height: 40px;
              line-height: 40px;
              .change {
                display: flex;
                align-items: center;
                position: relative;
                button{
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: none;
                  line-height: 20px;
                  text-align: center;
                  background-color: #ff6600;
                }
              }
            }
          }
        }
      }
    }
  }
}

.shopcar-box {
  height: 60px;
  width: 100%;
}
.selected {
  background-color: #fff !important;
  color: #ff6600;
}
.p-height {
  line-height: 20px;
}
</style>