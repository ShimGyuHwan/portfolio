$(function(){
var week = ["타짜 : 원아이드잭","이스케이프룸2(노 웨이 아웃)","리미트리스","나를 찾아줘","더 이퀄라이저"];
var text=""
$.each(week,function(a,b){

    $(".week_ul").append(`<li class="week_li"><span>`+b+`</span><img src="./contents/b13_`+(a+1)+`.png"></li>`)
    
    
    
})

$(".week_ul>li").bind({
   "mouseenter":function(){
    var node = $(this).index();
    
    $(".week_ul>li:eq("+node+")>span").css({

        "display" : "block"
    })

   },
   "mouseleave":function(){
    var node = $(this).index();
    
    $(".week_ul>li:eq("+node+")>span").css({

        "display" : "none"
    })

   }

})
    
})