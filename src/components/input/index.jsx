import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import './index.scss';

class Input extends Component {
  static defaultProps = {
    onChange: () => null,
    type: 'text',
    placeholder: '',
    disabled: false,
    value: '',
    className: '',
    maxLength: 1000000,
    trim: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  _onChange = (val) => {
    const { trim } = this.props;

    if (trim) {
      this.setState({
        value: val.replace(/\s+/g, ''),
      });
    } else {
      this.setState({
        value: val,
      });
    }
  };

  render() {
    const {
      onChange,
      type,
      placeholder,
      disabled,
      className,
      maxLength,
    } = this.props;
    const { value } = this.state;

    const myInputClassName = Classnames('my-input-content', className);

    return (
      <div className="my-input">
        <input
          value={value}
          disabled={disabled && 'disabled'}
          maxLength={maxLength}
          placeholder={placeholder}
          type={type}
          className={myInputClassName}
          onChange={(e) => {
            onChange && onChange(e.target.value);
            this._onChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  trim: PropTypes.bool,
};

export default Input;
