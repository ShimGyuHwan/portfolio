function onair(data){
var i;
var onair_list = document.getElementById("onair_list");
var onair_list2 = document.getElementById("onair_list2");
var html =""
var html2=""
data.forEach(function(a,b){
    if(b<8){
   html+=`<li title="`+a.new_pg+`"><img src="`+a.new_thumb+`"></li>`
    }
    else{
    html2+=`<li title="`+a.new_pg+`"><img src="`+a.new_thumb+`"></li>`
    }

})

onair_list.innerHTML=html;
onair_list2.innerHTML=html2;


}


$(function(){

    var cnt=0
$("#more").click(function(){
    if(cnt==0){
        $("#onair_list").fadeOut(function(){
            $("#onair_list2").fadeIn(400)
        });
        
        cnt++
    }
    else if(cnt==1){
        $("#onair_list2").fadeOut(function(){
            $("#onair_list").fadeIn(400)
        });
        cnt=0;
    }
})


$(".onair_banner").click(function(){

   window.open("https://biz.skbroadband.com/")
})



})


