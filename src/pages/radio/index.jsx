import React, { Component } from 'react';
import Radio from '@/components/radio';

export default class index extends Component {
  render() {
    return (
      <div>
        <Radio
          dataSource={[
            { label: 'test1', value: '1' },
            { label: 'test2', value: '2' },
            { label: 'test3', value: '3' },
            { label: 'test4', value: '4' },
            { label: 'test5', value: '5' },
            { label: 'test6', value: '6' },
          ]}
        ></Radio>
      </div>
    );
  }
}
