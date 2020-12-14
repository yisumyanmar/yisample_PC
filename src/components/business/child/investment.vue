<template>
    <div class="investment">
        <common-header></common-header>
		<div id="logo">
			<div class="center">
				<div class="nake l">
					<p class="Gongpin l"><router-link to="home"><img src="../../../assets/img/logo-yi.png" /></router-link></p>
					<p class="iphone l">
						<span class="hot l">招商热线：</span>
						<span class="shuzi l">400-168-1698</span>
					</p>
				</div>
				<div class="gold r">
					<img src="../../../assets/img/1234.png" />
				</div>
			</div>
		</div>
        <div class="middle">
			<div class="center">
                <div class="show">
                    <h1>基本信息</h1>
                    <div class="one">
                    <p class="one_name"><span>*</span>企业名称</p>
                        <el-input v-model="store_name"></el-input>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>工商注册号/统一社会信用代码</p>
                        <el-input v-model="store_regNo"></el-input>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>企业法人</p>
                        <el-input v-model="store_corporate"></el-input>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>企业类型</p>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                有限责任公司（自然投资或控股）<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>有限责任公司（自然投资或控股）</el-dropdown-item>
                                <el-dropdown-item>有限责任公司（自然投资或控股）</el-dropdown-item>
                                <el-dropdown-item>有限责任公司（自然投资或控股）</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>注册资本</p>
                        <el-input v-model="store_capital"></el-input>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>工商营业执照</p>
                        <span class="add-image l">
                            <input v-if="uploadShow" @change="addImg($event,1)" type="file"  class="btn_file">
                            <img @click="del(0)" v-else :src="URL + license_img"/>
                            <div class="load-animation" v-show="load1">上传中<i class="el-icon-loading"></i></div>
                        </span>
                        <p class="img_size">图片建议使用4：3比例，尺寸建议为1200*900像素jpg、gif、png格式的图片，并且图片大小不可超过2M。</p>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>有效期</p>
                    <el-radio v-model="radio" label="1">长期</el-radio>
                    <el-radio v-model="radio" label="2">有效期</el-radio>
                    <el-date-picker
                        v-model="value2"
                        type="daterange"
                        align="right"
                        start-placeholder="Start Date"
                        end-placeholder="End Date"
                        default-value="2010-10-01">
                        </el-date-picker>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>注册地址</p>
                        <el-dropdown class="el-dropdown1" trigger="click">
                            <span class="el-dropdown-link">
                                上海/上海/上海市松江区<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <div class="dropdown_input">
                        <el-input class="el-input1" v-model="store_address"></el-input>
                        </div>
                    </div>
                    <div class="one">
                    <p class="one_name"><span>*</span>公司实际所在地</p>
                        <el-dropdown class="el-dropdown1" trigger="click">
                            <span class="el-dropdown-link">
                                上海/上海/上海市松江区<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                                <el-dropdown-item>上海/上海/上海市松江区</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <div class="dropdown_input">
                        <el-input class="el-input1" v-model="com_address"></el-input>
                        </div>
                    </div>
                </div>
            </div>

            <div class="middle">
                <div class="center">
                    <div class="show">
                        <h1>经营能力</h1>
                        <div class="one">
                        <p class="one_name"><span>*</span>业务联系人</p>
                            <el-input v-model="business_name"></el-input>
                        </div>
                        <div class="one">
                        <p class="one_name"><span>*</span>业务联系人手机号</p>
                            <el-input v-model="business_ph"></el-input>
                        </div>
                        <div class="one">
                        <p class="one_name"><span>*</span>企业法人</p>
                            <el-input v-model="business_corporate"></el-input>
                        </div>
                        <div class="one">
                            <p class="one_name"><span>*</span>经营模式</p>
                            <el-radio v-model="radio1" label="1">生产加工</el-radio>
                            <el-radio v-model="radio1" label="2">设计</el-radio>
                            <el-radio v-model="radio1" label="3">原料</el-radio>
                            <el-radio v-model="radio1" label="4">经销</el-radio>
                            <el-radio v-model="radio1" label="5">其他</el-radio>
                        </div>
                        <div class="one">
                            <p class="one_name"><span>*</span>开票能力</p>
                            <el-radio v-model="radio2" label="1">增值税专用发票</el-radio>
                            <el-radio v-model="radio2" label="2">普通发票</el-radio>
                        </div>
                        <div class="one">
                            <p class="one_name"><span>*</span>供货类目是否涉及限售或危化品等内容</p>
                            <p class="two_name"><span>重要提示：</span>若您在平台上售卖相关产品，却未上传资质，将会面临封号处理，请按要求上传</p>
                            <el-radio v-model="radio3" label="1">否</el-radio>
                            <el-radio v-model="radio3" label="2">是</el-radio>
                            <span class="credential">点击上传资质证件</span>
                        </div>
                        <div class="one">
                            <p class="one_name"><span>*</span>供货类目是否涉及品牌代理</p>
                            <el-radio v-model="radio4" label="1">否</el-radio>
                            <el-radio v-model="radio4" label="2">是</el-radio>
                            <span class="credential">点击上传资质证件</span>
                        </div>
                        <div class="one">
                        <p class="one_name"><span>*</span>合作买家</p>
                            <el-input v-model="buyerCom_name"></el-input>
                        </div>
                    </div>
                </div>
            </div>

            <div class="middle">
                <div class="center">
                    <div class="show">
                        <h1>选填信息</h1>
                        <div class="one">
                        <p class="one_name"><span>*</span>入驻原因</p>
                        <el-checkbox v-model="checked1">已合作买家有上线要求</el-checkbox>
                        <el-checkbox v-model="checked2">寻找商机获得更多报价机会</el-checkbox>
                        <el-checkbox v-model="checked3">其他</el-checkbox>
                            <el-input class="el-input2" placeholder="填写内容"></el-input>
                        </div>
                        <div class="one">
                        <p class="one_name"><span>*</span>获知渠道</p>
                        <el-checkbox v-model="checked4">报价渠道</el-checkbox>
                        <el-checkbox v-model="checked5">已合作买家处</el-checkbox>
                        <el-checkbox v-model="checked6">其他供应商介绍</el-checkbox>
                        <el-checkbox v-model="checked7">其他</el-checkbox>
                            <el-input class="el-input2" placeholder="填写内容"></el-input>
                        </div>
                        <div class="one">
                        <p class="one_name"><span>*</span>服务诉求</p>
                        <el-checkbox v-model="checked8">精准商机</el-checkbox>
                        <el-checkbox v-model="checked9">其他</el-checkbox>
                            <el-input class="el-input2" placeholder="填写内容"></el-input>
                        </div>
                    </div>
                </div>
            </div>

            <div class="submit_button">
                <div class="center">
                <el-checkbox v-model="checked10"></el-checkbox>
                <span></span>我已阅读并同意<a>《定制服务系统运营商城服务协议（供应商版）》</a>
                </div>
                <button class="btn" @click="goToSettle">提交入驻信息</button>
            </div>


        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
