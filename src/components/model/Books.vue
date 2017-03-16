<template>
	<div class="bookclass">
		<h4>
     {{title}} 
    </h4>
    <ul class=" ui-cl ui-cl-scl b-list" >
      <li v-for="item in books"  :data-isbn="item.isbn10">
        <a href="#/detail" class="book-bg" :style="{backgroundImage:'url('+item.images.medium+')'}" :data-id="item.url"  @click="toDetail($event.target)"></a>
        <p>{{item.title}}</p>
        <p class="sm">
          <stars :num="item.rating.average" ></stars>

        </p>
      </li>
    </ul>
	</div>
</template>
<script type="text/javascript">
import Star from './Star';
	export default {
		props:['title','books'],
		components:{
			stars:Star
		},
    methods:{
      toDetail (e) {
        var  a=e.getAttribute('data-id');
        localStorage.setItem('sky_book_detail',a);


      }
    }
	}
</script>
<style lang="scss">
	.bookclass{
    width:100%;
    overflow:hidden;
    >h4{
      padding:.1rem 0;
      color:#555;
      text-indent:.1rem;
    }
    .b-list{
     
      white-space: nowrap;
      overflow-x:auto;
      overflow-y:hidden;
    
      >li{
        text-align: center;
        display:inline-block;
        margin-left:.1rem;
        width:1rem;
        >p{
          line-height:1.8;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
      }
      .sm{
        font-size:.12rem;
      }
      .book-bg{
        display:block;
        width:1rem;
        height:1.4rem;
        background-color: #00ffcc;
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
        margin:0 auto;
      }
    }

  }
</style>