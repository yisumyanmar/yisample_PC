<template>
	<div class="head">
		<common-header></common-header>
		<nav>
			<router-link to="/home"><img class="logo" src="../assets/img/logo-yi.png"/></router-link>
			<p class="buyCarText">购物车</p>
			<!-- <div class="middle">
				<div class="inp">
					<span class="dianpu">
						<el-dropdown size="small" @command="handleCommand">
					<span class="el-dropdown-link">
					{{search_type}}
					<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="store">店铺</el-dropdown-item>
					<el-dropdown-item command="goods">宝贝</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
					</span>
					<input
						type="text"
						v-model="search_value"
						@keyup.enter="search"
					/>
					<span class="search" @click="search">搜索</span>
				</div>
				<ul>
					<li v-for="(value, index) in keyWords" :key="index">
						<a @click="hotSearch(value)">{{
							value.hot_words
						}}</a>
					</li>
				</ul>
			</div> -->
		</nav>
	</div>
</template>
<script>

	export default {
		data() {
			return {
				// arr0:['珠宝','紫砂壶','苏绣','贡酒','翡翠','字画','珠宝','紫砂壶','苏绣','贡酒'],
				// on:'',
				// isactive:'',
				// no:true,ok:false,
				// user_name:'',
				// search_type:'宝贝',
				// currentSearch: "",
				// search_value: "",
				// keyWords: [],
				// searchTypeRouter: ["/goodsSearch", "/storeSearch"],
				// currentIndex: 0,
			}
		},
		created() {
        //搜索类型
        // this.currentSearch = this.$route.query.hasOwnProperty("p")
        //     ? this.searchType[this.$route.query.p]
        //     : this.searchType[0];

        // this.search_value = this.$route.query.title;

        // this.getClass();
        // //导航
        // this.HTTP(this.$httpConfig.nav, {}, "post", false)
        //     .then(res => {
        //         this.items = res.data.data;
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
    },
		mounted(){
			// this.getKeySearchList();
		},
	
		methods:{
		// getKeySearchList() {
        //     this.HTTP(this.$httpConfig.getKeyWordsList, {}, "post")
        //         .then(res => {
        //             sessionStorage.setItem('keyWord',res.data.data);
        //             console.log(sessionStorage.keyWord,441122);
        //             this.keyWords = res.data.data;
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // },
		// handleCommand(command) {
		// 		if(command=="store"){
		// 		this.search_type = '店铺';
		// 		}else{
		// 		this.search_type = '宝贝'
		// 		}
		// },
		// search() {
        //     if (this.search_value === this.$route.query.title) {
        //         this.$message("页面已加载");
        //         this.$router.replace({
        //             path: this.searchTypeRouter[this.currentIndex],
        //             query: {
        //                 type: this.currentIndex,
        //                 title: this.search_value
        //             }
        //         });
        //     } else {
        //         this.$router.replace({
        //             path: this.searchTypeRouter[this.currentIndex],
        //             query: {
        //                 type: this.currentIndex,
        //                 title: this.search_value
        //             }
        //         });
        //     }
		// },
		//  hotSearch(value) {
        //     this.$router.push({
        //         path: this.searchTypeRouter[0],
        //         query: {
        //             title: value.hot_words,
        //             class_id: value.goods_class_id,
        //             types: "hotSearch",
        //             type: 0
        //         }
        //     });
        // },
		// 	open(){
		// 		this.on=true;
		// 		this.isactive=true;
		// 	},
		// 	close(){
		// 		this.on=null;
		// 		this.isactive=null;
		// 	}		
		}
	}
