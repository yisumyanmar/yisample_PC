<template>
    <div class="productManage l">
        <div class="top"><span>新增定制品</span></div>
        <div class="show">
            <div class="one">
                <p class="two">商品分类：
                    <el-select v-model="value" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value1" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p class="three">选择模板：
                    <el-select class="el-select1" v-model="value3" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <p class="four">
                    <img src="../../../assets/img/yi-19.png" />
                    <span class="parameter">新增参数</span>
                </p>
                <p class="five">补充说明：
                    <el-input
                        class="el-textarea"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="textarea">
                    </el-input>
                </p>
                <p class="six">上传附件：
                    <button class="upload">上传</button>
                </p>
            </div>
            <button class="btn">确认提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productManage',
    data() {
        return {
            options: [{
                value: 'aaaaa',
                label: 'aaaaa'
                }, {
                value: 'bbbbb',
                label: 'bbbbb'
                }, {
                value: 'ccccc',
                label: 'ccccc'
                }],
            value: '',
            value1: '',
            value2: '',
            value3: '',
            textarea: ''
        };
    },
};
</script>

<style lang="less" scoped>
.el-select {
    margin-left: 11px !important;
}
.el-select1 {
    margin-left: 11px !important;
    width: 30%;
}
.el-textarea {
    width: 66.6%;
    padding-left: 12px;
}
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
.productManage {
    height: 700px;
    width: 980px;
    background: #fff;
    margin-top: 16px;
    .top {
        height: 37px;
        border-bottom: 1px solid #e7e7e7;
        margin: 14px 17px 0;
        span {
            display: inline-block;
            width: 104px;
            text-align: center;
            line-height: 35px;
            border-bottom: 2px solid #d02629;
            color: #d02629;
            font-size: 14px;
        }
    }
    .show {
        .one {
            padding: 30px 0;
            p {
                font-size: 12px;
                color: #666;
                margin-bottom: 20px;
                line-height: 32px;
            }
            p.two {
                margin-left: 46px;
            }
            p.three {
                margin-left: 45px;
            }
            p.four {
                margin-left: 119px;
                img {
                    margin-bottom: 4px;
                }
                .parameter {
                    color: #333;
                    padding-left: 20px;
                }
            }
            p.five {
                margin-left: 44px;
            }
            p.six {
                margin-left: 44px;
                .upload {
                    background: #02A3FE;
                    color: #fff;
                    width: 70px;
                    height: 30px;
                    border-radius: 5px;
                    margin-left: 12px;
                }
            }
        }
        .btn {
            width: 200px;
            height: 42px;
            color: #ffffff;
            background: #D02629;
            font-size: 14px;
            margin: 20px 0 0 119px;
            border-radius: 5px;
        }
    }
}
</style>