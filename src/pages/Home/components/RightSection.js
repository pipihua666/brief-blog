/*
 * @Descripttion:recomman组件
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React, { Component } from "react";
import { RightSectionStyled } from "../style";
import { connect } from "react-redux";

class RightSection extends Component {
  render() {
		const { recommandImg } = this.props;
    return (
      <RightSectionStyled>
        {recommandImg.map(item => (
          <img src={item.get("imgSrc")} alt="" key={item.get("id")} />
				))}
      </RightSectionStyled>
    );
  }
}

const mapState = store => ({
  recommandImg: store.getIn(["home", "recomandImg"])
});

export default connect(mapState)(RightSection);
