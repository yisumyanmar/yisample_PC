<template>

    <div class="base" >
        <div class="top">
            <span class="l" @click="cut(0)" :class="{border:isborder==0}">猜您喜欢</span>
            <span class="l" @click="cut(1)" :class="{border:isborder==1}">浏览历史</span>
            <span class="r" @click="getNew">
                <img class="r" src="../assets/img/huanyipi.jpg" />换一批
            </span>
        </div>
        <div>
            <div class="bottom" v-show="isborder === 0">
                <ul>
                    <li v-for="(bases, index) in myLikeList" @click="toDetail(bases.gid)" :key="index">
                        <img :src="bases.pic_url === null ? 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542620438617&di=934a6c42aa8fc70f89d333365c9bf7e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d69f0ccc220c0828381f30fd45.jpg' : URL + bases.pic_url" />
                        <p>{{bases.title === null ? '暂无数据' : bases.title}}</p>
                        <p>{{bases.price_market === null ? '暂无数据' : '￥' + bases.price_market}}
                            <span style="margin-left:20px;color:#656565;display:inline-block;font-size:11px">已售{{bases.sales_sum}}件</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="bottom" v-show="isborder === 1">
                <ul>
                    <li v-for="(bases, index) in myRecordsList"  @click="toDetail(bases.gid)" :key="index">
                        <img :src="bases.pic_url === null ? 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542620438617&di=934a6c42aa8fc70f89d333365c9bf7e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb21c8701a18b87d69f0ccc220c0828381f30fd45.jpg' : URL + bases.pic_url" />
                        <p>{{bases.title === null ? '暂无数据' : bases.title}}</p>
                        <p>{{bases.price_market === null ? '暂无数据' : '￥' + bases.price_market}}
                           <span style="margin-left:20px;color:#656565;display:inline-block;font-size:11px">已售{{bases.sales_sum}}件</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myLikeList: '',
            myRecordsList: '',
            isborder: 0,
        }
    },
    mounted() {
        this.getMyCollectionLike();
        this.getMyCollectionRecords();
    },
    methods: {
        // 去详情页
		toDetail(id) {
            window.open(window.location.origin+'/shopsn_product?id=' + id);
		},
        // 获取猜你喜欢列表
        getMyCollectionLike() {
            this.HTTP(this.$httpConfig.myCollectionLike, {}, 'post', true).then((res) => {
                this.myLikeList = res.data.data;
            })
        },
        // 获取浏览商品列表
        getMyCollectionRecords() {
            this.HTTP(this.$httpConfig.myCollectionRecords, {}, 'post', true).then((res) => {
                this.myRecordsList = res.data.data;
            })
        },
        // 换一批
        getNew() {
            if (this.isborder) {
                this.getMyCollectionRecords();
            } else {
                this.getMyCollectionLike();
            }
        },
        cut(index) {
            this.isborder = index;
        },  
    }
}   
</script>
<style lang="less">
.base {
  overflow: hidden;
  margin: 40px 0;
  .top {
     height: 37px;
    width: 100%;
    line-height: 37px;
    span.l {
      height: 37px;
      width: 105px;
      line-height: 37px;
      color: #454545;
      text-align: center;
      cursor: pointer;
      display: inline-block;
    }
    img {
      width: 20px;
      height: 20px;
      margin: 0 6px 0 0;
      cursor: pointer;
    }
    span.r {
      float: right;
      color: #93919e;
      font-size: 12px;
      cursor: pointer;
    }
    .border {
      border-bottom: 2px solid #d02629;
      color: #d02629 !important;
    }
  }
  .bottom {
    height: 270px;
    width: 100%;
    border: 1px solid #e5e5e5;
    ul {
      li {
        width: 168px;
        margin: 17px 15px 0;
        float: left;
        cursor: pointer;
        img {
          width: 168px;
          height: 178px;
        }
        p {
          font-size: 12px;
          margin-top: 10px;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal !important;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p:nth-of-type(1) {
          &:hover {
            color: red;
          }
        }
        p:nth-of-type(2) {
          color: #b22e2c;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>