</script>
<style lang="less" scoped>
	// .l{float: left;}
	// .r{float: right;}
	// header{
	// 	background: #f7f7f7;
	// 	border-bottom: 1px solid #eee;
	// }
	// .header{
	// 	width:1200px;
	// 	margin: 0 auto;
	// 	height:38px;
	// 	.divOne{
	// 		line-height:38px;
	// 		color:#9b9b9b;
	// 		font-size: 12px;
	// 		img{margin: 0 12px;}
	// 		.divTwo{
	// 			margin-left: 20px;
	// 			.shanghai{
	// 				color: #e1b876;
	// 			}
	// 			a{color:#9b9b9b;margin-left: 3px;}
	// 		}
			
	// 	}
	// }
	// .phone{
	// 	line-height: 38px;		
	// 	span{
	// 		font-size: 20px;
	// 		color: #bf9e57;
	// 	}
	// }
	// .ul{
	// 	margin-top: 3px;
	// 	margin-right: 18px;
	// 	.active{background: #fff url(../assets/img/up.jpg) no-repeat top 15px right 5px !important;}
	// 	.li{
	// 		width: 78px;
	// 		height:29px;
	// 		position: relative;			
	// 		text-align: center;
	// 		background: url(../assets/img/down010.png) no-repeat top 15px right 5px;
	// 		cursor:pointer;
	// 		&:hover a{color:red;}
	// 		a{
	// 			color: #656565;
	// 			font-size:12px;
	// 			float: left;
	// 			width: 100%;
	// 			height:12px;
	// 			line-height: 12px;
	// 			margin-top: 10px;
				
	// 			border-right: 1px solid #ccc;	
				
	// 		}			
	// 		.uls{
	// 			width: 79px;
	// 			background: #fff;
	// 			position: absolute;
	// 			top:29px;
	// 			left:0;
	// 			border:1px solid #f1f1f1;
	// 			border-top: 0;
	// 			li{
	// 				width: 100%;
	// 				height: 24px;
	// 				color: #656565;
	// 				font-size:12px;
	// 				line-height: 24px;
	// 			a{border-right:0;
	// 					color: #656565;
	// 					font-size:12px;
	// 				}
	// 				&:hover a{color:red;}
	// 			}
	// 			li:last-child{margin-bottom:5px;}
	// 		}
			
			
	// 		.afirst{border-left:1px solid #ccc;}
	// 		.alast{border-right:0;}
			
	// 	}
	// }
	// .youhello{
	// 	line-height: 38px;font-size: 12px;
	// 	.user_name{
	// 		margin-right: 5px;
	// 	}
	// 	.jumpTo{
	// 		color: #333333;
	// 	}}

	nav {
		width: 1200px;
		height:105px;
		margin: 0 auto;
		position: relative;
			.logo{
				margin-top: 26px;
				float: left;
			}
			span{
				border-left: 1px solid #DDDDDD;
			}
			.buyCarText{
				font-size: 36px;
				color: #333333;
				position: absolute;
				top: 35px;
				left: 260px;
				border-left: 1px solid #DDDDDD;
				padding-left: 30px;
				// height: 40px;
				}
			// .middle{
			// 	margin-top:35px;
			// 	width:540px;
			// 	position: absolute;
			// 	right: 0;
			// 	cursor: pointer;
			// 	.inp{				
			// 		width:540px;
			// 		height: 34px;
			// 		float: left;
			// 		padding: 0;
			// 		.dianpu{
			// 			height:34px;
			// 			width: 68px;
			// 			float: left;
			// 			border-right:1px solid #ccc;
			// 			line-height: 32px;
			// 			border-bottom:2px solid #d02629;
			// 			border-top: 2px solid #d02629;
			// 			border-left:2px solid #d02629;
			// 			span{margin-left:10px;}
			// 			i{margin-left:2px;}
			// 		}
			// 		input{
			// 			width:385px;
			// 			height:100%;
			// 			border-bottom:2px solid #d02629;
			// 			border-top: 2px solid #d02629;
			// 			border-right:2px solid #d02629;
			// 			float: left;
			// 			padding-left: 8px;
			// 		}
			// 		.search{
			// 			width:75px;
			// 			height:100%;
			// 			float: left;
			// 			background-color: #d02629;
			// 			color: #fff;
			// 			text-align: center;
			// 			line-height: 34px;
			// 		}	
			// 	}
			// 	ul{
			// 		float: left;
			// 		margin-top: 8px;
			// 		li{
			// 			float: left;
			// 			margin-right: 14px;
			// 			cursor:pointer; 
			// 			&:hover a{color:red;}
			// 			a{color: #ababab;}						
			// 		}
			// 	}
			// }
	}	
</style>