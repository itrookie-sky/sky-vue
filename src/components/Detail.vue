<template>
	<div class="detail">
		<h2 class="dt-title">{{bookdetail.title}}</h2>
		<div class="dt-book ">
			<div class="dtb-left ">
				<stars :num="stars" :style="{'margin':0,'font-size':'.14rem'}"></stars>
				<p>
					<span v-for="item in bookdetail.author" >
						{{item}}
					</span>
				</p>
				<p>
					{{chuban}}
        </p>
				
			</div>
			<div class="dtb-right" :style="{background:'url('+bookdetail.images.medium+') no-repeat center'}">
				
			</div>
		</div>
		<div class="dt-buy">
			<a href="javascript:;">
					在哪里可以买到这本书?
			</a>
			<span class="ui-fr">{{bookdetail.price}}</span>
		</div>
		<a href="javascript:;" class="dt-read">
			点击阅读
		</a>
		<section class="dt-content">
			<h4>{{bookdetail.title+'的内容简介'}}</h4>
			<p>
				{{bookdetail.summary}}
			</p>
		</section>
		<div class="dt-tags">
			<span class="dt-col" :data-count="item.conunt" v-for="item in bookdetail.tags">
				{{item.title}}
			</span>
			
		</div>
	</div>
	
</template>
<script type="text/javascript">
import Star from './model/Star';
import api from './API/api';
export default {
	data () {
		return {
			bookdetail:{},
			stars:null
		}
	},
	computed:{
		chuban:function(){
			var b =this.bookdetail;
			return b.publisher+'/'+b.pages+'页/'+b.price+'/'+b.binding+'/'+b.pubdate
		}
	},
	methods:{
		getUrl(t){
			var _this=this;
			if(!localStorage.getItem('sky_book_detail'))return;
			var url = localStorage.getItem('sky_book_detail')
			api.get(t,url,null,function(resp){
				console.log(resp)
				_this.bookdetail=resp;
				_this.stars=resp.rating.average;
			})
		} 
	},
	
	components:{
		stars:Star
	},
	mounted () {
		this.getUrl(this);
	}


}
</script>
<style lang="scss">
	.detail{
		padding:0 .2rem .6rem;
	}
	.dt-title{
		line-height: 1.8;
		margin-top:.1rem;
		
	}
	.dt-book{
		width:100%;
		color:#888;
		display:flex;
		flex-wrap:nowrap;
		padding-bottom:.25rem;
		border-bottom:.01rem solid #f8f8f8;
		.dtb-left{
			flex:2 1 50%;
			>p{
				line-height:1.8;
			}
		}
		.dtb-right{
			background-color:#e84;
			background-size:cover;
			flex:0 0 .9rem;
			height:1.2rem;
		}
	}
	.dt-buy{
		font-size:.14rem;
		padding:.15rem 0;
		border-bottom:.01rem solid #f8f8f8;
		>a{
			color:#00cc66;
		}
	}
	.dt-read{
		text-align: center;
		display:block;
		margin-top:.15rem;
		color:#00cc66;
		padding:.1rem 0;
		line-height:1.2;
		border:.01rem solid #00cc66;
		border-radius:.04rem;
		
	}
	.dt-content{
		width:100%;
		padding:.15rem 0;
		font-size:.14rem;
		border-bottom:.01rem solid #f8f8f8;
		>h4{
			color:#aaa;
			padding:.15rem 0;
		}
		>p{
			line-height:1.5;
		}
	}
	.dt-tags{
		width:100%;
		overflow:hidden;
		display:flex;
		flex-flow:row wrap;
		margin-top:.15rem;
		>span{
			flex:1 0 20%;
			
			padding:.1rem .16rem;
			background-color:#fff;
			margin:0 .12rem .12rem 0;
			border-radius:50%/.04rem;
			box-shadow:0 .03rem .06rem 0 #e8e8e8;
		}
	}
	.dt-col{
		color:#00cc66;
		font-size:.12rem;
	}
</style>