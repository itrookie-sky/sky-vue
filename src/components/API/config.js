import cs from './classes';
var classes=cs.cs;
export default {
	search:"https://api.douban.com/v2/book/search",
	bookcl_kh:{
		tag:classes[0],
	    start:0,
	    count:8,
	    fields:"url,rating,images,title"
	},
	bookcl_qg:{
		tag:classes[1],
		start:0,
		count:8,
		fields:"url,rating,images,title"
	},
	bookcl_xs:{
		tag:classes[2],
		start:0,
		count:8,
		fields:"url,rating,images,title"
	},
	bookcl_sb:{
		tag:classes[3],
		start:0,
		count:8,
		fields:"url,rating,images,title"
	}
		
	
}