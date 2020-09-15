import React from 'react';
import { Fetcher } from '../../../../../library/network';
import { Toast } from 'antd-mobile';

import './index.scss';

export default class BigUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
    };
  }

  inputChange = (val) => {
    let file = this.refs.files.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      this.uploading(file, e.target.result);
    }.bind(this);
  };

  uploading = (file, url) => {
    const { serverUrl, uploadParam, fetchBack, beforeUpload } = this.props;

    if (beforeUpload && beforeUpload(file, url)) return;

    Toast.loading('正在上传...', 0);
    Fetcher.uploadFileFetch(serverUrl, uploadParam, file)
      .then((res) => {
        Toast.hide();
        Toast.success('上传成功', 1);
        fetchBack && fetchBack(res);
        this.setState({
          file: [{ url: url, file: file }],
        });
      })
      .catch((err) => {
        Toast.hide();
        Toast.fail('上传失败', 1);
      });
  };

  render() {
    const { file } = this.state;
    const {
      accept,
      backgroundImage = '',
      backgroundCenterImage = '',
    } = this.props;
    return (
      <div className="big-upload">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div className="big-upload-select-img" key={index}>
                <img src={item.url} alt=""  />
              </div>
            );
          })}
        <div className="big-upload-item">
          <img src={backgroundImage} alt="" />
          <img src={backgroundCenterImage} alt="" />
        </div>
        <div className="big-upload-input">
          <input
            type="file"
            onChange={(val) => this.inputChange(val)}
            ref="files"
            accept={accept}
          />
        </div>
      </div>
    );
  }
}
