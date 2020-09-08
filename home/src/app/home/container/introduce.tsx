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
    return false;
  }

  return (
    <>
      <div className="wrapper introduce">
            <h2>
<img src="static/images/newindex/hbg3.jpg" alt=""/><span>脚踏实地，做好自己，每一点进步，将为您带来更大的惊喜！</span>
</h2>
            <div className="content">
                <div className="introduce_scroll">
                    <h3>品牌动态 <span>Brand dynamics</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider">
                        <a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/180328/35-1P32Q62S5Y7.jpg" alt="2019第二届上海市中西医结合学会"/>
                            <span></span>
                            <p>2019第二届上海市中西医结合学会</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/171206/35-1G20615015E35.jpg" alt="『2017CCAM中国医疗美容大会』即将隆重举行！"/>
                            <span></span>
                            <p>『2017CCAM中国医疗美容大会』即将隆重举行！</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/180328/35-1P32Q63345Y2.jpg" alt="哈尔滨美珊鼻整形专家出席第35届Dallas鼻整形研讨"/>
                            <span></span>
                            <p>哈尔滨美珊鼻整形专家出席第35届Dallas鼻整形研讨</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/171224/35-1G2241G400a9.jpg" alt="微整之巅 华山论鉴︱2017年上海市中西医结合学会"/>
                            <span></span>
                            <p>微整之巅 华山论鉴︱2017年上海市中西医结合学会</p>
                        </a>

                    </div>
                </div>
                <div className="introduce_scroll">
                    <h3>媒体报道 <span>media coverage</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider">
                        <a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/161018/29-16101Q43125433.jpg" alt="美珊专家出席医学美容年会并做讲座"/>
                            <span></span>
                            <p>美珊专家出席医学美容年会并做讲座</p>
                        </a>//
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/170913/35-1F91314194V07.jpg" alt="哈尔滨美珊承办第一届中国国际整形美容高峰论坛"/>
                            <span></span>
                            <p>哈尔滨美珊承办第一届中国国际整形美容高峰论坛</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/allimg/170118/7-1F11Q4503B94.jpg" alt="美珊植发团队荣获哈尔滨美珊佳明星团队奖"/>
                            <span></span>
                            <p>美珊植发团队荣获哈尔滨美珊佳明星团队奖</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/allimg/160812/7-160Q2104414315.jpg" alt="瑞蓝所属高德美副总Mr.Brennan Alexandre莅临"/>
                            <span></span>
                            <p>瑞蓝所属高德美副总Mr.Brennan Alexandre莅临</p>
                        </a>
<a onClick={onClick} target="_blank">
                            <img width="267" height="351" src="uploads/allimg/160812/7-160Q210431LT.jpg" alt="哈尔滨美珊举办“MAKE UP FOR EVER幻境的艺术”彩妆沙"/>
                            <span></span>
                            <p>哈尔滨美珊举办“MAKE UP FOR EVER幻境的艺术”彩妆沙</p>
                        </a>

                    </div>
                </div>
                <div className="introduce_scroll">
                    <h3>美珊环境 <span>environment</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider">
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital1.jpg" alt=""/>
                            <span></span>
                            <p>20层16000平米的独栋大厦</p>
                        </a>
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital2.jpg" alt=""/>
                            <span></span>
                            <p>宽敞优雅的门诊大厅</p>
                        </a>
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital3.jpg" alt=""/>
                            <span></span>
                            <p>便捷亲切的导医服务</p>
                        </a>
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital4.jpg" alt=""/>
                            <span></span>
                            <p>独立私密的医生办公室</p>
                        </a>
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital5.jpg" alt=""/>
                            <span></span>
                            <p>轻松整洁的微创室</p>
                        </a>
                        <a>
                            <img width="267" height="351" src="static/images/newindex/hospital7.jpg" alt=""/>
                            <span></span>
                            <p>美珊“安心、细心、贴心”的服务</p>
                        </a>
                    </div>
                </div>
                <div className="introduce_scroll last">
                    <h3>仪器设备 <span>equipment</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider">
                        <a onClick={onClick}>
                            <img width="267" height="351" src="uploads/180108/35-1P10Q40256195.jpg" alt="超皮秒"/>
                            <span></span>
                            <p>超皮秒</p>
                        </a>
<a onClick={onClick}>
                            <img width="267" height="351" src="static/images/newindex/equipment2.jpg" alt="C6至尊祛斑王"/>
                            <span></span>
                            <p>C6至尊祛斑王</p>
                        </a>
<a onClick={onClick}>
                            <img width="267" height="351" src="static/images/newindex/equipment5.jpg" alt="微针美塑水光嫩肤治疗"/>
                            <span></span>
                            <p>微针美塑水光嫩肤治疗</p>
                        </a>
<a onClick={onClick}>
                            <img width="267" height="351" src="static/images/newindex/equipment4.jpg" alt="超脉冲CO2激光治疗仪"/>
                            <span></span>
                            <p>超脉冲CO2激光治疗仪</p>
                        </a>
<a onClick={onClick}>
                            <img width="267" height="351" src="static/images/newindex/equipment3.jpg" alt="755翠绿宝石激光治疗仪"/>
                            <span></span>
                            <p>755翠绿宝石激光治疗仪</p>
                        </a>
<a onClick={onClick}>
                            <img width="267" height="351" src="uploads/allimg/160809/7-160P91A636162.jpg" alt="王者之心美白嫩肤治疗仪"/>
                            <span></span>
                            <p>王者之心美白嫩肤治疗仪</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}