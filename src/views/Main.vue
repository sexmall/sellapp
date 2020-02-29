<template>
  <div class="main-div">
    <!-- 上面固定 -->
    <div>
      <!-- 头部 -->
      <div class="bgheader" :style="{backgroundImage:'url('+list.avatar +')'}">
        <div class="header" style="height: 100px">
          <img :src="list.avatar" alt class="merchantImg" />
          <div class="msg-div">
            <p class="msg-p1">
              <img src="../assets/imgs/pinpai.png" alt />
              <span>{{list.name}}</span>
            </p>
            <p class="msg-p2">
              <span>{{list.description}} /</span>
              <span>{{list.deliveryTime}}分钟送达</span>
            </p>
            <p class="msg-p3">
              <img src="../assets/imgs/jian.png" alt />
              <span>{{ list.supports ? list.supports[0].description : '' }}</span>
            </p>
          </div>
        </div>
        <div class="info" style="height: 30px">
          <img src="../assets/imgs/gonggao.png" alt />
          <span>{{list.bulletin}}</span>
        </div>
      </div>
      <!-- 选项卡 -->
      <div class="router-link-div">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1">
            <router-link to="/goods">商品</router-link>
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/evaluate">评价</router-link>
          </MenuItem>
          <MenuItem name="3">
            <router-link to="/merchant">商家</router-link>
          </MenuItem>
        </Menu>
      </div>
    </div>
    <!-- 下方填充 -->
    <div class="box">
      <!-- 路由出口 -->
      <div class="box2">
          <router-view />
      </div>
      <!-- 购物车 -->
      <div class="shopcar" style="height: 60px">
        <Row>
          <i-col span="6">
            <div class="img-div">
              <img src="../assets/imgs/shopping_cart.png" alt />
            </div>
          </i-col>
          <i-col span="2">
            <p>￥0</p>
          </i-col>
          <i-col span="10">
            <p>另需配送费￥{{list.deliveryPrice}}</p>
          </i-col>
          <i-col span="6">
            <p>{{list.minPrice}}元起送</p>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      list: {}
    };
  },
  created() {
    getSeller().then(res => {
      this.list = res.data.data;
      // console.log(res.data.data)
    });
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.main-div {
  height: 100%;
//   display: flex;
  .bgheader {
    height: 130px;
    img {
      vertical-align: middle;
    }
    .header {
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      padding: 10px;
      height: 100px;
      .merchantImg {
        width: 80px;
        height: 80px;
      }
      .msg-div {
        margin-left: 10px;
        width: 100%;
        .msg-p1 {
          img {
            width: 35px;
          }
          span {
            font-size: 16px;
            color: #fff;
            margin-left: 10px;
          }
        }
        .msg-p2 {
          span {
            font-size: 14px;
            color: #ccc;
          }
        }
        .msg-p3 {
          img {
            width: 15px;
          }
          span {
            font-size: 12px;
            margin-left: 5px;
            color: #ccc;
          }
        }
      }
    }
    .info {
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      padding: 5px;
      img {
        width: 40px;
        height: 20px;
        align-items: center;
      }
      span {
        display: block;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        color: #fff;
        margin-left: 5px;
      }
    }
  }
  // 路由
  .router-link-div {
    .ivu-menu-horizontal {
      display: flex;
      justify-content: space-around;
      height: 40px;
      line-height: 40px;
    }
  }
  // 尾部
  .shopcar {
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: #000;
    line-height: 60px;
    text-align: center;
    .img-div {
      width: 60px;
      height: 60px;
      margin: 0 auto;
      background-color: #000;
      border-radius: 50%;
      text-align: center;
      line-height: 60px;
      margin-top: -10px;
      img {
        height: 50px;
        margin-top: 5px;
      }
    }
  }
}

</style>