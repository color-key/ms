import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX} from "@/env";
import '../styles/global.css';

interface Props {
  Component: any
  pageProps: object
}

export default function MyApp(props: Props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>美珊医疗整形</title>
        <meta name="keywords" content="美珊医疗整形"/>
        <meta name="description" content="美珊医疗整形"/>
        <link rel="canonical" href="http://www.tianlad.com" />
        <meta name="HandheldFriendly" content="true"/>
        <meta baidu-gxt-verify-token="48ce440e470715eb5874ccb010c376a3"/>
        {/* <meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi"></meta> */}
        <link rel="manifest" href={`${PATH_PREFIX}/manifest.json?v=1`} />
        <link rel="icon" type="image/x-icon" href={`${PATH_PREFIX}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${PATH_PREFIX}/static/pwa.png`}></link>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes"/>
        <meta name="x5-fullscreen" content="true"/>
        <meta content="telephone=no" name="format-detection" />
        <meta content="email=no" name="format-detection" />
        <meta name="toTop" content="true"/>
        <script src={`${PATH_PREFIX}/static/js/judge-terminal-equipment.js`}/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

