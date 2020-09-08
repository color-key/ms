import React from 'react';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <div className="doctorTeam">
            <div className="wrapper">
                <div className="doctorTeam_scroll">
                    <ul className="hd">
                        <li className="on">整形美容</li>
                        <li>皮肤美容</li>
                        <li>微整形</li>
                        <li>口腔美容</li>
                        <li>植发团队</li>
                    </ul>
                    <ul className="slider">
                        <a>
                            <img src="static/images/newindex/doctorTeam2.jpg" alt=""/>
                            <p>
                                美珊整形美容专家团队
                                <i></i>
                                <span>数十位博士级整形专家<br/>专科专技匠心塑美</span>
                            </p>
                        </a>
                        <a>
                            <img src="static/images/newindex/doctorTeam3.jpg" alt=""/>
                            <p>
                                美珊皮肤美容医生团队
                                <i></i>
                                <span>以现代医学美肤技术<br/>还原光滑嫩白健康美肌</span>
                            </p>
                        </a>
                        <a>
                            <img src="static/images/newindex/doctorTeam4.jpg" alt=""/>
                            <p>
                                美珊微整形医生团队
                                <i></i>
                                <span>个性化精致微整形，倡导自然为主<br/>定点/定位定层</span>
                            </p>
                        </a>
                        <a>
                            <img src="static/images/newindex/doctorTeam5.jpg" alt=""/>
                            <p>
                                美珊口腔医疗团队
                                <i></i>
                                <span>科技创造精致笑容<br/>专业口腔，健康美牙</span>
                            </p>
                        </a>
                        <a>
                            <img src="static/images/newindex/doctorTeam6.jpg" alt=""/>
                            <p>
                                美珊植发医疗团队
                                <i></i>
                                <span>毛发移植学科带头人袁玉坤教授<br/>专业团队  匠心种植</span>
                            </p>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}