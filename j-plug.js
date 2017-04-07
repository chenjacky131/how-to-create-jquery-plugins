~ function($) {
	/*	$.fn.person=function(options){//带参数的写法
			var defOpt = {
				name:'deit',
				age:18
			}
			if(!options.sex){
				options.sex = '';
			}
			var ops = $.extend(true, defOpt,options);
			return console.log("name:"+ops.name+" age:"+ops.age+" sex:"+ops.sex);	
		}*/
	/*$.fn.extend({//不带参数的写法
		go:function(){
			console.log('gogogo');
		}
	})*/
}(jQuery);
/*!
 ========== placeholder IE9-兼容 ==========
 */
~function($){
	$.fn.placeholder = function(options){
		var ops = $.extend({placeholderColor:'#f00'},options);
		$(this).each(function(){
			var defVal = $(this).attr('placeholder');
			var defCol = $(this).css('color');
			$(this).focus(function(){
				if($(this).val()==defVal){
					$(this).val('').css('color',defCol);
				}
			}).blur(function(){
				if($(this).val()==''){
					$(this).val(defVal).css('color',ops.placeholderColor);
				}
			}).trigger('blur');
		});
		return this;
	}
}(jQuery);
// 用法
$(document).ready(function(){
	     // placeholder兼容
     if (!('placeholder' in document.createElement('input'))) {
         $("input").placeholder({
            placeholderColor: "#999"
         });
         $("textarea").placeholder({
            placeholderColor: "#999"
         });
     }
});
