import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from '@/pages/index/App';
import Pdf from '@/pages/pdf';
import BaiduMap from '@/pages/testMap';

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/pdf" exact={true} component={Pdf} />
      <Route path="/baiduMap" exact={true} component={BaiduMap} />
    </HashRouter>
  );
};

export default Routers;
