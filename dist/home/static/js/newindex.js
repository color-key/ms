
$(function() {
    // 真人案例
    $(".realcase .content .scroll").slide({
        mainCell: ".slider",
        effect: "leftLoop",
        interTime: 5000,
        delayTime: 1000,
        autoPlay: true
    });

    // introduce
    $(".introduce_scroll").slide({
        mainCell: ".slider",
        effect: "leftLoop",
        interTime: 3000,
        delayTime: 500,
        autoPlay: true
    });


    $('.indexVideo .slider a').bind('click', function(){
        $('.player-box').css({
            position: 'fixed',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            width: '100%',
            height: '100%',
            zIndex: 999999
        });
        $('.player-box').show();
        $('.player-box').html('<div style="position: relative;width: 60%;margin: 0 auto"><video src="' + $(this).find('video').attr('src') + '" x-webkit-airplay="allow" style="display:block;width: 100%;margin: 10% auto" autoplay controls muted playsinline loop></video><i style="display: block;width: 30px;height: 30px;background: #000 url(/images/newindex/cross.png) no-repeat center;position: absolute;right: -10px;top: -10px;z-index: 2;border-radius: 50%;" onclick="player_close()"></i></div>');
    });


    //专家团doctorTeam_scroll
    $(".doctorTeam_scroll").slide({
        mainCell: ".slider",
        effect: "leftLoop",
        interTime: 3000,
        delayTime: 500,
        autoPlay: true
    });

    //学术会议academic_scroll
    $(".academic_scroll").slide({
        mainCell: ".slider",
        effect: "fade",
        interTime: 6000,
        delayTime: 1200,
        autoPlay: true
    });


    // 明星助阵
    var w1 = $('.star .content').width() / 7;
    var e = '.star .content a';
    $(e + ',' + e + ' *').width(w1);
    $(e + ',' + e + ' span').height(w1);


    /*临时审核修改20160524*/
    var h = window.location.host;
    if (h == 'so.shmylike.com.cn' || h == 'so.shmylike.cc') {
        $('.newindex > div.header > ul.topBar > li > p:eq(0)').text('哈尔滨美珊医疗美容门诊部有限公司');
        $('.copyright').text($('.copyright').text().replace('哈尔滨美珊医疗美容门诊部', '哈尔滨美珊医疗美容门诊部有限公司'));
    }

    /*底部工商信息*/
    $('.copyright a').attr('href', 'javascript:void(0);');
    $('.copyright a').removeAttr('target');
    // $('body').append('<div class="gsck k1" style="width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:0.3;z-index:100009;display:none;"></div><div class="gsck k2" style="width:1036px;height:703px;position:fixed;top:50%;left:50%;margin:-351px 0 0 -518px;background:url(/home/static/images/newindex/gs.png) no-repeat;z-index:100010;display:none;"></div>');
    $('.copyright a').click(function() {
        $('.k1').show();
        $('.k2').show(function() {
            $('.gsck').bind("click", function() {
                $('.gsck').hide();
            });
        });
    });
});

function player_close(){
    $('.player-box').hide();
}

/*美珊项目选项卡切换*/
var h = 0;
$('.mlprosub').each(function() {
    if (h < $(this).find('a').length) {
        h = $(this).find('a').length;
    }
});
var aHeight = $('.mlprosub').height() / h;
$('.mlprosub a').css({
    height: aHeight,
    lineHeight: aHeight + "px"
});

/*选项卡切换*/
function ChangeTab(navName, ChangeBox, trigger, effect) {
    $("." + ChangeBox + ":eq(0)").siblings().hide();
    $('.' + navName).each(function() {
        $(this).children().eq(0).addClass('on');
    });

    if (trigger == 'mouseover') {
        if (effect == 'leftLoop') {
            $('.' + ChangeBox).width($('.' + ChangeBox).children().width() * $('.' + ChangeBox).children().length);
            $("." + navName).children().hover(function() {
                $(this).addClass('on').siblings().removeClass('on').parent().siblings().find('.' + ChangeBox).stop().animate({
                    left: -$(this).index() * $('.' + ChangeBox).children().width() + 'px'
                }, 600);
            });
        } else {
            $("." + navName).children().hover(function() {
                $(this).addClass('on').siblings().removeClass('on').parent().siblings().find('.' + ChangeBox).eq($(this).index()).show().siblings().hide();
            });
        }
    } else {
        $("." + navName).children().click(function() {
            $(this).addClass('on').siblings().removeClass('on');
            $(this).parent().siblings().find('.' + ChangeBox).eq($(this).index()).show().siblings().hide();
        });
    }
}
ChangeTab('mlpronav', 'mlbox');
ChangeTab('mlprosub', 'procontent');
ChangeTab('mlprosubnav', 'contentbox', 'mouseover');
