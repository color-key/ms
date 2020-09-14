import React from 'react';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  const onClick = () => {
    openK();
  }

  return (
    <>
      <div className="academic">
            <h2>
<img src="/home/static/images/newindex/hbg2.jpg" alt=""/><span>中外医美学术交流，用专业技艺铸就美丽蝶变</span>
</h2>
            <div className="wrapper">
                <div className="academic_scroll">
                    <ul className="hd">
                        <li className="on">眼部整形<span>EYE PLASTIC</span>
</li>
                        <li>鼻部整形<span>NOSE PLASTIC</span>
</li>
                        <li>胸部整形<span>BREAST PLASTIC</span>
</li>
                        <li>脂肪整形<span>BREAST PLASTIC</span>
</li>
                        <li>微整形<span>MICRO PLASTIC</span>
</li>
                        <li>美肤整形<span>SKIN BEAUTY</span>
</li>
                    </ul>
                    <ul className="slider">
                        <li>
                            <a onClick={onClick}>
                            <img src="/home/static/images/newindex/academic2.jpg" alt=""/>
                                {/* <p>哈尔滨美珊吴海龙主任成功晋级中国眼整形金刀奖全国五强</p> */}
                            </a>
<a onClick={onClick}>
                            <img src="/home/static/images/newindex/academic3.jpg" alt=""/>
                                {/* <p>哈尔滨美珊承办眼整形手术擂台大赛 专注专业 交流分享眼整形技术</p> */}
                            </a>
{/* <a onClick={onClick}> */}
                            {/* <img src="/home/static/images/newindex/academic1.jpg" alt=""/> */}
                                {/* <p>哈尔滨美珊欧阳天祥院长出席第三届健康眼整形论坛并担任金刀大赛评委</p> */}
                            {/* </a> */}

                        </li>
                        <li>
                         <a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic6.jpg" alt=""/>
                                {/* <p>2018年Dallas鼻整形年会常任主席Toriumi加盟上</p> */}
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic5.jpg" alt=""/>
                                {/* <p>Dallas隆鼻中国开创者李战强教授在Dallas鼻修</p> */}
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic41.jpg" alt=""/>
                                {/* <p>哈尔滨美珊受邀出席2019国际鼻整形修复大会（土耳其）</p> */}
                            </a>

                        </li>
                        <li>
                            <a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic7.jpg" alt=""/>
                                {/* <p>2018.12.06美珊受邀参加艾尔健美胸年度大会</p> */}
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic81.jpg" alt=""/>
                                {/* <p>2019.5.30哈尔滨美珊汪灏院长受邀参加第2届乳房整形高峰论坛</p> */}
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic71.jpg" alt=""/>
                                {/* <p>2019.5.9美珊受邀参加傲胸盛典 获傲诺拉铂金机构授牌</p> */}
                            </a>

                        </li>
                        <li>
                            <a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic10.jpg" alt=""/>
                                <p>2018.7.7哈尔滨美珊脂肪管理峰会，特邀哈弗大学</p>
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic11.jpg" alt=""/>
                                <p>2018国际脂肪学术研讨会5G天使光雕在哈尔滨美珊举</p>
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic12.jpg" alt=""/>
                                <p>2018.10袁玉坤教授受邀第15届中国医师协会整形医</p>
                            </a>

                        </li>
                        <li>
                            <a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic14.jpg" alt=""/>
                                <p>2018.9哈尔滨美珊受邀参加全国微创医学美容大会</p>
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic15.jpg" alt=""/>
                                <p>2018.5微整形专家面对面技术研讨会在哈尔滨美珊举行</p>
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic13.jpg" alt=""/>
                                <p>2018.10.18悦升线学术峰会在哈尔滨美珊举行</p>
                            </a>

                        </li>
                        <li>
                            <a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic17.jpg" alt=""/>
                                <p>超皮秒PicoWay新品哈尔滨美珊耀世发布开启皮秒激光</p>
                            </a>
<a onClick={onClick}>
                                <img src="/home/static/images/newindex/academic18.jpg" alt=""/>
                                <p>2018.10中国新医美全国巡回中胚层疗法技术技术规</p>
                            </a>
<a onClick={onClick}>
                                <img src="uploads/190515/35-1Z51509515HG.jpg" alt=""/>
                                <p>2018.9.2哈尔滨美珊邱阳主任净无止境  祛斑原理分享</p>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}