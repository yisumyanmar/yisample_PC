<template>
    <div class="team l">
        <ul class="top">
            <li @click="team(0)" :class="{ active: Actives == 0 }">
                <p>一级</p>
            </li>
            <li @click="team(1)" :class="{ active: Actives == 1 }">
                <p>二级</p>
            </li>
            <li @click="team(2)" :class="{ active: Actives == 2 }">
                <p>三级</p>
            </li>
            <li @click="team(3)" :class="{ active: Actives == 3 }">
                <p>四级</p>
            </li>
            <li @click="team(4)" :class="{ active: Actives == 4 }">
                <p>五级</p>
            </li>
        </ul>
        <!-- <div class="under">
      <div class="thead">
        <p>会员ID</p>
        <p>会员名</p>
      </div>
      <div class="same" v-for="(item) in teamDataInfo" :key="item.id">
        <p>1</p>
        <p>小小的太阳</p>
      </div>
    </div> -->
        <template>
            <el-table :data="teamDataInfo" style="width: 100%">
                <el-table-column
                    prop="create_time"
                    label="创建时间"
                    width="180"
                >
                </el-table-column>
                <el-table-column prop="user_name" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="order_count" label="订单数目">
                </el-table-column>
                <el-table-column
                    prop="consumption"
                    label="消费金额"
                    width="180"
                >
                </el-table-column>
                <el-table-column prop="extension" label="推广人" width="180">
                </el-table-column>
                <el-table-column label="图片">
                    <template slot-scope="scope">
                        <img
                            :src="URL + scope.row.user_header"
                            alt=""
                            id="img_data"
                        />
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Actives: "",
            teamDataInfo: [],
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }
            ]
        };
    },
    created() {
        this.HTTP(this.$httpConfig.distributeMyTeam, {})
            .then(res => {
                console.log(res.data.data, "myteam");
                this.teamDataInfo = res.data.data.one_data;
            })
            .catch(err => {
                console.error(err);
            });
        // let title = "我的团队" + this.$constant.webComContent;
           let title = "我的团队" + '-' + this.$constant.webComContent;
        this.showScroll.scrollTitle(title);
    },

    methods: {
        getClassData(index) {
            if (index == 0) {
                this.HTTP(this.$httpConfig.distributeMyTeam, {})
                    .then(res => {
                        console.log(res.data.data, "myteam");
                        this.teamDataInfo = res.data.data.one_data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else if (index == 1) {
                this.HTTP(this.$httpConfig.distributeMyTeam, {})
                    .then(res => {
                        this.teamDataInfo = res.data.data.two_data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else if (index == 2) {
                this.HTTP(this.$httpConfig.distributeMyTeam, {})
                    .then(res => {
                        this.teamDataInfo = res.data.data.three_data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else if (index == 3) {
                this.HTTP(this.$httpConfig.distributeMyTeam, {})
                    .then(res => {
                        this.teamDataInfo = res.data.data.four_data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else if (index == 4) {
                this.HTTP(this.$httpConfig.distributeMyTeam, {})
                    .then(res => {
                        this.teamDataInfo = res.data.data.five_data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        },
        team(index) {
            this.Actives = index;
            if (index == 0) {
                this.getClassData(index);
            } else if (index == 1) {
                this.getClassData(index);
            } else if (index == 2) {
                this.getClassData(index);
            } else if (index == 3) {
                this.getClassData(index);
            } else if (index == 4) {
                this.getClassData(index);
            }
        }
    }
};
</script>
<style lang="less">
#img_data {
    width: 30px;
    height: 30px;
}
</style>
<style lang="less" scoped>
.l {
    float: left;
}
.r {
    float: right;
}
.center {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}
.team {
    width: 980px;
    background: #fff;
    margin: 16px 0;
    padding-bottom: 40px;
    height: 357px;
    .top {
        height: 37px;
        border-bottom: 1px solid #e7e7e7;
        margin: 14px 17px 23px;
        li {
            cursor: pointer;
            float: left;
            width: 104px;
            text-align: center;
            height: 37px;
            font-size: 14px;
            color: #666;
            p {
                line-height: 16px;
                border-right: 1px solid #eee;
                margin-top: 10px;
            }
        }
        li:last-child {
            p {
                border-right: 0;
            }
        }
    }
    .active {
        border-bottom: 2px solid #d02629;
        color: #d02629 !important;
    }
    .under {
        margin: 23px 17px 0;
        border: 1px solid #e7e6e6;
        overflow: hidden;
        .thead {
            overflow: hidden;
            height: 38px;
            background: #f5f5f5;
            line-height: 38px;
        }
        .same {
            line-height: 38px;
            border-top: 1px solid #e7e6e6;
            p:nth-of-type(1) {
                margin: 0 225px 0 32px;
            }
        }
        p {
            font-size: 12px;
            color: #333;
            float: left;
        }
        p:nth-of-type(1) {
            margin: 0 199px 0 32px;
        }
    }
}
</style>
