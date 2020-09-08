//var g = { index: 0, status: 0, start: 1 };
$(function () {
    if ($('.hot_project').is(':visible')) {
        TouchSlide({slideCell: "#hot_project", titCell: ".hd ul", autoPage: true, autoPlay: false, effect: "leftLoop"});
        var mySwiper = new Swiper('.case_slider', {freeMode: true, slidesPerView: 2.5, freeModeMomentum: true});
        $(".case_slider .swiper-wrapper").append("<div class='swiper-slide'></div>");
    }

    /*飞机*/
    if ($('.plane').is(':visible')) {
        setTimeout(function () {
            $(".plane span").animate({'right': 75 + '%'}, 2000, function () {
                $(this).animate({'top': 82 + '%'}, 1500, function () {
                    $(this).animate({'right': 0 + '%'}, 2500, function () {
                        $(this).animate({'top': 5 + '%'}, 1500);
                    });
                });
            });
        }, 3000);
    }

    var jp = new Swiper('.jpList1', {slidesPerView :3,paginationClickable: true,autoplayDisableOnInteraction : false})
    /*头条*/
    $(".tg_scroll1").slide({
        titCell:".tg_hd ul li",
        mainCell: ".tg_bd ol",
        scroll:1,
        autoPage: false,
        effect: "topLoop",
        autoPlay: true,
        vis: 1,
        interTime: 6000
    });

    if ($('.introduce_slider').is(':visible')) {
        var galleryThumbs = new Swiper('.introduce_slider', {
            freeMode: true,
            slidesPerView: 2.5,
            freeModeMomentum: true
        });
        $(".introduce_slider .swiper-wrapper").append("<div class='swiper-slide'></div>");
    }

    /*案例轮播*/
    var swiper2 = new Swiper('.reality_nav', {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 'auto',
        onTap: function () {
            swiper3.slideTo($('.reality_nav .swiper-slide').eq(swiper2.clickedIndex).attr("_whichs"));
        }

    });

    var swiper3 = new Swiper('.case_box', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoHeight: true,
        observer: true,
        observeParents: true,
        autoplay: 100000,
        onSlideChangeEnd: function () {
            updateNavPosition();
        }
    });

    var datas = [2, 2, 2, 2, 2, 2, 2, 2];
    var x = 0, y = 0;

    for(var i = 0; i < datas.length; i++){
        $('.reality_nav .swiper-wrapper .swiper-slide:eq('+ i +')').attr('_whichs', x);
        for(var n = 0; n < datas[i]; n++){
            $('.case_box .swiper-wrapper .swiper-slide:eq('+ y +')').attr('_which', i + 1);
            y++;
        }
        x += datas[i];
    }

    function updateNavPosition() {
        var ci = $('.case_box .swiper-slide').eq(swiper3.activeIndex).attr("_which") - 1;

        $('.reality_nav .on').removeClass('on');

        var actNav = $('.reality_nav .swiper-slide').eq(ci).addClass('on');
        var actNav2 = $('.reality_nav .swiper-slide').eq(ci + 2);
        var actNav3 = $('.reality_nav .swiper-slide').eq(ci - 2);

        if (!actNav.hasClass('swiper-slide-visible')) {
            if (ci > swiper2.activeIndex) {
                var tn1 = Math.floor(swiper2.width / actNav.width()) - 1;
                swiper2.slideTo(actNav.index() - tn1)
            } else {
                swiper2.slideTo(ci)
            }
        } else if (!actNav2.hasClass('swiper-slide-visible')) {
            if (ci + 2 > swiper2.activeIndex) {
                var tn2 = Math.floor(swiper2.width / actNav.width()) - 1;
                swiper2.slideTo(actNav.index() + 1 - tn2)
            } else {
                swiper2.slideTo(ci - 2)
            }
        } else if (!actNav3.hasClass('swiper-slide-visible')) {
            if (ci - 2 > swiper2.activeIndex) {
                var tn3 = Math.floor(swiper2.width / actNav.width()) - 1;
                swiper2.slideTo(actNav.index() + 1 - tn3)
            } else {
                swiper2.slideTo(ci - 2)
            }
        }
    }

    /*案例轮播*/
    /*学术美莱*/
    var swiper = new Swiper('.index_science', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoHeight: true,
        observer: true,
        observeParents: true,
        onSlideChangeEnd: function (swiper) {
            swiper.update();
        }
    });

    /*学术会议点击切换*/
    $(".introduce_content .introduce_slider:eq(0)").show().siblings().hide();
    $(".introduce_nav li:eq(0)").addClass('on');
    $(".introduce_nav li").click(function () {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".introduce_content .introduce_slider").eq(i).show().siblings().hide();
    });

    set = setInterval('fz()', 3000);
    $(".news_nav li").hover(function () {
        $('.news_nav li').removeClass('on');
        $(this).addClass("on");
        set = clearTimeout(set);
    }, function () {
        set = setInterval('fz()', 3000);
    });
    /*测试首页咨询标识*/
    $('[href="javascript:openK();"]').attr('href', 'javascript:void(0);').attr('onclick', 'openK(this);return false;');

    /*首页案例视频大图切换*/

    TouchSlide({
        slideCell: "#caseer_tab",
        mainCell: ".bd",
        autoPlay: true,
        interTime: 15000,
        effect: "leftLoop"
    });
    /*首页专家大图切换*/
    TouchSlide({
        slideCell: "#doctors_tab",
        mainCell: ".bd",
        autoPlay: true,
        interTime: 15000,
        effect: "leftLoop"
    });
});
$(function () {
    $('#reality a').each(function () {
        $(this).attr('href', 'javascript:void(0);');
        $(this).attr('onclick', 'openK(this);return false;');
    });
    $('.caseer a').each(function () {
        $(this).attr('href', 'javascript:void(0);');
        $(this).attr('onclick', 'openK(this);return false;');
    });
})

