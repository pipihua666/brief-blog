/*
 * @Descripttion: liståˆ—è¡¨
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreator as loginAction } from "../../pages/Login/store";

class UserInfo extends PureComponent {
  render() {
    return (
      <>
        <span onClick={this.props.changeLogout}>退出</span>
      </>
    );
  }
}

const mapDispatch = dipatch => ({
  changeLogout() {
    dipatch(loginAction.changeLogout());
  }
});

export default connect(null, mapDispatch)(UserInfo);
