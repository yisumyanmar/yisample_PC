<template>
    <div class="inform-wrapper">
        <div class="table-list" v-if="showListData">
            <com-header></com-header>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="相关产品" width="180">
                    <template slot-scope="scope">
                        <span id="goods-title">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="举报原因" width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.content }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="举报时间" width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.create_time | formatDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态结果处理" width="180">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status == 0">待审核</span>
                        <span v-else>处理成功</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleCheck(scope.$index, scope.row)"
                            >查看</el-button
                        >
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleCancel(scope.$index, scope.row)"
                            >取消</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
        </div>

        <div class="wrapper-contailer" v-if="showFirstList">
            <com-header></com-header>
            <div class="process">
                <img src="../../../assets/img/notice_1.jpg" alt="" />
            </div>
            <div class="shop">
                <p>被举报商家</p>
                <span @click="goShopDetail">{{ noticeInfo.shop }}</span>
            </div>
            <div class="detail" v-if="noticeInfo.title">
                <div class="top">
                    <h5>相关商品</h5>
                    <img :src="imgUpload + noticeInfo.title.pic_url" alt="" />
                </div>
                <div class="inner">
                    <span>商品名称:</span>
                    <span @click="goGoodsDetail">
                        {{ noticeInfo.title.title }}
                    </span>
                </div>
            </div>
            <div class="type">
                举报类型 :
                <div class="container-radio">
                    <el-radio-group v-model="radio" @change="handleRadioChange">
                        <el-radio
                            :label="index"
                            v-for="(item, index) in noticeInfo.report"
                            :key="index"
                            >{{ item.type_name }}</el-radio
                        >
                    </el-radio-group>
                </div>
            </div>
            <div class="select-option">
                <span>举报主题 :</span>
                <el-select
                    id="select-change"
                    v-model="value"
                    placeholder="请选择"
                    @change="handleSelectChange"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="content">
                举报内容 :
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea"
                >
                </el-input>
            </div>
            <div class="pic">
                图片 :
                <el-upload
                    :action="difficulty()"
                    list-type="picture-card"
                    :with-credentials="true"
                    :on-success="succeed"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-exceed="beyond"
                    :limit="5"
                    name="adv_content"
                    accept=".jpg,.jpeg,.png,.gif,.JPG,.JPEG,.GIF,.PNG,"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
            </div>
            <div class="notice">
                <div class="btn" @click="submit">提交</div>
            </div>
        </div>
        <!-- 显示单条数据 -->
        <singal-data
            v-if="showSingalData"
            @cancel="handleSingalCancel"
            :singalData="singalData"
            @goShopHome="goShopHome"
            @goGoodsHome="goGoodsHome"
        ></singal-data>
        <!-- 二级列表 -->
        <second-list
            v-if="showSecondList"
            :nextRadioValue="nextRadioValue"
            :nextSelectValue="nextSelectValue"
            :receivedValue="receivedValue"
            :picArr="picArr"
            @confirm="confirm"
            @enterShopName="enterShopName"
            @enterGoodsDetail="enterGoodsDetail"
            :noticeInfo="noticeInfo"
            :store_id="store_id"
            :main_id="main_id"
        ></second-list>
        <!-- 提交成功显示的数据 -->
        <success-data
            v-if="showSuccessData"
            @handleBack="handleBack"
        ></success-data>
        <!-- 取消投诉的提示信息 -->
        <cancel-notice
            v-if="showCancelMessage"
            :cancelIndex="cancelIndex"
            @handleYse="handleYes"
            @handleNo="handleNo"
        ></cancel-notice>
    </div>
</template>

