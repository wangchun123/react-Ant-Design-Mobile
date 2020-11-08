import React, { Component } from "react";
import PropTypes from "prop-types";
import F2 from "@antv/f2";

export default class BarChart extends Component {
  static defaultProps = {
    data: [],
  };

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
      this.chart.clear();
      this.initDraw(nextProps.data);
    }
  }
  componentDidMount() {
    this.initDraw(this.props.data);
  }

  initDraw = (data) => {
    const chart = new F2.Chart({
      id: "container-item",
      pixelRatio: window.devicePixelRatio,
    });
    this.chart = chart;
    chart.source(data, {
      targetValue1: {
        tickCount: 5,
      },
    });
    chart.coord({
      transposed: true,
    });
    chart.tooltip({
      showItemMarker: true,
      triggerOn: ["touchstart", "touchmove"],
      background: {
        radius: 2,
        fill: "#1890FF",
        padding: [6, 10],
      },
      nameStyle: {
        fill: "#fff",
        textAlign: "start",
        textBaseline: "middle",
      },
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].name = items[0].title.split("\n").join("");
        items[0].value = items[0].value;
      },
    });

    if (data.length) {
      // 柱状图添加文本
      data.forEach(function (obj) {
        chart.guide().text({
          position: [obj.orgName, obj.targetValue1],
          content: obj.targetValue1 || "",
          style: {
            textAlign: "center",
            textBaseline: "bottom",
          },
          offsetY: -10,
          offsetX: -15,
        });
      });
    }

    chart
      .interval()
      .position("orgName*targetValue1")
      .style("type", {
        radius: function radius() {
          return [0, 50, 50, 0];
        },
      });
    chart.render();
  };

  render() {
    return (
      <div>
        <canvas id="container-item" width={window.innerWidth} height="280"></canvas>
      </div>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.array,
};
