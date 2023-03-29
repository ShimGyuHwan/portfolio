function logo(){

    location.href="https://ocn.cjenm.com/ko";
}

function menu(m){

   var ol_menu =document.getElementById("ol_menu");
   m.forEach(function(a,b){
    var text =a.main_menu;
    var li1 = document.createElement("li")
    li1.className="li_css"
    li1.append(text);
    ol_menu.append(li1);       
   
    a.menu_list.forEach(function(c,d){
    var li2 = document.createElement("li");
    var ul1 = document.createElement("ul");
    ul1.className="ul_menu2"
    ul1.innerHTML=`<a href=`+a.menu_link[d]+`><li>`+c+`</li></a>`
    li1.append(ul1);          

    })
   })
  


}

$(function(){
    $("#ol_menu > li").mouseenter(function(){
    var $node = $(this).index();
        $("#ol_menu > li:eq("+$node+") > ul").slideDown(500);
    });
    $("#ol_menu > li").mouseleave(function(){
        var $node = $(this).index();
            $("#ol_menu > li:eq("+$node+") > ul").slideUp(500);
        });
});