<script>
import SecondList from "../child/sonComponent/backInform";
import ComHeader from "../child/sonComponent/comHeader";
import SingalData from "../child/sonComponent/informSingalData";
import SuccessData from "./sonComponent/submitSuccess";
import CancelNotice from "./sonComponent/cancelNotice";
export default {
    data() {
        return {
            fileData: "",
            saveArr: [],
            computedArr: [],
            goodsTitle: "",
            shopName: "",
            currentPage: 1, //初始页
            cancelIndex: -1,
            checkPic: [], //检查图片是否满足要求
            message: "",
            imgUpload: "http://admin.gtpacking.cn/",
            page: 1, //传的page
            pagesize: 10, //    每页的数据
            showListData: true, //列表数据
            figureCollection: [], //图片路径
            showFirstList: false,
            showSingalData: false,
            showSuccessData: false,
            showCancelMessage: false,
            tableData: [],
            singalData: {}, //显示单条数据
            picArr: [], //接受多张图片
            resStatus: "", //正确获取图片状态
            showSecondList: false,
            radioValue: "",
            noticeInfo: {},
            main_id: 0,
            store_id: 0,
            radio: "",
            receivedValue: "", //接受输入框值
            options: [],
            value: "",
            textarea: "",
            total: 0,
            dialogImageUrl: "",
            dialogVisible: false,
            nextRadioValue: "", //提交之后单选值
            nextSelectValue: "" //提交之后下拉框值
        };
    },

    components: {
        SecondList,
        ComHeader,
        SingalData,
        SuccessData,
        CancelNotice
    },
    created() {
        if(localStorage.getItem("loginuserdata") == 'true') {
            if (this.$route.query.notice == 1) {
                this.showFirstList = true;
                this.showListData = false;
            }
            this.main_id = this.$route.query.main_id;
            this.store_id = this.$route.query.store_id;
            console.log(this.main_id, this.store_id, "id");

            // let title = "举报违规" + this.$constant.webComContent;
             let title = "举报违规" + '-' + this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
        } 
        // else {
        //       this.$router.push('/passwordLogin')
        // }     
    },
    mounted() {
        //举报显示
        this.getNoticeInfo();
        //列表数据
        this.getTableData();
    },
    methods: {
        showTitle() {
            // let title =
            //     this.goodsTitle +
            //     "-" +
            //     this.shopName +
            //     this.$constant.webComContent;
               let title = this.$constant.webComContent;
            this.showScroll.scrollTitle(title);
        },
        //单条数据返回店铺
        goShopHome(goods_id) {
            this.$router.push({
                path: "storehome",
                query: {
                    id: goods_id
                }
            });
        },
        //单条数据进入商品详情
        goGoodsHome(store_id) {
            this.$router.push({
                path: "/shopsn_product",
                query: {
                    id: store_id
                }
            });
        },
        //举报成功返回主页
        handleBack() {
            this.showListData = true;
            this.showSuccessData = false;
        },
        //取消举报
        handleYes(index) {
            this.tableData.splice(index, 1);
            this.showCancelMessage = false;
            this.$message.success("取消成功");
        },
        //不取消举报
        handleNo() {
            this.showCancelMessage = false;
        },
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange(size) {
            this.pagesize = size;
            console.log(this.pagesize); //每页下拉显示数据
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
            this.getTableData();
            console.log(this.currentPage); //点击第几页
        },
        //进入商品详情
        goGoodsDetail() {
            this.$router.push({
                path: "/shopsn_product",
                query: {
                    id: this.$route.query.main_id
                }
            });
        },

        //跳转店铺详情
        goShopDetail() {
            this.$router.push({
                path: "storehome",
                query: {
                    id: this.$route.query.store_id
                }
            });
        },
        //二级列表进入店铺详情
        enterShopName(id) {
            this.$router.push({
                path: "storehome",
                query: {
                    id: this.$route.query.main_id
                }
            });
        },
        //二级列表进入商品详情
        enterGoodsDetail(id) {
            this.$router.push({
                path: "/shopsn_product",
                query: {
                    id: id
                }
            });
        },
        getTableData() {
            this.HTTP(
                this.$httpConfig.noticeList,
                {
                    page: this.currentPage
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                        return;
                    }
                    this.total = Number(res.data.data.count);

                    this.tableData = res.data.data.list;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        //上传路径
        difficulty() {
            return this.$httpConfig.upLoadImage;
        },
        //上传成功，在数组中添加获取后的路径
        succeed(response, file, fileList) {
            //判断有没有上传图片
            this.resStatus = fileList;
            //存储删除的状态
            this.checkPic.push(Number(response.status));
            //将传入的图片放进数组
            this.picArr.push(response.data);
            this.figureCollection.push(file.response.data);
        },
        //取消图片上传
        handleRemove(file, fileList) {
            let index = this.figureCollection.indexOf(file.response.data);
            if (index > -1) {
                console.log("index值:" + index);
                this.figureCollection.splice(index, 1);
                this.picArr.splice(index, 1);
                this.checkPic.splice(index, 1);
            }
            //后台删除当前图片
            this.HTTP(
                this.$httpConfig.delPic,
                {
                    fileName: file.response.data
                },
                "post"
            )
                .then(e => {
                    console.log(e);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //下拉框显示的数据
        getNoticeType(index) {
            this.HTTP(
                this.$httpConfig.noticeType,
                {
                    id: index
                },
                "post"
            )
                .then(res => {
                    this.options = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        //获取举报类型数据
        getNoticeInfo() {
            this.HTTP(
                this.$httpConfig.noticeReport,
                {
                    goods_id: this.$route.query.goods_id,
                    store_id: this.$route.query.store_id
                },
                "post"
            )
                .then(res => {
                    this.noticeInfo = res.data.data;
                    this.goodsTitle = res.data.data.title.title;
                    this.shopName = res.data.data.shop;
                    if (this.$route.query.notice == 1) {
                        this.showTitle();
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },
        handleCheck(index, row) {
            this.showListData = false;
            this.showFirstList = false;
            this.showSecondList = false;
            this.showSingalData = true;
            //处理每条数据
            this.getSingleData(row.id);
            console.log(index, row);
        },
        getSingleData(id) {
            this.HTTP(
                this.$httpConfig.noticeCheckSingle,
                {
                    id: id
                },
                "post"
            )
                .then(res => {
                    this.singalData = res.data.data;
                    sessionStorage.setItem(
                        "singalKey",
                        JSON.stringify(this.singalData)
                    );
                    console.log(res.data.data, 444);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        handleCancel(index, row) {
            this.HTTP(
                this.$httpConfig.cancelNotice,
                {
                    id: row.id
                },
                "post"
            )
                .then(res => {
                    if (res.data.status == 1) {
                        this.showCancelMessage = true;
                        this.cancelIndex = index;
                    } else {
                        this.$message.error("操作失败");
                        return;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
            console.log(index, row);
        },
        //单选框选中值
        handleRadioChange(index) {
            this.options = [];
            this.value = "";
            this.nextRadioValue = this.noticeInfo.report[index].type_name;
            let typeIndex = this.noticeInfo.report[index].id;
            this.getNoticeType(typeIndex);
        },
        //下拉框选中值
        handleSelectChange(val) {
            this.nextSelectValue = this.value;
        },
        // 图片最大数之后
        beyond() {
            this.$message.warning("做多五张图片");
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            console.log(file, "file");
        },
        confirm() {
            this.showListData = false;
            this.showFirstList = false;
            this.showSecondList = false;
            this.showSingalData = false;
            this.showSuccessData = true;
        },
        handleSingalCancel() {
            this.showListData = true;
            this.showFirstList = false;
            this.showSecondList = false;
            this.showSingalData = false;
        },
        submit() {
            if (this.nextRadioValue == null || this.nextRadioValue == "") {
                this.$message.error("请选择举报类型");
                return;
            } else if (this.value == null || this.value == "") {
                this.$message.error("请选择举报主题");
                return;
            } else if (this.textarea.match(/^\s*$/)) {
                this.$message.error("请输入举报内容");
                return;
            } else if (this.resStatus.length == 0) {
                this.$message.error("必须上传图片作为凭证");
                return;
            } else if (this.checkPic.indexOf(0) != -1) {
                try {
                    this.resStatus.forEach((el, index) => {
                        if (el.response.status == 0) {
                            console.log(el, "el");
                            setTimeout(() => {
                                this.$message.error(
                                    "第" +
                                        (index + 1) +
                                        "图片的要求" +
                                        el.response.message
                                );
                            }, 300);
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            } else {
                //去除输入框带有空格的字符
                this.receivedValue = this.textarea.replace(/\s+/g, "");
                this.HTTP(
                    this.$httpConfig.noticeSubmit,
                    {
                        goods_id: this.$route.query.goods_id,
                        store_id: this.$route.query.store_id,
                        content: this.receivedValue,
                        type: this.nextRadioValue,
                        topic: this.nextSelectValue,
                        pic_url: this.picArr.join(",")
                    },
                    "post"
                )
                    .then(res => {
                        if (res.data.status == 1) {
                            this.$message.success(res.data.message);
                            this.showFirstList = false;
                            this.showSecondList = true;
                        } else {
                            this.$message.error("操作失败");
                            return;
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        }
    }
};
</script>
<style lang="less">
#select-change {
    .el-select-dropdown .el-popper {
        min-width: 213px;
        position: absolute;
        top: 1212px;
        left: 697px !important;
        transform-origin: center top;
        z-index: 2001;
    }
}
</style>
<style lang="less">
#goods-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 可以显示的行数，超出部分用...表示*/
    -webkit-box-orient: vertical;
}

.inform-wrapper .el-input__inner {
    margin-left: 0;
}
.el-textarea__inner {
    margin-top: 10px;
}
.el-upload--picture-card {
    margin-top: 10px !important;
}
</style>
<style lang="less" scoped>
.inform-wrapper {
    background-color: #fff;
    float: left;
    margin: 16px 4px;
    width: 950px;
    .table-list {
        h1 {
            font-size: 17px;
            border-bottom: 1px solid #e3e3e3;
        }
    }
    .wrapper-contailer {
        .process {
            img {
                margin: 10px;
            }
        }
        .shop {
            margin: 10px;
            background: #f6f6f6;
            padding: 20px;
            p {
                display: inline-block;
            }
            span {
                margin-left: 30px;
                cursor: pointer;
                &:hover {
                    color: rgb(134, 163, 226);
                }
            }
        }
        .detail {
            .top {
                margin-left: 28px;

                img {
                    margin-left: 30px;
                }
            }
            .inner {
                & :nth-child(2) {
                    cursor: pointer;
                    &:hover {
                        color: rgb(134, 163, 226);
                    }
                }
                margin-left: 30px;
                margin-top: 10px;
            }
        }
        .type {
            margin: 28px;
            .show-detail {
                display: inline-block;
                margin-left: 20px;
            }
            .container-radio {
                margin-left: 65px;
                line-height: 48px;
                margin-top: -33px;
            }
        }
        .select-option {
            margin-left: 28px;
            .show-select {
                display: inline-block;
                margin-left: 21px;
            }
            span {
                display: inline-block;
                margin-right: 18px;
            }
        }
        .content {
            margin: 26px;
            .show-text {
                display: inline-block;
                margin-left: 21px;
            }
        }
        .pic {
            margin: 25px;
        }
        .notice {
            margin: 25px;
            .btn {
                background: red;
                width: 100px;
                margin: 10px auto;
                text-align: center;
                border-radius: 5px;
                height: 36px;
                line-height: 36px;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
</style>
