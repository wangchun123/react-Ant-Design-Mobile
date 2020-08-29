import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from '@/pages/index/App';
import Pdf from '@/pages/pdf';

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/pdf" exact={true} component={Pdf} />
    </HashRouter>
  );
};

export default Routers;
