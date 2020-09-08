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
      <div className="topnews">
            <div className="wrapper">
                <div className="newActivity_scroll newActivity">
                    <h3>新品发布 <span>NEW ARRIVAL</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="sider">
                    </div>
                    <ul className="hd"></ul>
                </div>
                <div className="newActivity_scroll newsInfoActivity">
                    <h3>美珊资讯 <span>MYLIKE NEWS</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider sider">
                    </div>
                </div>
                <div className="newActivity_scroll indexVideo">
                    <h3>精彩直播 <span>LIVE VIDEO</span>
</h3>
                    <a className="prev"></a>
                    <a className="next"></a>
                    <div className="slider sider">
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}