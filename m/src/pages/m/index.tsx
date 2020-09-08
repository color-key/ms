import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX} from '@/env';
import App from '@/app/home';

const css = [
  'base',
  'swiper.min',
  'new_index5',
  'header',
]

const Index = () => {
  return (
    <>
      <Head>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
        <script src={`${PATH_PREFIX}/static/js/idangerous.swiper-2.1.min.js`}></script>
        <script src={`${PATH_PREFIX}/static/js/header.js`}></script>
        <script src={`${PATH_PREFIX}/static/js/jquery-1.7.2.min.js`}></script>
        <script src={`${PATH_PREFIX}/static/js/jquery.SuperSlide.2.1.1.js`}></script>
        <script src={`${PATH_PREFIX}/static/js/swiper.min.js`}></script>
      </Head>
      <App/>
      {/* <script src={`${PATH_PREFIX}/static/js/kst2.js`}></script>
      <script src={`${PATH_PREFIX}/static/js/new_common1.js`}></script> */}
    </>
  )
}

export default Index;