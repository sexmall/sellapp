<template>
  <div class="evaluate-div">
    <ul class="content">
        <!-- 头部 -->
      <div class="title">
        <div class="left-title">
          <p>3.9</p>
          <h2>综合评分</h2>
          <h5>高于周边商家69.2%</h5>
        </div>
        <div class="right-title">
          <p>
            <span style="font-size:16px">服务态度</span>
            <Rate disabled v-model="valueDisabled" />
            <span style="color:#f5a623">3.9</span>
          </p>
          <p>
            <span style="font-size:16px">服务态度</span>
            <Rate disabled v-model="valueDisabled" />
            <span style="color:#f5a623">4</span>
          </p>
          <p>送达时间：{{ratingsList[0].deliveryTime}}分钟</p>
        </div>
      </div>
      <!-- 背景 -->
      <div class="bac"></div>
      <!-- 按钮 -->
      <div class="btn-div">
        <Button type="primary">全部57</Button>
        <Button type="info">满意47</Button>
        <Button style="backgroundColor: #ccc;">不满意10</Button>
      </div>
      <!-- 选项 -->
      <div class="change-div">
        <Checkbox>只看有内容的评价</Checkbox>
      </div>

      <!-- 评价 -->
      <div class="evaluate" v-for="(v,i) in ratingsList" :key="i">
        <img :src="v.avatar" alt />
        <div class="right-evaluate">
          <h5>{{v.username}}</h5>
          <p>
            <Rate disabled v-model="valueDisabled" />
            <span style="color:#ccc">送达时间：{{v.deliveryTime}}</span>
          </p>
          <p style="fontWeight:bold">{{v.text}}</p>
          <div class="list-evaluate">
            <h5>
              <Icon type="md-heart" />
            </h5>
            <p v-for="(val,i) in v.recommend" :key="i">{{v.recommend[i]}}</p>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { getRatings } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      ratingsList: [],
      valueDisabled: 4
    };
  },
  created() {
    getRatings().then(res => {
      this.ratingsList = res.data.data;
      console.log(res.data.data);
    });
  },
  mounted() {
    new BScroll(document.querySelector(".evaluate-div"));
  }
};
</script>

<style lang="less" scoped>
.evaluate-div {
  height: 70vh;
  padding-bottom: 30px;
  overflow: scroll;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .left-title {
      width: 35%;
      text-align: center;
      border-right: 1px solid #ccc;
      p {
        font-size: 24px;
        color: #f5a623;
      }
      h2 {
        font-size: 18px;
      }
      h5 {
        color: #ccc;
      }
    }
    .right-title {
      width: 60%;
      p {
        height: 30px;
        display: flex;
        justify-content: flex-start;
        line-height: 30px;
      }
    }
  }
  .bac {
    width: 100%;
    height: 20px;
    background-color: #ccc;
  }
  .btn-div {
    padding: 20px;
    border-bottom: 1px solid #ccc;
    button {
      margin-right: 10px;
    }
  }
  .change-div {
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    color: #ccc;
    font-size: 14px;
  }
  .evaluate {
    display: flex;
    padding: 20px;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .right-evaluate {
      margin-left: 10px;
      .list-evaluate {
        display: flex;
        flex-wrap: wrap;
        h5 {
          display: flex;
          align-items: center;
        }
        p {
          border: 1px solid #f4f5f7;
          padding: 1px 2px;
        }
      }
    }
  }
}
</style>