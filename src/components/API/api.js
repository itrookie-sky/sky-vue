
export default {
	urlconcat(obj){
		var  a= []
		for(let key in obj){
			a.push(key+"="+obj[key])
		}
		return '?'+a.join('&');
	},

	get (t,url,params,cb) {
		let _this = this;
    t.ajax({
    	url:url+_this.urlconcat(params),
    	type:'get',
    	async:false,
    	dataType:'jsonp',
    	success:function(data){
    		cb&&cb(data);

    	},
    	error:function(e){
    		console.log(e);
    	}
    })
  }
}