export default {
    name: 'investment',
    data() {
        return {
            store_name: '上海光泰包装材料有限公司',
            store_regNo: '998564565621212121212',
            store_corporate: '张三',
            store_capital: '150万',
            uploadShow: true,
            license_img: '',
            load1: false,
            radio: '2',
            value1: '',
            value2: '',
            store_address: '泖港镇叶新公路5066号15-1栋',
            com_address: '泖港镇叶新公路5066号15-1栋',
            business_name: '张三',
            business_ph: '15921159457',
            business_corporate: '张三',
            radio1: '1',
            radio2: '1',
            radio3: '1',
            radio4: '1',
            buyerCom_name: '上海金陵电机股份有限公司',
            checked1: false,
            checked2: true,
            checked3: false,
            checked4: false,
            checked5: true,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: true,
            checked10: true          
        }
    },
    methods: {
        del(mark) {
				let image = '';
				if(mark === 0){
					image = this.license_img;
				}
				this.HTTP(this.$httpConfig.delPic, {
					fileName: image
				}, 'post').then((res) => {
					if (mark == 0) {
						this.uploadShow = true;
						this.license_img = '';
					}
				}).catch((res) => {
					alert(res.data.message)
				})	
			},
			addImg(e, s) {
				let that = this;   
				let file = e.target.files[0];
				let type = file.type;
				if (s == 1) {
					this.load1 = true;
				}
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
                        } 
                        else {
							if (res.data.status === 1) {
								if (s == 1) {
									that.license_img = res.data.data;
									that.uploadShow = false;
									that.load1 = false;
								}
                            } 
                            else {
								alert(res.data.message);
								if (s == 1) {
									that.load1 = false;
							}
						}
					}
				})
            },
            goToSettle() {
                this.$router.push({
					name:'investSettle'
				});
            }
    }
}
</script>

