<template>
    <div class="investSettle">
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
					<img src="../../../assets/img/12345.png" />
				</div>
			</div>
		</div>
        <div class="middle">
			<div class="center">
				<div class="Box">
					<img src="../../../assets/img/deng.png" /><span class="spa">注意事项</span> <span>您已提交申请，请耐心等待审核结果！</span>
				</div>
				<div class="show">
                    <p class="show_header">入驻信息</p>
                    <p class="show_name">上海光泰包装材料有限公司</p>
                    <p class="show_name">统一社会信用代码（或税号）：955656545454</p>
                    <p class="show_name">法人：张三</p>
                    <p class="show_name">注册资本：150万</p>
                    <p class="show_name">有效期：2011-12-02至2033-06-16</p>
                    <p class="show_name">注册地址：江苏 无锡 无锡市惠山区 无锡惠山经济开发区惠山大道1800号北门卫</p>
                    <p class="show_name">公司地址：江苏 无锡 无锡市惠山区 无锡惠山经济开发区惠山大道1800号北门卫</p>
                    <p class="show_name">联系人：张三</p>
                    <p class="show_name">联系人电话：15921159457</p>
                    <p class="show_name">经营模式：生产加工</p>
                </div>
            </div>
        </div>
        <foot-com></foot-com>
        <back-top></back-top>
    </div>
</template>

<script>
export default {
    name: 'investSettle',
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.center {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 0 40px 0;
}
.investSettle {
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
		padding: 20px 0;
		.center {
			background: #fff;
			overflow: hidden;
			.Box {
				height: 97px;
				border: 1px solid #bce8f1;
				background: #eff8ff;
				margin: 50px 200px 40px 40px;
				img {
					margin: 27px 16px 0 40px;
					float: left;
				}
				span {
					font-size: 12px;
					color: #b1b4b6;
					float: left;
					width: 70%;
				}
				.spa {
					color: #333;
					font-size: 14px;
					margin: 25px 0 3px;
				}
            }
            .show {
                padding: 0 50px 40px 50px;
                .show_header {
                    font-size: 14px;
                    color: #555555;
                    padding-bottom: 20px;
                }
                .show_name {
                    color: #888888;
                    line-height: 28px;
                }
            }
        }
    }
}
</style>