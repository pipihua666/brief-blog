/*
 * @Descripttion: Login页面
 * @Author: zhaokh
 * @Date: 2019-12-16 20:06:31
 */
import React, { PureComponent } from "react";
import { WriteWrapper } from "./style";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    return isLogin ? <WriteWrapper>write</WriteWrapper> : <Redirect to="/login" />;
  }
}

const mapState = store => ({
  isLogin: store.getIn(["login", "isLogin"])
});

export default connect(mapState)(Login);
