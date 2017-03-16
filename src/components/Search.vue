<template>
	<div class="search">
		<form>
			<div class="search-head">
				
					<input type="text" name="search" class="sh-in" placeholder="请输入关键字">
					<i class="iconfont icon-sousuo"></i>
				
			</div>
		</form>
	</div>
</template>
<style lang="scss">
	.search{
		width:100%;
		padding:0 .1rem .6rem;
		overflow:hidden;
		.search-head{
			display:flex;
			flex-flow:row nowrap;
			justify-content:space-around;
			margin:.1rem auto;
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
	}
</style>