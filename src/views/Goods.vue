<template>

    <div class="goods-div">
      <!-- 左边 -->
      <div class="left-div">
        <ul class="content">
          <li v-for="(v,i) in goodsList" :key="i" @click="clickTitle(i)" :class="{selected : i == curSelected}">
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
                  <p style="font-size:12px">{{val.description}}</p>
                  <p style="font-size:12px">
                    <span>月售{{val.sellCount}}份</span>
                    <span>好评率{{val.rating}}%</span>
                  </p>
                  <div class="goods-money">
                    <p>
                      <span class="newprice">￥{{val.price}}</span>
                      <span v-show="val.oldPrice!==''">￥{{val.oldPrice}}</span>
                    </p>
                    <div class="change">
                      <p>-</p>
                      <h5>num</h5>
                      <p>+</p>
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
      goodsList: [],
      name: "",
      curSelected:0,
    };
  },
  methods:{
      clickTitle(index){
        this.curSelected = index;
        this.rightDiv.scrollToElement(document.getElementById(index),600)
      },

  },
  created() {
    getGoods().then(res => {
      this.goodsList = res.data.data;
      console.log(res.data.data);
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"),{
        click:true
    });
    this.rightDiv = new BScroll(document.querySelector(".right-div"));
  }
};
</script>

<style lang="less" scoped>

  .goods-div {
    display: flex;
    height: 70vh;
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
                .change {
                  display: flex;
                  p {
                          width: 20px;
                          height: 20px;
                          background-color:tomato;
                          border-radius: 50%;
                          text-align: center;
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
.selected{
    background-color: #fff!important;
    // color: red;
}
</style>