/*首页特邀医生*/
var swiper = new Swiper('#ty_doctor1', {slidesPerView :2.3,paginationClickable: true,autoplayDisableOnInteraction : false})
if ($('#ty_doctor').is(':visible')) {
    $.ajax({
        url: "/plus/banners.php?t=index_docs",
        dataType: "json",
        type: "post",
        async: false,
        success: function (docs) {
            for (var n in docs) {
                var gj = docs[n].gj !== '' ? '<span>' + docs[n].gj + '</span>' : '';
                var lt = n * 100;
                $('#ty_doctor .swiper-wrapper').append('<div class="swiper-slide"><dl> <dt><img src="'+ docs[n].pic +'" ></dt> <dd><h3>' + docs[n].name + gj + '</h3><p>' + docs[n].project + '<br/><strong>' + docs[n].time + '</strong>来院</p><a href="javascript:void(0);" onclick="openK(this);return false;">立即咨询</a></dd> </dl></div>');
            }
            var swiper = new Swiper('#ty_doctor', {slidesPerView :2.5,paginationClickable: true,autoplayDisableOnInteraction : false})
            eachA();
        }
    });
}

/*首页项目随机翻转*/
var lh = 0;

function fz() {
    var leng = $(".project_hot a").length;
    $('.news_nav li').removeClass('on');
    $('.news_nav li').eq(lh).addClass("on");
    lh++;
    if (lh == 6) lh = 0;
}

/*首页案例数字转换*/
$(function () {
    var a = $('.note-c-t'),
        i = 0;
    setInterval(function () {
        i++
        if (i > 1) {
            i = 0;
        }
        ;
        for (var v = 0, length1 = a.length; v < length1; v++) {
            $('.note-c-t').eq(v).find('li').eq(i).addClass('active').siblings().removeClass('active');
        }
    }, 1500)
})
window.onload = setInterval(function () {
    var leng = $(".project_hot a").length;
    var ran = parseInt(Math.random() * leng);
    var arr = [ran, ran - '1'];
    $('.project_hot a').removeClass('on');
    $('.project_hot a').eq(arr[0]).addClass("on");
}, 3000);
$(document).ready(function(){
    var clicks = {};
    $('.index-bn-normal0').each(function(e){
        $(this).click(function(){
            var times = new Date();
            var m = times.getMonth() + 1;
            var t = times.getFullYear() + "-" + m + "-" + times.getDate();
            clicks = {
                logo: "index-bn-normal" + e,
                time: t
            };
            var click_data = 'normal=' + clicks.logo + '&time=' + clicks.time ;
            $.ajax({
                url: "/plus/form1.php",
                data: click_data,
                type: "post",
                success: function(data) {
                    console.log(data);
                }
            });
        });
    });
});