<style scoped>
.el-input {
    position: relative;
    display: inline-block;
    width: 60% !important;
}
.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    border: 1px solid #DCDFE6;
    width: 60%;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    border-radius: 4px;
    cursor: pointer;
}
.el-icon--right {
    float: right;
    padding-top: 12px;
}
.el-popper[x-placement^="bottom"] {
    margin-top: 5px !important;
}
.el-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    margin: 5px 0;
        margin-top: 5px;
        margin-left: 0px;
    background-color: #FFF;
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    width: 30%;
    margin-left: -102px !important;
}
.el-radio {
    color: #888888 !important;
    cursor: pointer;
    margin-right: 0px !important;
}
.el-range-editor.el-input__inner {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 3px 10px;
    margin-left: 20px !important;
    width: 44% !important;
}
.el-dropdown1 {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    border: 1px solid #DCDFE6;
    width: 30%;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    border-radius: 4px;
    cursor: pointer;
}
.el-input1 {
    position: relative;
    display: inline-block;
    width: 55% !important;
    margin-left: 20px;
}
.el-input2 {
    position: relative;
    display: inline-block;
    width: 40% !important;
    margin-left: 20px;
}
</style>

<style lang="less" scoped>
.center {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 0 40px 0;
}
.investment {
    .l {
		float: left;
	}
	
	.r {
		float: right;
	}
	
	#logo {
		width: 100%;
		height: 120px;
		.center {
			height: 104px;
			.Gongpin {
				height: 104px;
				img {
					margin-top: 20px;
					padding-right: 20px;
					height: 60px;
				}
			}
			.iphone {
				width: 275px;
				height: 104px;
				.hot {
					display: inline-block;
                    width: 105px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    margin-left: 20px;
                    border-left: 1px solid #DDD;
                    margin-top: 40px;
                    padding-left: 30px;
				}
				.shuzi {
					display: inline-block;
                    height: 120px;
                    line-height: 120px;
                    font-size: 22px;
                    color: #D53B3D;
                    font-weight: 500;
				}
			}
			.gold {
				margin-top: 34px;
                margin-left: 162px;
                img {
                    margin-top: 12px;
                }
			}
		}
    }
    .middle {
		background: #f1f1f1;
		padding-top: 20px;
		.center {
			background: #fff;
            overflow: hidden;
            .show {
                padding: 50px 40px 30px 40px;
                .one {
                    color: #555555;
                    padding-top: 30px;
                    .one_name {
                        padding: 0 0 15px 5px;;
                        span {
                        color: #FF0000;
                        padding-right: 10px;
                        }
                    }
                    .add-image {
                        position: relative;
                        background: url(../../../assets/img/shangchuan.png) no-repeat 50% 50%;
                        border: 1px dashed #ccc;
                        margin: 0 42px 0 31px;
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
                    .img_size {
                        color: #999999;
                        font-size: 12px;
                        margin: 135px 0 0 30px;
                    }
                    .dropdown_input {
                        margin: -40px 0 0 340px;
                    }
                    .two_name {
                        margin: -5px 0 15px 0;
                        color: #666666;
                        span {
                        color: #FF0000;
                        padding-right: 6px;
                        }
                    }
                    .credential {
                        color: #3A98FC;
                        padding-left: 30px;
                    }
                }
            }
        }
    }
    .submit_button {
        .center {
            background: #f1f1f1;
            overflow: hidden;
            padding: 40px 0 20px 40px;
            span {
                font-size: 14px;
                color: #333333;
                padding-left: 10px;
                a {
                    color: #1A6DF7;
                }
            }
        }
        .btn {
            cursor: pointer;
            width: 110px;
            height: 38px;
            border-radius: 4px;
            text-align: center;
            line-height: 38px;
            color: #fff;
            font-size: 14px;
            background: #D02629;
            margin-left: 390px;
        }
    }

}
</style>