var Mylike = function() {
    var lp = location.pathname.split('/').slice(-2)[0];
    // var urls = ['zf','maofyz','tdwj','mfjm1','bhyz','smzz','fajx','bjyz','meimyz','tppclf','tppclf','jiemyz','mlzf','zhifa','huxzz'];
    var seoHost = ['www.177mr.com', 'www.shmylike.com'];
    var zfHost = ['zf.mylike-sh.net', 'mf.22235555.cn', 'mf.shmylike.cn', 'mf.91mylike.com'];
    var ls = ['shmylike.cn', 'ml-dental.com', 'shmylike.net'];
    var host = location.host;
    var rootDomain = location.host.split('.').slice(1).join('.');
    var lk =  'javascript:openK()';
    return {
        //初始化
        init : function(){
            window._self = {
                getDate : this.getDate,
                GetRandomNum : this.GetRandomNum,
                eachOpenK : this.eachOpenK,
                showCenterChat : this.showCenterChat,
                setCall : this.setCall,
                indexBanner : this.indexBanner,
                setIndex : this.setIndex
            };
            window.final = location.pathname.split('/').slice(-2)[0];
            //this.browserRedirect();
            // this.loadTouchSlide();
            this.setGlobal();
            this.setIndex();
            this.lazyLoadImg();
            this.mylike_online();
            this.setBaidu();
            this.setBaiduts();
            this.setCNZZ();
            this.setSafe();
            this.siteSearch();
            this.rightChat();
            this.centerChat();
            this.GoogleAnalytics();
            this.afterLoad();
        },
        //加载完执行
        afterLoad : function(){
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
                    return newStr
                }, urlDecode: function (Str) {
                    if (Str == null || Str == "") {
                        return ""
                    }
                    var newStr = "";
                    function toCase(sStr) {
                        return sStr.toString(16).toUpperCase()
                    }
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
                    return true;
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
            window.openK = function(){
                var content = arguments[0].id === 'qchat' && $(arguments[0]).prev()[0].value;
                var K = 'https:\/\/sh.mylikechat.com/live800/chatClient/chatbox.jsp?companyID=771670&configID=' + live.config + '&jid=&skillId=' + live.skill + '&s=1';
                var pagetitle;
                if (document.title.length > 80) {
                    pagetitle = fn.urlEncode(document.title.substring(0, 80));
                } else {
                    pagetitle = fn.urlEncode(document.title);
                }

                K+= "&enterurl=" + fn.urlEncode(document.URL);
                K+= "&pagetitle=" + pagetitle;

                var pagereferrinsession=fn.getCookie("pageReferrInSession");
                if(pagereferrinsession==null || pagereferrinsession==" ")pagereferrinsession="";
                K+= "&pagereferrer="+fn.urlEncode(pagereferrinsession);

                var firstenterurlinsession=fn.getCookie("firstEnterUrlInSession");
                if(firstenterurlinsession==null || firstenterurlinsession==" ")firstenterurlinsession="";
                K+= "&firstEnterUrl="+fn.urlEncode(firstenterurlinsession);
                if(content)
                    K+="&prePareMsg="+encodeURIComponent(content);
                window.open(K, "_blank");
            };

            window.tohide = function (e){
                $(e).is(":visible") && $(e).stop().animate({opacity: "0", top: "10%"}, 1000);
            };

            window.toshow = function (e){
                $(e).stop().animate({opacity: "1", top: "22%"}, 1000);
            };

            if(zfHost.indexOf(host) == -1 && location.host != 'bdpz.shmylike.com' ){
                // $('body').append('<div style="opacity:0;position:fixed;top:5%;left:10px;z-index:999;" id="left-float"><a href="javascript:void(0);" onclick="window.open(\'https://sh.mylikechat.com/live800/chatClient/chatbox.jsp?companyID=771670&configID=96&jid=&skillId=35&s=1\', \'_blank\');"><img src="/images/newindex/tm.png" /></a><a href="javascript:void(0);" onclick="tohide(this.parentNode)" style="position: absolute;right: 0;top: 0;z-index: 1"><img src="/images/newindex/close.png" /></a></div>');

                $(window).scroll(function(){
                    if($(window).scrollTop()){
                        toshow('#left-float');
                    } else {
                        tohide('#left-float');
                    }
                });
            }

            $(function() {
                _self.showCenterChat();
                _self.eachOpenK();

            });

        },
        browserRedirect: function () {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                location.href = 'http://m.shmylike.com/';
            }
        },
        //获取随机数
        GetRandomNum: function(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            return Min + Math.round(Rand * Range);
        },
        //获取日期
        getDate: function(t) {
            var d = new Date();
            return t == 'full' ? d.toISOString() : d.toISOString().split('T')[0];
        },
        lazyLoadImg : function(){
            if(final === ''){
                $(document).scroll(function(){
                    $('img[src*="ico-1"]').each(function(){
                        $(this).attr('src', $(this).attr('alt'));
                    });
                });
            }
        },
        //获取本地cookies
        getCookies : function(){
            var cookies = {};
            var cookie  = document.cookie.split(';');
            for(var i = 0; i < cookie.length; i++){
                cookies[cookie[i].split('=')[0].replace(/ /g, '')] = cookie[i].split('=')[1];
            }
            return cookies;
        },
        //加载TouchSlide插件
        // loadTouchSlide : function() {
        //     if(typeof TouchSlide === 'undefined'){
        //         document.write('<scr' + 'ipt src="/home/static/js/jquery.SuperSlide.2.1.1.js"></scr' + 'ipt>');
        //     }
        // },
        setGlobal: function () {
            $('.menuTab li').hover(function () {
                $(this).addClass('on').siblings().removeClass('on');
                $('.menubox .menuChange').eq($(this).index()).show().siblings().hide();
            });

            $('.navBarbox').hover(function () {
                $('.project_nav').stop().animate({
                    width: "1200px",
                    height: "520px"
                }, 400);
            }, function () {
                $('.project_nav').stop().animate({
                    width: "0px",
                    height: "0px"
                }, 200);
            });

            /*删除文章页侧边banner*/
            $('.com_l .pic').remove();
            /*临时替换活动链接*/
            $('a[href="/topic/obj/guojzx/"]').attr('href', '/topic/obj/activity/');

            /*临时审核修改*/
            var lstr = {
                'so.shmylikezx.cn': ' 医疗美容科',
                'so.99yimei.com': ' 美容外科',
                'so.91mylike.com': ' 美容皮肤科',
                'so.mylike88.com': ' 美容中医科',
                'so1.mylike88.com': ' 美容中医科'
            };
            var l = location.host;
            if(lstr[l] != undefined){
                $('.topBar li p:eq(0)').append( lstr[l] );
                $('.copyright').text('版权所有 © 哈尔滨美珊医疗整形' + lstr[l] + ' 沪ICP备14048956号 沪医广【2020】第04-10-G124号 ');
            }
            /*文章页专家答疑*/
            $("dd:contains('专家答疑')").click(function () {
                openK();
            });
        },
        //加载首页banner
        indexBanner: function (n, m, s, t) {
            var _data = {
              // "index_br": [
              //   {"id":"b5","link":"javascript:openK()"},
              //   {"id":"b2","link":"javascript:openK()"},
              //   {"id":"b3","link":"javascript:openK()"},
              //   {"id":"b9","link":"javascript:openK()"},
              //   {"id":"b1","link":"javascript:openK()"}
              // ],
              "newActivity": [
                {"link":"javascript:openK()","pic":"/images/newindex/activity0.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity1.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity2.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity3.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity4.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity10.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity11.jpg"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity7.jpg"}
              ],
              "newsInfoActivity": [
                {"link":"javascript:openK()","pic":"/images/newindex/activity5.jpg","title":"美珊受邀参加哈尔滨医学美容学术年会"},
                {"link":"javascript:openK()","pic":"/images/newindex/activity6.jpg","title":"美国进口鼻整形材料菲思挺发布会"}
              ],
              "indexVideo": [
                {"link":"javascript:void(0)","pic":"/images/newindex/activity21.jpg","video":"/images/newindex/activity21.mp4"},
                {"link":"javascript:void(0)","pic":"/images/newindex/activity8.jpg","video":"/images/newindex/activity2.mp4"}
              ]
            };
            if(n === 'index_br'){
              $.ajax({
                url: "/api/banner/findById?id=1",
                dataType: "json",
                type: "get",
                success: function (res) {
                  var data = res.result[0].banner.split(',');
                  console.log(data);
                  if (data != null) {
                    $('.' + n + ' .sider').empty();
                    for (var i = 0; i < data.length; i++) {
                        var html = {
                            index_br: ['<li style="background:url('+data[i]+') no-repeat center"><a href="javascript:openK()"></a></li>', '.indexBanner'],
                        };
                        $('.' + n).is(':visible') || $(html[n][1]).addClass(n);
                        if (data.length != $('.' + n + ' .sider li').length) {
                            $('.' + n + ' .sider').append(html[n][0]);
                        }
                    }
                  }
                },
                complete: function(){
                  (function slider() {
                    $('.' + n).slide({
                        mainCell: s,
                        effect: m,
                        titCell: ".hd",
                        interTime: 5000,
                        delayTime: 1000,
                        autoPage: true,
                        autoPlay: t,
                        mouseOverStop: true
                    });
                  })(n, m, s, t);
                }
              });
            }else{
              var data = _data[n];
              console.log(data);
              if (data != null) {
                $('.' + n + ' .sider').empty();
                for (var i = 0; i < data.length; i++) {
                    var html = {
                        index_br: ['<li background="url('+data.pic+') no-repeat center"><a href="' + data[i].link + '"></a></li>', '.indexBanner'],
                        newActivity: ['<a href="' + data[i].link + '"><img width="369" src="/home/static' + data[i].pic + '"></a>', ''],
                        newsInfoActivity: ['<a href="' + data[i].link + '"><img width="369" src="/home/static' + data[i].pic + '"><p>"'+data[i].title+'"</p></a>', ''],
                        indexVideo: ['<a href="' + data[i].link + '"><img width="100%" class="img_video" src="/home/static' + data[i].pic + '"><video src="/home/static' + data[i].video + '" x-webkit-airplay="allow" controls="controls" muted playsinline loop> </video></a>', ''],
                        left_banner: ['<li><a href="' + data[i].link + '" title="' + data[i].name + '"><img src="/home/static' + data[i].src + '" width="268" height="266" alt="' + data[i].name + '" /></a></li>', ''],
                        article_banner: ['<a href="' + data[i].link + '"><img src=' + data[i].src + '" /></a>', '']
                    };
                    $('.' + n).is(':visible') || $(html[n][1]).addClass(n);
                    if (data.length != $('.' + n + ' .sider li').length) {
                        $('.' + n + ' .sider').append(html[n][0]);
                    }
                }
              }
           
              $('.' + n).slide({
                  mainCell: s,
                  effect: m,
                  titCell: ".hd",
                  interTime: 5000,
                  delayTime: 1000,
                  autoPage: true,
                  autoPlay: t,
                  mouseOverStop: true
              });
            }
        },
        setIndex: function () {
            $('.indexBanner').is(':visible') && _self.indexBanner('index_br', 'leftLoop', '.sider', true);
            $('.newActivity').is(':visible') && _self.indexBanner('newActivity', 'leftLoop', '.sider', true);
            $('.newsInfoActivity').is(':visible') && _self.indexBanner('newsInfoActivity', 'leftLoop', '.sider', true);
            $('.indexVideo').is(':visible') && _self.indexBanner('indexVideo', 'leftLoop', '.sider', true);
            $('.left_banner').is(':visible') && _self.indexBanner('left_banner', 'leftLoop', '.sider', true);
            $('.article_banner').is(':visible') && _self.indexBanner('article_banner', 'leftLoop', '.sider', true);
        },
        eachOpenK : function() {
            $('[onclick*=openK]').attr('onclick', 'openK(this);return false;');
            $('a[href*=openK]').attr('href', 'javascript:void(0);').attr('onclick', 'openK(this);return false;');
            if(ls.indexOf(host) != -1){
                $('.navBox .nav:eq(1)').attr('href', '/brand').removeAttr('onclick');
            }
        },
        //美珊在线分组
        mylike_online: function() {
            var live_url = location.pathname + location.search;
            var ll = ['/', '/?pzwap', '/?js', '/?m.77meiren.com'];

            /*live800效果*/
            if( rootDomain == 'sh-mylike.com' || rootDomain == 'mylikesh.cn' ){
                window.live = { config:98, skill:37 };
            } else if($('meta[name="seo"]').length || seoHost.indexOf(host) != -1){
                window.live = { config: 81, skill: 20, type:"SEO" };
            } else if(zfHost.indexOf(host) != -1){
                window.live = { config: 96, skill: 35, type:"植发" };
            } else if(host == 'so.shmylike.com.cn'){
                window.live = { config:86, skill:25 };
            } else if(ll.indexOf(live_url) != -1){
                window.live = { config:84, skill:23 };
            } else {
                window.live = { config: 34, skill: 2 };
                $.ajax({
                    url:'http://www.shmylike.cn/plus/i.php?t=live800',
                    type:'get',
                    dataType:'json',
                    async:false,
                    success:function(data){
                        var res = data ? data : [];
                        var fz = res.filter(function(live){
                            return live.link.indexOf(location.pathname) != -1;
                        });
                        if(fz.length){
                            window.live = { config: fz[0].id[0], skill: fz[0].id[1], type: fz[0].type };
                        }
                    }
                });

            }
            document.getElementById('fayOnline').innerHTML = '<scr' + 'ipt language="javascript" src="https:\/\/sh.mylikechat.com/live800/chatClient/monitor.js?companyID=771670&configID=33&codeType=custom&insidePageSkillID=' + live.skill + '"></scr' + 'ipt>';
        },
        rightChat: function () {
          var rightChatDom = document.getElementById('rightChat');
          var rightChatDomHtml = "<div id=\"divR\">";
          rightChatDomHtml += "<a title=\"在线咨询\" target=\"_self\" onclick=\"openK('Pc-yc-zx');return false;\" class=\"divRzx\" href=\"javascript:void(0)\"><i id=\"divRsjs\">3</i></a>";
          // rightChatDomHtml += "<div class=\"divRtell\">";
          // rightChatDomHtml += "<div class=\"divRtell_inner\">";
          // rightChatDomHtml += "<a title=\"回电\" href=\"javascript:void(0)\" class=\"tell_link\">";
          // rightChatDomHtml += "<div class=\"divRtell_in\">";
          // rightChatDomHtml += "<input type=\"text\" name=\"tel\" id=\"right_tel\" onblur=\"if(!value)value=defaultValue\" onfocus=\"value=''\" value=\"请输入您的电话号码\" class=\"tel\" />";
          // rightChatDomHtml += "<input type=\"submit\" name=\"submit\" value=\"回电\" class=\"call\" id=\"call\" />";
          // rightChatDomHtml += "</div>";
          // rightChatDomHtml += "</a>";
          // rightChatDomHtml += "</div>";
          // rightChatDomHtml += "</div>";
          // rightChatDomHtml += "<a title=\"地址\" class=\"divRaddre\" target=\"_blank\" href=\"/route\"></a>";
          rightChatDomHtml += "<a class=\"backto_top\" onclick=\"pageScroll();\"title=\"返回顶部\" target=\"_self\"></a>";
          rightChatDomHtml += "</div>";
          rightChatDom.innerHTML = rightChatDomHtml;
          $('#call').bind("click", function(){
              _self.setCall('call', $('#right_tel').val());
          });
            /*回到顶部*/
            window.pageScroll= function() {
                $('body,html').animate({scrollTop: 0}, 1000);
                return false;
            };
            window.QQ = function () {
                var newE = document.createElement("iframe");
                newE.style.display = 'block';
                newE.src = "tencent:\/\/message/?Menu=yes&amp;uin=800102990&amp;Service=58&amp;SigT=15C7471141B27F957D5F5BB402C2ED1B311C6B8990AC29A62338DB9266542A8A2D1000AC4AAE820BEB557F96928D5A023A000BBBE6F77C6C77C9B54A15250F38D23D0CFBF78E2C190DBD52072FAF5C2F&amp;SigU=842D821E7D758F62E966F5459472ADE04D734A29717EFE0475ADE47BE6D1F30558A0F090C6C1FF73";
                document.body.appendChild(newE);
                setTimeout(function () {
                    $("iframe").remove();
                }, 1000);
            };
            $(document).ready(function () {
                var num = _self.GetRandomNum(40, 70);
                document.getElementById("divRsjs").innerHTML = num;
            });
        },
        centerChat : function() {
          var centerChatDom = document.getElementById('centerChat');
          var centerChatDomHtml = "<style>";
          centerChatDomHtml += "#form{position: absolute; top: 372px; left: 452px; display: block; overflow: hidden; margin-bottom: 10px !important; }";
          centerChatDomHtml += "#form input{border: 0;}";
          centerChatDomHtml += "#form input.callbF_text { float: left; padding-left: 13px; width: 150px; height: 32px; outline: 0; border-radius: 15px 0 0 15px; background-color: #e1e2ef; color: #6a7380; font-size: 14px; line-height: 30px; }";
          centerChatDomHtml += "#form .callbF_sub { float: left; display: block; box-sizing: border-box; width: 77px; height: 32px; border-radius: 0 16px 16px 0; background-color: #6a289e !important; color: #fff; text-align: center; text-decoration: none; font-size: 12px; line-height: 32px; cursor: pointer; font-size:14px;}";
          centerChatDomHtml += ".activity{width:696px;height: 260px;position:absolute;left:0;top:76px;}";
          centerChatDomHtml += "</style>";
          centerChatDomHtml += "<div id=\"divM\">";
          centerChatDomHtml += "<a class=\"activity\" href=\"" + lk + "\"></a>";
          centerChatDomHtml += "<a id=\"divMagb\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>";
          /*****电话*******/
          centerChatDomHtml += "<div id='form'>";
          centerChatDomHtml += "  <input type=\'text\' name=\'tel\' id=\'tel\' value=\'请输入您的电话号码\' onfocus=\'if(this.value==&quot;请输入您的电话号码&quot;){this.value=&quot;&quot;}\' onblur=\'if(this.value==&quot;&quot;){this.value=&quot;请输入您的电话号码&quot;}\' class=\'callbF_text\' />";
          centerChatDomHtml += "  <input type=\'submit\' name=\'submit\' value=\'回电\' class=\'callbF_sub\' id=\'livecall\' />";
          centerChatDomHtml += "</div>";
          
          $('#livecall').bind("click", function(){
              _self.setCall('livecall', $('#tel').val());
          });
          /*****电话结束*******/
          centerChatDomHtml += "<div class=\"ddzc\" style=\"margin:0 0 0 20px\"><a href=\"/topic/other/ddzc/\" target=\"_blank\"><img src=\"/home/static/images/swt/ddzc.png\" /></a></div>";

          centerChatDomHtml += "<textarea id=\"chatcontent\" name=\"chatcontent\" placeholder=\"在此输入可直接对话\"></textarea><a id=\"qchat\" onclick=\"openK(this);return false;\" href=\"javascript:void(0);\">发送</a><a id=\"zchat\" href=\"javascript:void(0);\" onclick=\"openK(\'Pc-tc-zxfs\');return false;\">咨询</a>";
          centerChatDomHtml += "</div>";
          /*****8-15修改*****/
          centerChatDomHtml += "<div id=\"divM_suoxiao\">";
          centerChatDomHtml += "<a id=\"divM_suoxiao_a\" onclick=\"openK();return false;\" href=\"javascript:void(0)\" target=\"_self\" title=\"点我咨询\"></a>";
          centerChatDomHtml += "<a id=\"divM_suoxiao_b\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>";
          centerChatDomHtml += "</div>";
          centerChatDom.innerHTML = centerChatDomHtml;
          $('.ddzc').css({margin: '0 0 0 20px'});
        },
        showCenterChat : function() {
            /***不同弹窗**/
            /*植发*/
            var zf = ['zhifa', 'tdwj', 'zhifazj', 'zfzj', 'mfjm1', 'mfjm', 'bhyz', 'smzz', 'fajx', 'meimyz', 'bjyz', 'mlzf', 'huxzz', 'jiemyz', 'zf', 'maofyz', 'zffy', 'mfyzjjh', 'tplf', 'zthxbbhyz', 'hdsy', 'maofayz', 'zfalzj'];
            /*口腔*/
            var kq = ['kq', 'yinsm', 'ycjz', '3dmrg', 'qcy', 'stkciy', 'ytm', 'lgmb', 'act_kq',"mrg","wxcs","kqzh","ysmyxjz","dental"];
            /*祛痘*/
            var qd = ['zhqd','qudou2','qudou3','dy','gsqd','zyqd','qudy','gxqd','qudou','qdzm','qdzh'];
            /*脱毛*/
            var tm = ['bdtm','tmzx','cbbdtm','mltm3','tuomao1','tuomao','tuom','wrtuom','wrtuom2','bdtm1'];
            /*无创*/
            var wc = ['bonsuan', 'zsfet', 'boniaos', 'zslb', 'zsfxb', 'zsfx', 'zspgj', 'ruilan', 'yiwan', 'runby', 'bns', 'ymbns', 'afl', 'xxzssl', 'shoulzjg', 'stz', 'stzb', 'bnslgtc'];
            /*线雕*/
            var xd = [];
            /*var xd = ['dbxcz', 'xdtl', 'nlty', 'xdltmb'];*/
            $(function () {
              $('.ddzc').show();
              $('#chatcontent').show();
              $('#zchat').show();
              $('#qchat').show();
              $('#form').css({top:373,left:452});
              $('#form input.callbF_text').css({width:150, height:29, 'border-radius':'0','background-color':'#fff'});
              $("#divM #form .callbF_sub").css("cssText", "background-color:#9C52CE!important").css({height:29,width:70}).attr('value','回电');
              $("#divM #divMagb").css({right:12,top:12});
              $('a.activity').css({width:700,height:260,top:76});
        		  $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'background-size':'100%'}).delay(3000).fadeIn(1000);
              $('#lim_mini').remove();
              if(host == 'bdpz.shmylike.com' && location.pathname == '/'){
                $("#divM").remove();
                  $("#divR").remove();
                  $("#lim_mini").remove();
              }

              $("#divM #zchat").css("background", "#9c52ce");
              $("#divM #qchat").css("background", "#ef73ad");
              $("#divM .activity").attr('href','javascript:openK()');

                if ($.inArray(lp, zf) != -1 || zfHost.indexOf(host) != -1) {
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_zf.gif)",'box-shadow':'none','background-size':'100%'});
                    $("#divM #zchat").css("background", "#D7751B");
                    $("#divM #qchat").css("background", "#312121");
                    $("#divM .activity").attr('href','javascript:openK()');

                }else if ($.inArray(lp, kq) != -1) {
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal_kq.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                    $("#divM #zchat").css("background", "#B60039");
                    $("#divM #qchat").css("background", "#312121");
                    $("#divM .activity").attr('href','javascript:openK()');
                }else if($.inArray(lp, tm) != -1){
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal_tm.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                    $("#divM #zchat").css("background", "#9439CE");
                    $("#divM #qchat").css("background", "#607AF8");
                    $("#divM .activity").attr('href','/topic/obj/tuom/');
                }else if($.inArray(lp, qd) != -1){
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal_qd.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                    $("#divM #zchat").css("background", "#9439CE");
                    $("#divM #qchat").css("background", "#607AF8");
                    $("#divM .activity").attr('href','javascript:openK()');
                }else if($.inArray(lp, wc) != -1){
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal_wc.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                    $("#divM #zchat").css("background", "#9439CE");
                    $("#divM #qchat").css("background", "#607AF8");
                    $("#divM .activity").attr('href','javascript:openK()');
                }else if($.inArray(lp, xd) != -1){
                    $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
                    $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','回电');
                    $("#divM #divMagb").css({right:12,top:12});
                    $('a.activity').css({width:700,height:260,top:76});
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal_xd.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                    $("#divM #zchat").css("background", "#9439CE");
                    $("#divM #qchat").css("background", "#607AF8");
                    $("#divM .activity").attr('href','javascript:openK()');
                }

                /*$('#divM').append('<marquee width="500" scrollAmount="3" direction="left" behavior="alternate" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="/topic/obj/mfhy/" target="_blank" style="color:#222">热烈庆祝哈尔滨九院毛发移植新进展继教班在哈尔滨美珊召开！大牌植发专家预约中...</a></marquee>');*/
                if($.inArray(lp, qd) != -1){
                    $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:180px;font-size:14px;"><a href="/topic/obj/qdzm/" target="_blank" style="color:#222"></a></p>');
                }else if($.inArray(lp, zf) != -1 || zfHost.indexOf(host) != -1){
                    $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="javascript:openK()" target="_blank" style="color:#222">新动有礼、最高可抽取3000元全院通用现金卷</a></p>');
                }

                if(host.indexOf("sh-mylike.com")>=0 || host.indexOf("mylikesh.cn")>=0 || host.indexOf("p.shmylike.com")>=0 || host.indexOf("so.shmylike.com.cn")>=0 || host.indexOf("mylike-sh.cn")>=0 ){
                    $("#divM").css({background: "url(/home/static/images/swt/kst_center_normal.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
                }
            });
           $("#divMagb").click(function() {
                $("#divM").animate({
                    'width': '0',
                    'height': '0',
                    'right': '0%',
                    'bottom': '0%',
                    'margin-right': '0px',
                    'margin-bottom': '0px'
                }, 1000, function () {
                    $("#zchat").hide();
                    $("#qchat").hide();
                    $("#divM ol").hide();
                });
                if ($("#small_divM").length > 0) {
                    $("#small_divM").fadeOut(1000).delay(30000).animate({
                        'width': '700px',
                        'height': '448px',
                        'right': '50%',
                        'bottom': '50%',
                        'margin-right': '-350px',
                        'margin-bottom': '-224px'
                    }, 1000, function () {
                        $("#zchat").show();
                        $("#qchat").show();
                        $("#divM ol").show();
                    });
                }
                $('#divM .ychu').remove();
            });

            /*如果用户点击*/
            $("#divM_suoxiao_b").click(function () {
                $(this).parent().hide().removeClass('divM_donghua');
            });
        },
        setCall : function(where, tel) {
            var enterurl = window.location.href;
            $.ajax({
                url:
                'https://sh.mylikechat.com/live800/SurferServer?cmd=120&companyID=771670&phoneNum='+tel+'&enterurl='+enterurl+'?'+where,
                dataType: "jsonp",
                jsonp: "callback",
                success: function (data) {
                    if(data === 0)
                    {
                        alert('你已留电成功，请留意我们的来电！');
                    } else if(data === 2)
                    {
                        alert('手机号码不能为空！');
                    } else if(data === 3)
                    {
                        alert('手机格式错误！');
                    }
                }
            })
        },
        setBaidu: function() {
            var bdstr = {
                'mylike025.cn': '2be66af202118fcc4d79963b008f8d97',
                'shmylike.com':'667bb7ba4af07df0fbfbd23a28925f74',
                '021mylike.com':'e987e5b4ab9bcba446a0ee701e0ab621',
                'mylike021.com': 'a54574c8e18d33fd5e1f691af0dcfca7',
                'shmylikezx.com':'ec3b438de9fed1958dad26f47b3d0aa7',
                'shmylike.net':'3791df51f79bee73101c296f46fc8da6',
                'sh-mylike.com':'deaa688fcf4928675e37e5ee7e3027f9',
                'ml-kq.com':'a54574c8e18d33fd5e1f691af0dcfca7',
                '021mylike.cn':'a68e2481291b84eb2914dad920466716',
                'shmylike.cn':'63026dd1b8e82dd544ee2a84f2e5be16',
                'ml-dental.com':'fee997ae2ad00737c8d74be690dd02fc',
                'shanghaizhengxing.cn':'ee8f717906e4116aab4cdf10c1d2f98c',
                '177mr.com':'a9062776fe7f9e46fe6c2a64736f32e2',
                'shmlzx.cn':'973db68a905c8db2563a9dfd54daf18c',
                'mlylmr.com':'97840c5632b2a60cb1f969babb7f9395',
                'sh-mylike.net':'314a39e43eb1452b81b021881cd81584',
                'mylikesh.net':'62609a1bf375e4f1dead2a93c264118a',
                'mylikesh.cn':'c9528524ae8d24583143c3a9c55bb05c',
                'shmylike.co':'a9eac69d1e7b6ab014c1fc3c71c9e6b5',
                'shmylike.cc':'77ec9ffecfe9629720360d1294af80e8',
                'shmylike.com.cn':'7f37a8ffce73139a61834ca99031f79f',
                '22235555.cn':'f56c436b3f3461d23f670b1861d63f81',
                'mylike-sh.net':'8816774160e307841afa4087c8b69ba1',
                'mylike025.net':'e3b9944de5ef1969ce16ced7e895fadf',
                'mylike025.cc':'a152261e042403aa6451a93f86147c76',
                'mylike.asia':'abf1aa5b1c936178ccb6236d6e24c0f6'
            };
            var bdstrK = bdstr[rootDomain];
            if(bdstrK != undefined){
                var _hmt = _hmt || [];
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?" + bdstrK + "";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        },
        setBaiduts: function () {
            if (window.location.hostname == 'www.shmylike.cn') {
                (function () {
                    var push = document.createElement("script");
                    push.src = "http:\/\/push.zhanzhang.baidu.com/push.js";
                    var js = document.getElementsByTagName("script")[0];
                    js.parentNode.insertBefore(push, js);
                })();
            }
        },
        setCNZZ: function() {
          var cnzzDom = document.getElementById('fayCnzz');
          var cnzzDomHtml = '<p style="display:none">';
          var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
          cnzzDomHtml+=unescape("%3Cspan id='cnzz_stat_icon_1276163394'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s5.cnzz.com/z_stat.php%3Fid%3D1276163394' type='text/javascript'%3E%3C/script%3E");
          cnzzDomHtml+='</p>';
          cnzzDom.innerHTML = cnzzDomHtml;
        },
        setSafe: function () {
            // (function () {
            //     var src = document.location.protocol + '\/\/js.passport.qihucdn.com/11.0.1.js?09c627a4795ef2c79bc339ebf54bf3a4';
            //     document.write('<script src="' + src + '" id="sozz"><\/script>');
            // })();
        },

        //Google Analytics
        GoogleAnalytics: function() {
            // (function (i, s, o, g, r, a, m) {
            //     i['GoogleAnalyticsObject'] = r;
            //     i[r] = i[r] || function () {
            //         (i[r].q = i[r].q || []).push(arguments)
            //     }, i[r].l = 1 * new Date();
            //     a = s.createElement(o),
            //         m = s.getElementsByTagName(o)[0];
            //     a.async = 1;
            //     a.src = g;
            //     m.parentNode.insertBefore(a, m)
            // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            // ga('create', 'UA-86800835-1', 'auto');
            // ga('send', 'pageview');
        },
        /*站内搜索*/
        siteSearch: function() {
            // (function () {
            //     document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E'));
            //     var bdcs = document.createElement('script');
            //     bdcs.type = 'text/javascript';
            //     bdcs.async = true;
            //     bdcs.src = 'http:\/\/znsv.baidu.com/customer_search/api/js?sid=7884947307120654941' + '&plate_url=' + encodeURIComponent(window.location.href) + '&t=' + Math.ceil(new Date() / 3600000);
            //     var s = document.getElementsByTagName('script')[0];
            //     s.parentNode.insertBefore(bdcs, s);
            // })();
        },
        mylikeZFdj : function() {
            $('body').append('<div class="get-bg"><div class="get-j"><p class="g-close" style="right: 4px; top: 4px;"></p><div class="g-head"><h1>恭喜您！</h1><span>成功获得5000元手术低佣金</span></div><div class="g-input"><span>输入相关信息，即可到院领取</span><ul><li><label>姓名：</label><input type="text" name="name" id="name"></li><li><label>电话：</label><input type="text" name="tel" id="tel"></li></ul></div><div class="g-button"><a href="javascript:void(0);" id="submit">点击提交</a><a href="javascript:void(0);" id="chat">在线咨询</a></div></div>');
            $('.g-close').bind("click", function(){
                $('.get-bg').remove();
            });
            $('.g-button #submit').bind("click", function(){
                var name = $('.g-input #name').val();
                var tel = $('.g-input #tel').val();

                if(name == '' || tel == ''){
                    alert('请填写真实姓名和有效电话！');
                    return;
                }
                function getNow() {
                    var date = new Date();
                    var seperator1 = "-";
                    var seperator2 = ":";
                    var month = date.getMonth() + 1;
                    var strDate = date.getDate();
                    if (month >= 1 && month <= 9) {
                        month = "0" + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                        strDate = "0" + strDate;
                    }
                    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                        + " " + date.getHours() + seperator2 + date.getMinutes()
                        + seperator2 + date.getSeconds();
                    return currentdate;
                }

                $.ajax({
                    type: "POST",
                    url:"http://www.shmylike.cn/plus/raffle.php",
                    data:{
                        diyid : 50,
                        time : getNow,
                        name : name,
                        number : tel
                    },
                    success: function(msg) {
                        $('.get-bg').remove();
                        alert('恭喜您，领取成功！');
                        openK();
                    }
                });
            });
            $('.g-button #chat').bind("click", function(){
                openK();
            });
        }
    }
}().init();
