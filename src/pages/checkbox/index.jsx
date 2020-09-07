import React, { Component } from 'react';
import Checkbox from '@/components/checkbox';
import './index.scss';
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      defaultValue: '',
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: [
        { label: 'test1', value: '1' },
        { label: 'test2', value: '2' },
        { label: 'test3', value: '3' },
        { label: 'test4', value: '4' },
        { label: 'test5', value: '5' },
        { label: 'test6', value: '6' },
      ],
      defaultValue: '1',
    });
  }

  render() {
    return (
      <div>
        <Checkbox
          dataSource={this.state.dataSource}
          defaultValue={this.state.defaultValue}
          onChange={(val) => console.log(val)}
          // radioLayout="inline"
          itemClassName="some"
          size="large"
        ></Checkbox>
      </div>
    );
  }
}
