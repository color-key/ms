import React from 'react';

const Article = () => {

  const onClick = () => {
    openK();
    return false;
  }

  return (
    <article className="index_content">
      <div id="banner" className="ibanner">
        <div className="test">
          <ul className="bd">
            <li><a onClick={onClick} className="index-bn-act"><img src="/m/static/images/index/newindex/activity.jpg"/></a></li>
            <li><a onClick={onClick} className="index-bn-normal0"><img src="/m/static/images/index/newindex/banner5.jpg"/></a></li>
            <li><a onClick={onClick} className="index-bn-normal0"><img src="/m/static/images/index/newindex/banner6.jpg"/></a></li>
            <li><a href="subject/shproject/aqtx/index.html" className="index-bn-aq"><img src="/m/static/images/index/newindex/banner2.jpg"/></a></li>
            <li><a href="brand/index.html" className="index-bn-brand"><img src="/m/static/images/index/newindex/banner3.jpg"/></a></li>
          </ul>
        </div>
        <ul className="hd">
          <li className="on"/>
          <li/>
          <li/>
          <li/>
          <li/>
        </ul>
      </div>
    <div className="box1">
    <a href="doctor/index.html" className="plane"><img src="/m/static/images/index/newindex/zj.jpg" alt=""/></a>
    <div className="project_hot">
        <a href="subject/yblist/index.html"><img src="/m/static/images/index/newindex/index_ico1.jpg" alt="双眼皮"/><span className="hot"><img src="/m/static/images/index/newindex/index_ico_hot.png" alt=""/></span><p>双眼皮</p></a>
        <a href="subject/bblist/index.html"><img src="/m/static/images/index/newindex/index_ico2.jpg" alt="鼻部"/><span className="hot"><img src="/m/static/images/index/newindex/index_ico_hot.png" alt=""/></span><p>鼻部</p></a>
        <a href="subject/xblist/index.html"><img src="/m/static/images/index/newindex/index_ico3.jpg" alt="胸部"/><p>胸部</p></a>
        <a href="subject/xzlb/index.html"><img src="/m/static/images/index/newindex/index_ico4.jpg" alt="瘦身"/><p>瘦身</p></a>
        <a href="subject/bnslist/index.html"><img src="/m/static/images/index/newindex/index_ico5.jpg" alt="玻尿酸"/><p>玻尿酸</p></a>
        <a href="subject/shoulzff/index.html"><img src="/m/static/images/index/newindex/index_ico8.jpg" alt="瘦脸"/><p>瘦脸</p></a>
        <a href="subject/nflist1/index.html"><img src="/m/static/images/index/newindex/index_ico10.jpg" alt="水光嫩肤"/><p>水光嫩肤</p></a>
        <a href="subject/ztlist/index.html"><img src="/m/static/images/index/newindex/index_ico7.jpg" alt="脂肪移植"/><p>脂肪移植</p></a>
        <a href="subject/qyd2/index.html"><img src="/m/static/images/index/newindex/index_ico20.jpg" alt="祛眼袋"/><p>祛眼袋</p></a>
        <a href="subject/cpm/index.html"><img src="/m/static/images/index/newindex/index_ico11.jpg" alt="祛斑"/><p>祛斑</p></a>
        <a href="subject/xdlist/index.html"><img src="/m/static/images/index/newindex/index_ico6.jpg" alt="线雕"/><p>蛋白线</p></a>
        <a href="subject/czzv4/index.html"><img src="/m/static/images/index/newindex/index_ico12.jpg" alt="紧肤除皱"/><p>紧肤除皱</p></a>
        <a onClick={onClick}><img src="/m/static/images/index/newindex/index_ico14.jpg" alt="口腔"/><p>牙齿矫正</p></a>
        <a href="subject/wrtuom3/index.html"><img src="/m/static/images/index/newindex/index_ico9.jpg" alt="脱毛"/><p>脱毛</p></a>
        <a onClick={onClick}><img src="/m/static/images/index/newindex/index_ico21.jpg" alt="私密"/><p>私密</p></a>
        <a href="xm/index.html"><img src="/m/static/images/index/newindex/index_ico16.jpg" alt="更多"/><p>更多</p></a>
    </div>
</div>
    <div className="hotjp">
    <div className="hotjp_tt fix">
        <div className="fl">本周优惠推荐<i><img src="/m/static/images/hot.png" alt=""/></i>
</div>
    </div>
    <div className="swiper-main">
        <div className="swiper-container jpList1">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                            <img src="/m/static/images/index/newindex/index_h_li1.jpg"/>
                          </span>
                        <strong>【切开双眼皮】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>夏日炎炎更耀眼</span></strong>
                        <em>¥<b>2800</b><i>￥4800</i></em>
                    </a>
                </div>

                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                             <img src="/m/static/images/index/newindex/index_h_li2.jpg"/>
                         </span>
                        <strong>【假体隆鼻】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>至美娇俏鼻C位出道</span></strong>
                        <em>¥<b>3800</b><i>￥9800</i></em>
                    </a>
                </div>

                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                              <img src="/m/static/images/index/newindex/index_h_li3.jpg"/>
                          </span>
                        <strong>【假体隆胸】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>安全GET翘挺胸型</span></strong>
                        <em>¥<b>19800</b><i>￥38800</i></em>
                    </a>
                </div>

                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                            <img src="/m/static/images/index/newindex/index_h_li4.jpg"/>
                          </span>
                        <strong>【进口伊婉玻尿酸】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>玻尿酸性价比之选</span></strong>
                        <em>¥<b>980</b><i>￥4800</i></em>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                        <span>
                         <img src="/m/static/images/index/newindex/index_h_li5.jpg"/>
                        </span>
                        <strong>【多维立体吸脂】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>又瘦又美更自信</span></strong>
                        <em>¥<b>1280/单部位</b></em>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                            <img src="/m/static/images/index/newindex/index_h_li6.jpg"/>
                          </span>
                        <strong>【超皮秒祛斑】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>美肤神器好评过万</span></strong>
                        <em>¥<b>2980</b><i>￥13800</i></em>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                            <img src="/m/static/images/index/newindex/index_h_li7.jpg"/>
                          </span>
                        <strong>【秋心苹果肌】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>元气满满少女脸</span></strong>
                        <em>¥<b>2980</b><i>￥8000</i></em>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                        <span>
                         <img src="/m/static/images/index/newindex/index_h_li8.jpg"/>
                        </span>
                        <strong>【润月雅水光】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>零负担急救水光</span></strong>
                        <em>¥<b>319</b></em>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a onClick={onClick} className="daa">
                          <span>
                            <img src="/m/static/images/index/newindex/index_h_li9.jpg"/>
                          </span>
                        <strong>【进口除皱】<img className="index_q" src="/m/static/images/index/newindex/index_q.png" alt=""/><br/><span>少女感的秘密武器</span></strong>
                        <em>¥<b>699</b></em>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    <div className="index_hot_c">
    <div className="index_hot_tit">美珊头条</div>
    <div className="index_hot_con">
        <div className="tg_scroll1">
            <div className="tg_hd">
                <ul>
                    <li className="on">
<span>1/</span>2</li>
                    <li>
<span>2/</span>2</li>
                </ul>
            </div>
            <div className="tg_bd">
                <ol>
                    <li>
                        <a onClick={onClick}>
                            <dl>
                                <dt className="fl"><img src="/m/static/images/index/newindex/index_hot_1.jpg" alt=""/></dt>
                                <dd className="fr">
<p><span>优惠</span>美珊更专业 更用心 让你美出自己</p>全线项目8.5折扣/预约可得￥5000···</dd>
                            </dl>
                        </a>
                    </li>
                    <li>
                        <a onClick={onClick}>
                            <dl>
                                <dt className="fl"><img src="/m/static/images/index/newindex/index_hot_2.jpg" alt=""/></dt>
                                <dd className="fr">
<p><span>拼团/抢购</span>特惠专区 师生专享整形8折</p>品牌玻尿酸/瘦脸/除皱/水光嫩肤···[咨询价格]</dd>
                            </dl>
                        </a>
                    </li>
                </ol>
            </div>

        </div>
    </div>
</div>
    <div className="caseer">
        <div className="caseer_tab" id="caseer_tab">
            <ul className="bd">
                <li><a href="subject/sypcase/index.html"><img src="/m/static/images/index/newindex/index_case_1.jpg"/></a></li>
                <li><a onClick={onClick}><img src="/m/static/images/index/newindex/index_case_2.jpg"/></a></li>
                <li><a href="subject/xbcase/index.html"><img src="/m/static/images/index/newindex/index_case_3.jpg"/></a></li>
                <li><a onClick={onClick}><img src="/m/static/images/index/newindex/index_case_4.jpg"/></a></li>
                <li><a onClick={onClick}><img src="/m/static/images/index/newindex/index_case_5.jpg"/></a></li>
                <li><a onClick={onClick}><img src="/m/static/images/index/newindex/index_case_6.jpg"/></a></li>
            </ul>
            <ul className="hd">
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
        </div>
    </div>
    <div className="reality">
        <div id="reality">
            <a className="btn" href="case/index.html">在线咨询变美方案 <img src="/m/static/images/index/newindex/index_case_btn.png" alt=""/></a>
        </div>
    </div>
    <div className="doctors">
        <div className="doctors_tab" id="doctors_tab">
            <ul className="bd">
                <li><a href="doctor/eye/index.html"><img src="/m/static/images/index/newindex/index_doc_zxmr.jpg"/></a></li>
                <li><a href="doctor/skin/index.html"><img src="/m/static/images/index/newindex/index_doc_pf.jpg"/></a></li>
                <li><a href="doctor/wei/index.html"><img src="/m/static/images/index/newindex/index_doc_wzx.jpg"/></a></li>
                <li><a href="doctor/dental/index.html"><img src="/m/static/images/index/newindex/index_doc_kq.jpg"/></a></li>
                <li><a href="doctor/hair/index.html"><img src="/m/static/images/index/newindex/index_doc_zf.jpg"/></a></li>
            </ul>
            <ul className="hd">
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
        </div>
    </div>
    <div className="ty_doctor">
    <div className="swiper-container" id="ty_doctor1">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <dl>
                    <dt><a href="subject/doctor/oytx/index.html"><img src="/m/static/images/index/newindex/docs_oytx.jpg" alt=""/></a></dt>
                    <dd>
<h3>欧阳天祥 <span>院长</span>
</h3>
<p>哈尔滨美珊名誉院长<br/><strong>每周一</strong>来院</p>
<a onClick={onClick}>立即咨询</a>
</dd>
                </dl>
            </div>
            <div className="swiper-slide">
                <dl>
                    <dt><a href="subject/h5/lzq/index.html"><img src="/m/static/images/index/newindex/docs_lzq.jpg" alt=""/></a></dt>
                    <dd>
<h3>李战强 <span>教授</span>
</h3>
<p>Dallas鼻整形医生<br/><strong>近期</strong>来院</p>
<a onClick={onClick}>立即咨询</a>
</dd>
                </dl>
            </div>
            <div className="swiper-slide">
                <dl>
                    <dt><a href="subject/doctor/wh/index.html"><img src="/m/static/images/index/newindex/docs_wh.jpg" alt=""/></a></dt>
                    <dd>
<h3>汪灏 <span>博士</span>
</h3>
<p>哈尔滨美珊整形院长<br/> <strong>长期</strong>坐诊</p>
<a onClick={onClick}>立即咨询</a>
</dd>
                </dl>
            </div>
        </div>
    </div>
</div>
    <div className="index_brand_video">
        <dl>
            <dt>
                <video webkit-playsinline="" src="/m/static/images/index/newindex/sp.mp4" poster="/m/static/images/index/newindex/index_video.jpg" className="video-js" controls preload="none" data-setup="{}"></video>
</dt>
            <dd><a href="subject/shipin/index.html">进入视频专区 <img src="/m/static/images/index/newindex/index_v_btn.png" alt=""/></a></dd>
        </dl>
        <ul className="fix">
            <li>
                <a href="brand/index.html">
                    <img src="/m/static/images/index/newindex/index_zb_li1.jpg" alt=""/>
                    <p><span>品牌实力</span><br/>Honor</p>
                </a>
            </li>
            <li>
                <a href="ambient/index.html">
                    <img src="/m/static/images/index/newindex/index_zb_li2.jpg" alt=""/>
                    <p><span>星级环境</span><br/>Environment</p>
                </a>
            </li>
            <li>
                <a onClick={onClick}>
                    <img src="/m/static/images/index/newindex/index_zb_li3.jpg" alt=""/>
                    <p><span>热心公益</span><br/>Public spirited</p>
                </a>
            </li>
            <li>
                <a href="subject/shproject/aqtx/index.html">
                    <img src="/m/static/images/index/newindex/index_zb_li4.jpg" alt=""/>
                    <p><span>安全服务</span><br/>service</p>
                </a>
            </li>
        </ul>
    </div>
      <a onClick={onClick} className="brand"><img src="/m/static/images/index/newindex/brand.jpg" alt=""/></a>
    </article>
  )
}

export default Article;