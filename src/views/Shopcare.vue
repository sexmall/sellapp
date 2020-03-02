<template>
  <div class="shopcar-div">
    <ul class="content">
      <ul class="goods-info" v-for="(val,i) in foodsList" :key="i">
        <li>
          <Row>
            <i-col span="10">
              <h3>{{val.name}}</h3>
            </i-col>
            <i-col span="10">
              <span class="newprice">￥{{val.price*val.num}}</span>
            </i-col>

            <i-col span="4">
              <div class="change">
                <button v-show="val.num > 0" @click="clickDec(val.name)">-</button>
                <h5 v-show="val.num > 0">{{val.num}}</h5>
                <button @click="clickAdd(val.name)">+</button>
              </div>
            </i-col>
          </Row>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  methods: {
    // 减
    clickDec(name) {
      this.$store.commit("DecNum", name);
    },
    // 加
    clickAdd(name) {
      this.$store.commit("AddNum", name);
    }
  },
  mounted(){
      new BScroll(document.querySelector(".shopcar-div"));
  },
  computed: {
    foodsList() {
      return this.$store.getters.getGoods;
    }
  }
};
</script>

<style lang="less" scoped>
.shopcar-div {
    overflow: scroll;
  ul {
    li {
      list-style: none;
      line-height: 30px;
    //   display: flex;
    //   align-items: center;
      justify-content: space-around;
      .newprice {
        color: #ff6600;
      }
      .change {
        display: flex;
        align-items: center;
        button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          line-height: 20px;
          text-align: center;
        }
        h5 {
          padding: 0 5px;
        }
      }
    }
  }
}
</style>