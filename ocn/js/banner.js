function banner(data){
    
    
    var html="";
    var ul_banner = document.getElementById("ul_banner");
    data.banners.forEach(function(a,b){
        html+=`<li class=li`+b+`><a href=`+a[1]+`><img src="`+a[0]+`"><a></li>`
    
    })
    ul_banner.innerHTML=html;
}

$(function(){

    
    var len = $("#ul_banner>li").length;
    var banner_width = $("#ul_banner>li").eq(0).width();
    var timer ="";
    var total = len *banner_width;
    var node=0;
    var cnt=0;
    
    for(n=0;n<len;n++){     //디스크 출력 
        $(".disc").append(`<li></li>`)
        
    }
    $("#ul_banner").css({

        "width":total
    })
    
    $.fn.banner = function(){   //배너 애니메이션
        
        clearTimeout(timer); 
        if(cnt==0){
        $("#ul_banner").animate({
                "left":-banner_width+"px"
        },800,function(){
           
            var copy = $("#ul_banner>li").eq(0).clone();
           
            $("#ul_banner>li").eq(0).remove();
           
            $("#ul_banner").append(copy);
           
            $("#ul_banner").css({
                "left":0
            })
            timer=setTimeout($.fn.banner,5000);      
        });}

        else if(cnt==1){
            cnt=0;
            timer=setTimeout($.fn.banner,5000);
        }
    }
        timer =setTimeout($.fn.banner,5000);

            $("#ul_banner").bind({

                "mouseenter" : function(){
                    clearTimeout(timer);
                },
                "mouseleave": function(){
                    $.fn.banner();
                    cnt=1;
                }
            })
      
  
$("#left").click(function(){    //left 버튼
    node--;
    var last = len-1
    if(node== -1){node=last}
    var z = $("#ul_banner>li").eq(last).clone();
    $("#ul_banner>li").eq(last).remove();
    $("#ul_banner").prepend(z);
    $("#ul_banner").css({
      
        "left":-banner_width+"px"
      
})
$("#ul_banner").stop().animate({
    "left":0

},800)

})

$("#right").click(function(){ //right 버튼
    node++;
    if(node==len){node=0};
   $("#ul_banner").stop().animate({
     "left":-banner_width+"px"
     
   },800,function(){
     var z =$("#ul_banner>li").eq(0).clone();
     $("#ul_banner>li").eq(0).remove();
     $("#ul_banner").append(z);
     $("#ul_banner").css({

         "left":"0"
       
 })
   })
})
//디스크 움직파트
//"background-color": "rgba(255,255,255,0.5)"

$("#disc>li").eq(0).css({
    "background-color":"rgba(255,255,255,0.5)"
})
var node=0;
$.fn.disc=function(){
   clearTimeout(timer)
    var n=0
   node++;
   if(node == len){node=0;}
   while(n<ea){
    $("#disc >li").eq(n).css({
        "background-color":"rgba(255,255,255,1)"
    })
    n++
   }
   $("#disc >li").eq(node).css({
    "background-color" :"rgba(255,255,255,0.5)"
   })
   

  timer = setTimeout($.fn.disc,5000)
}
timer = setTimeout($.fn.disc,5000)




})