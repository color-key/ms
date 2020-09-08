import React from 'react';

export default () => {

  const onClick = () => {
    openK();
    return false;
  }

  return (
    <header className="newHead">
      <a href="xm/index.html" className="navBtn"><img src="/m/static/images/index/newindex/navBtn.jpg"/></a>
      <a href="index.html" className="logo"><img src="/m/static/images/index/newindex/logo.jpg"/></a>
      <a onClick={onClick} className="zixun"><img src="/m/static/images/index/newindex/zixun.jpg"/></a>
    </header>
  )
}