<template>
    <div class="cusProEdit l">
        <div class="top"><span>新增定制品</span></div>
        <div class="show">
            <div class="manage_data">
                <p class="one">标题：
                    <el-input
                        class="input_type"
                        type="text"
                        placeholder=""
                        v-model="cusInfo.title">
                    </el-input>
                </p>
                <!-- <p class="two">商品分类：
                    <el-select @change="handleChange" v-model="first_data" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select @change="handleChange1" v-model="second_data" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem1"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="third_data" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem2"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id"
                       >
                        </el-option>
                    </el-select>
                </p> -->
                <p class="two">商品分类：
                    <el-select @change="handleChange" v-model="cusInfo.one_name" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select @change="handleChange1" v-model="cusInfo.two_name" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem1"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-select v-model="cusInfo.three_name" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem2"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id"
                       >
                        </el-option>
                    </el-select>
                </p>
                <p class="three">选择模板：
                    <el-select class="el-select1" v-model="value3" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTemList"
                        :key="index"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </p>
                <p class="four">
                    <img src="../../../assets/img/yi-19.png" />
                    <span class="parameter">新增参数</span>
                </p>
                <div class="show_data">
                    <p v-if="checkName0">
                        <span></span>{{checkName0}}
                        <el-input class="el-input0" v-model="space_data[0].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[0].value"></el-input>
                    </p>
                    <p v-if="checkName1">
                        <span></span>{{checkName1}}
                        <el-input class="el-input0" v-model="space_data[1].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[1].value"></el-input>
                    </p>
                    <p v-if="checkName2">
                        <span></span>{{checkName2}}
                        <el-input class="el-input0" v-model="space_data[2].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[2].value"></el-input>
                    </p>
                    <p v-if="checkName3">
                        <span></span>{{checkName3}}
                        <el-input class="el-input0" v-model="space_data[3].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[3].value"></el-input>
                    </p>
                    <p v-if="checkName4">
                        <span></span>{{checkName4}}
                        <el-input class="el-input0" v-model="space_data[4].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[4].value"></el-input>
                    </p>
                    <p v-if="checkName5">
                        <span></span>{{checkName5}}
                        <el-input class="el-input0" v-model="space_data[5].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[5].value"></el-input>
                    </p>
                    <p v-if="checkName6">
                        <span></span>{{checkName6}}
                        <el-input class="el-input0" v-model="space_data[6].space_id" disabled></el-input>
                        <el-input class="el-input2" v-model="space_data[6].value"></el-input>
                    </p>
                </div>
                <p class="six">描述：
                    <el-input
                        class="textarea_type"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="cusInfo.description">
                    </el-input>
                </p>
                <p class="seven">补充说明：
                    <el-input
                        class="el-textarea"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="cusInfo.explain">
                    </el-input>
                </p>
                <p class="eight">上传附件：
                    <el-upload
                        class="upload_pic"
                        :action="difficulty()"
                        list-type="picture-card"
                        :with-credentials='true'
                        :on-success='succeed'
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :on-exceed='beyond'
                        :limit="5"
                        name="adv_content"
                        accept=".jpg,.jpeg,.png,.gif,.JPG,.JPEG,.GIF,.PNG,"
                        >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </p>
            </div>
            <button @click="editDataModify" class="btn">确认提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productManage',
    data() {
        return {
            cusInfo: [],
            title: '',
            // value: '',
            // value1: '',
            // value2: '',
            value3: '',
            // textarea: '',
            // textarea1: '',
            cusTem: [],
            cusTem1: [],
            cusTem2: [],
            cusTemList: [],
            dialogImageUrl: '',
            dialogVisible: false,
            figureCollection:[],
            checkName0: '',
            checkName1: '',
            checkName2: '',
            checkName3: '',
            checkName4: '',
            checkName5: '',
            checkName6: '',
            // checkId0: '',
            // checkId1: '',
            // checkId2: '',
            // checkId3: '',
            // checkId4: '',
            // checkId5: '',
            // checkId6: '',
            // checkValue0: '',
            // checkValue1: '',
            // checkValue2: '',
            // checkValue3: '',
            // checkValue4: '',
            // checkValue5: '',
            // checkValue6: '',
            space_data: '',
            // showTem: '',
            // showTem1: '',
            // showTem2: '',
            // first_Id: '',
            // second_Id: '',
            // third_Id: '',
            // cusId: '',
            // cusId1: '',
            // cusId2: '',
            // first_data: '',
            // second_data: '',
            // third_data: '',
            data_id: ''
        };
    },
    created() {
        this.getCustomInfo();
        this.getCustomClass();
        this.getCustomTemplate();
    },
    methods: {
        getCustomInfo() {
            this.HTTP(this.$httpConfig.myCustomizedInfo, {
                id: this.$route.query.id
            },"post")
                .then(res => {
                    this.cusInfo = res.data.data;
                    this.data_id = res.data.data.id;
                    this.space_data = res.data.data.space;
                    this.checkName0 = this.space_data[0].name;
                    this.checkName1 = this.space_data[1].name;
                    this.checkName2 = this.space_data[2].name;
                    this.checkName3 = this.space_data[3].name;
                    this.checkName4 = this.space_data[4].name;
                    this.checkName5 = this.space_data[5].name;
                    this.checkName6 = this.space_data[6].name;
                    // this.first_Id = res.data.data.class_id;
                    // this.second_Id = res.data.data.class_two;
                    // this.third_Id = res.data.data.class_three;
                    // this.getShowClass();
                    // this.getShowClass1();
                    // this.getShowClass2();
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        // getShowClass() {
        //     this.HTTP(this.$httpConfig.getClass, {
        //         id: 0
        //     },"post")
        //         .then(res => {
        //             this.showTem = res.data.data;
        //             for(let a in this.showTem) {
        //                 this.cusId = this.showTem[a].id;
        //                 if(this.cusId == this.first_Id) {
        //                     this.first_data = this.showTem[a].class_name;
        //                 }
        //             }
        //         }
        //     )
        //     .catch((err) => {
        //     console.log(err);
        //     });
        // },
        // getShowClass1() {
        //     this.HTTP(this.$httpConfig.getAllClass, {
        //         id: this.first_Id
        //     },"post")
        //         .then(res => {
        //             this.showTem1 = res.data.data;
        //             for(let a in this.showTem1) {
        //                 this.cusId1 = this.showTem1[a].id;
        //                 if(this.cusId1 == this.second_Id) {
        //                     this.second_data = this.showTem1[a].class_name;
        //                 }
        //             }
        //         }
        //     )
        //     .catch((err) => {
        //     console.log(err);
        //     });
        // },
        // getShowClass2() {
        //     this.HTTP(this.$httpConfig.getAllClass, {
        //         id: this.second_Id
        //     },"post")
        //         .then(res => {
        //             this.showTem2 = res.data.data;
        //             for(let a in this.showTem2) {
        //                 this.cusId2 = this.showTem2[a].id;
        //                 if(this.cusId2 == this.third_Id) {
        //                     this.third_data = this.showTem2[a].class_name;
        //                 }
        //             }
        //         }
        //     )
        //     .catch((err) => {
        //     console.log(err);
        //     });
        // },
        getCustomClass() {
            this.HTTP(this.$httpConfig.getClass, {
                id: 0
            },"post")
                .then(res => {
                    this.cusTem = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        handleChange(id1) {
            this.HTTP(this.$httpConfig.getAllClass, {
                id: id1
            },"post")
                .then(res => {
                    this.cusTem1 = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        handleChange1(id2) {
            this.HTTP(this.$httpConfig.getAllClass, {
                id: id2
            },"post")
                .then(res => {
                    this.cusTem2 = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        getCustomTemplate() {
            this.HTTP(this.$httpConfig.customTemplateList, {},"post")
                .then(res => {
                    this.cusTemList = res.data.data;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        difficulty(){
            return this.$httpConfig.upLoadImage;
        },
        succeed(response, file, fileList){
            this.figureCollection.push(file.response.data);
            if (this.figureCollection.length > 0) {
                this.have_pic = 1;
            } else {
                this.have_pic =0;
            }
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {
            let index=this.figureCollection.indexOf(file.response.data);
            if(index>-1){
            this.figureCollection.splice(index,1)
            }
            this.HTTP(this.$httpConfig.delPic,{
            fileName:file.response.data
            },'post').then((e)=>{
            console.log(res)
            }).catch((e)=>{
            console.log(e)
            })
        },
        beyond () {
            this.$message.warning('做多五张图片');
        },
        editDataModify() {
            if(this.space_data[0].space_id && this.space_data[0].value) {
                var checkId = [this.space_data[0].space_id];
                var checkValue = [this.space_data[0].value];
            }
            if(this.space_data[0].space_id && this.space_data[0].value && this.space_data[1].space_id && this.space_data[1].value) {
                var checkId = [this.space_data[0].space_id, this.space_data[1].space_id];
                var checkValue = [this.space_data[0].value, this.space_data[1].value];
            }
            if(this.space_data[0].space_id && this.space_data[0].value && this.space_data[1].space_id && this.space_data[1].value && this.space_data[2].space_id && this.space_data[2].value) {
                var checkId = [this.space_data[0].space_id, this.space_data[1].space_id, this.space_data[2].space_id];
                var checkValue = [this.space_data[0].value, this.space_data[1].value, this.space_data[2].value];
            }
            if(this.space_data[0].space_id && this.space_data[0].value && this.space_data[1].space_id && this.space_data[1].value && this.space_data[2].space_id && this.space_data[2].value && this.space_data[3].space_id && this.space_data[3].value) {
                var checkId = [this.space_data[0].space_id, this.space_data[1].space_id, this.space_data[2].space_id, this.space_data[3].space_id];
                var checkValue = [this.space_data[0].value, this.space_data[1].value, this.space_data[2].value, this.space_data[3].value];
            }
            if(this.space_data[0].space_id && this.space_data[0].value && this.space_data[1].space_id && this.space_data[1].value && this.space_data[2].space_id && this.space_data[2].value && this.space_data[3].space_id && this.space_data[3].value && this.space_data[4].space_id && this.space_data[4].value) {
                var checkId = [this.space_data[0].space_id, this.space_data[1].space_id, this.space_data[2].space_id, this.space_data[3].space_id, this.space_data[4].space_id];
                var checkValue = [this.space_data[0].value, this.space_data[1].value, this.space_data[2].value, this.space_data[3].value, this.space_data[4].value];
            }
            var data = {
                id: checkId,
                value: checkValue
            }
            this.HTTP(this.$httpConfig.myCustomizedModify, {
                id: this.data_id,
                title: this.cusInfo.title,
                class_one: this.cusInfo.one_name,
                class_two: this.cusInfo.two_name,
                class_three: this.cusInfo.three_name,
                template_id: this.value3,
                space: data,
                description: this.cusInfo.description,
                explain: this.cusInfo.explain,
                // pic_url: this.figureCollection,
                pic_url: 111,
            },"post")
                .then(res => {
                    this.$router.push({
                        name: "customProduct",
                        query: {
                            x:0
                        }
                    });
                }
            )
            .catch((err) => {
            console.log(err);
            });
        }
    }
};
</script>

<style lang="less" scoped>
.el-select {
    margin-left: 11px !important;
}
.el-select1 {
    margin-left: 11px !important;
    width: 31.2%;
}
.el-input2 {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 40%;
    padding-left: 11px;
}
.el-input0 {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 10%;
    padding-left: 11px;
}
.input_type {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 35%;
    padding-left: 35px;
}
.textarea_type {
    width: 69.2% !important;
    padding-left: 35px !important;
}
.el-textarea {
    width: 66.6%;
    padding-left: 12px;
}
.upload_pic {
    margin-left: 73px;
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
.cusProEdit {
    height: auto;
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
        .manage_data {
            padding: 30px 0;
            p {
                font-size: 12px;
                color: #666;
                margin-bottom: 20px;
                line-height: 32px;
            }
            p.one {
                margin-left: 45px;
            }
            p.two {
                margin-left: 45px;
            }
            p.three {
                margin-left: 45px;
            }
            p.four {
                margin-left: 119px;
                img {
                    cursor: pointer;
                    margin-bottom: 4px;
                }
                .parameter {
                    cursor: pointer;
                    color: #333;
                    padding-left: 20px;
                }
            }
            p.five {
                margin-left: 45px;
            }
            p.six {
                margin-top: 20px;
                margin-left: 45px;
            }
            p.seven {
                margin-top: 20px;
                margin-left: 45px;
            }
            p.eight {
                margin-left: 45px;
                .upload {
                    background: #02A3FE;
                    color: #fff;
                    width: 70px;
                    height: 30px;
                    border-radius: 5px;
                    margin-left: 12px;
                }
            }
            .show_data {
                padding-left: 119px;
                margin-bottom: 40px;
                p {
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 15px;
                    line-height: 32px;
                    span {
                    color: #FF0000;
                    padding-right: 5px;
                    }
                    img {
                    margin: 14px;
                    }
                    label {
                        padding-right: 20px;
                    }
                    input {
                        border: 1px solid #000;
                        padding: 8px;
                    }
                }
            }
        }
        .btn {
            width: 200px;
            height: 42px;
            color: #ffffff;
            background: #D02629;
            font-size: 14px;
            margin: 20px 0 100px 119px;
            border-radius: 5px;
        }
    }
}
</style>