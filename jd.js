$(function(){
         	var scroll=$("#scroll");
         	var width=scroll.width();
         	var oul=$("#scroll ul");
         	var len=$("#scroll li").length;
         	var aPage=$("#btn a");
         	var num=0;
         	var timer=null;
            oul.css({"width":width*(len+1)});
            aPage.each(function(index){
            	$(this).click(function(){
            		bannerRun(index);
            	});
            });
            function bannerRun(index){
            	num=index;
            	aPage.removeClass("active");
            	aPage.eq(index).addClass("active");
            	oul.stop().animate({"left":-index*width},600);
            }
            autoRun();
            function autoRun(){
            	timer=setInterval(function(){
            		if(num==len-1){
            			less();
            			num=0;
            		}else{
            			num++;
            			bannerRun(num);
            		}
            	},2000);
            }
            function less(){
            	oul.append($("#scroll li:first").clone());
            	var nowLeft=-len*width;
            	oul.stop().animate({"left":nowLeft},function(){
            		oul.css({"left":0});
            		$("#scroll li:last").remove();
            	});
            	aPage.removeClass("active").eq(0).addClass("active");
            }
            scroll.hover(function(){clearInterval(timer);},function(){autoRun();});
         });