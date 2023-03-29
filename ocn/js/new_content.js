var data =[["게임덱후들(유민상,김준현)", "44층 지하던전", "켠왕켜놩(켠김에왕까지-허준)", "핑거게임(신동엽, 장도연)",
 "플레이어2 (이수근,이진호, 이용진,이이경, 이진호, 정혁, 황치열, 김동현)"],
 ["./contents/mini1-black.png","./contents/mini2-black.png","./contents/mini3-black.png","./contents/mini4-black.png","./contents/mini5-black.png"]
]/*
var i;
var ul = document.getElementById("nc_ul")
data[0].forEach(function(a,b){
    

    ul.appendChild("li")
})
*/
$(function(){

data[0].forEach(function(a,b){
    
    
    console.log(b,typeof(data[1][b]))
    $(".nc_ul>li").eq(b).css({

        "background-image":`url("`+data[1][b]+`")`
    })
    $(".nc_ul>li").eq(b).attr("title",a)
    

 
})

$(document).on("mouseenter",".nc_ul>li",function(){
    var node = $(this).index();
    $(this).css({

        "background-image":`url("./contents/mini`+(node+1)+`-color.png")`
    })
});
$(document).on("mouseleave",".nc_ul>li",function(){
    var node = $(this).index();
    $(this).css({

        "background-image":`url("./contents/mini`+(node+1)+`-black.png")`
    })
});


})
