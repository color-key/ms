var Mylike = function () {
    var host = location.host;
    var rootDomain = location.host.split('.').slice(1).join('.');
    var bottom_chat_status = 1, top_wx_status = 1;
    var hosts = [['s.shmylike.com.cn'], ['3g.mylike-sh.net','m.mylikesh021.net', 'mf.shmylike.cn', '4g.shmylike.cn', '3g.22235555.cn', '3g.91mylike.com'], ['sh-mylike.com', 'mylikesh.cn']];
    this._type = {};
    return {
        //初始化
        init: function () {
            window.final = location.pathname.split('/').slice(-2)[0];
            window.getDate = this.getDate();
            this.chatWhere();
            this.TouchSlide();
            this.getType();
            this.showCenter();
            this.commons();
            this.loadSwiper();
            this.indexTop();
            this.lazyLoadImg();
            this.mylike_online();
            this.projectMenu();
            this.buildCall();
            this.setBaidu();
            this.setCNZZ();
            this.mylikeZF();
            this.afterLoad();
            //this.showbbright();
            //this.GoogleAnalytics();
            return {
                getViewData: this.getViewData
            }
        },
        //加载完执行
        afterLoad: function () {
            $('.brand').append('<img src="/m/static/images/index/newindex/sm.jpg" alt=""><p style="text-align:center;font-size: 12px;color:#333; padding-bottom: 0.9rem">版权所有 © 哈尔滨美珊医疗整形有限公司 沪ICP备14048956 号 沪医广【2020】第04-10-G124号</p>');
           /* $('.new_foot').append('<div class="xcx" style="position:absolute;right: 1%; top: -130%; width: 26%;"><img src="/m/static/images/index/newindex/xcx.png" alt=""></div>');*/
            var _this = this;
            window.showLeftMenu = function () {
                _this.showMenu();
            };
            this.putView();
            if(this.sort(0)) {
                $('.brand img').attr('src','/images/index/newindex/kq_brand.jpg');
                $('.logo img').attr('src','/images/index/newindex/kq_logo.jpg');
                $('.top_activity').hide();
                $('.logo').attr('href', '/kqm/');
                $('.swt-tel').attr('href', 'tel:021-22235556');
                $('.swt-tel dl dd').text('22235556');
                $('#telephone img').attr('src', 'http://imgs.shmylike.com/images/kq/yuyue02.png');
                $('#telephone').attr('href', 'tel:021-22235556');
                $('.menu .li1 a').eq(4).attr('href', 'tel:021-22235556');
                /*口腔专题项目 链接到快商通*/
                $('.navBtn').eq(0).attr('href', 'javascript:void(this);');
                $('.navBtn').eq(0).attr('onclick', 'openK(this);return false;');
                $('.li1 a').eq(3).attr('href', 'javascript:void(this);');
                $('.li1 a').eq(3).attr('onclick', 'openK(this);return false;');
                $('.fixed-menu').css('display', 'none');
                $('.menu .li1 a:eq(1) i').css({'background': 'url("/m/static/images/index/newindex/ftkq_act.png") no-repeat center center','background-size': '55%'});
                $('.li1 a').eq(1).attr('href', 'javascript:void(this);');
                $('.li1 a').eq(1).attr('onclick', 'openK(this);return false;');
                $('.li1 a').eq(0).attr('href','/kqm/');
            }else {
              var yhpic = hosts[1].indexOf(host) > -1 && host != 'u.021mylike.com' ? 'callNow_zf' : 'callNow';
              var dom = document.getElementById('domWrite');
              var node = document.createElement('div');
              node.innerHTML = '<a class="s-ripple" href="javascript:void(0);" onclick="openK(this);return false;" id="s-ripple"><img class="min-tel" src="/m/static/images/index/newindex/' + yhpic + '.png?v=20180410" alt=""></a>';
              dom.parentNode.insertBefore(node, dom);
            }
            if(this.ex(1)) {
                $(".swt_center").hide();
                var dom = document.getElementById('domWrite');
                var node = document.createElement('div');
                node.innerHTML = '<scr' + 'ipt src="/subject/common/js/xbdbtc1.js"></scr' + 'ipt>';
                dom.parentNode.insertBefore(node, dom);
            }

            if(hosts[1].indexOf(host) > -1 && host != 'u.021mylike.com' && host != 'mf.shmylike.cn'){
                $('.swt_center').hide();
                $('.swt-tel').attr('href', 'tel:021-22235540');
                $('.swt-tel dl').html('<dd>拨打电话</dd>');
                $('.swt-tel dl dd').css({'line-height':'39px'});
                $('.inflow_btn').css({'background':'#871813'});
                $('.yh_tag a').css({'text-align':'center'});
                $('.swt_center .chatbnt .swt-tel').css({'background':'#53c1dd'});
                $('.swt_center').delay(1000).show().css({
                    'background': 'url("/m/static/images/mylike_online/normal_zf.jpg") no-repeat',
                    margin: '-150px 0 0 -140px',
                    'background-size': '100% 100%',
                    animation: 'swing 1s 3s ease both',
                    'border-radius': '15px',
                    'box-shadow': 'rgba(0, 0, 0, 0.4) 0 0 10px 3px'
                });
            }

            $(window).scroll(function () {
                if (!$('#content').is(":focus")) {
                    $('.subject_kst').css({position: "fixed", top: "25%"});
                }
            });

            if(location.host == 'xxl.shmylike.com'){
              var dom = document.getElementById('domWrite');
              var node = document.createElement('div');
              node.innerHTML = '<scr' + 'ipt src="https://zbaizga.yunjc.xyz/yunbd.php?tk=2bb83d5102ca78a60fc31eddff939c89" type="text/javascript" charset="utf-8"></scr' + 'ipt>';
              dom.parentNode.insertBefore(node, dom);
            }

            $(function () {
                _this.eachOpenK();
                _this.showBottomChat();
                _this.indexBanner();
                _this.setAmark();
                _this.chatWhere();
                _this.inCheck();
                //_this.showTop();
                //_this.checkStatus();
                $('.navBtn').bind("click", function () {
                    if (hosts[1].indexOf(host) > -1) {
                        _this.showzfmenu();

                    } /*else {
                        _this.showMenu();
                    }*/
                });
                var num = [36, 38, 42, 40, 43, 45, 46, 42, 39, 43, 46, 52, 51, 49, 45, 43, 40, 41, 39, 36];
                var inx = 0;
                setInterval(function () {
                    $('.new_foot .li1 a:eq(2) sup').text(num[inx] + '+');
                    $('.swt-chat i sup').text(num[inx] + '+');
                    if (inx != (num.length - 1)) {
                        inx++;
                    } else {
                        inx = 0;
                    }
                }, 3000);
            });
            //植发文章页图片链接更改
            if (location.pathname.split('/').slice(-2)[0] = 'maofyz') {
                $('.article_brand a').attr('href', '/subject/list/zf/');
            }

            $("#kst_tc").click(function () {
                $("#kst_tc").hide(300);
                $('.subject_kst').css({
                    position: "absolute",
                    top: $(window).scrollTop() + $(window).height() / 4 + 'px'
                }).show(300);
                document.getElementById('times_b').innerHTML = getDate;
                $('#text1').animate({opacity: 1}, 1000);
                setTimeout(function () {
                    document.getElementById('times_b1').innerHTML = getDate;
                    $('#text2').animate({opacity: 1}, 1000);
                }, 2000);
            });
            $(".kst_close").click(function () {
                $(".subject_kst").hide(300);
                $("#kst_tc").show(300);
            });
            $('#content').focus(function () {
                $('.subject_kst').css({
                    position: "absolute",
                    top: $(window).scrollTop() + $(window).height() / 4 + 'px'
                });
            });

            //专题头部横条推荐 链接
            $('.t_nemu .menu_list').css('width', '17.2%');
            setInterval(function(){
                if($(window).scrollTop()){
                    $('.wrap-daohang').css("top", $('#fixtop').height() + 'px');
                    $('.wrap-daohang .t_nemu').css("background", function(){
                        $(this).css('background').indexOf('rgb(0, 0, 0)') >= 0 ? 'rgb(0, 0, 0, 0.7)' : 'rgb(0, 0, 0)';
                    });
                } else {
                    $('.wrap-daohang').css("top", $('.main').height() + $('#fixtop').height() + 'px');
                }
            }, 1);

            //http://s.91mylike.com 单独的Logo
            var  nowHost = window.location.host;
            var lgUrl = ["s.91mylike.com","m.mylike-sh.net","m.shmlzx.cn"];
            if(lgUrl.indexOf(nowHost) >= 0){
                $('.logo img').attr('src','/images/index/newindex/logo_s91.jpg');
            }
        },
        //获取随机数
        GetRandomNum: function (Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            return Min + Math.round(Rand * Range);
        },
        //获取日期
        getDate: function (t) {
            var d = new Date();
            return t == 1 ? d.toISOString().split(':')[0].replace(/(-|T)/g, '') : d.toISOString().split('T')[0];
        },
        lazyLoadImg: function () {
            $(document).scroll(function () {
                $('img[src*="ico-1"]').attr('src', function(){
                    var _src = $(this).attr('_src');
                    $(this).removeAttr('_src');
                    return _src;
                });
            });
        },
        TouchSlide: function (a) {
            window.TouchSlide = this.TouchSlide;
            a = a || {};
            var b = {
                slideCell: a.slideCell || "#touchSlide",
                titCell: a.titCell || ".hd li",
                mainCell: a.mainCell || ".bd",
                effect: a.effect || "left",
                autoPlay: a.autoPlay || !1,
                delayTime: a.delayTime || 200,
                interTime: a.interTime || 2500,
                defaultIndex: a.defaultIndex || 0,
                titOnClassName: a.titOnClassName || "on",
                autoPage: a.autoPage || !1,
                prevCell: a.prevCell || ".prev",
                nextCell: a.nextCell || ".next",
                pageStateCell: a.pageStateCell || ".pageState",
                pnLoop: "undefined " == a.pnLoop ? !0 : a.pnLoop,
                startFun: a.startFun || null,
                endFun: a.endFun || null,
                switchLoad: a.switchLoad || null
            }, c = document.getElementById(b.slideCell.replace("#", ""));
            if (!c) return !1;
            var d = function (a, b) {
                    a = a.split(" ");
                    var c = [];
                    b = b || document;
                    var d = [b];
                    for (var e in a) 0 != a[e].length && c.push(a[e]);
                    for (var e in c) {
                        if (0 == d.length) return !1;
                        var f = [];
                        for (var g in d) if ("#" == c[e][0]) f.push(document.getElementById(c[e].replace("#", ""))); else if ("." == c[e][0]) for (var h = d[g].getElementsByTagName("*"), i = 0; i < h.length; i++) {
                            var j = h[i].className;
                            j && -1 != j.search(new RegExp("\\b" + c[e].replace(".", "") + "\\b")) && f.push(h[i])
                        } else for (var h = d[g].getElementsByTagName(c[e]), i = 0; i < h.length; i++) f.push(h[i]);
                        d = f
                    }
                    return 0 == d.length || d[0] == b ? !1 : d
                }, e = function (a, b) {
                    var c = document.createElement("div");
                    c.innerHTML = b, c = c.children[0];
                    var d = a.cloneNode(!0);
                    return c.appendChild(d), a.parentNode.replaceChild(c, a), m = d, c
                }, g = function (a, b) {
                    !a || !b || a.className && -1 != a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className += (a.className ? " " : "") + b)
                }, h = function (a, b) {
                    !a || !b || a.className && -1 == a.className.search(new RegExp("\\b" + b + "\\b")) || (a.className = a.className.replace(new RegExp("\\s*\\b" + b + "\\b", "g"), ""))
                }, i = b.effect, j = d(b.prevCell, c)[0], k = d(b.nextCell, c)[0], l = d(b.pageStateCell)[0],
                m = d(b.mainCell, c)[0];
            if (!m) return !1;
            var N, O, n = m.children.length, o = d(b.titCell, c), p = o ? o.length : n, q = b.switchLoad,
                r = parseInt(b.defaultIndex), s = parseInt(b.delayTime), t = parseInt(b.interTime),
                u = "false" == b.autoPlay || 0 == b.autoPlay ? !1 : !0,
                v = "false" == b.autoPage || 0 == b.autoPage ? !1 : !0,
                w = "false" == b.pnLoop || 0 == b.pnLoop ? !1 : !0, x = r, y = null, z = null, A = null, B = 0, C = 0,
                D = 0, E = 0, G = /hp-tablet/gi.test(navigator.appVersion), H = "ontouchstart" in window && !G,
                I = H ? "touchstart" : "mousedown", J = H ? "touchmove" : "", K = H ? "touchend" : "mouseup",
                M = m.parentNode.clientWidth, P = n;
            if (0 == p && (p = n), v) {
                p = n, o = o[0], o.innerHTML = "";
                var Q = "";
                if (1 == b.autoPage || "true" == b.autoPage) for (var R = 0; p > R; R++) Q += "<li>" + (R + 1) + "</li>"; else for (var R = 0; p > R; R++) Q += b.autoPage.replace("$", R + 1);
                o.innerHTML = Q, o = o.children
            }
            "leftLoop" == i && (P += 2, m.appendChild(m.children[0].cloneNode(!0)), m.insertBefore(m.children[n - 1].cloneNode(!0), m.children[0])), N = e(m, '<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'), m.style.cssText = "width:" + P * M + "px;" + "position:relative;overflow:hidden;padding:0;margin:0;";
            for (var R = 0; P > R; R++) m.children[R].style.cssText = "display:table-cell;vertical-align:top;width:" + M + "px";
            var S = function () {
                "function" == typeof b.startFun && b.startFun(r, p)
            }, T = function () {
                "function" == typeof b.endFun && b.endFun(r, p)
            }, U = function (a) {
                var b = ("leftLoop" == i ? r + 1 : r) + a, c = function (a) {
                    for (var b = m.children[a].getElementsByTagName("img"), c = 0; c < b.length; c++) b[c].getAttribute(q) && (b[c].setAttribute("src", b[c].getAttribute(q)), b[c].removeAttribute(q))
                };
                if (c(b), "leftLoop" == i) switch (b) {
                    case 0:
                        c(n);
                        break;
                    case 1:
                        c(n + 1);
                        break;
                    case n:
                        c(0);
                        break;
                    case n + 1:
                        c(1)
                }
            }, V = function () {
                M = N.clientWidth, m.style.width = P * M + "px";
                for (var a = 0; P > a; a++) m.children[a].style.width = M + "px";
                var b = "leftLoop" == i ? r + 1 : r;
                W(-b * M, 0)
            };
            window.addEventListener("resize", V, !1);
            var W = function (a, b, c) {
                c = c ? c.style : m.style, c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms", c.webkitTransform = "translate(" + a + "px,0)" + "translateZ(0)", c.msTransform = c.MozTransform = c.OTransform = "translateX(" + a + "px)"
            }, X = function (a) {
                switch (i) {
                    case"left":
                        r >= p ? r = a ? r - 1 : 0 : 0 > r && (r = a ? 0 : p - 1), null != q && U(0), W(-r * M, s), x = r;
                        break;
                    case"leftLoop":
                        null != q && U(0), W(-(r + 1) * M, s), -1 == r ? (z = setTimeout(function () {
                            W(-p * M, 0)
                        }, s), r = p - 1) : r == p && (z = setTimeout(function () {
                            W(-M, 0)
                        }, s), r = 0), x = r
                }
                S(), A = setTimeout(function () {
                    T()
                }, s);
                for (var c = 0; p > c; c++) h(o[c], b.titOnClassName), c == r && g(o[c], b.titOnClassName);
                0 == w && (h(k, "nextStop"), h(j, "prevStop"), 0 == r ? g(j, "prevStop") : r == p - 1 && g(k, "nextStop")), l && (l.innerHTML = "<span>" + (r + 1) + "</span>/" + p)
            };
            if (X(), u && (y = setInterval(function () {
                r++, X()
            }, t)), o) for (var R = 0; p > R; R++) !function () {
                var a = R;
                o[a].addEventListener("click", function () {
                    clearTimeout(z), clearTimeout(A), r = a, X()
                })
            }();
            k && k.addEventListener("click", function () {
                (1 == w || r != p - 1) && (clearTimeout(z), clearTimeout(A), r++, X())
            }), j && j.addEventListener("click", function () {
                (1 == w || 0 != r) && (clearTimeout(z), clearTimeout(A), r--, X())
            });
            var Y = function (a) {
                clearTimeout(z), clearTimeout(A), O = void 0, D = 0;
                var b = H ? a.touches[0] : a;
                B = b.pageX, C = b.pageY, m.addEventListener(J, Z, !1), m.addEventListener(K, $, !1)
            }, Z = function (a) {
                if (!H || !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var b = H ? a.touches[0] : a;
                    if (D = b.pageX - B, E = b.pageY - C, "undefined" == typeof O && (O = !!(O || Math.abs(D) < Math.abs(E))), !O) {
                        switch (a.preventDefault(), u && clearInterval(y), i) {
                            case"left":
                                (0 == r && D > 0 || r >= p - 1 && 0 > D) && (D = .4 * D), W(-r * M + D, 0);
                                break;
                            case"leftLoop":
                                W(-(r + 1) * M + D, 0)
                        }
                        null != q && Math.abs(D) > M / 3 && U(D > -0 ? -1 : 1)
                    }
                }
            }, $ = function (a) {
                0 != D && (a.preventDefault(), O || (Math.abs(D) > M / 10 && (D > 0 ? r-- : r++), X(!0), u && (y = setInterval(function () {
                    r++, X()
                }, t))), m.removeEventListener(J, Z, !1), m.removeEventListener(K, $, !1))
            };
            m.addEventListener(I, Y, !1);

            //window.setAmark();
        },
        //咨询
        openK: function () {
            var K = 'https://sh.mylikechat.com/live800/chatClient/chatbox.jsp?companyID=771670&configID=' + live.config + '&jid=&skillId=' + live.skill + '&s=1';
            var fn = {
                urlEncode: function (Str) {
                    if (Str == null || Str == "") {
                        return ""
                    }
                    var newStr = "";

                    function toCase(sStr) {
                        return sStr.toString(16).toUpperCase()
                    }

                    for (var i = 0, icode, len = Str.length; i < len; i++) {
                        icode = Str.charCodeAt(i);
                        if (icode < 16) {
                            newStr += "%0" + icode.toString(16).toUpperCase()
                        } else {
                            if (icode < 128) {
                                if (icode == 32) {
                                    newStr += "+"
                                } else {
                                    if ((icode >= 48 && icode <= 57) || (icode >= 65 && icode <= 90) || (icode >= 97 && icode <= 122)) {
                                        newStr += Str.charAt(i)
                                    } else {
                                        newStr += "%" + toCase(icode)
                                    }
                                }
                            } else {
                                if (icode < 2048) {
                                    newStr += "%" + toCase(192 + (icode >> 6));
                                    newStr += "%" + toCase(128 + icode % 64)
                                } else {
                                    newStr += "%" + toCase(224 + (icode >> 12));
                                    newStr += "%" + toCase(128 + (icode >> 6) % 64);
                                    newStr += "%" + toCase(128 + icode % 64)
                                }
                            }
                        }
                    }
                    ;
                    return newStr
                }, urlDecode: function (Str) {
                    if (Str == null || Str == "") {
                        return ""
                    }
                    var newStr = "";

                    function toCase(sStr) {
                        return sStr.toString(16).toUpperCase()
                    };
                    for (var i = 0, ichar, len = Str.length; i < len;) {
                        if (Str.charAt(i) == "%") {
                            ichar = Str.charAt(i + 1);
                            if (ichar.toLowerCase() == "e") {
                                newStr += String.fromCharCode(((parseInt("0x" + Str.substr(i + 1, 2)) - 224) * 4096) + ((parseInt("0x" + Str.substr(i + 4, 2)) - 128) * 64) + (parseInt("0x" + Str.substr(i + 7, 2)) - 128));
                                i += 9
                            } else {
                                if (ichar.toLowerCase() == "c" || ichar.toLowerCase() == "d") {
                                    newStr += String.fromCharCode(((parseInt("0x" + Str.substr(i + 1, 2)) - 192) * 64) + parseInt("0x" + Str.substr(i + 4, 2)) - 128);
                                    i += 6
                                } else {
                                    newStr += String.fromCharCode(parseInt("0x" + Str.substr(i + 1, 2)));
                                    i += 3
                                }
                            }
                        } else {
                            newStr += Str.charAt(i).replace(/\+/, " ");
                            i++
                        }
                    }
                    ;
                    return newStr
                }, setCookie: function (name, value, expafter) {
                    var Days = 30;
                    var exp = new Date();
                    if (expafter && parseInt(expafter) > 0) {
                        exp.setTime(exp.getTime() + expafter * 1000)
                    } else {
                        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
                    }
                    document.cookie = name + "=" + escape(value) + ";expires = " + exp.toGMTString() + ";path=/"
                }, setSessionCookie: function (name, value) {
                    document.cookie = name + "=" + escape(value) + ";path=/"
                }, getCookie: function (name) {
                    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                    arr = document.cookie.match(reg);
                    if (arr) {
                        return unescape(arr[2])
                    } else {
                        return null
                    }
                }, isBaidu: function (refurl) {
                    var regStr = /[a-zA-Z0-9\u4E00-\u9FA5][\-a-zA-Z0-9\u4E00-\u9FA5]{0,62}(\.[a-zA-Z0-9\u4E00-\u9FA5][\-a-zA-Z0-9\u4E00-\u9FA5]{0,62})+/gi;
                    var darr = refurl.match(regStr);
                    if (darr && darr[0].indexOf(".baidu.") > 0) {
                        return true
                    } else {
                        return false
                    }
                }, getBDParam: function (refurl, keys) {
                    var wd = null;
                    for (var i = 0, length = keys.length; i < length; i++) {
                        var start = refurl.indexOf(keys[i]);
                        if (start > 0) {
                            var end = refurl.indexOf("&", start + 1);
                            if (end < 0) {
                                end = refurl.length
                            }
                            wd = [keys[i], refurl.substring(start + keys[i].length, end)];
                            break
                        }
                    }
                    return wd
                }, getBaiduWd: function (refurl) {
                    var keys = ["&wd=", "&word=", "&rqwd=", "?wd=", "?word=", "?rqwd="];
                    return fn.getBDParam(refurl, keys)
                }, getBDEqid: function (refurl) {
                    var keys = ["&eqid=", "?eqid="];
                    return fn.getBDParam(refurl, keys)
                }
            }, vis = {
                startflag: false, actions: [], justUrlLen: function () {
                    var pagelocation = fn.urlEncode(document.URL);
                    var dfer = fn.getCookie("pageReferrInSession");
                    var newRef = document.referrer;
                    if (dfer === null || dfer === "" || (dfer != newRef && fn.isBaidu(newRef))) {
                        dfer = newRef;
                        if (dfer !== null && dfer !== "") {
                            fn.setSessionCookie("pageReferrInSession", dfer)
                        }
                    }
                    var pagereferrer = fn.urlEncode(dfer);
                    var firstenterurl = fn.getCookie("firstEnterUrlInSession");
                    if (firstenterurl != null && firstenterurl != "") {
                        firstenterurl = fn.urlEncode(firstenterurl)
                    } else {
                        firstenterurl = fn.urlEncode(window.location);
                        fn.setSessionCookie("firstEnterUrlInSession", window.location)
                    }
                    var pagetitle;
                    if (document.title.length > 80) {
                        pagetitle = fn.urlEncode(document.title.substring(0, 80))
                    } else {
                        pagetitle = fn.urlEncode(document.title)
                    }
                    if ((pagetitle + pagelocation + pagereferrer).length > 1600) {
                        var maxTitleLen = 198;
                        var maxLocLen = 700;
                        var maxRefLen = 3000;
                        if (pagetitle.length > maxTitleLen) {
                            pagetitle = pagetitle.substring(0, maxTitleLen)
                        }
                        if (pagelocation.length >= maxLocLen) {
                            pagelocation = pagelocation.substring(0, maxLocLen)
                        }
                        if (pagereferrer.length >= maxRefLen) {
                            pagereferrer = pagereferrer.substring(0, maxRefLen);
                            var isBaidu = fn.isBaidu(dfer);
                            if (isBaidu) {
                                var wdArray = fn.getBaiduWd(dfer);
                                var eqidArray = fn.getBDEqid(dfer);
                                if (wdArray !== null || eqidArray !== null) {
                                    var tempRef = fn.urlDecode(pagereferrer);
                                    if (wdArray !== null) {
                                        var tempWd = fn.getBaiduWd(tempRef);
                                        if (tempWd === null) {
                                            tempRef = tempRef + wdArray[0] + wdArray[1]
                                        } else {
                                            if (wdArray[1] !== tempWd[1]) {
                                                tempRef = tempRef.replace(wdArray[0], wdArray[0] + wdArray[1] + "&")
                                            }
                                        }
                                    }
                                    if (eqidArray !== null) {
                                        var tempEqid = fn.getBDEqid(tempRef);
                                        if (tempEqid === null) {
                                            tempRef = tempRef + eqidArray[0] + eqidArray[1]
                                        } else {
                                            if (eqidArray[1] !== tempEqid[1]) {
                                                tempRef = tempRef.replace(eqidArray[0], eqidArray[0] + eqidArray[1] + "&")
                                            }
                                        }
                                    }
                                    fn.setSessionCookie("pageReferrInSession", tempRef);
                                    pagereferrer = fn.urlEncode(tempRef)
                                }
                            }
                        }
                    }
                    vis.page = {
                        "title": pagetitle,
                        "location": pagelocation,
                        "referrer": pagereferrer,
                        "firstenterurl": firstenterurl
                    }
                }
            };
            vis.justUrlLen();
            var clickWhere = '';
            if(arguments.length){
                var content = arguments[0].id === 'yhChat' && $(arguments[0]).prev()[0].value;
                if (arguments[0].title) {
                    clickWhere = arguments[0].title;
                } else {
                    clickWhere = arguments[0].parentNode.title;
                }
                if (bottom_chat_status > 1 && clickWhere == 'wap_button_chat')
                    clickWhere += bottom_chat_status;
                if (top_wx_status > 1 && clickWhere == 'wap_top_wx')
                    clickWhere += top_wx_status;
            }
            var button = clickWhere ? "&buttonName=" + clickWhere : '';
            var pagetitle;
            if (document.title.length > 80) {
                pagetitle = fn.urlEncode(document.title.substring(0, 80));
            } else {
                pagetitle = fn.urlEncode(document.title);
            }
            K += "&enterurl=" + fn.urlEncode(document.URL + '#' + button + '');
            K += "&pagetitle=" + pagetitle;
            var pagereferrinsession = fn.getCookie("pageReferrInSession");
            if (pagereferrinsession == null || pagereferrinsession == " ") pagereferrinsession = "";
            K += "&pagereferrer=" + fn.urlEncode(pagereferrinsession);
            var firstenterurlinsession = fn.getCookie("firstEnterUrlInSession");
            if (firstenterurlinsession == null || firstenterurlinsession == " ") firstenterurlinsession = "";
            K += "&firstEnterUrl=" + fn.urlEncode(firstenterurlinsession);
            if (content)
                K += "&prePareMsg=" + encodeURIComponent(content);
            window.open(K, "_blank");
        },
        //获取本地cookies
        getCookies: function () {
            var cookies = {};
            var cookie = document.cookie.split(';');
            for (var i = 0; i < cookie.length; i++) {
                cookies[cookie[i].split('=')[0].replace(/ /g, '')] = cookie[i].split('=')[1];
            }
            return cookies;
        },
        putView: function(){
            // $.ajax({
            //     url: "/plus/putView.php",
            //     type: "post",
            //     data: {
            //         referrer: document.referrer
            //     },
            //     success: function () {}
            // });
        },
        ex: function(i){
            var ts = ['kq', 'xb', 'bb', 'cz','qb'];
            var status = false;
            var data = this._type;
            if(data.type){
                status = data.type.indexOf(ts[i]) >= 0;
            }
            return status;
        },

        sort: function(i){
            var ts = ['kq'];
            var status = false;
            var data = this._type;
            if(data.type){
                status = data.type.indexOf(ts[i]) >= 0;
            }
            return status;
        },

        inCase: function(){
            var result = ['normal', '#8f5997', '#fd6c3d'];
            var data = this._type;
            if(data.cs) {
                result[0] = 'normal_' + data.cs[0];
                result[1] = data.cs[1];
                result[2] = data.cs[2];
                result[3] = data.cs[3];
            }
            return result;
        },
        //加载swiper插件
        loadSwiper: function () {
          if (typeof Swiper === 'undefined') {
            var dom = document.getElementById('domWrite');
            var node = document.createElement('div');
            node.innerHTML = '<scr' + 'ipt src="/js/swiper.min.js"></scr' + 'ipt>';
            dom.parentNode.insertBefore(node, dom);
          }
        },
        //设置swiper插件
        setSwiper: function (c) {
            var mySwiper = new Swiper(c, {
                spaceBetween: 0,
                slidesPerView: 4,
                touchRatio: 0.3,
                freeMode: true,
                loop: false,
                loopedSlides: 4,
                slideToClickedSlide: false
            });
        },
        //加载首页banner
        indexBanner: function () {
            if (final === '') {
                $.ajax({
                    url: "/plus/bannerx.php?t=index_banner",
                    dataType: "json",
                    type: "get",
                    async: false,
                    success: function () {
                        console.log('banners has been cached!');
                    }
                });
            }
            TouchSlide({
                slideCell: "#banner",
                mainCell: ".bd",
                autoPlay: true,
                effect: "leftLoop",
                interTime: 16000
            });
        },
        //首页美珊头条
        indexTop: function () {
          var mltt = [
            {"link":"/subject/activity/","title":"美珊20周年庆，全年仅此全线8折！","hot":"1"},
            {"link":"/news/2557.html","title":"【美珊国际 学术之巅】『2017CCAM中国医疗美容大会』在哈尔滨隆重举行！","hot":""},
            {"link":"/news/2527.html","title":"杜园园教授受邀全国整形会议“中国医师协会“","hot":""},
            {"link":"/news/2544.html","title":"2017CCAM中国医疗美容大会在沪举行","hot":""}
          ];
            // $.ajax({
            //     url: "/plus/banners.php?t=mltt",
            //     dataType: "json",
            //     type: "post",
            //     async: false,
            //     success: function (mltt) {
                    for (var n in mltt) {
                        var hotspan = mltt[n].hot !== '' ? '<span>HOT</span>' : '';
                        $('.tg_scroll .bd ol').append('<li><a href="' + mltt[n].link + '">' + hotspan + mltt[n].title + '</a></li>');
                    }
                // },
                // complete: function () {
                    if ($('.tg_scroll').length) {
                        $(".index_hot .right .tg_scroll ol li a:contains('HOT')").css("color", "#dc3171");
                        $(".tg_scroll").slide({
                            mainCell: ".bd ol",
                            autoPage: true,
                            effect: "topLoop",
                            autoPlay: true,
                            vis: 2,
                            interTime: 5000
                        });
                    }
            //     }
            // });
        },
        setAmark: function () {
            var special = {
                'logo': ['_top_logo'],
                'li1': ['_bottom_shouye', '_bottom_youhui'],
                'index-bn-act': ['_index_bn_act'],
                'index-bn-xs': ['_index_bn_xs'],
                'index-bn-ybjd': ['_index_bn_ybjd'],
                'index-bn-bbxp': ['_index_bn_bbxp'],
                'index-bn-aq': ['_index_bn_aq'],
                'index-bn-lt': ['_index_bn_lt'],
                'index-bn-brand': ['_index_bn_brand'],
                'index-bn-normal': ['_wap_bn_normal']
            };

            $('a:not([href^="javascript"], [href^="tel"])').each(function () {
                var _class = $(this)[0].className || $(this)[0].parentNode.className;
                var _index = $(this).index();

                if (!!special[_class]) {
                    var route = special[_class];
                    if(route != undefined){
                        $(this)[0].search = route.length === 1 ? route[0] : route[_index];
                    }
                } else {
                    if ($(this).attr('href')) {
                        var len = $(this).parents('div').length - 1;
                        var pos = final ? location.pathname.replace(/\//g, '_') : '_index_';
                        if ($(this)[0].search === '') {
                            if ($(this).parents('div')[len]) {
                                var c = $(this).parents('div')[len];
                                $(c).find('a:not([href^="javascript"])').each(function (i) {
                                    if($(this)[0].className.indexOf('index-bn') === -1){
                                        $(this)[0].search = pos + c.className.split(' ')[0] + i;
                                    }
                                });
                            } else {
                                $(this)[0].search = pos + (this.className || $(this).parent().attr('class'));
                            }
                        }
                    }
                }
            });
        },
        chatWhere: function () {
            window.eachA = this.chatWhere;
            var chatWhere = {
                '.top_tips': 'wap_top_wx',
                '.zixun': 'wap_top_zx',
                '.s-ripple': 'wap_right_float',
                '.call_form_r': 'wap_head_live',
                '#yuyue_chat': 'wap_foot_live',
                '.subject_activity a:eq(0)': 'wap_body_youhuiquan',
                '.fqdc a:eq(1)': 'wap_foot_didi',
                '#qchat': 'wap_bottom_send',
                '.menu .li1 a:eq(2)': 'wap_bottom_zx',
                '#moreInfo': 'wap_project_more',
                '#banner_slider': 'wap_subject_banner',
                '.ty_doctor': 'wap_doc_',
                '.section_zj': 'wap_subject_doc_',
                '.leadto': 'wap_mlonline_bg_',
                '.swt-chat': 'wap_mlonline_chat_',
                '.yh_tag a:eq(0)': 'wap_chatbox_qs1_',
                '.yh_tag a:eq(1)': 'wap_chatbox_qs2_',
                '.yh_tag a:eq(2)': 'wap_chatbox_qs3_',
                '.yh_tag a:eq(3)': 'wap_chatbox_qs4_',
                '#yhChat': 'wap_chatbox_send_',
                '.brand': 'wap_bottom_brand_',
                '.index-bn-act': 'index-bn-act',
                '.index-bn-xs': 'index-bn-xs',
                '.index-bn-ybjd': 'index_bn_ybjd',
                '.index-bn-bbxp': 'index_bn_bbxp',
                '.index-bn-aq': 'index-bn-aq',
                '.index-bn-lt': 'index-bn-lt',
                '.index-bn-brand': 'index-bn-brand',
                '.index-bn-normal': 'wap-bn-normal',
                '.tc_yy a': 'wap_full_doc',
                '.tanchuang dd .fr': 'wap_full_accept',
                '#bb233 p a:eq(0)': 'wap_bottom_chatbox1_',
                '#bb233 p a:eq(1)': 'wap_bottom_chatbox2_',
                '#bb233 p a:eq(2)': 'wap_bottom_chatbox3_',
                '#bb233 p a:eq(3)': 'wap_bottom_chatbox4_',
                '#chatcontent': 'wap_bottom_chatbox_',
                '.top_activity': 'wap-top-activity'
            };

            for (var i in chatWhere) {
                if ($(i).find('a').length) {
                    $(i).find('a').each(function (n) {
                        if ($(this)[0].href.indexOf('javascript') >= 0) {
                            $(this)[0].title = chatWhere[i] + n;
                        }
                    });
                } else {
                    $(i).attr('title', chatWhere[i]);
                }
            }
        },
        eachOpenK: function () {
            $('[onclick*=openK]').attr('onclick', 'openK(this);return false;');
            $('a[href*=openK]').attr('href', 'javascript:void(0);').attr('onclick', 'openK(this);return false;');
            var path = final || 'index';
            $('[onclick*="openK"]').each(function (i) {
                if ($(this).attr('title') === undefined || $(this).attr('title').indexOf('wap') == -1) {
                    $(this).attr('title', 'wap_' + i + '_' + path);
                }
            });
        },
        //美珊在线分组
        mylike_online: function () {
            var live_url = location.pathname + location.search;
            var ll = ['/', '/?pzwap', '/?js', '/?m.77meiren.com'];

            /*live800效果*/
            if (hosts[2].indexOf(rootDomain) > -1) {
                window.live = {config: 98, skill: 37};
            } else if ($('meta[name="seo"]').length) {
                window.live = {config: 81, skill: 20};
            } else if (hosts[1].indexOf(host) > -1) {
                window.live = {config: 96, skill: 35};
            } else if (hosts[0].indexOf(host) > -1) {
                window.live = {config: 86, skill: 25};
            } else if (ll.indexOf(live_url) > -1) {
                window.live = {config: 84, skill: 23};
            } else {
                window.live = {config: 34, skill: 2};

                $.ajax({
                    url: 'http://m.shmylike.cn/plus/livefz.php?t=live800',
                    type: 'get',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        var res = data ? data : [];
                        var fz = res.filter(function (live) {
                            return live.link.indexOf(location.pathname) > -1;
                        });
                        if (fz.length) {
                            window.live = {config: fz[0].id[0], skill: fz[0].id[1], type: fz[0].type};
                        }
                    }
                });

            }
            var dom = document.getElementById('domWrite');
            var node = document.createElement('div');
            node.innerHTML = '<scr' + 'ipt language="javascript" src="https://sh.mylikechat.com/live800/chatClient/monitor.js?companyID=771670&configID=33&codeType=custom&insidePageSkillID=' + live.skill + '"></scr' + 'ipt>';
            dom.parentNode.insertBefore(node, dom);
            window.openK = this.openK;
        },
        getViewData: function (p, d, s) {
            var viewData = function (where, count) {
                $('a[href$="' + where + '"]').each(function () {
                    $(this).css({
                        position: 'relative',
                        display: 'block'
                    }).append('<ins style="position: absolute;left: 0;top: 0;width:100%;height: 100%;opacity: 0.4;background: #0e8aa7;z-index: 1;" class="view-bg"></ins><ins style="position: absolute;left: 5px;top: 5px;padding:0 0.5em;color: #fff;line-height:12px;font-size:10px;border-radius:1em;text-decoration: none;text-align: center;z-index: 2;background:#0a9e01;border:1px #0f7304 solid" class="view-number">' + count + '</ins>');
                });
            };
            var time = this.getDate;
            var date = d !== undefined ? "&date=" + d : "&date=" + time;
            var se = s ? "&s=" + s : '';
            $('body').append('<div id="table"><table></table></div>');
            $.ajax({
                url: "/plus/getViewData.php?p=" + p + date + se,
                dataType: "json",
                type: "get",
                success: function (data) {
                    var table = '';
                    for (var i = 0; i < data.length; i++) {
                        viewData(data[i]['tag'], data[i]['count']);
                        table += data[i]['tag'] + "\t" + data[i]['count'] + "\n";
                    }

                    console.log(table);
                }
            });
            $('.view-number').each(function () {
                if ($(this).css('right').replace('px', '') < 1) {
                    $(this).css({right: 0, left: 'auto'});
                }
            });
        },
        commons: function () {
            var wxtip = '';
            var t = new Date();
            var f = function (n) {
                return n < 10 ? '0' + n : n;
            };
            var res = this._type;
            wxtip = res.wx ? res.wx : '我是美珊美丽顾问，要定制美丽方案，请加我...';
            if(res.ct){
                $('.youhui-inner #bb2 .pp2').text(res.ct[0]);
                $('.yh_tag a').each(function(i){
                    $(this).text(res.ct[1][i]);
                });
            } else {
                $('.section_kst').remove();
            }
            $("body").append("<div class='top_tips' onclick='javascript:openK(this);'><img src='/m/static/images/tips.gif' style='width:40px!important;margin:5px 5px 0 20px' /><ul><li>您好:</li><li>" + wxtip + "</li></ul></div>");
            $('body').prepend('<div id="fixtop"></div>');
            var timer1 = setTimeout(function () {
                $('.top_tips').animate({top: 0}, 1e3);
                $('#fixtop').animate({height: $(".top_tips").height()}, 1001);
            }, 8e3);
            var timer2 = setInterval(function () {
                var t = $('.top_tips').css('top') == '0px' ? '-50px' : 0;
                $('.top_tips').animate({top: t}, 1e3);
                if (t == '-50px') {
                    $('#fixtop').animate({height: 0}, 1001);
                } else {
                    $('#fixtop').animate({height: $(".top_tips").height()}, 1001);
                    top_wx_status++;
                }
            }, 15e3);
        },
        showTop: function(){
            $('.newHead').append('<div class="topimg"><a href="/subject/activity/"><canvas id="cavsImage" style="width: 100%;"></canvas></a></div>');
            (function(){
                var canvas = document.querySelector('#cavsImage');
                var ctx = canvas.getContext('2d');

                canvas.width = 750;
                canvas.height = 100;
                var image = new Image();
                image.src='/images/index/newindex/imgs.jpg';
                image.onload = function() {
                    var x = 0;
                    var y = 0;
                    setInterval(function () {
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        ctx.drawImage(image,750*x,100*y,750,100,0,0,750,100);
                        x++;
                        if(x === 4){
                            y++;
                        }
                        x %=4;
                        y %=60;
                    }, 33);
                    $('.topimg').show();
                };
            })();

        },
        showCenter: function () {
            var _this = this;
            $('body').append('<div class="swt_center"></div>');

            //$('.swt_center').css('background', 'url(/images/swt/chat_box_bg.jpg) 0% 0% / 100% 100% no-repeat');
            var options = {
                border: 6,
                name: this.inCase()[0],
                tel: this.inCase()[1],
                chat: this.inCase()[2],
                phone: this.inCase()[3]
            };
            var phone = options.phone || '22235555';
            $(".swt_center").prepend('<a href="javascript:void(0)" onclick="openK();return false;" class="leadto"></a><p class="swt_close_n"></p><div class="chatbnt"><a href="tel:021-' + phone + '" class="swt-tel"><i></i><dl><dt>021-</dt><dd>' + phone + '</dd></dl></a><a href="javascript:openK();" class="swt-chat"><i><sup>0</sup></i><span>在线咨询</span></a></div><div class="bohao"><input type="hidden" name="fromurl" id="call_fromurl" value="" /> <input type="hidden" name="sid" value="2015201030" /> <input type="hidden" name="did" value="1011578" /></div>');
            if(hosts[1].indexOf(host) == -1){
                $('.bohao').css({width: '224px', height: '30px', top: 208, left: 28});
                $('.bohao').append('<input type="text" name="tel" id="bohao_tel" placeholder="请输入电话号码" class="inflow" /><input type="submit" name="submit" value="回电" class="inflow_btn" /><iframe name="aa" id="aa" style="display:none" frameborder="0" width="0" height="0"></iframe>');
                $('.bohao .inflow').css({
                    width: 174,
                    height: 28,
                    lineHeight: '28px',
                    'font-size': 14,
                    'border-top-left-radius': options.border,
                    'border-bottom-left-radius': options.border,
                    'text-indent': 0,
                    borderTop: '#d3d3d3 1px solid',
                    borderLeft: '#d3d3d3 1px solid',
                    borderBottom: '#d3d3d3 1px solid'
                });
                $('.bohao .inflow_btn').css({
                    background: options.tel,
                    width: 50,
                    height: 30,
                    lineHeight: '30px',
                    'font-size': 14,
                    'border-top-right-radius': options.border,
                    'border-bottom-right-radius': options.border
                });
            }
            $('.chatbnt .swt-tel').css("background", options.tel);
            $('.chatbnt .swt-chat').css("background", options.chat);
            function swt_center(){
                $(".swt_center").delay(1000).show().animate({
                    top: '45%',
                    'opacity': 1
                }).css({
                    'background': 'url("/m/static/images/mylike_online/' + options.name + '.jpg?v='+ _this.getDate(1) +'") no-repeat',
                    margin: '-150px 0 0 -140px',
                    'background-size': '100% 100%',
                    animation: 'swing 1s 3s ease both',
                    'border-radius': '15px',
                    'box-shadow': 'rgba(0, 0, 0, 0.4) 0 0 10px 3px'
                });
            }
            var data = {"time":["aqtx","brand","doctor","yanbzx","bbzx1","jtfx2","xzlb","bnslist","zfzxx","nflist","kq","zf","sypcase","xbcase","bnscase","ybcase","bbcase","xbcase","zfyzcase","mfcase","wzxcase","activityCase","ambient","ssds","ybjddh","xzx5p","xsmr","ppxs","yxflt","bzx","ybsl","bbxp"]};
            // $.ajax({
            //     url: "/plus/banners.php?t=Popup_time",
            //     dataType: "json",
            //     type: "get",
            //     async: false,
            //     success: function (data) {
                    for (var n in data) {
                        if (data[n].indexOf(final)  > -1){
                            setTimeout(function(){swt_center();},40000)
                        }else {
                            swt_center();
                        }
                    }
                // }
            // });
            $(".swt_close_n").click(function () {
                $('.swt_center').hide(500);
                $(".swt_center").css({animation: 'sc 1s 0.1s ease both'});
                 /*setTimeout(function(){
                     _this.ex(2);
                 }, 15000);
                setTimeout(function () {
                    $(".swt_center").css({animation: 'cs 1s 0.1s ease both'});
                    $('.swt_center').show(500);
                }, 40000);*/
            });
        },
        showbbright: function () {
            $.ajax({
                type: "get",
                url: "/plus/banners.php?t=subject_banner",
                dataType: "json",
                async: false,
                success: function (data) {
                    var p = location.pathname.split('/').slice(-2)[0];
                    for (var x in data) {
                        if ($.inArray(p, data[x].subject) > -1) {
                            if (data[x].name == '鼻部优惠') {
                                $(".telphonenew").before('<div id="kst_tc"><sub class="rand"></sub><i class="ripple-a"></i><i class="ripple-b"></i><img src="/m/static/images/index/newindex/kst_right.png" alt=""></div>' +
                                    '<div class="subject_kst">' +
                                    '<a href="javascript:void(0);" class="kst_close"><img src="/m/static/images/index/newindex/x.png" /></a>' +
                                    '<div class="youhui-inner_n">' +
                                    '<div class="youhui-wrap">' +
                                    '<div class="wrap_c">' +
                                    '<div class="wrap_t"><p class="pp1">哈尔滨美珊官方咨询平台</p></div>' +
                                    '<div id="text1" class="chat"> <div class="toux"><img src="/m/static/images/index/newindex/kst_kf.jpg" alt="" /></div> <div class="text"><div  class="time1"><span id="times_b"></span></div> <p class="pp2">您好，我是哈尔滨美珊隆鼻顾问<span class="sj"><img src="/m/static/images/index/newindex/kst_l.jpg" alt="" /></span></p> </div> </div>' +
                                    '<div id="text2" class="chat"> <div class="toux"><img src="/m/static/images/index/newindex/kst_kf.jpg" alt=""></div> <div class="text"> <div class="time1"><span id="times_b1"></span></div> <p class="pp2">请问有什么隆鼻需求？让我在线为您解答！<span class="sj"><img src="/m/static/images/index/newindex/kst_l.jpg" alt=""></span></p> </div></div>' +
                                    '<div class="yh-cont"><textarea id="content" name="content" placeholder="在此输入可直接对话"></textarea> <a id="yhChat" href="javascript:void(0);" onclick="openK(this);return false;" style="display: block;">发送</a>  </div>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>');
                            }
                        }
                    }
                }
            });
            var timer6 = setInterval(function () {
                var rands = Math.ceil(Math.random() * 20);
                var randoms = rands > 10 ? rands : 10;
                $('.rand').text(randoms + '+');
            }, 3000);
        },
        showBottomChat: function () {
            $(document).scroll(function () {
                if ($(".youhui-inner").length) {
                    if ($(this).scrollTop() > ($(".youhui-inner").offset().top - 300)) {
                        document.getElementById('times').innerHTML = getDate;
                        $('#bb1').animate({opacity: 1}, 1000);
                        setTimeout(function () {
                            document.getElementById('times1').innerHTML = getDate;
                            $('#bb2').animate({opacity: 1}, 1000);
                        }, 3000);
                    }
                }
            });
        },
        buildCall: function () {
            var _this = this;
            $('#livecall').bind("click", function () {
                _this.setCall('livecall', $('#call_tel').val());
            });

            $('.inflow_btn').bind("click", function () {
                _this.setCall('inflow_btn', $('#bohao_tel').val());
            });
        },
        setCall: function (where, tel) {
            var enterurl = window.location.href;
            $.ajax({
                url:
                    'https://sh.mylikechat.com/live800/SurferServer?cmd=120&companyID=771670&phoneNum=' + tel + '&enterurl=' + enterurl + '?' + where,
                dataType: "jsonp",
                jsonp: "callback",
                success: function (data) {
                    if (data === 0) {
                        alert('你已留电成功，请留意我们的来电！');
                    } else if (data === 2) {
                        alert('手机号码不能为空！');
                    } else if (data === 3) {
                        alert('手机格式错误！');
                    }

                }
            })
        },
        setBaidu: function () {
            var bdstr = {
                'mylike025.cn': '2be66af202118fcc4d79963b008f8d97',
                'shmylike.com': '667bb7ba4af07df0fbfbd23a28925f74',
                '021mylike.com': 'e987e5b4ab9bcba446a0ee701e0ab621',
                'mylike021.com': 'a54574c8e18d33fd5e1f691af0dcfca7',
                'shmylikezx.com': 'ec3b438de9fed1958dad26f47b3d0aa7',
                'shmylike.net': '3791df51f79bee73101c296f46fc8da6',
                'sh-mylike.com': 'deaa688fcf4928675e37e5ee7e3027f9',
                'ml-kq.com': 'a54574c8e18d33fd5e1f691af0dcfca7',
                '021mylike.cn': 'a68e2481291b84eb2914dad920466716',
                'shmylike.cn': '63026dd1b8e82dd544ee2a84f2e5be16',
                'ml-dental.com': 'fee997ae2ad00737c8d74be690dd02fc',
                'shanghaizhengxing.cn': 'ee8f717906e4116aab4cdf10c1d2f98c',
                '177mr.com': 'a9062776fe7f9e46fe6c2a64736f32e2',
                'shmlzx.cn': '973db68a905c8db2563a9dfd54daf18c',
                'mlylmr.com': '97840c5632b2a60cb1f969babb7f9395',
                'sh-mylike.net': '314a39e43eb1452b81b021881cd81584',
                'mylikesh.net': '62609a1bf375e4f1dead2a93c264118a',
                'mylikesh.cn': 'c9528524ae8d24583143c3a9c55bb05c',
                'shmylike.co': 'a9eac69d1e7b6ab014c1fc3c71c9e6b5',
                'shmylike.cc': '77ec9ffecfe9629720360d1294af80e8',
                'shmylike.com.cn': '7f37a8ffce73139a61834ca99031f79f',
                '22235555.cn': 'f56c436b3f3461d23f670b1861d63f81',
                'mylike-sh.net': '8816774160e307841afa4087c8b69ba1',
                'mylike025.net': 'e3b9944de5ef1969ce16ced7e895fadf',
                'mylike025.cc': 'a152261e042403aa6451a93f86147c76',
                'mylike.asia': 'abf1aa5b1c936178ccb6236d6e24c0f6'
            };
            var bdstrK = bdstr[rootDomain];
            if (bdstrK != undefined) {
                var _hmt = _hmt || [];
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?" + bdstrK + "";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        },
        setCNZZ: function () {
          var html = '<p style="display:none">';
          html += '<scr' + 'ipt type="text/javascript" src="https://s23.cnzz.com/z_stat.php?id=1276163818&web_id=1276163818"></scr' + 'ipt>';
          html += '</p>';
          var node = document.createElement('div');
          node.innerHTML = html;
          var dom = document.getElementById('domWrite');
          dom.parentNode.insertBefore(node, dom);
        },
        getType: function(){
            var _this = this;
            // var _data = {
            //   'm': 
            // }
            // $.ajax({
            //     url: "/plus/types.php?w=" + final,
            //     dataType: "json",
            //     async: false,
            //     success: function(data){
                    _this._type = {
                      "wx": 0,
                      "bn": 0,
                      "ct": 0,
                      "cs": 0,
                      "dc": 0,
                      "type": 0
                  };
                // }
            // });
        },
        //Google Analytics
        GoogleAnalytics: function () {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] ||
                    function () {
                        (i[r].q = i[r].q || []).push(arguments)
                    },
                    i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-86800835-1', 'auto');
            ga('send', 'pageview');
        },
        //通用项目菜单
        projectMenu: function () {
            if (hosts[1].indexOf(host) == -1) {
                var mymenu = '<div class="fixed-menu"><div class="fixed-menu-nav"><div id="item_nav"><div class="swiper-container item_nav"><ul class="swiper-wrapper"><li class="swiper-slide"><a href="/brand/">美珊品牌</a></li><li class="swiper-slide"><a href="/doctor/">国际专家部</a></li><li class="swiper-slide"><a href="/case/">美丽日记</a></li><li class="swiper-slide"><a href="/subject/shproject/aqtx/">安全体系</a></li></ul></div></div></div><div class="project_content_box"><div class="project_main"><ul class="project_nav"></ul><div class="project_item"></div><div class="return"><img src="/m/static/images/index/newindex/return.png" /></div></div></div></div>';
                $('body').append(mymenu);
                var projects = {
                  "眼部整形": {
                    "眼部美容": [
                      ["/subject/sypzh2/", "双眼皮"],
                      ["/subject/qqsyp1/", "全切双眼皮"],
                      ["/subject/mxsyp1/", "埋线双眼皮"],
                      ["/subject/nmmy/", "急速纳米美眼"],
                      ["/subject/mmqjdys/", "明眸翘睫大眼术"],
                      ["/subject/sjxcjzs/", "肿泡眼"],
                      ["/subject/whkyj1/", "开眼角"],
                      ["/subject/sypqq/", "韩式双眼皮"]
                    ],
                    "眼部抗衰": [
                      ["/subject/whqyd/", "祛眼袋"],
                      ["/subject/qyww/", "鱼尾纹"]
                    ],
                    "眼部修复": [
                      ["/subject/yxf/", "双眼皮失败修复"],
                      ["/subject/ybxfu/", "开眼角失败修复"],
                      ["/subject/yxf/", "祛眼袋失败修复"]
                    ],
                    "热门技术": [
                      ["/subject/mmqjdys/", "明眸翘睫大眼术"],
                      ["/subject/nmmy/", "急速纳米美眼"],
                      ["javascript:openK();", "私人定制美眼"],
                      ["/subject/bbdy1/", "芭比混血双眼皮"],
                      ["javascript:openK();", "传奇美眼"]
                    ],
                    "推荐专家": [
                      ["/subject/doctor/duyy2/", "杜圆圆"],
                      ["/subject/doctor/whl/", "吴海龙"],
                      ["/subject/h5/hxl/", "何祥龙"]
                    ]
                  },
                  "鼻部整形": {
                    "鼻部美容": [
                      ["/subject/zhbb/", "隆鼻"],
                      ["/subject/zhbb/", "综合隆鼻"],
                      ["/subject/hsjtlb/", "假体隆鼻"],
                      ["/subject/dlszhlb/", "自体软骨隆鼻"],
                      ["javascript:openK();", "垫鼻子"],
                      ["/subject/bysxg/", "鼻翼缩小"],
                      ["/subject/wbjz/", "歪鼻矫正"],
                      ["javascript:openK();", "鼻尖整形"]
                    ],
                    "隆鼻修复": [
                      ["/subject/bxf/", "隆鼻修复"],
                      ["/subject/bxf/", "假体隆鼻失败修复"],
                      ["/subject/bxf/", "注射隆鼻失败修复"]
                    ],
                    "隆鼻技术": [
                      ["/subject/zhbb/", "鼻综合"],
                      ["/subject/zhbb/", "综合隆鼻"],
                      ["/subject/dlszhlb/", "自体软骨隆鼻"],
                      ["/subject/dlszhlb/", "达拉斯隆鼻"]
                    ],
                    "推荐专家": [
                      ["/subject/h5/lzq/", "李战强"],
                      ["/subject/h5/wl/", "王琳"],
                      ["/subject/doctor/luj/", "卢建"],
                      ["javascript:openK();", "陈斌"]
                    ]
                  },
                  "胸部整形": {
                    "胸部美容": [
                      ["/subject/jtfx1/", "假体丰胸"],
                      ["/subject/kemztzffx/", "自体脂肪丰胸"],
                      ["/subject/zhfx2/", "综合丰胸"],
                      ["/subject/rfxcjz/", "胸部下垂"],
                      ["/subject/jrsx/", "巨乳缩小"],
                      ["/subject/furqc/", "副乳切除"],
                      ["/subject/rtry/", "乳头乳晕"]
                    ],
                    "隆胸修复": [
                      ["/subject/lxsbxf/", "失败修复"],
                      ["/xbm/topic/aomd/", "奥美定取出"]
                    ],
                    "热门技术": [
                      ["/subject/dgfx/", "深v动感丰胸"],
                      ["/subject/kemztzffx/", "科尔曼自体脂肪丰胸"],
                      ["/subject/jtfx1/", "美珊假体丰胸"],
                      ["/subject/rfxcjz/", "美珊乳房下垂矫正术"],
                      ["/subject/jrsx/", "美珊巨乳缩小术"]
                    ],
                    "推荐专家": [
                      ["/subject/doctor/whao/", "汪灏（hao）"],
                      ["/subject/doctor/bcc1/", "白承燦"],
                      ["/subject/doctor/oytx/", "欧阳天祥"]
                    ]
                  },
                  "面部精雕": {
                    "面部塑形": [
                      ["/subject/zitizfmbtc2/", "面部填充"],
                      ["/subject/ftyx1/", "丰太阳穴"],
                      ["/subject/zsfxb2/", "丰下巴"],
                      ["/subject/zsfet/", "丰额头"],
                      ["/subject/fpgj1/", "丰苹果肌"],
                      ["/subject/bnsfc/", "丰唇"]
                    ],
                    "推荐方法": [
                      ["/subject/zitizfmbtc2/", "自体脂肪面部填充"],
                      ["/subject/zfftyx/", "自体脂肪丰太阳穴"],
                      ["/subject/mbtc2/", "玻尿酸面部填充"]
                    ]
                  },
                  "微整形": {
                    "填充塑形": [
                      ["/subject/shoulzff/", "注射瘦脸"],
                      ["/subject/stzb1/", "注射瘦腿"],
                      ["/subject/bnslb/", "注射隆鼻"],
                      ["/subject/ftyx1/", "丰太阳穴"],
                      ["/subject/zsfxb2/", "丰下巴"],
                      ["/subject/zsfet/", "丰额头"],
                      ["/subject/fpgj1/", "丰苹果肌"],
                      ["/subject/bnsfc2/", "丰唇"],
                      ["/subject/bnslgtc/", "泪沟填充"],
                      ["/subject/mbtc2/", "面部填充"]
                    ],
                    "注射材料": [
                      ["/subject/bnszh1/", "美珊玻尿酸"],
                      ["/subject/rnbns/", "瑞蓝"],
                      ["/subject/ywbns/", "伊婉"],
                      ["/subject/rbybns/", "润百颜"],
                      ["/subject/hwbns1/", "海薇"],
                      ["/subject/bnd/", "宝尼达"],
                      ["/subject/alwbns/", "艾莉薇"],
                      ["/subject/blzbns/", "贝丽姿"],
                      ["/subject/qydbns/", "乔雅登"]
                    ]
                  },
                  "吸脂瘦身": {
                    "瘦身方法": [
                      ["/subject/dwltxiz/", "吸脂瘦身"],
                      ["/subject/csrzss/", "纤体瘦身"],
                      ["/subject/hjwd/", "微雕溶脂"],
                      ["/subject/mlss/", "酷塑溶脂"]
                    ],
                    "瘦身部位": [
                      ["/subject/xzzh1/", "全身吸脂"],
                      ["/subject/sbxz/", "手臂吸脂"],
                      ["/subject/yfxz/", "腰腹吸脂"],
                      ["/subject/dtxz/", "腿部吸脂"],
                      ["/subject/mjbxz/", "面部吸脂"],
                      ["/subject/tbxz/", "臀部吸脂"],
                      ["/subject/sxbxz/", "双下巴吸脂"]
                    ]
                  },
                  "祛斑美肤": {
                    "色斑问题": [
                      ["/subject/xhhb/", "黄褐斑"],
                      ["/subject/qqb2/", "雀斑"],
                      ["/subject/sscz1/", "色素沉着"],
                      ["/subject/xhhb/", "妊娠斑"],
                      ["/subject/qbzh/", "晒斑"],
                      ["/subject/qusbzh/", "褐青色痣"],
                      ["/subject/qbzh/", "老年斑"],
                      ["/subject/qusbzh/", "咖啡斑"],
                      ["/subject/qusbzh/", "太田痣"]
                    ],
                    "激光祛斑": [
                      ["/subject/cpm/", "“二代皮秒”超皮秒激光祛斑"],
                      ["/subject/pm/", "蜂巢皮秒镭射激光祛斑"],
                      ["/subject/gzqb/", "M22王者之心光子嫩肤祛斑"],
                      ["/subject/gzqb/", "调Q755宝石激光祛斑"],
                      ["/subject/gzqb/", "Medlite C6净肤激光祛斑"]
                    ]
                  },
                  "嫩肤美白": {
                    "热门技术": [
                      ["/subject/shuiguangz/", "水光针"],
                      ["/subject/guosnf/", "果酸嫩肤"],
                      ["/subject/guangznf/", "光子嫩肤"],
                      ["/subject/weizms/", "微针美塑"],
                      ["/subject/pfmg/", "过敏肌肤修复"],
                      ["/subject/meibainf/", "美白嫩肤"]
                    ],
                    "肌肤症状": [
                      ["/subject/shuiguangz/", "干燥缺水"],
                      ["/subject/mkcd/", "毛孔粗大"],
                      ["/subject/pfmg/", "肌肤敏感"],
                      ["/subject/qheit/", "黑头"],
                      ["/subject/quheiyq/", "黑眼圈"],
                      ["/subject/quxhs/", "红血丝"],
                      ["/subject/jzbzl/", "酒糟鼻"]
                    ]
                  },
                  "紧肤除皱": {
                    "除皱部位": [
                      ["javascript:openK();", "鱼尾纹"],
                      ["javascript:openK();", "法令纹"],
                      ["javascript:openK();", "抬头纹"],
                      ["javascript:openK();", "嘴角纹"],
                      ["javascript:openK();", "眼部松弛"],
                      ["javascript:openK();", "全面部除皱"],
                      ["javascript:openK();", "眉间纹"],
                      ["javascript:openK();", "妊娠纹"],
                      ["javascript:openK();", "颈纹"]
                    ],
                    "除皱方法": [
                      ["javascript:openK();", "线雕提升"],
                      ["javascript:openK();", "深蓝射频"],
                      ["javascript:openK();", "黄金微针"],
                      ["javascript:openK();", "玻尿酸除皱"],
                      ["javascript:openK();", "除皱针"]
                    ]
                  },
                  "脱毛中心": {
                    "持久脱毛": [
                      ["/subject/tym/", "脱腋毛"],
                      ["/subject/tcm/", "脱唇毛/胡子"],
                      ["/subject/bdtm/", "手臂脱毛"],
                      ["/subject/ttm/", "小腿脱毛"],
                      ["/subject/ttm/", "大腿脱毛"],
                      ["/subject/bjntm/", "比基尼脱毛"],
                      ["/subject/mbtm/", "脱发际线"],
                      ["/subject/bdtm/", "胸背部脱毛"],
                      ["/subject/mbtm/", "脱络腮胡"]
                    ],
                    "脱毛技术": [
                      ["/subject/jgtuom/", "激光脱毛"],
                      ["/subject/cbtuom/", "超冰脱毛"],
                      ["/subject/bdtuom/", "冰点脱毛"],
                      ["/subject/bdtm/", "柔肤脱毛"]
                    ],
                    "优惠价格": [
                      ["/subject/wrtuom/", "优惠价格"]
                    ]
                  },
                  "祛痘美肤": {
                    "痘痘痘印": [
                      ["/subject/qbzt/", "痘痘"],
                      ["/subject/douyin/", "痘印"],
                      ["/subject/qudouzh/", "痘坑"]
                    ],
                    "热门技术": [
                      ["/subject/qudouzh/", "美珊医学祛痘"],
                      ["/subject/qdy/", "美珊分型去痘印"],
                      ["/subject/gsqd/", "果酸祛痘美肤"]
                    ]
                  },
                  "纹绣中心": {
                    "纹绣": [
                      ["/subject/wenx/", "半永久定妆"],
                      ["/subject/banyjwm/", "纹眉"],
                      ["/subject/mtx/", "纹眼线"],
                      ["/subject/3dtrcb/", "漂唇"],
                      ["/subject/ruyun/", "乳晕漂红"]
                    ],
                    "热门技术": [
                      ["/subject/wenx/", "美珊半永久纹绣"],
                      ["/subject/banyjwm/", "美珊韩式半永久纹眉"],
                      ["/subject/mtx/", "大眼美瞳线"],
                      ["/subject/3dtrcb/", "水晶润唇"],
                      ["/subject/3dtrcb/", "果冻亮唇"]
                    ],
                    "洗纹身/洗纹绣": [
                      ["/subject/xmxws/", "洗纹身"],
                      ["/subject/xmxws/", "洗纹绣"]
                    ]
                  },
                  "口腔": {
                    "牙齿矫正": [
                      ["/subject/kqjz/", "牙齿矫正"],
                      ["/kqm/topic/yinsm/", "隐形矫正"],
                      ["/subject/kqjz/", "钢丝矫正"]
                    ],
                    "牙齿修复": [
                      ["/subject/stkcy/", "烤瓷牙"],
                      ["/kqm/topic/qcy/", "全瓷牙"],
                      ["/kqm/topic/3dmrg/", "美容冠"],
                      ["/kqm/topic/ytm/", "牙贴面"],
                      ["/kqm/topic/yc/", "缺牙修复"]
                    ],
                    "牙齿美白": [
                      ["/subject/lgmb/", "冷光美白"],
                      ["javascript:openK();", "超声波洁牙"]
                    ],
                    "综合治疗": [
                      ["javascript:openK();", "牙周疾病"],
                      ["/kqzlxm/1861.html", "根管治疗"],
                      ["javascript:openK();", "拔牙"],
                      ["javascript:openK();", "补牙"]
                    ]
                  },
                  "植发": {
                    "植发": [
                      ["/subject/shtwhzf/", "毛发移植"],
                      ["/subject/fajx/", "发际线调整"],
                      ["/subject/mfjms1/", "毛发加密"],
                      ["/subject/zfzh/", "脱发治疗"],
                      ["/subject/tdwj/", "秃顶移植"],
                      ["/subject/bhzz/", "疤痕种植"]
                    ],
                    "艺术移植": [
                      ["/subject/meimzz/", "眉毛种植"],
                      ["/subject/huxzz/", "胡须种植"],
                      ["/subject/jiemyz/", "睫毛种植"],
                      ["/subject/bjzz/", "鬓角种植"],
                      ["/subject/smzz/", "私密种植"]
                    ],
                    "植发技术": [
                      ["/subject/shtwhzf/", "SHT无痕毛发移植术"],
                      ["/subject/mfjms1/", "PSEM高精植发术"],
                      ["/subject/fgfzf/", "FGF双活因子植发术"],
                      ["javascript:openK();", "MDT多维植发术"],
                      ["javascript:openK();", "NTT不剃发技术"],
                      ["javascript:openK();", "自体脂肪疤痕植发"]
                    ],
                    "推荐专家": [
                      ["/subject/doctor/yyk/", "袁玉坤"],
                      ["/subject/doctor/zqg/", "朱启刚"]
                    ]
                  }
                };
                // $.ajax({
                //     url: "/plus/banners.php?t=projects",
                //     type: "get",
                //     dataType: "json",
                //     async: false,
                //     success: function (projects) {
                        var i = 0;
                        for (var n in projects) {
                            $('.project_nav').append('<li>' + n + '</li>');
                            $('.project_item').append('<div class="item_box"></div>');
                            for (var m in projects[n]) {
                                $('.item_box:eq(' + i + ')').append('<dl><dt>' + m + '</dt></dl>');
                                for (var o = 0; o < projects[n][m].length; o++) {
                                    $('.item_box:eq(' + i + ') dl dt:contains("' + m + '")').parent().append('<dd><a href="' + projects[n][m][o][0] + '">' + projects[n][m][o][1] + '</a></dd>');
                                }
                            }
                            i++;
                        }
                        $(".project_nav li:eq(0)").addClass('on');
                    // },
                    // complete: function () {
                        var ww = $('body').width(),
                            wh = $(window).height(),
                            ih = wh - $('#item_nav').height();
                        $(".fixed-menu").css({width: ww, left: -ww});
                        $(".project_content_box").css({width: ww, height: wh});
                        $(".project_nav").css({height: ih});
                        $(".project_item").css({height: ih});
                        $(".project_main .project_item .item_box").first().show().siblings().hide();
                        $(".project_nav li").bind("click", function () {
                            var i = $(this).index();
                            $(this).addClass('on').siblings().removeClass('on');
                            $(".project_main .project_item .item_box").eq(i).show().siblings().hide();
                        });
                        $(".return").bind("click", function () {
                            $('.fixed-menu').css({animation: 'hideit 0.6s 0.1s ease both'});
                            $('.fixed-menu').animate({left: '-1000px'});
                        });
                    // }
                // });
            }
        },
        showMenu: function () {
            this.setSwiper('.item_nav');
            $('.fixed-menu').css({animation: 'showit 0.6s 0.1s ease both'});
            $('.fixed-menu').animate({left: 0});
            if ($('#item_nav .item_nav ul li a').css('font-size').replace('px', '') > 20) {
                $('#item_nav .item_nav ul li a').css('font-size', function () {
                    return $(this).css('font-size').replace('px', '') / 1.5 + 'px';
                });
                $('.project_nav li').css('font-size', function () {
                    return $(this).css('font-size').replace('px', '') / 1.5 + 'px';
                });
                $('.item_box dl dt').css('font-size', function () {
                    return $(this).css('font-size').replace('px', '') / 1.5 + 'px';
                });
                $('.item_box dl dd').css('font-size', function () {
                    return $(this).css('font-size').replace('px', '') / 1.4 + 'px';
                });
            }
        },
        showzfmenu: function () {
            $('.zfm_menu').stop().animate({left: '0'}, 1000);
            $(".zfm_menu .zfm_content ul li dt").click(function () {
                $(this).next().slideToggle();
                $(this).find("i").toggleClass('bg2').toggleClass('bg1');
            });
            var ih = $('article.main').height();
            $(".zfm_menu").css({top: ih});
            $(".zfm_menu .zfm_content h3").click(function () {
                $('.zfm_menu').stop().animate({left: '-1000px'}, 1000);
            });
        },
        mylikeZF: function () {
            if (hosts[1].indexOf(host) > -1) {
                var link = document.createElement('link');
                link.rel = "stylesheet";
                link.href = 'http://imgs.shmylike.com/zfm/css/menu.css';
                var menu = document.getElementsByTagName('link')[0];
                menu.parentNode.insertBefore(link, menu);
                var zfmenu = '<div class="zfm_menu"><div class="zfm_content"><h3><img src="/image/jt.png" alt="" /><span>返回</span></h3><ul><li><dl><a href="javascript:openK()"><dt><span>关于我们</span><b>About Us</b><i></i></dt></a></dl></li><li><dl><dt><span>医生团队</span><b>Expert Team</b><i></i></dt><dd><p><a href="/subject/doctor/yyk/">袁玉坤</a></p><p><a href="/subject/doctor/zqg/">朱启刚</a></p></dd></dl></li><li><dl><dt><span>服务项目</span><b>Service Items</b><i></i></dt><dd><p><a href="/subject/zfzh/">头发种植</a></p><p><a href="/subject/fjxtz/">发际线调整</a></p><p><a href="/subject/meimzz/">眉毛种植</a></p><p><a href="/subject/huxzz/">胡须种植</a></p><p><a href="/subject/bjzz/">鬓角种植</a></p><p><a href="/subject/jiemyz/">睫毛种植</a></p><p><a href="/subject/bhzz/">疤痕种植</a></p><p><a href="/subject/smzz/">私密种植</a></p></dd></dl></li><li><dl><a href="/subject/zfal/"><dt><span>案例</span><b>The Case</b><i></i></dt></a></dl></li><li><dl><a href="/subject/zfjs/"><dt><span>技术</span><b>Technology</b><i></i></dt></a></dl></li><li><dl><a href="javascript:openK()"><dt><span>新闻</span><b>News</b><i></i></dt></a></dl></li><li><dl><dt><span>联系我们</span><b>Contact Us</b><i></i></dt><dd><p><a href="javascript:openK()">当月优惠</a></p><p><a href="javascript:openK()">美珊分院</a></p><p><a href="javascript:openK()">来院路线</a></p></dd></dl></li></ul></div></div>';
                $('body').append(zfmenu);
                $('#telephone img').attr('src', '/image/yuyue02.png');
                $('#telephone').attr('href', 'tel:021-22235540');
                $('.telphonenew img').attr('src', '/image/telphonenew.jpg');
                $('.telphonenew').attr('href', 'tel:021-22235540');
                $('.fqfk img').attr('src', '/image/fqfk.png');
                $('.fqfk').attr('href', 'javascript:openK()');
                $('.navBtn').attr('href', 'javascript:void(0);');
                $('.copyright').attr('src', '/image/brand.jpg');
                $('.menu .li1 a:eq(1) i').css({'background': 'url("http://imgs.shmylike.com/images/index/newindex/ft_act_zf.png") no-repeat center center','background-size': '50%'});
                $('.menu .li1 a').eq(1).attr('href', 'javascript:void(0);');
                $('.menu .li1 a').eq(1).attr('onclick', 'openK(this);return false;');
                $('.menu .li1 a').eq(4).attr('href', 'tel:021-22235540');
                $('.brand img').attr('src', '/image/brand.jpg');
            }
        },
        checkStatus: function() {
            function sf(el){
                var whites = ['shmylike.com', 'shmylike.cn', 'baidu.com', 'cnzz.com', 'mylikechat.com', 'www.google-a', 'lim:component'];
                return whites.some(function(element){
                    return el.indexOf(element) > -1;
                });
            }

            window.addEventListener("DOMNodeInserted", function (event) {
                if(event.target.localName === 'script'){
                    var data = event.target.src || event.target.innerHTML;
                    if(!sf(data)){
                        event.target.parentNode.removeChild(event.target);
                    }
                }
            }, false);

        },
        inCheck: function () {
            var hs = ['u.021mylike.cn', 'sm.mylike021.cc'];
            if(hs.indexOf(host) >= 0){
                $('.newHead .logo img').attr('src', '/images/index/newindex/logo_check.png');
            }
        }
    }
}().init();
const script = document.createElement('script');
script.src = '/m/static/js/new_common1.js';
document.body.appendChild(script);