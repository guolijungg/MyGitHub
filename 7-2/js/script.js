$(function(){
    //���������Ķ����˵�
    $('nav>ul>li').hover(function(){
        $(this).find('div').toggle();
    });
    //APP�Ķ����˵�
    $('.icon-box>.app-icon').hover(function(){
        $(this).find('.submenu').toggle();
    });
    //������Ϣ�Ķ����˵�
    $('.icon-box>.personal').hover(function(){
        $(this).find('.submei').toggle();
    });
    //����ͼ����¼�
    $('.search-icon').click(function(){
        $('#searchbox').addClass("scale");
    });
    $('.close-icon').click(function(){
        $('#searchbox').hide();
        $('#searchbox').removeClass("scale");
    });
});
$(function() {
    //���������Ķ����˵�
    $('.aside_yd>ul>li').hover(function () {
        $(this).find('.list_show').toggle();
    });
    //�鼶�ڷ��������ز���
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
//��ά��
$(function(){
    $('.jk-app').hover(function(){
        $('.appewm').toggle();
    })
});

//�ص���������
$("#top").hide();
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(1500);
        } else {
            $("#top").fadeOut(1500);
        }
    });
    //�������ת���Ӻ󣬻ص�ҳ�涥��λ��
    $("#top").click(function() {
        $('body,html').animate({scrollTop: 0},1000);
    });
});