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
      <ul className="topBar">
        <li className="wrapper">
            <p>美珊连锁品牌 · 实力专业塑美</p>
            <p className="right">全国咨询热线<strong>021-22235555 </strong></p>
        </li>
      </ul>
    </>
  )
}