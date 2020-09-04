import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const radioLayoutInline = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};
class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: this.dealDefaultValue(this.props),
    };
  }

  static defaultProps = {
    dataSource: [],
    itemClassName: '',
    defaultValue: '',
    size: 'small',
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.dataSource != nextProps.dataSource) {
      let dealDataSource = nextProps.dataSource.map((item) => ({
        ...item,
        check: false,
      }));

      if (this.props.defaultValue != nextProps.defaultValue) {
        dealDataSource.forEach((item) => {
          if (item.value == nextProps.defaultValue) {
            item.check = true;
          }
        });
      } else {
        dealDataSource.forEach((item) => {
          if (item.value == this.props.defaultValue) {
            item.check = true;
          }
        });
      }

      this.setState({
        dataSource: dealDataSource,
      });
    }
  }

  dealDefaultValue = (dataComeFrom) => {
    let dealDataSource = dataComeFrom.dataSource.map((item) => ({
      ...item,
      check: false,
    }));

    dealDataSource.forEach((item) => {
      if (item.value == dataComeFrom.defaultValue) {
        item.check = true;
      }
    });
    return dealDataSource || [];
  };

  handelCheck = (item, index) => {
    const { dataSource } = this.state;
    const { onChange } = this.props;

    dataSource.forEach((item) => {
      item.check = false;
    });

    dataSource[index].check = true;

    this.setState(
      {
        dataSource,
      },
      () => {
        this.state.dataSource.forEach((item) => {
          if (item.check) {
            onChange && onChange(item.value);
          }
        });
      },
    );
  };

  render() {
    const { dataSource } = this.state;
    const { itemClassName, radioLayout, size } = this.props;

    return (
      <>
        <div
          className="radio-group"
          style={radioLayout === 'inline' ? radioLayoutInline : {}}
        >
          {dataSource.map((item, index) => {
            return (
              <div
                className={`radio-item ${itemClassName}`}
                key={index}
                onClick={() => {
                  this.handelCheck(item, index);
                }}
              >
                <div className="radio-wrapper">
                  <div
                    className={
                      !item.check
                        ? `radio-default ${size}`
                        : `radio-checked ${size}`
                    }
                  ></div>
                  <span className={`label-text `}>{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

Radio.propTypes = {
  onChange: PropTypes.func,
  dataSource: PropTypes.array,
  itemClassName: PropTypes.string,
  radioLayout: PropTypes.oneOf(['horizontal', 'inline']),
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
};

export default Radio;
