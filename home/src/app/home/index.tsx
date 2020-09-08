import React from 'react';
import Header from './header';
import Container from './container';
import Footer from './footer';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
  )
}