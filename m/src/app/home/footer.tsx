import React from 'react';
import {PATH_PREFIX} from '@/env';

const Footer = () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/kst2.js';
    document.body.appendChild(script);
  }, [])

  const onClick = () => {
    openK();
    return false;
  }

  return (
    <footer className="new_foot">
      <ul className="menu">
        <li className="li1">
          <a href="index.html">
            <i></i>
            <span>首页</span>
          </a>
          <a href="subject/activity/index.html">
            <i></i>
            <span>优惠</span>
          </a>
          <a onClick={onClick}>
            <img src="/m/static/images/index/newindex/ft_zx.png"/>
            <sup>40+</sup>
          </a>
          <a href="xm/index.html" className="navBtn">
            <i></i>
            <span>项目</span>
          </a>
          <a href="02122235555.html">
            <i></i>
            <span>拨打电话</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;