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
      <div className="boxsbg bh">
        <div className="wrapper">
          <div className="project">
            <a onClick={onClick}>
                <dl>
                    <dt className="d1"></dt>
                    <dd>双眼皮</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d2"></dt>
                    <dd>综合隆鼻</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d3"></dt>
                    <dd>瘦脸</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d4"></dt> 
                    <dd>微整塑形</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d5"></dt>
                    <dd>动感丰胸</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d6"></dt>
                    <dd>减脂瘦身</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d7"></dt>
                    <dd>脂肪填充</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d8"></dt>
                    <dd>紧肤除皱</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d9"></dt>
                    <dd>埋线提拉</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d10"></dt>
                    <dd>除皱</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d11"></dt>
                    <dd>水光嫩肤</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d12"></dt>
                    <dd>美肤祛斑</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d13"></dt>
                    <dd>冰点脱毛</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d14"></dt>
                    <dd>口腔美容</dd>
                </dl>
            </a>
            <a onClick={onClick}>
                <dl>
                    <dt className="d15"></dt>
                    <dd>毛发移植</dd>
                </dl>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}