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
      <div className="Navigation">
        <ul className="navBox">
            <li><a className="nav" href="index.html">首页<strong>Home</strong></a></li>
            <li><a className="nav url1" onClick={onClick}>品牌<strong>Brand</strong></a></li>
            <li className="navBarbox">
                <a className="nav" onClick={onClick}>项目<strong>Items</strong></a>
                        <div className="project_nav" style={{display: "none"}}>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <dl className="project_nav_item con1">
                                        <dt>面部细致整形</dt>
                                        <dd>FACE PLASTIC</dd>
                                    </dl>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>美眼</a></dt>
                                    <dd><a onClick={onClick} className="url2">双眼皮</a></dd>
                                    <dd><a onClick={onClick}>开眼角</a></dd>
                                    <dd><a onClick={onClick}>祛眼袋</a></dd>
                                    <dd><a onClick={onClick}>卧蚕</a></dd>
                                    <dd><a onClick={onClick}>上睑下垂</a></dd>
                                    <dd><a onClick={onClick}>眼部修复</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>美鼻</a></dt>
                                    <dd><a onClick={onClick}>综合鼻雕</a></dd>
                                    <dd><a onClick={onClick}>假体隆鼻</a></dd>
                                    <dd><a onClick={onClick}>自体软骨隆鼻</a></dd>
                                    <dd><a onClick={onClick}>鼻部修复</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>面廓</a></dt>
                                    <dd><a onClick={onClick}>下巴整形</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <dl className="project_nav_item con2">
                                        <dt>面部微创精雕</dt>
                                        <dd>FACE MINIMALLY</dd>
                                    </dl>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>面部填充</a></dt>
                                    <dd><a onClick={onClick}>面部填充综合</a></dd>
                                    <dd><a onClick={onClick} className="url3">丰额头</a></dd>
                                    <dd><a onClick={onClick}>丰太阳穴</a></dd>
                                    <dd><a onClick={onClick}>丰苹果肌</a></dd>
                                    <dd><a onClick={onClick}>丰唇</a></dd>
                                    <dd><a onClick={onClick}>丰下巴</a></dd>
                                    <dd><a onClick={onClick}>隆鼻</a></dd>
                                    <dd><a onClick={onClick}>自体脂肪面部填充</a></dd>
                                    <dd><a onClick={onClick}>面部纳米脂肪抚平</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>瘦脸</a></dt>
                                    <dd><a onClick={onClick}>瘦脸</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>材料</a></dt>
                                    <dd><a onClick={onClick}>伊婉</a></dd>
                                    <dd><a onClick={onClick}>瑞蓝</a></dd>
                                    <dd><a onClick={onClick}>润百颜</a></dd>
                                    <dd><a onClick={onClick}>乔雅登</a></dd>
                                    <dd><a onClick={onClick}>宝尼达</a></dd>
                                    <dd><a onClick={onClick}>爱芙莱</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <dl className="project_nav_item con3">
                                        <dt>形体曲线雕塑</dt>
                                        <dd>BODY SHAPING</dd>
                                    </dl>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>美胸</a></dt>
                                    <dd><a onClick={onClick}>动感丰胸</a></dd>
                                    <dd><a onClick={onClick} className="url4">自体脂肪丰胸</a></dd>
                                    <dd><a onClick={onClick}>综合丰胸</a></dd>
                                    <dd><a onClick={onClick}>乳房下垂</a></dd>
                                    <dd><a onClick={onClick}>乳头乳晕</a></dd>
                                    <dd><a onClick={onClick}>产后丰胸</a></dd>
                                    <dd><a onClick={onClick}>胸部修复</a></dd>
                                    <dd><a onClick={onClick}>奥美定取出</a></dd>
                                    <dd><a onClick={onClick}>隆胸价格</a></dd>
                                    <dd><a onClick={onClick}>隆胸安全</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>瘦身</a></dt>
                                    <dd><a onClick={onClick} className="url5">多维立体吸脂</a></dd>
                                    <dd><a onClick={onClick}>自体脂肪移植</a></dd>
                                    <dd><a onClick={onClick}>酷塑</a></dd>
                                    <dd><a onClick={onClick}>黄金微雕吸脂瘦身</a></dd>
                                    <dd><a onClick={onClick}>非手术聚焦瘦身</a></dd>
                                    <dd><a onClick={onClick}>自体脂肪丰臀</a></dd>
                                    <dd><a onClick={onClick}>瘦腿</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>私密</a></dt>
                                    <dd><a onClick={onClick}>艾丽姿私密回春</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <dl className="project_nav_item con4">
                                        <dt>抗衰保养</dt>
                                        <dd>ANTI AGING</dd>
                                    </dl>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>保养嫩肤</a></dt>
                                    <dd><a onClick={onClick}>水光针</a></dd>
                                    <dd><a onClick={onClick} className="url6">美白嫩肤</a></dd>
                                    <dd><a onClick={onClick}>果酸嫩肤</a></dd>
                                    <dd><a onClick={onClick}>抗敏嫩肤</a></dd>
                                    <dd><a onClick={onClick}>镭射净肤</a></dd>
                                    <dd><a onClick={onClick}>微针美塑</a></dd>
                                    <dd><a onClick={onClick}>黑眼圈</a></dd>
                                    <dd><a onClick={onClick}>黑脸娃娃</a></dd>
                                    <dd><a onClick={onClick}>色素沉着</a></dd>
                                    <dd><a onClick={onClick}>毛孔粗大</a></dd>
                                    <dd><a onClick={onClick}>酒糟鼻</a></dd>
                                    <dd><a onClick={onClick}>祛红血丝</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>除皱</a></dt>
                                    <dd><a onClick={onClick} className="url7">眼部综合除皱</a></dd>
                                    <dd><a onClick={onClick}>祛抬头纹</a></dd>
                                    <dd><a onClick={onClick}>祛鱼尾纹</a></dd>
                                    <dd><a onClick={onClick}>祛眉间川字纹</a></dd>
                                    <dd><a onClick={onClick}>祛法令纹</a></dd>
                                    <dd><a onClick={onClick}>祛嘴角纹</a></dd>
                                    <dd><a onClick={onClick}>祛妊娠纹</a></dd>
                                    <dd><a onClick={onClick}>除皱</a></dd>
                                    <dd><a onClick={onClick}>蛋白线提拉</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>抗衰仪器</a></dt>
                                    <dd><a onClick={onClick}>深蓝射频</a></dd>
                                    <dd><a onClick={onClick}>黄金点阵射频</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <dl className="project_nav_item con5">
                                        <dt>皮肤修复</dt>
                                        <dd>SKIN REPAIR</dd>
                                    </dl>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>色素斑痣</a></dt>
                                    <dd><a onClick={onClick} className="url8">皮秒激光</a></dd>
                                    <dd><a onClick={onClick}>色斑</a></dd>
                                    <dd><a onClick={onClick}>黄褐斑</a></dd>
                                    <dd><a onClick={onClick}>雀斑</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>祛痘</a></dt>
                                    <dd><a onClick={onClick}>痤疮（青春痘）</a></dd>
                                    <dd><a onClick={onClick}>痘坑痘印</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>脱毛</a></dt>
                                    <dd><a onClick={onClick} className="url9">冰点脱毛</a></dd>
                                    <dd><a onClick={onClick}>脱唇毛</a></dd>
                                    <dd><a onClick={onClick}>脱腋毛</a></dd>
                                    <dd><a onClick={onClick}>脱腿毛</a></dd>
                                    <dd><a onClick={onClick}>脱发际线</a></dd>
                                    <dd><a onClick={onClick}>手臂脱毛</a></dd>
                                    <dd><a onClick={onClick}>鬓角脱毛</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>疤痕</a></dt>
                                    <dd><a onClick={onClick}>综合祛疤痕</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box">
                                <div className="project_nav_box_top">
                                    <a onClick={onClick}><dl className="project_nav_item con6">
                                        <dt>毛发移植</dt>
                                        <dd>HAIR TRANSPLANT</dd>
                                    </dl></a>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>毛发移植</a></dt>
                                    <dd><a onClick={onClick} className="url10">植发综合</a></dd>
                                    <dd><a onClick={onClick}>脱发</a></dd>
                                    <dd><a onClick={onClick}>秃顶</a></dd>
                                    <dd><a onClick={onClick}>发际线移植</a></dd>
                                    <dd><a onClick={onClick}>鬓角移植</a></dd>
                                    <dd><a onClick={onClick}>毛发加密</a></dd>
                                    <dd><a onClick={onClick}>疤痕移植</a></dd>
                                    <dd><a onClick={onClick}>私密移植</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>艺术移植</a></dt>
                                    <dd><a onClick={onClick}>植眉</a></dd>
                                    <dd><a onClick={onClick}>植睫毛</a></dd>
                                    <dd><a onClick={onClick}>植胡须</a></dd>
                                </dl>
                            </div>
                            <div className="project_nav_box project_nav_box_last">
                                <div className="project_nav_box_top">
                                    <a onClick={onClick}><dl className="project_nav_item con7">
                                        <dt>口腔美容</dt>
                                        <dd>TOOTH BEAUTY</dd>
                                    </dl></a>
                                </div>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>牙齿美容</a></dt>
                                    <dd><a onClick={onClick} className="url11">牙齿矫正</a></dd>
                                    <dd><a onClick={onClick}>牙齿美白</a></dd>
                                    <dd><a onClick={onClick}>隐形矫正</a></dd>
                                    <dd><a onClick={onClick}>传统固定矫正</a></dd>
                                    <dd><a onClick={onClick}>儿童矫正</a></dd>
                                    <dd><a onClick={onClick}>隐适美矫正</a></dd>
                                    <dd><a onClick={onClick}>龅牙</a></dd>
                                    <dd><a onClick={onClick}>地包天</a></dd>
                                    <dd><a onClick={onClick}>牙齿拥挤</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>牙齿修复</a></dt>
                                    <dd><a onClick={onClick}>牙贴面</a></dd>
                                    <dd><a onClick={onClick}>烤瓷牙</a></dd>
                                    <dd><a onClick={onClick}>美容冠</a></dd>
                                    <dd><a onClick={onClick}>全瓷牙</a></dd>
                                    <dd><a onClick={onClick}>失败修复</a></dd>
                                    <dd><a onClick={onClick}>蛀牙补牙</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>牙齿美白</a></dt>
                                    <dd><a onClick={onClick}>冷光美白</a></dd>
                                    <dd><a onClick={onClick}>牙贴面</a></dd>
                                    <dd><a onClick={onClick}>四环素牙</a></dd>
                                    <dd><a onClick={onClick}>氟斑牙</a></dd>
                                    <dd><a onClick={onClick}>黄黑牙</a></dd>
                                </dl>
                                <dl className="project_list">
                                    <dt><a onClick={onClick}>牙齿缺失</a></dt>
                                    <dd><a onClick={onClick}>假牙</a></dd>
                                    <dd><a onClick={onClick}>镶牙</a></dd>
                                    <dd><a onClick={onClick}>义齿</a></dd>
                                </dl>
                            </div>
                        </div>
            </li>
            <li><a className="nav" onClick={onClick}>医生<strong>Doctor</strong></a></li>
            <li><a className="nav" onClick={onClick}>优惠<strong>Discount</strong></a></li>
            <li><a className="nav" onClick={onClick}>来院路线<strong>Address</strong></a></li>
        </ul>
    </div>
    </>
  )
}