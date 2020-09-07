import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from '@/pages/index/App';
import Pdf from '@/pages/pdf';
import BaiduMap from '@/pages/testMap';
import Radio from '@/pages/radio';
import Checkbox from '@/pages/checkbox';

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/pdf" exact={true} component={Pdf} />
      <Route path="/baiduMap" exact={true} component={BaiduMap} />
      <Route path="/radio" exact={true} component={Radio} />
      <Route path="/checkbox" exact={true} component={Checkbox} />
    </HashRouter>
  );
};

export default Routers;
