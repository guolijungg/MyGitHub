//头部导航隐藏菜单
$(function(){
    $('.right_top>ul>.sz').hover(function(){
        $(this).find('.submenu').toggle();
    });
    $('.right_top>ul>.grzx').hover(function(){
        $(this).find('.submei').toggle();
    });
    $('.right_top>.more').hover(function(){
        $(this).find('.gdcp').toggle();
    });
});
$(function() {
    $('.nav>.left_nav').click(function(){
        $('.content>.detail').show().siblings().hide();
        $('.content>.nav').show();
        $(this).addClass('cur');
        $('.right_nav>li').removeClass('cur');
        $('.nav>.left_nav>.ren').css('background-position','-144px 0');
    });
    $('.nav>.right_nav>li').click(function(){
        $('.nav>.left_nav').removeClass('cur');
        $('.nav>.left_nav>.ren').css('background-position','-15px 0');
    });
});
//内容部分的tab切换
$(function() {
    $('#nav li').each(function (index) {
        $(this).click(function () {
            $('#nav li').removeClass('cur');
            $(this).addClass('cur');
            //找到同样的div
            $(".content > div").hide().eq($('#nav li').index(this)+1).show();
        });
    });
});
//回到顶部
$("#top").hide();
$(function() {
    if(window.localStorage){
        document.body.style.backgroundImage=localStorage.getItem('bg-image');
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $("#top").fadeIn(300);
        } else {
            $("#top").fadeOut(300);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#top").click(function() {
        $('body,html').animate({scrollTop: 0},300);
    });
    //换肤
    $('.skin-img-list>li').hover(function(){
        var index=$(this).index()+1;
        $('.effect-con>img').attr('src','images/'+index +'.jpg');
    })
    $('.skin-img-list>li').click(function(){
        var index=$(this).index()+1;
        console.log(index);
        $('body,html').css({
            'background-image':'url(images/'+index+'.jpg)',
            'background-size':'cover',
        });
        $('.logo>img').attr('src','images/logo2.png');
        localStorage.setItem('bg-image','url(images/'+index+'.jpg)');
    })
    $('.settings>.pack-up').click(function(){
        $('.top>.peel').hide();
    })
    $('.left_top>.icons>#huanfu').click(function(){
        $('.top>#peel').show();
        event.stopPropagation();
    })
    $('body,html').click(function(event){
        var targetId = event.target ? event.target.id : event.srcElement.id;
        if(targetId !='peel'){
            $('.top>.peel').hide();
        }
    })
});