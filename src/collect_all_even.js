'use strict';
//alert("before dawn");
function collect_all_even(collection) 
{
	//alert("in this function you will hear 3 short dialogs");
	var fin_arr = [];
	var i = 0;
	var len = collection.length;
	//alert("len:" + len);
	for(i = 0; i < len; ++i)
	{
		if(collection[i] % 2 == 0)
		{
			fin_arr.push(collection[i]);
		}
		
	}
	//alert("fin_arr:" + fin_arr);
	return fin_arr;

//在这里写入代码
}
//var collection = [0,1,2,3,4,5,6,7,8];
//collect_all_even(collection);
//alert("until dawn");
module.exports = collect_all_even;
