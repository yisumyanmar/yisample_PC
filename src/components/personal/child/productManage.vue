<template>
    <div class="productManage l">
        <div class="top"><span>新增定制品</span></div>
        <div class="show">
            <div class="manage_data">
                <p class="one">标题：
                    <el-input
                        class="input_type"
                        type="text"
                        placeholder=""
                        v-model="title"
                        @change="changeWarning(1)">
                    </el-input>
                    <el-alert v-show="tip1" title="请填写标题" type="error" show-icon :closable="false"></el-alert>
                </p>
                <p class="two">商品分类：
                    <!-- <el-select v-model="value" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <el-select @change="handleChange" v-model="value" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTem"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <!-- <el-select v-model="value1" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <el-select @change="handleChange1" v-model="value1" placeholder="" v-show="selectData1">
                        <el-option
                        v-for="(item, index) in cusTem1"
                        :key="index"
                        :label="item.class_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <!-- <el-select v-model="value2" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <el-select v-model="value2" placeholder="" v-show="selectData2">
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
                    <!-- <el-select class="el-select1" v-model="value3" placeholder="">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <el-select class="el-select1" v-model="value3" @change="changeWarning(2)" placeholder="">
                        <el-option
                        v-for="(item, index) in cusTemList"
                        :key="index"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                    <el-alert v-show="tip2" title="请填写选择模板" type="error" show-icon :closable="false"></el-alert>
                    
                </p>
                <p class="four" @click="addParameter">
                    <img src="../../../assets/img/yi-19.png" />
                    <span class="parameter">新增参数</span>
                </p>
                <div class="show_data" v-show="showData">
                <!-- <div class="show_data" v-show="showData" v-for="(item, index) in cusDetail" :key="index"> -->
                    <!-- <p>
                        <span>*</span>产品承压：
                        <el-input class="el-input1" v-model="input1"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>存储环境：
                        <el-input class="el-input2" v-model="input2"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>成型方式：
                        <el-input class="el-input2" v-model="input3"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>面纸类型：
                        <el-input class="el-input2" v-model="input4"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>版面设定：
                        <el-input class="el-input2" v-model="input5"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>开槽模切：
                        <el-input class="el-input2" v-model="input6"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>印刷面积：
                        <el-input class="el-input1" v-model="input7"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>数码表处：
                        <el-input class="el-input1" v-model="input8"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>成箱方式：
                        <el-input class="el-input2" v-model="input9"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p>
                    <p>
                        <span>*</span>打包方式：
                        <el-input class="el-input1" v-model="input10"></el-input>
                        <img src="../../../assets/img/yi-19.png" />
                    </p> -->

                    <p v-if="checkName0">
                        <span></span>{{checkName0}}
                        <el-input class="el-input0" style="display: none;" v-model="checkId0" disabled></el-input>
                        <el-input class="el-input2" v-model="checkValue0" @change="changeWarning(3)"></el-input>
                        <el-alert v-show="tip3" title="请填写数据" type="error" show-icon :closable="false"></el-alert>
                    </p>
                    <p v-if="checkName1">
                        <span></span>{{checkName1}}
                        <el-input class="el-input0" style="display: none;" v-model="checkId1" disabled></el-input>
                        <el-input class="el-input2" v-model="checkValue1" @change="changeWarning(4)"></el-input>
                        <el-alert v-show="tip4" title="请填写数据" type="error" show-icon :closable="false"></el-alert>
                    </p>
                    <p v-if="checkName2">
                        <span></span>{{checkName2}}
                        <el-input class="el-input0" style="display: none;" v-model="checkId2" disabled></el-input>
                        <el-input class="el-input2" v-model="checkValue2" @change="changeWarning(5)"></el-input>
                        <el-alert v-show="tip5" title="请填写数据" type="error" show-icon :closable="false"></el-alert>
                    </p>
                    <p v-if="checkName3">
                        <span></span>{{checkName3}}
                        <el-input class="el-input0" style="display: none;" v-model="checkId3" disabled></el-input>
                        <el-input class="el-input2" v-model="checkValue3" @change="changeWarning(6)"></el-input>
                        <el-alert v-show="tip6" title="请填写数据" type="error" show-icon :closable="false"></el-alert>
                    </p>
                    <p v-if="checkName4">
                        <span></span>{{checkName4}}
                        <el-input class="el-input0" style="display: none;" v-model="checkId4" disabled></el-input>
                        <el-input class="el-input2" v-model="checkValue4" @change="changeWarning(7)"></el-input>
                        <el-alert v-show="tip7" title="请填写数据" type="error" show-icon :closable="false"></el-alert>
                    </p>

                    <!-- <p>
                        <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
                    </p> -->

                    <!-- <p v-for="(item, index) in cusDetail" :key="index">
                        <label for="checked">{{item.name}}</label>
                        <input :type="item.type" id="checked" name="checked" value="">
                    </p> -->
                    <!-- <p v-for="(item, index) in cusDetail" :key="index">
                        <label for="checked">{{item.name}}</label>
                        <input :type="item.type" :checked="checkInput">
                    </p> -->

                    <!-- <p v-for="(item, index) in cusDetail" :key="index">
                        <span></span>{{item.name}}
                        <el-input class="el-input2" v-model="nameValue"></el-input>
                    </p> -->

                </div>
                <!-- <p class="five">空间：
                    <el-input
                        class="input_type"
                        type="number"
                        placeholder=""
                        v-model="space">
                    </el-input>
                </p> -->
                <p class="six">描述：
                    <el-input
                        class="textarea_type"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="textarea"
                        @change="changeWarning(8)">
                    </el-input>
                    <el-alert v-show="tip8" title="请填写描述" type="error" show-icon :closable="false"></el-alert>
                </p>
                <p class="seven">补充说明：
                    <el-input
                        class="el-textarea"
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="textarea1"
                        @change="changeWarning(9)">
                    </el-input>
                    <el-alert v-show="tip9" title="请填写补充说明" type="error" show-icon :closable="false"></el-alert>
                </p>
                <p class="eight l">上传附件：
                    <!-- <button class="upload">上传</button> -->

                    <!-- <el-upload
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
                    </el-dialog> -->

                    <span class="add-image r">
                        <input v-if="uploadShow" @change="addImg($event)" type="file" class="btn_file">
                        <img @click="del" v-else :src="URL + taxpayer_img"/>
                        <div class="load-animation" v-show="load">上传中<i class="el-icon-loading"></i></div>
                    </span>
					<el-alert v-if="tip10" title="请填写上传附件" type="error" show-icon :closable="false"></el-alert>
                </p>
            </div><br>
            <button @click="getAddCustomized" class="btn">确认提交</button>
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
            title: '',
            value: '',
            value1: '',
            value2: '',
            value3: '',
            textarea: '',
            textarea1: '',
            // space: '',
            cusTem: [],
            cusTem1: [],
            cusTem2: [],
            cusTemList: [],
            selectData1: false,
            selectData2: false,
            showData: false,
            // input1: '',
            // input2: '',
            // input3: '',
            // input4: '',
            // input5: '',
            // input6: '',
            // input7: '',
            // input8: '',
            // input9: '',
            // input10: '',
            cusDetail: [],
            // dialogImageUrl: '',
            // dialogVisible: false,
            // figureCollection:[],
            nameId: '',
            nameValue: '',
            checkName0: '',
            checkName1: '',
            checkName2: '',
            checkName3: '',
            checkName4: '',
            checkId0: '',
            checkId1: '',
            checkId2: '',
            checkId3: '',
            checkId4: '',
            checkValue0: '',
            checkValue1: '',
            checkValue2: '',
            checkValue3: '',
            checkValue4: '',
            checkInput: false,
            tip1: '',
            tip2: '',
            tip3: '',
            tip4: '',
            tip5: '',
            tip6: '',
            tip7: '',
            tip8: '',
            tip9: '',
            tip10: '',
            uploadShow: true,
            taxpayer_img: '',
            load: false,
        };
    },
    created() {
        this.getCustomClass();
        this.getCustomTemplate();
        this.getCustomTemplateDetail();
    },
    methods: {
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
                    this.selectData1 = true;
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
                    this.selectData2 = true;
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
        getCustomTemplateDetail() {
            this.HTTP(this.$httpConfig.customTemplateDetail, {
                class_id: 800
            },"post")
                .then(res => {
                    this.cusDetail = res.data.data;
                    this.checkName0 = this.cusDetail[0].name;
                    this.checkName1 = this.cusDetail[1].name;
                    this.checkName2 = this.cusDetail[2].name;
                    this.checkName3 = this.cusDetail[3].name;
                    this.checkName4= this.cusDetail[4].name;
                    this.checkId0 = this.cusDetail[0].id;
                    this.checkId1 = this.cusDetail[1].id;
                    this.checkId2 = this.cusDetail[2].id;
                    this.checkId3 = this.cusDetail[3].id;
                    this.checkId4 = this.cusDetail[4].id;
                }
            )
            .catch((err) => {
            console.log(err);
            });
        },
        // difficulty(){
        //     return this.$httpConfig.getGoodsImageConfig;
        // },
        // succeed(response, file, fileList){
        //     this.figureCollection.push(file.response.data);
        //     if (this.figureCollection.length > 0) {
        //         this.have_pic = 1;
        //     } else {
        //         this.have_pic =0;
        //     }
        // },
        // handlePictureCardPreview(file) {
        //     this.dialogImageUrl = file.url;
        //     this.dialogVisible = true;
        // },
        // handleRemove(file, fileList) {
        //     let index=this.figureCollection.indexOf(file.response.data);
        //     if(index>-1){
        //     this.figureCollection.splice(index,1)
        //     }
        //     this.HTTP(this.$httpConfig.delPic,{
        //     fileName:file.response.data
        //     },'post').then((e)=>{
        //     console.log(res)
        //     }).catch((e)=>{
        //     console.log(e)
        //     })
        // },
        // beyond () {
        //     this.$message.warning('做多五张图片');
        // },
        del() {
            this.HTTP(this.$httpConfig.delPic, {
                fileName: this.taxpayer_img
            }, 'post').then((res) => {
                this.uploadShow = true;
                this.taxpayer_img = '';
            }).catch((res) => {
                alert(res.data.message)
            })
        },
        addImg(e) {
            let that = this;   
            let file = e.target.files[0];
            let type = file.type;
            if (this.imgData.accept.indexOf(type) == -1) {
                this.$set(this.tip, 'tip10', true);
                return false;
            }
            this.load = true;
            let  form  =  new  FormData();
            form.append('adv_content', file, file.name);  
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };   
            this.$ajax.post(this.$httpConfig.upLoadImage, form, config)
                .then(res => {
                    if (res.data.status == 10001) {
                        this.$router.push("/passwordLogin");
                    } else {
                        if (res.data.status === 1) {
                            that.taxpayer_img = res.data.data;
                            that.uploadShow = false;
                            that.load = false;
                        } else {
                            alert(res.data.message);
                            that.load = false;
                        }
                    }
                })
        },
        changeWarning(sign) {
            switch (sign) {
                case 1:
                    if (this.title !== '') {
                        this.tip1 = false;
                    }
                    break;
                case 2:
                    if (this.value3 !== '') {
                        this.tip2 = false;
                    }
                    break;
                case 3:
                    if (this.checkValue0 !== '') {
                        this.tip3 = false;
                    }
                    break;
                case 4:
                    if (this.checkValue1 !== '') {
                        this.tip4 = false;
                    }
                    break;
                case 5:
                    if (this.checkValue2 !== '') {
                        this.tip5 = false;
                    }
                    break;
                case 6:
                    if (this.checkValue3 !== '') {
                        this.tip6 = false;
                    }
                    break;
                case 7:
                    if (this.checkValue4 !== '') {
                        this.tip7 = false;
                    }
                    break;
                case 8:
                    if (this.textarea !== '') {
                        this.tip8 = false;
                    }
                    break;
                case 9:
                    if (this.textarea1 !== '') {
                        this.tip9 = false;
                    }
                    break;
                case 10:
                    if (this.taxpayer_img !== '') {
                        this.tip10 = false;
                    }
                    break;
				}
			},
        getAddCustomized() {
            if (this.title == '') {
                this.tip1 = true;
            }
            if (this.value3 == '') {
                this.tip2 = true;
            }
            if (this.checkValue0 == '') {
                this.tip3 = true;
            }
            if (this.checkValue1 == '') {
                this.tip4 = true;
            }
            if (this.checkValue2 == '') {
                this.tip5 = true;
            }
            if (this.checkValue3 == '') {
                this.tip6 = true;
            }
            if (this.checkValue4 == '') {
                this.tip7 = true;
            }
            if (this.textarea == '') {
                this.tip8 = true;
            }
            if (this.textarea1 == '') {
                this.tip9 = true;
            }
            if (this.taxpayer_img == '') {
                this.tip10 = true;
            }
            if(this.checkId0 && this.checkValue0) {
                var checkId = [this.checkId0];
                var checkValue = [this.checkValue0];
            }
            if(this.checkId0 && this.checkValue0 && this.checkId1 && this.checkValue1) {
                var checkId = [this.checkId0, this.checkId1];
                var checkValue = [this.checkValue0, this.checkValue1];
            }
            if(this.checkId0 && this.checkValue0 && this.checkId1 && this.checkValue1 && this.checkId2 && this.checkValue2) {
                var checkId = [this.checkId0, this.checkId1, this.checkId2];
                var checkValue = [this.checkValue0, this.checkValue1, this.checkValue2];
            }
            if(this.checkId0 && this.checkValue0 && this.checkId1 && this.checkValue1 && this.checkId2 && this.checkValue2 && this.checkId3 && this.checkValue3) {
                var checkId = [this.checkId0, this.checkId1, this.checkId2, this.checkId3];
                var checkValue = [this.checkValue0, this.checkValue1, this.checkValue2, this.checkValue3];
            }
            if(this.checkId0 && this.checkValue0 && this.checkId1 && this.checkValue1 && this.checkId2 && this.checkValue2 && this.checkId3 && this.checkValue3 && this.checkId4 && this.checkValue4) {
                var checkId = [this.checkId0, this.checkId1, this.checkId2, this.checkId3, this.checkId4];
                var checkValue = [this.checkValue0, this.checkValue1, this.checkValue2, this.checkValue3, this.checkValue4];
            }
            var data = {
                id: checkId,
                value: checkValue
            }
            this.HTTP(this.$httpConfig.addCustomized,
                {
                    title: this.title,
                    class_one: this.value,
                    class_two: this.value1,
                    class_three: this.value2,
                    template_id: this.value3,
                    space: data,
                    description: this.textarea,
                    explain: this.textarea1,
                    // pic_url: this.figureCollection,
                    pic_url: 111,
                },
                "post"
                )
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
        },
        addParameter() {
            this.showData = true;
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
// .el-input1 {
//     position: relative;
//     font-size: 14px;
//     display: inline-block;
//     width: 20%;
//     padding-left: 11px;
// }
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
// .upload_pic {
//     margin-left: 73px;
// }
.el-alert {
    display: inline;
    margin-left: 15px;
    padding: 0;
}
.el-alert--error {
    background-color: transparent;
}
.el-alert--error.is-light {
    background-color: #fff;
    color: #F56C6C;
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
                // .upload {
                //     background: #02A3FE;
                //     color: #fff;
                //     width: 70px;
                //     height: 30px;
                //     border-radius: 5px;
                //     margin-left: 12px;
                // }
                .add-image {
                    position: relative;
                    background: url(../../../assets/img/shangchuan.png) no-repeat 50% 50%;
                    border: 1px dashed #ccc;
                    margin: 40px 42px 0 14px;
                    width: 163px;
                    height: 122px;
                    input {
                        padding: 0;
                        margin: 0;
                        width: 100%!important;
                        height: 100%;
                        opacity: 0;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: #fff;
                    }
                    .load-animation {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        background: #060606;
                        text-align: center;
                        padding: 45px 0;
                        opacity: .4;
                        font-size: 14px;
                        color: #fff;
                    }
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
            cursor: pointer;
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