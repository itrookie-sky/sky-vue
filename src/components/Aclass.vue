<template>
	<div class="aclass">
		<p class="ac-title">{{title}}</p>
		<ul class="ac-books">
			<li class="ac-bookli" v-for="item in aClass">
				<a href="#/detail" @click="setAc($event.target)" :data-url="item.url"
					 :style="{backgroundImage:'url('+item.images.medium+')'}"></a>
				<p>{{item.title}}</p>
				<stars :num="item.rating.average" :style="starStyle"></stars>
			</li>
			
			
		</ul>
		<div class="ac-more" @click="getMore()">
			点击加载更多
		</div>
	</div>
</template>
<script type="text/javascript">
import Star from './model/Star';
import api from './API/api';
import config from './API/config';
export default {
	data(){
		return {
			title:'',
			aClass:[],
			starStyle:{
				'width':'100%',
				'overflow':'hidden'
			},
			acStart:0,
			cs:''
			
		}
	},
	components:{
		stars:Star
	},
	methods:{
		get(){
			this.title=localStorage.getItem('sky_book_csname');
		},
		setAc(e){
			let url = e.getAttribute('data-url');
			localStorage.setItem('sky_book_detail',url);
		},
		getAclass(t){
			
			let cs = localStorage.getItem('sky_book_csname');
			t.cs=cs;
			let obj ={
				start:t.acStart,
				count:12,
				tag:cs,
				fields:"url,rating,images,title"
			};
			api.get(t,config.search,obj,function(resp){
				console.log(resp)
				t.aClass=resp.books;
			})
		},
		getMore(){
			let t=this;
			t.acStart+=12;
			console.log(t.acStart)
			let obj = {
				start:t.acStart,
				tag:t.cs,
				count:12,
				fields:"url,rating,images,title"
			}
			api.get(t,config.search,obj,function(resp){
				
				t.aClass=t.aClass.concat(resp.books);
				
			})
		}

	},
	mounted () {
		var _this=this;
		_this.get();
		_this.getAclass(_this);

	}
}
</script>
<style lang="scss">
	.aclass{
		width:100%;
		padding:0 .1rem .6rem;
		color:#333;
		.ac-title{
			color:#666;
			padding:.12rem 0;
		}
		.ac-books{
			width:100%;
			overflow:hidden;
			display:flex;
			flex-flow:row wrap;
			align-content:space-around;
			justify-content:space-around;
			border-bottom:.01rem solid #f8f8f8;
			.ac-bookli{
				flex:0 0 .8rem;
				overflow:hidden;
				margin-bottom:.2rem;
				>a{
					display:block;
					width:100%;
					height:1.2rem;
					background-color:#cc00aa;
					background-position:center;
					background-repeat:no-repeat;
					background-size:cover;

				}
				>p{
					overflow:hidden;
			    white-space:nowrap;
			    text-overflow:ellipsis;
					text-align:center;
					
					font-size:.12rem;
					padding:.1rem 0;
				}
			}
		}
		.ac-more{
			text-align:center;
			color:#00cc66;
			padding:.16rem 0;
			border-radius:.06rem;
			box-shadow:0 0 .06rem 0 #e8e8e8;
			transition:all .08s ease;
		}
		.ac-more:active{
			box-shadow:0 0 0 0 rgba(0,0,0,0);
		}
	}
</style>