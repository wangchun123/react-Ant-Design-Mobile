import React, { Component } from "react";
import "./index.scss";

const text =
  "市地税局斯柯达会发生的环境发生地方合适的空间粉红色的发挥是的发送到发送到风扇电机复活甲胜多负少款到发货收到回复上岛咖啡水电费即可";

export default class MoreDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: text,
      showMore: false,
    };
  }

  renderMoreDetail = () => {
    const { showText, showMore } = this.state;
    const { wd, realWidth, realHeight } = this.countWidth(showText);
    let strLength = wd / 12 - 3;

    if (wd - realWidth >= 0 && (realHeight - 14 == 0 || realHeight - 14 <= 2))
      return <div>{showText}</div>; //一行显示

    return (
      <>
        {showMore ? (
          <div className="item-content-more">
            <div>{showText}</div>
            <div onClick={() => this.setState({ showMore: false })}>收起</div>
          </div>
        ) : (
          <div className="item-content-open">
            <div>{`${showText.substr(0, strLength)}...`}</div>
            <div onClick={() => this.setState({ showMore: true })}>展开</div>
          </div>
        )}
      </>
    );
  };

  countWidth = (val) => {
    const wd = window.innerWidth;
    const el = document.createElement("div");
    el.innerText = val;
    el.style.width = "fit-content";
    document.body.appendChild(el);
    const realWidth = el.offsetWidth;
    const realHeight = el.offsetHeight;
    document.body.removeChild(el);
    return { wd, realWidth, realHeight };
  };

  render() {
    return <div className="more-detail">{this.renderMoreDetail()}</div>;
  }
}
