<template>
  <div class="popup_wrapper">
    <div class="inner">
      <img src="../../assets/img/clone-icon.png" @click="itemClose" />
      <div class="store-coupon-list" v-for="item in coupondata" :key="item.id">
        <div class="store-coupon">
          <div class="left">
            <div class="money">
              <span>￥</span>
              <span>{{ item.money }}</span>
            </div>
            <div class="time-title">有效时间</div>
            <div class="time">
              {{ formatDate(item.use_start_time) }}至{{
                formatDate(item.use_end_time)
              }}
            </div>
          </div>
          <div class="right">
            <div @click="securities(item.id)">立即领劵</div>
            <div>满{{ item.condition }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    itemClose() {
      this.$emit("close");
    },
    securities(id) {
      console.log(id, "popup");
      this.$emit("itemclick", id);
    },
    formatDate(datetime) {
      // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
      var d = new Date(datetime * 1000);
      var year = d.getFullYear(),
        month = ("0" + (d.getMonth() + 1)).slice(-2),
        date = ("0" + d.getDate()).slice(-2),
        hour = ("0" + d.getHours()).slice(-2),
        minute = ("0" + d.getMinutes()).slice(-2),
        second = ("0" + d.getSeconds()).slice(-2);
      // 拼接
      var result = year + "." + month + "." + date;
      // 返回
      return result;
    }
  },
  props: {
    coupondata: Array
  },
  mounted() {
    console.log(this.coupondata, "hahah");
  }
};
</script>
<style lang="less" scope>
.popup_wrapper {
  background: rgba(0, 0, 0, 0.45);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999999;
  left: 0;

  .inner {
    background: #fff;
    height: 600px;
    width: 600px;
    position: relative;
    top: 15%;
    left: 29%;
    padding-bottom: 20px;
    overflow-y: auto;
    img {
      position: absolute;
      width: 20px;
      left: 10px;
      top: 10px;
    }
  }

  .store-coupon-list {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;

    .store-coupon {
      background: url("../../assets/img/qbg.png");
      background-size: cover;
      margin: 0 auto;
      width: 380px;
      height: 144px;
      display: flex;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .left {
        width: 58%;

        .money {
          span {
            color: #ffffff;
            font-weight: bold;
          }

          span:nth-child(1) {
            font-size: 16px;
          }

          span:nth-child(2) {
            font-size: 30px;
          }
        }

        .time-title {
          color: #ffffff;
          font-size: 12px;
        }

        .time {
          color: #ffffff;
          font-size: 12px;
        }
      }

      .right {
        width: 42%;

        > div {
          color: #ffffff;
        }

        > div:nth-child(1) {
          font-size: 23px;
          cursor: pointer;
        }

        > div:nth-child(2) {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
