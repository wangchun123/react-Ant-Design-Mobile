import React from 'react';
import './index.scss';

export default class TestMap extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }
  componentWillMount() {}

  componentDidMount() {
    const { BMap } = window;
    // var map = new BMap.Map(this.myRef.current);
    // var point = new BMap.Point(116.404, 39.915);
    // map.centerAndZoom(point, 15);
    // console.log('baidu', window.BMap);
    // console.log('this.myRef', this.myRef);
    var map = new BMap.Map(this.myRef.current);
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    window.setTimeout(function () {
      map.panTo(new BMap.Point(116.409, 39.918));
    }, 2000);
  }

  render() {
    return (
      <>
        <div ref={this.myRef} id="container"></div>
      </>
    );
  }
}
