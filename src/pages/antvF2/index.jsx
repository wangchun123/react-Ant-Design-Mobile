import React, { Component } from "react";
import BarChart from "@/components/barChart";
import Https from "axios";
import { dealData } from "@/utils/help";

import "./index.scss";
export default class AntVF2 extends Component {
  constructor(props) {
    super(props);
    this.orgType = "network";
    this.state = {
      barChartData: [],
    };
  }

  async componentDidMount() {
    const {
      data: {
        body: { proList },
      },
    } = await Https.post("/crops/api/hallmarket/queryOrgProMktRanking", {
      orgType: this.orgType,
    });
    this.setState({
      barChartData: (proList || []).map((item) => ({
        ...item,
        orgName: dealData(item.orgName),
      })),
    });
  }
  render() {
    const { barChartData } = this.state;
    return (
      <div className="contents">
        <p>条形图</p>
        <BarChart data={barChartData}></BarChart>
      </div>
    );
  }
}
