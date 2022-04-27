import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "@/pages/index/App";
import Pdf from "@/pages/pdf";
import BaiduMap from "@/pages/testMap";
import Radio from "@/pages/radio";
import Checkbox from "@/pages/checkbox";
import VerificationCode from "@/pages/verificationCode";
import Upload from "@/pages/upload";
import AntVF2 from "@/pages/antvF2";
import MoreDetail from "@/pages/moreDetail";
import Regist from "@/pages/regist";

const Routers = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/pdf" exact={true} component={Pdf} />
      <Route path="/baiduMap" exact={true} component={BaiduMap} />
      <Route path="/radio" exact={true} component={Radio} />
      <Route path="/checkbox" exact={true} component={Checkbox} />
      <Route
        path="/verificationCode"
        exact={true}
        component={VerificationCode}
      />
      <Route path="/upload" exact={true} component={Upload} />
      <Route path="/antVF2" exact={true} component={AntVF2} />
      <Route path="/moreDetail" exact={true} component={MoreDetail} />
      <Route path="/regist" exact={true} component={Regist} />
    </HashRouter>
  );
};

export default Routers;
