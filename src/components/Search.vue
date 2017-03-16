<template>
	<div class="search">
		<form>
			<div class="search-head">
				<input type="text" name="search" class="sh-in" placeholder="请输入关键字" v-model="search_q" maxlength="28">
					<i class="iconfont icon-sousuo" @click="getlist()"></i>
			</div>
		</form>
			<ul class="search-books" v-show="booklist.length>0">
				<li class="sb-li" v-for="item in booklist">
					<a href="#/detail" :data-url="item.url" class="sb-left" @click="setItem($event.target)" :style="{'background-image':'url('+(item.images?item.images.medium:'')+')'}"></a>
					<div class="sb-right">
						<p class="sb-r-title">
							{{item.title}}
						</p>
						<stars :num="item.rating?item.rating.average:''"></stars>
						<p class="sb-r-author" v-show="item.author[0]">
							{{item.author[0]}}
						</p>

						<p class="sb-r-text" v-show="item.author[0]">
							{{item.author_intro}}
						</p>
					</div>
				</li>
			</ul>
			<div class="tishi" v-show="unfind">没有数据</div>
		

	</div>
</template>
<script type="text/javascript">
import cf from './API/config';
import star from './model/Star';
import api from './API/api';
	export default{
		data () {
			return {
				search_q:'',
				booklist:[],
				unfind:false
			}
		},
		components:{
			stars:star
		},
		computed:{
			key:function() {
				return this.search_q.trim().replace(/\s/g,'');
			}
		},
		methods:{
			getlist(){
				let t =this;
				if(!t.key)return;
				let key = t.key;
				let obj = {
					q:t.key,
					start:0,
					count:20,
					fields:"url,rating,images,title,author,author_intro"
				}
				api.get(t,cf.search,obj,function(resp){
					console.log(resp);
					t.search_q='';
					t.booklist=resp.books;
					t.unfind=!(resp.books.length);
				})
			},
			setItem(e){
				let a=e.getAttribute('data-url');
				localStorage.setItem('sky_book_detail',a);
			}
		}
	}
</script>
<style lang="scss">
	.search{
		width:100%;
		padding:0 0 .6rem .1rem;
		overflow:hidden;
		.search-head{
			display:flex;
			flex-flow:row nowrap;
			justify-content:space-around;
			margin:.1rem .1rem .1rem 0;
			padding:.04rem .05rem;
			text-algin:center;
			border-radius:.04rem;
			box-shadow:0 .01rem .03rem 0 #efefef;
			background-color:#00dd66;
			color:#fff;
			.sh-in{
				border:none;
				flex:1 0 85%;
				height:.3rem;
				font-size:.16rem;
				text-indent:.1rem;
			}
			::-webkit-input-placeholder{color:#555;opacity:.3;}
			.iconfont{
				text-align:center;
				font-size:.2rem;
				line-height:.3rem;
				flex:1 0 10%;
			}
		}
		.search-books{
			width:100%;
			margin-top:.16rem;
			.sb-li{
				width:100%;
				padding:.06rem 0 .06rem .06rem;
				margin-bottom:.12rem;
				border-radius:.04rem;
				box-shadow:0 0 .06rem 0 #e8e8e8;
				display:flex;
				flex-flow:row nowrap;
				justify-content:space-start;
				
				.sb-left{
					flex:0 0 .8rem;
					height:1.2rem;
					background-color:#f40;
					background-position:center;
					background-size:cover;
					background-repeat:no-repeat;
				}
				.sb-right{
					flex:2 0 .8rem;
					width:50%;
					padding-left:.14rem;
					padding-right:.1rem;
					>p{
						width:100%;
						overflow-wrap:break-word;
					}
					.sb-r-author,.sb-r-title{
						line-height:2;
						font-size:.14rem;
						overflow:hidden;
				    white-space:nowrap;
				    text-overflow:ellipsis;
					}
					.sb-r-text{
						line-height:1.4;
						font-size:.12rem;
						display: -webkit-box;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    -webkit-line-clamp: 4;
				    -webkit-box-orient: vertical;  
					}



				}
			}
		}
		.tishi{text-align:center;padding-right:.1rem;}
	}
</style>