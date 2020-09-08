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
      <ul className="logo">
        <li>
            <a href="index.html"><img src="static/images/newindex/logo.jpg" width="148" height="80" alt="美珊医疗美容门诊部"/></a>
        </li>
      </ul>
    </>
  )
}