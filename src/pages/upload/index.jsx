import React, { Component } from 'react';
import BigUpload from '@/components/bigUpload';

export default class Index extends Component {
  beforeUpload = (file, url) => {
    console.log(file, url);
  };

  render() {
    return (
      <div>
        <BigUpload
          beforeUpload={(file, url) => this.beforeUpload(file, url)}
          accept="image/gif, image/jpeg, image/png"
          backgroundImage={require('../../assets/frontOfIdCard.jpg')}
          backgroundCenterImage={require('../../assets/takepic.png')}
        />
         <BigUpload
          beforeUpload={(file, url) => this.beforeUpload(file, url)}
          accept="image/gif, image/jpeg, image/png"
          backgroundImage={require('../../assets/backOfIdCard.jpg')}
          backgroundCenterImage={require('../../assets/takepic.png')}
        />
      </div>
    );
  }
}
