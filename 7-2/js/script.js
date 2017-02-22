$(function(){
    //顶部导航的二级菜单
    $('nav>ul>li').hover(function(){
        $(this).find('div').toggle();
    });
    //APP的二级菜单
    $('.icon-box>.app-icon').hover(function(){
        $(this).find('.submenu').toggle();
    });
    //个人信息的二级菜单
    $('.icon-box>.personal').hover(function(){
        $(this).find('.submei').toggle();
    });
    //搜索图标的事件
    $('.search-icon').click(function(){
        $('#searchbox').addClass("scale");
    });
    $('.close-icon').click(function(){
        $('#searchbox').hide();
        $('#searchbox').removeClass("scale");
    });
});
$(function() {
    //顶部导航的二级菜单
    $('.aside_yd>ul>li').hover(function () {
        $(this).find('.list_show').toggle();
    });
    //块级摆放内容隐藏部分
    $('.aside>.aside_xia>li').hover(function(){
        $(this).find('span').toggle();
    })
    $('.main-con>ul>li').hover(function(){
        $(this).find('.hide-ico').toggle();
        $(this).find('p').slideToggle(100);
        $(this).find('.zhongji').slideToggle(100);
        $(this).find('.people').slideToggle(100);
    });
    $('.kuai').click(function(){
        $('.list-con').show();
        $('.list-con2').hide();
    });
    $('.hang').click(function(){
        $('.list-con2').show();
        $('.list-con').hide();
    });
    $('.gotop>.jk-app>').hover(function () {
        $(this).find('.appewm').toggle();
    });
});
//二维码
$(function(){
    $('.jk-app').hover(function(){
        $('.appewm').toggle();
    })
});

//回到顶部函数
$("#top").hide();
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(1500);
        } else {
            $("#top").fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#top").click(function() {
        $('body,html').animate({scrollTop: 0},1000);
    });
});