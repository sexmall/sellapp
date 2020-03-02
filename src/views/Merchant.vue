<template>
  <div class="merchant-div">
    <ul class="content">
      <div class="grade">
        <h3>{{list.name}}</h3>
        <p>
          <img src="../assets/imgs/xing.png" alt />
          <img src="../assets/imgs/xing.png" alt />
          <img src="../assets/imgs/xing.png" alt />
          <img src="../assets/imgs/xing.png" alt />
          <img src="../assets/imgs/huixing.png" alt />
          <span>({{list.ratingCount}})</span>
          <span>月售{{list.sellCount}}单</span>
        </p>
      </div>

      <div class="delivery">
        <Row>
          <i-col span="6">
            <h5>起送价</h5>
            <p>
              <span style="font-size:20px">{{list.minPrice}}</span>
              <span style="font-size:12px">元</span>
            </p>
          </i-col>
          <i-col span="6">
            <h5>商家配送</h5>
            <p>
              <span style="font-size:20px">{{list.deliveryPrice}}</span>
              <span style="font-size:12px">元</span>
            </p>
          </i-col>
          <i-col span="6">
            <h5>平均配送时间</h5>
            <p>
              <span style="font-size:20px">{{list.deliveryTime}}</span>
              <span style="font-size:12px">分钟</span>
            </p>
          </i-col>
        </Row>
      </div>

      <div class="notice">
        <h3>公告与活动</h3>
        <p style="color:red">{{list.bulletin}}</p>
      </div>

      <ul class="des">
        <li>
          <img src="../assets/imgs/jian.png" alt />
          <span>{{list.supports ? list.supports[0].description : ''}}</span>
        </li>
        <li>
          <img src="../assets/imgs/zhe2.png" alt />
          <span>单人精彩赛</span>
        </li>
        <li>
          <img src="../assets/imgs/zhe2.png" alt />
          <span>清肺雪梨汤八折抢购</span>
        </li>
        <li>
          <img src="../assets/imgs/te.png" alt />
          <span>特价饮品八折抢购</span>
        </li>
        <li>
          <img src="../assets/imgs/te.png" alt />
          <span>单人特色套餐</span>
        </li>
        <li>
          <img src="../assets/imgs/piao.png" alt />
          <span>该商家支持发票,请下单写好发票抬头</span>
        </li>
        <li>
          <img src="../assets/imgs/bao.png" alt />
          <span>已加入“外卖保”计划，食品安全保证</span>
        </li>
      </ul>

      <div class="live-action">
        <h3>商家实景</h3>
        <p>
          <img :src="list.pics?list.pics[3]:''" alt />
          <img :src="list.pics?list.pics[1]:''" alt />
          <img :src="list.pics?list.pics[2]:''" alt />
        </p>
      </div>

      <div class="info">
        <h3>商家信息</h3>
        <!-- <p v-for="(i) in list.infos" :key="i">{{list.infos[i]}}</p> -->
        <p>{{list.infos ? list.infos[0] : ''}}</p>
        <p>{{list.infos ? list.infos[1] : ''}}</p>
        <p>{{list.infos ? list.infos[2] : ''}}</p>
        <p>{{list.infos ? list.infos[3] : ''}}</p>
      </div>
    </ul>
  </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
import BScroll from "better-scroll";
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
  },
  mounted() {
    new BScroll(document.querySelector(".merchant-div"));
  }
};
</script>

<style lang="less" scoped>
.merchant-div {
  background-color: #ccc;
  height: 70vh;
  padding-bottom: 30px;
  overflow: scroll;
  .grade {
    background-color: #fff;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    p {
      img {
        vertical-align: middle;
      }
      span {
        padding-left: 20px;
      }
    }
  }
  .delivery {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    .ivu-row {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
  .notice {
    padding: 20px;
    background-color: #fff;
  }
  .des {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    li {
      list-style: none;
      padding: 15px 10px;
      border-top: 1px solid #ccc;
      img {
        width: 20px;
        vertical-align: middle;
      }
    }
  }
  .live-action {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    p {
      display: flex;
      justify-content: space-around;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .info {
    background-color: #fff;
    padding: 20px;
    p {
      padding: 18px 10px;
      border-top: 1px solid #ccc;
    }
  }
}
</style>