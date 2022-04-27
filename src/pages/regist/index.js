import React, { Component } from "react";
import logo from "@/assets/taobao.jpeg";
import CustomInput from "@/components/customInput";
import { createForm } from "rc-form";

import { Toast } from "antd-mobile";

import "./index.scss";

class App extends Component {
  state = {
    isUsernameError: false,
    isUserpasswordError: false,
  };
  handleSumbit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const { usepassword, username } = this.props.form.getFieldsValue();

        if (usepassword === "Alibaba" && username === "15757142314") {
          Toast.success("登录成功");
        } else {
          Toast.fail("用户名或密码错误");
        }
      } else {
        Toast.fail(
          `${this.props.form.getFieldError("usepassword").join(",")}`,
          1
        );
        Toast.fail(`${this.props.form.getFieldError("username").join(",")}`, 1);
      }
    });
  };

  validateUsername = (rule, value, callback) => {
    if (value) {
      const checkEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      const checkphone =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (checkEmail.test(value) || checkphone.test(value)) {
        callback();
        this.setState({
          isUsernameError: false,
        });
      } else {
        callback(new Error("请输入正确的email或手机号"));
        this.setState({
          isUsernameError: true,
        });
      }
    } else {
      callback(new Error("请输入用户名"));
    }
  };

  validatePassword = (rule, value, callback) => {
    if (value) {
      const checkPassword = /^[A-Za-z0-9_]{7,20}$/;
      if (checkPassword.test(value)) {
        callback();
        this.setState({
            isUserpasswordError: false,
          });
      } else {
        callback(new Error("密码格式：字母、数字及下划线组成，长度在7~20"));
        this.setState({
            isUserpasswordError: true,
          });
      }
    } else {
      callback(new Error("请填写密码"));
    }
  };

  render() {
    const { isUsernameError, isUserpasswordError } = this.state;
    return (
      <form>
        <div className="app">
          <div className="top_icon">
            <img src={logo} alt="" />
          </div>
          <CustomInput
            type="text"
            placeholder="手机号/邮箱/会员名"
            {...this.props.form.getFieldProps("username", {
              rules: [{ validator: this.validateUsername }],
            })}
          />
          {isUsernameError && (
            <div className="text_error">请输入正确的email或手机号</div>
          )}
          <CustomInput
            type="password"
            placeholder="请输入登录密码"
            {...this.props.form.getFieldProps("usepassword", {
              rules: [{ validator: this.validatePassword }],
            })}
          />
          {isUserpasswordError && (
            <div className="text_error">
              密码格式：字母、数字及下划线组成，长度在7~20
            </div>
          )}
          <div className="help">
            <div className="check">短信验证码通过</div>
            <div className="regist">免费注册</div>
          </div>
          <div className="btn" onClick={() => this.handleSumbit()}>
            登录
          </div>
        </div>
      </form>
    );
  }
}

export default createForm()(App);
