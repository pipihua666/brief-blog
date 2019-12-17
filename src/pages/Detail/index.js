/*
 * @Descripttion: Detail页面
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DetailWrapper, DetailHeader, DetailContent } from "./style";
import { getDeatil } from "./store/actionCreator";

class Detail extends Component {
  componentDidMount() {
    const { getDeatil, match } = this.props;
    const {
      params: { id = "" }
    } = match;
    getDeatil(id);
  }
  render() {
    const { content, title } = this.props;
    return (
      <DetailWrapper>
        <DetailHeader>{title}</DetailHeader>
        <DetailContent dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }
}

const matState = store => ({
  title: store.getIn(["detail", "title"]),
  content: store.getIn(["detail", "content"])
});

const mapDispatch = dipatch => ({
  getDeatil(id) {
    dipatch(getDeatil(id));
  }
});

export default connect(matState, mapDispatch)(withRouter(Detail));
