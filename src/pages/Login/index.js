/*
 * @Descripttion: Login页面
 * @Author: zhaokh
 * @Date: 2019-12-16 20:06:31
 */
import React, { PureComponent } from "react";
import { Form, Input, Icon, Button, Radio, Divider } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionCreator from "./store/actionCreator";
import { LoginWrapper, LoginBox } from "./style";

class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoding: false
    };
    this.userLogin = this.userLogin.bind(this);
  }

  userLogin() {
    const { login } = this.props;
    this.setState({
      isLoding: true
    });
    setTimeout(() => {
      this.props.form.validateFields((errors, values) => {
        if (errors) throw new Error(errors);
        const { username = "", password = "" } = values;
        login(username, password);
      });
    }, 1000);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLogin } = this.props;
    const { isLoding } = this.state;
    return isLogin ? (
      <Redirect to="/" />
    ) : (
      <LoginWrapper>
        <LoginBox>
          <div className="title">
            <span>登录</span>
            <Divider type="vertical" />
            <span>注册</span>
          </div>
          <Form>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    require: true,
                    message: "Please input you password"
                  }
                ]
              })(
                <Input.Password
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remenber")(
                <div>
                  <Radio>记住我</Radio>
                  <span className="problem">登录遇到困难？</span>
                </div>
              )}
            </Form.Item>
            <Button
              loading={isLoding}
              type="primary"
              size="large"
              style={{
                width: "100%",
                borderRadius: "25px"
              }}
              onClick={this.userLogin}
            >
              登录
            </Button>
          </Form>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = store => ({
  isLogin: store.getIn(["login", "isLogin"])
});

const mapDispatch = dispatch => ({
  login(user, password) {
    dispatch(actionCreator.userLogin(user, password));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Form.create({ name: "normal_login" })(Login));
