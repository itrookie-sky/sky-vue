<template>
	<div class="pd">
    <books :title="booklist.kh"
           :books="book.kh">
    </books>
    <books :title="booklist.qg"
           :books="book.qg">
    </books>
    <books :title="booklist.xs"
           :books="book.xs">
    </books>
    <books :title="booklist.sb"
           :books="book.sb">
    </books>
	
	</div>
</template>
<script type="text/javascript">
import api from './API/api';
import config from './API/config';
import Books from './model/Books';

	export default {
   data () {
      return {
        //图书分类
        booklist:{
          kh:'科幻',
          qg:'情感',
          xs:'小说',
          sb:'随笔'
        },
        book:{
          kh:[],
          qg:[],
          xs:[],
          sb:[]
        }
      }
    },
    components:{
      books:Books
    },
    mounted () {
      var _this=this;
      var url = config.search;
      //分类请求
      api.get(_this,url,config.bookcl_kh,function(resp){
          console.log(resp);
          _this.book.kh=resp.books;
          
      });

     api.get(_this,url,config.bookcl_qg,function(resp){
          console.log(resp);
          _this.book.qg=resp.books;
      });

     api.get(_this,url,config.bookcl_xs,function(resp){
          console.log(resp);
          _this.book.xs=resp.books;
      });

     api.get(_this,url,config.bookcl_sb,function(resp){
          console.log(resp);
          _this.book.sb=resp.books;
      });
     
    }
      
  
}
</script>
<style lang="scss">
	
</style>