<template>
	<div class="class">
		<div class="cl-list">
			<a href="#/aclass" v-for="item in col" class="cl-li" v-color :data-cs="item" @click="setlocal($event.target)">
				{{item}}
			</a>
		</div>
	</div>
</template>
<script type="text/javascript">
import cs from './API/classes';
	export default {
		data () {
			return {
				col:cs.cs
			}
		},
		directives:{
			color:{
				bind(el){
					function double(num){
						return num<10?num=num+'0':num;
					}
					var  r= double(Math.floor(Math.random()*100));
					var  b= double(Math.floor(Math.random()*100));
					el.setAttribute('style',"border-color:#"+r+'ef'+b+";color:#"+r+'ff'+b+";")
				}
			}
		},
		methods:{
			setlocal(e){
				localStorage.setItem('sky_book_csname',e);

			}
		}
		
	}
</script>
<style lang="scss">
	.class{
		padding:.1rem 0 .6rem .1rem;
		.cl-list{
			width:100%;

			display:flex;
			flex-flow:row wrap;
			justify-content:space-between;
			align-content:space-around;
			.cl-li{
				text-align:center;
				flex:1 0 30%;
				padding:.12rem 0;
				border:.01rem solid #00ffcc;
				border-radius:.04rem;
				margin:0 .12rem .12rem 0;
				color:#f40;
			}
			.cl-li:active{
				background-color:#f9f9f9;
			}
		}
	}
</style>