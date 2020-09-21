import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '@/pages/index/App';
import Pdf from '@/pages/pdf';
import BaiduMap from '@/pages/testMap';
import Radio from '@/pages/radio';
import Checkbox from '@/pages/checkbox';
import VerificationCode from '@/pages/verificationCode';

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/pdf" exact={true} component={Pdf} />
      <Route path="/baiduMap" exact={true} component={BaiduMap} />
      <Route path="/radio" exact={true} component={Radio} />
      <Route path="/checkbox" exact={true} component={Checkbox} />
      <Route path="/verificationCode" exact={true} component={VerificationCode} />
    </HashRouter>
  );
};

export default Routers;
