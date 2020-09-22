import React, { Component } from 'react';
import Input from '@/components/input';
import './index.scss';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      text: '获取验证码',
      num: 20,
    };
  }

  _onClick = () => {
    let { num } = this.state;
    console.log('num', num);

    this.timer = setTimeout(() => {
      console.log('--pp--', num--);

      this.setState({
        text: `${num--}s`,
      });
    }, 1000);
  };

  render() {
    const { disabled, text } = this.state;
    return (
      <div>
        <div className="verCode">
          <Input
            onChange={(val) => console.log('val', val)}
            value="qweqweqw"
            disabled={disabled}
            maxLength={10}
            trim={true}
            className="cln-input"
          />
          <div className="my-button" onClick={() => this._onClick()}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}
