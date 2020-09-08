import React from 'react';
// import {PATH_PREFIX} from '@/env';
import Logo from './logo';
import Top from './top';
import Navigation from './navigation';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <div className="header">
        <Top/>
        <Logo/>
        <Navigation/>
      </div>
    </>
  )
}