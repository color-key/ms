import React from 'react';
// import {PATH_PREFIX} from '@/env';
import Banner from './banner';
import Bh from './bh';
import Topnews from './topnews';
import DoctorTeam from './doctorTeam';
import Academic from './academic';
import Introduce from './introduce';
import Bg from './bg';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <div className="container">
        <Banner/>
        <Bh/>
        <Topnews/>
        <DoctorTeam/>
        <Academic/>
        <Introduce/>
        <Bg/>
      </div>
    </>
  )
}