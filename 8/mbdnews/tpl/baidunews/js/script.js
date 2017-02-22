$(function() {
    var i = 0;
    var t = setInterval(move, 1500);
    function move(){
        i++;
        if(i==3){
            i=0;
        }
        $(".news>ol>li").eq(i).addClass("cur").siblings().removeClass("cur");
        $(".news_img li").eq(i).addClass("cun").siblings().removeClass("cun");
        $(".news_img li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $(".news").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,1500);
    })
});
