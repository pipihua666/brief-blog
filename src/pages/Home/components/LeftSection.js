/*
 * @Descripttion: list列表
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React, { Component } from "react";
import { ListItem } from "../style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LeftSection extends Component {
  render() {
    const { list } = this.props;
    return (
      <>
        {list.map(item => (
          <ListItem key={item.get("id")}>
            <img className="articalPic" src={item.get("imgSrc")} alt="" />
            <Link to={"/detail/" + item.get("id")}>{item.get("title")}></Link>
            <p className="artical">{item.get("desc")}</p>
          </ListItem>
        ))}
      </>
    );
  }
}

const mapState = store => ({
  list: store.getIn(["home", "articalList"])
});

export default connect(mapState)(LeftSection);
