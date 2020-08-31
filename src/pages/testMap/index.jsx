import React from 'react';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';

export default class TestMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11" ref={ref => {this.map = ref.map}}>
          <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
          <NavigationControl />
          <InfoWindow
            position={{ lng: 116.402544, lat: 39.928216 }}
            text="内容"
            title="标题"
          />
        </Map>
      </>
    );
  }
}
