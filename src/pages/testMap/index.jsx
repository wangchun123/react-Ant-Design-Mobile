import React from 'react';
import axios from 'axios';

import './index.scss';

export default class TestMap extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }
  componentWillMount() {
    axios({
      method: 'post',
      url: '/crops/api/hallmarket/queryHallMktProgList',
    });
  }

  componentDidMount() {
    const { BMap } = window;

    var map = new BMap.Map(this.myRef.current);
    var point = new BMap.Point(120.063352, 30.247668);
    // map.centerAndZoom(point, 15);
    // // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // window.setTimeout(function () {
    //   // map.panTo(new BMap.Point(116.409, 39.918));
    // }, 2000);
    map.addControl(
      new BMap.NavigationControl({ offset: new BMap.Size(0, 300) }),
    );
    // var polyline = new BMap.Polyline(
    //   [new BMap.Point(116.399, 39.91), new BMap.Point(116.405, 39.92)],
    //   { strokeColor: 'blue', strokeWeight: 6, strokeOpacity: 0.5 },
    // );
    // map.addOverlay(polyline);

    // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    // map.centerAndZoom(point, 15);
    // var tilelayer = new BMap.TileLayer(); // 创建地图层实例
    // tilelayer.getTilesUrl = function () {
    //   // 设置图块路径
    //   return require('../../assets/local.png');
    // };
    // // map.addTileLayer(tilelayer);
    // const OriginIMG = require('../../assets/local.png');
    // const myIcon = new BMap.Icon(OriginIMG, new BMap.Size(21, 26), {
    //   anchor: new BMap.Size(21, 25),
    //   imageOffset: new BMap.Size(0, 0)
    // });
    // this.originMarker = new BMap.Marker(this.point, { icon: myIcon });
    // map.addOverlay(this.originMarker);

    // map.centerAndZoom(point, 15);
    // var marker = new BMap.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中

    const OriginIMG = require('../../assets/origin.png');

    map.centerAndZoom(point, 15); // 编写自定义函数，创建标注

    // 创建图标对象
    var myIcon = new BMap.Icon(OriginIMG, new BMap.Size(21, 26), {
      // 指定定位位置。
      // 当标注显示在地图上时，其所指向的地理位置距离图标左上
      // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
      // 图标中央下端的尖角位置。
      anchor: new BMap.Size(21, 25),
      // 设置图片偏移。
      // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
      // 需要指定大图的偏移位置，此做法与css sprites技术类似。
      imageOffset: new BMap.Size(0, 0), // 设置图片偏移
    });

    // 创建标注对象并添加到地图
    var marker = new BMap.Marker(new BMap.Point(120.063352, 30.247668), {
      icon: myIcon,
    });
    map.addOverlay(marker);
    var marker = new BMap.Marker(new BMap.Point(120.06335, 30.246), {
      icon: myIcon,
    });
    map.addOverlay(marker);

    // map.removeOverlay(marker)

    var polyline = new BMap.Polyline(
      [
        new BMap.Point(120.063352, 30.247668),
        new BMap.Point(120.03335, 30.246),
      ],
      { strokeColor: 'blue', strokeWeight: 6, strokeOpacity: 0.5 },
    );
    map.addOverlay(polyline);

    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    var tilelayer = new BMap.TileLayer(); // 创建地图层实例
    tilelayer.getTilesUrl = function () {
      // 设置图块路径
      return OriginIMG;
    };
    map.addTileLayer(tilelayer);
  }

  render() {
    return (
      <>
        <div ref={this.myRef} id="container"></div>
      </>
    );
  }
}
