import React from 'react';
import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script1 = document.createElement('script');
    // script1.src = PATH_PREFIX+'/static/js/jquery.SuperSlide.2.1.1.js';
    // document.body.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = PATH_PREFIX+'/static/js/newindex.js';
    document.body.appendChild(script2);
    const script3 = document.createElement('script');
    script3.src = PATH_PREFIX+'/static/js/kst.js';
    document.body.appendChild(script3);
  }, [])

  const onClick = () => {
    openK();
    return false;
  }

  return (
    <>
      <div className="footer">
        <p style={{lineHeight: 1.7, fontSize: '12px', padding: '1% 6%'}}>价格说明：页面展示的价格优惠为参考价，该价格可能是活动特惠价、商品原价或者由供应商提供的（如厂商指导价、建议零售价等）或该项目产品在页面上曾经展示过的销售价，由于地区、时间的差异性和市场行情波动、活动优惠更新等可能会与您咨询前后展示不一致，该价格仅供您参考。<br/>折扣说明：折扣价是指包括但不限于，优惠活动、特殊政策、特定人群、指定项目/产品等某一规则基础上计算出的优惠比例或优惠金额，如有疑问，您可联系美丽顾问进行咨询。<br/>异常问题：项目产品促销信息以到院的实际活动为准；具体售价以实际成交价格为准；医美项目受个人基础、设计方案等因素影响会有价格差异，建议先联系美丽顾问咨询</p>
            <div className="footerNav">
                <div className="wrapper">
                    <dl className="brand">
                        <dt>品牌美珊</dt>
                        <dd><a onClick={onClick}>· 品牌动态</a></dd>
                        <dd><a onClick={onClick}>· 美珊新闻</a></dd>
                        <dd><a onClick={onClick}>· 媒体报道</a></dd>
                        <dd><a onClick={onClick}>· 轻奢环境</a></dd>
                    </dl>
                    <dl className="contact">
                        <dt>联系我们</dt>
                        <dd><a onClick={onClick}>在线咨询</a></dd>
                        <dd><a onClick={onClick}>在线预约</a></dd>
                        <dd>国内电话</dd>
                        <dd>021-2223 5555</dd>
                    </dl>
                    <dl className="find">
                        <dt>找到我们</dt>
                        <dd>来院地址：</dd>
                        <dd>长宁区延安西路789号美珊大厦</dd>
                        <dd>门诊时间：</dd>
                        <dd>9:00-20:00（无节假日休息）</dd>
                    </dl>
                </div>
                <div className="wrapper">
                    <div className="copyright">
                      版权所有 © 哈尔滨美珊医疗美容门诊部有限公司 <a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备14048956
                      号</a> 沪医广【2020】第04-10-G124号
                      <a href="http://www.sgs.gov.cn/lz/etpsInfo.do?method=doSearch" target="view_window">
                      <img src="static/images/newindex/gs.gif" style={{position:'relative', top:'15px'}}/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="player-box"></div>
        <div id="rightChat"></div>
        <div id="centerChat"></div>
        <div id="fayCnzz"></div>
        <div id="fayOnline"></div>
    </>
  )
}