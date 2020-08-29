import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from '@/pages/index/App';

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
    </HashRouter>
  );
};

export default Routers;
