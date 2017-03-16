<template>
  <div>
  	<div class="header">
  		<a href="#/">
  			云图书
  		</a>
  	</div>
  	<router-view ></router-view>
    <div class="footer">
      <a href="#/">
      	<i class="iconfont icon-shu4 lg"></i>
      	<p>精品图书</p>
      </a>
      <a href="#/class">
      	<i class="iconfont icon-fenlei1 lg"></i>
      	<p>分类</p>
      </a>
      <a href="#/search">
      	<i class="iconfont icon-sousuo lg"></i>
      	<p>搜索</p>
      </a>
    </div>
  </div>
</template>
<script type="text/javascript">

  export default{
    
  }
</script>
<style lang="scss">
	$bg:#00cc66;
	.header{
		padding:.1rem;
		background-color:#fff;
		color:$bg;
		border-bottom:.01rem solid #f6f6f6;

	}
	.pd{
		padding:0 .1rem .6rem
	}
	.commont{
		width:100%;
	}
	.footer{
		background-color: $bg;
		position:fixed;
		bottom:0;
		width:100%;
		border-radius: .04rem .04rem 0 0;
		box-shadow: 0 .03rem .06rem 0 #96b97d;
		color:#fff;
		text-align:center;
		padding:.04rem 0;
		//弹性盒子
		display:flex;
		flex-flow:row nowrap;
		justify-content:space-between;
		>a{
			font-size:.14rem;
			flex:auto;
			width:25%;
			display: inline-block;
			overflow: hidden;
			.lg{
				font-size:.2rem;
				line-height: 1.2;
			}
		}
  }
</style>