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
      <div className="indexBanner">
        <a className="prev"></a>
        <a className="next"></a>
        <ul className="sider">
        </ul>
        <ul className="hd"></ul>
      </div>
    </>
  )
}