import React from 'react';
import { Toast } from 'antd-mobile';

import './index.scss';

export default class BigUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.backgroundImage,
    };
    this.myRef = React.createRef();
  }

  inputChange = (val) => {
    let file = this.myRef.current.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      this.uploading(file, e.target.result);
    }.bind(this);
  };

  uploading = (file, url) => {
    const { serverUrl, uploadParam, fetchBack, beforeUpload } = this.props;

    if (beforeUpload) {
      beforeUpload(file, url);
      this.setState({
        img: url,
      });
      return;
    }

    // Toast.loading('正在上传...', 0);
    // Fetcher.uploadFileFetch(serverUrl, uploadParam, file)
    //   .then((res) => {
    //     Toast.hide();
    //     Toast.success('上传成功', 1);
    //     fetchBack && fetchBack(res);
    //     this.setState({
    //       file: [{ url: url, file: file }],
    //     });
    //   })
    //   .catch((err) => {
    //     Toast.hide();
    //     Toast.fail('上传失败', 1);
    //   });
  };

  render() {
    const { img } = this.state;
    const { accept, backgroundCenterImage = '' } = this.props;
    return (
      <div className="big-upload">
        <div className="big-upload-item">
          <img src={img} alt="" />
          <img src={backgroundCenterImage} alt="" />
        </div>
        <div className="big-upload-input">
          <input
            type="file"
            onChange={(val) => this.inputChange(val)}
            ref={this.myRef}
            accept={accept}
          />
        </div>
      </div>
    );
  }
}
