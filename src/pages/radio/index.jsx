import React, { Component } from 'react';
import Radio from '@/components/radio';
import { Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.scss';

const alert = Modal.alert;

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

    // console.log('this.props', this.props.form.setFieldsValue({ age: '6' }));

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
          // defaultValue={this.state.defaultValue}
          // value="1"
          onChange={(val) => console.log(val)}
          // radioLayout="inline"
          itemClassName="some"
          size="large"
          {...this.props.form.getFieldProps('age', {
            // initialValue: '6',
            rules: [
              { required: true, message: '请选择radio' },
              // { validator: this.validateAccount },
            ],
          })}
        ></Radio>
        <button
          onClick={() =>
            this.props.form.validateFields({ force: true }, (error) => {
              if (!error) {
                console.log(this.props.form.getFieldsValue());
              } else {
                alert(
                  '校验错误',
                  this.props.form.getFieldError('age').join(','),
                );
                console.log(this.props.form.getFieldError('age').join(','));
              }
            })
          }
        >
          提交
        </button>
      </form>
    );
  }
}

export default createForm()(index);
