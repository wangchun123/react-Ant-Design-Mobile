import React, { Component } from 'react';
import Input from '@/components/input';
import { Modal } from 'antd-mobile';
import './index.scss';

const alert = Modal.alert;

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '获取验证码',
      num: 60,
      activeClass: '',
      value: '',
    };
  }

  _onClick = () => {
    if (this.checkError()) return;

    let { num } = this.state;
    this.timer = setInterval(() => {
      this.setState(
        {
          text: `${num}s`,
          num: num--,
          activeClass: 'activeClass',
        },
        () => {
          if (this.state.num < 1) {
            clearInterval(this.timer);
            this.setState({
              text: '获取验证码',
              activeClass: '',
              num: 60,
            });
          }
        },
      );
    }, num * 10);
  };

  checkError = () => {
    const { value } = this.state;

    if (!value) {
      alert('错误', '电话不能为空');
      return true;
    } else if (!/^1[3456789]\d{9}$/.test(value)) {
      alert('错误', '电话输入不正确');
      return true;
    }

    return false;
  };

  _onChange = (val) => {
    this.setState({
      value: val,
    });
  };

  render() {
    const { text, activeClass } = this.state;
    return (
      <div>
        <div className="verCode">
          <Input
            onChange={(val) => this._onChange(val)}
            maxLength={11}
            trim={true}
            placeholder="请输入电话号码"
            className="cln-input"
          />
          <div
            className={`${'my-button'} ${activeClass}`}
            onClick={() => this._onClick()}
          >
            {text}
          </div>
        </div>
      </div>
    );
  }
}
