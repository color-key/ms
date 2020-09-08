import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX} from '@/env';
import App from '@/app/home';

const css = [
  'newindex',
]

export default () => {
  return (
    <>
      <Head>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
        <meta http-equiv="Cache-Control" content="no-transform"/>
        <meta http-equiv="Cache-Control" content="no-siteapp"/>
        <script src={PATH_PREFIX+"/static/js/jquery-1.7.1.min.js"}></script>
        <script src={PATH_PREFIX+"/static/js/jquery.SuperSlide.2.1.1.js"}></script>
      </Head>
      <App/>
    </>
  )
}