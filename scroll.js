$(document).ready(function() {
    var x = $(".about").position();

    $(".rlink").mouseenter(function() {
        $(this).css("color", "gray");

    });
    $(".rlink").mouseleave(function() {
        if($(window).scrollTop()>=x.top-90){
        $(this).css("color", "black");
        }else{
        $(this).css("color", "white");
        }
    });








    $(window).scroll(function(){

    
        if($(window).scrollTop()<=x.top-85){
            $(".rlink").css("color","white");
        }else{
            $(".rlink").css("color","black");
        }
    

    if($(window).scrollTop()<=x.top-116){
        $(".nav").css("background-color","rgb(28, 28, 28)");
    }else if($(window).scrollTop()>=x.top-115&&$(window).scrollTop()<=x.top-12){
        $(".nav").css("background-color","transparent");

    }else{
        $(".nav").css("background-color","white");
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
