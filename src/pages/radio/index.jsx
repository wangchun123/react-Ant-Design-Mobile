import React, { Component } from 'react';
import Radio from '@/components/radio';
import { createForm } from 'rc-form';
import './index.scss';
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      defaultValue: '',
    };
  }

  componentDidMount() {
    // console.log('this.props', this.props.form.getFieldsValue());

    console.log('this.props', this.props.form.setFieldsValue({ age: '6' }));

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
      <form>
        <Radio
          dataSource={this.state.dataSource}
          // value={this.state.defaultValue}
          onChange={(val) => console.log(val)}
          // radioLayout="inline"
          itemClassName="some"
          size="large"
          {...this.props.form.getFieldProps('age')}
        ></Radio>
        <button
          onClick={() =>
            console.log('this.props', this.props.form.getFieldsValue())
          }
        >
        提交
        </button>
      </form>
    );
  }
}

export default createForm()(index);
