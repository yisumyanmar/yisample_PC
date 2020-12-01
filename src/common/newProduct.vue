<template>
  <div class="newProduct">
    <div class="left l">
      <div class="l up">
        <div class="headline">新品推荐</div>
        <span class="nullData">{{newProduct.length === 0 ? '暂无数据' : ''}}</span>
        <ul>
          <li v-for="(item, index) in newProduct" :key="index" @click="toDetail(item.id)">
            <img :src="URL + item.pic_url"/>
            <p>{{item.title}}</p>
            <p>￥{{item.goods_price}}
              <span
                style="display:inline-block;margin-left:20px;font-size:11px;color:#656565">已售{{item.sales_sum}}件</span>
            </p>

          </li>
        </ul>
      </div>
      <div class="l up">
        <div class="headline">热销排行</div>
        <span class="nullData">{{tuijian.length === 0 ? '暂无数据' : ''}}</span>
        <ul>
          <li v-for="(item, index) in tuijian" :key="index" @click="toDetail(item.id)">
            <img :src="URL + item.pic_url"/>
            <p>{{item.title}}</p>
            <p>￥{{item.goods_price}}
              <span
                style="display:inline-block;margin-left:20px;font-size:11px;color:#656565">已售{{item.sales_sum}}件</span>
            </p>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import guanyin from '@/assets/img/giftone.png'

  export default {
    data() {
      return {
        newProduct: [],
        topSelling: [],
        tuijian: []
      };
    },
    created() {
      if (this.$route.query.type == 2) {
        var data = {
          class_three: this.$route.query.class_id
        }
      } else {
        var data = {
          id: this.$route.query.class_id
        }
      }
      this.HTTP(this.$httpConfig.newRecommend, data, 'post').then(res => {
        if (res.data.status) this.newProduct = res.data.data
        console.log(res.data.data)
      }).catch(e => {
        console.log(e)
      })
      this.HTTP(this.$httpConfig.hotSort, data, 'post').then(res => {
        if (res.data.status) this.tuijian = res.data.data
        console.log(res.data.data)
      }).catch(e => {
        console.log(e)
      })
    },
    methods: {
      toDetail(id) {
        window.open(window.location.origin + "/shopsn_product?id=" + id);
      }
    }
  };
</script>
<style lang="less" scoped>
  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .left {
    width: 204px;

    .up {
      margin-bottom: 20px;
    }

    .up, .down {
      width: 204px;
      overflow: hidden;
      border: 1px solid #e5e5e5;

      .nullData {
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
      }
    }

    .headline {
      height: 34px;
      background: #f9f9f9;
      width: 100%;
      line-height: 34px;
      color: #383838;
      padding-left: 12px;
      font-size: 16px;
    }

    li {
      width: 100%;
      cursor: pointer;

      img {
        width: 160px;
        margin: 10px 19px 0;
      }

      p {
        font-size: 12px;
        color: #333;
        margin: 0 14px 9px 20px;
      }

      p:nth-of-type(1) {
        &:hover {
          color: red;
        }
      }

      p:nth-of-type(2) {
        color: #e25b55;
      }

      p:last-child {
        margin-bottom: 0;
      }

      .xiaoliang {
        color: #d02629;
      }
    }

    p:nth-of-type(2) {
      margin-bottom: 0;
    }

    li:last-child {
      margin-bottom: 15px;
    }
  }
</style>
