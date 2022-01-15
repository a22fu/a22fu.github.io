$(document).ready(function() {

$(window).scroll(function(){
    var x = $(".about").position();

    


    if($(window).scrollTop()>=x.top-43){
        $(".rlink").css("color","black");
    }else{
        $(".rlink").css("color","white");

    }


    if($(window).scrollTop()<= 50){
    
    if($("#scrolll").css("opacity")==1){

   }else{
    $("#scrolll").fadeTo(100, 1);
    $(".scroll").css("pointer-events","auto");
    setTimeout(100);
   }
}else{
    if($("#scrolll").css("opacity")==0){

    }else{
    $("#scrolll").fadeTo(100,0);
    $(".scroll").css("pointer-events","none");

    setTimeout(100);
}
}


});
});
