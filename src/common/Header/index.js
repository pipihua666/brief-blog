import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Header,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  Search,
  SearchInfo,
  SearchTitle,
  SearchList,
  SearchItem
} from "./style";

import { actionCreator } from "./store";
import UserInfo from "../UserInfo";

class HeaderComponent extends Component {
  showSearchInfo() {
    const {
      focused,
      list,
      mouseIn,
      page,
      totalPage,
      titleMouseEnter,
      changeSearchInfo,
      handleMouseEnter,
      handleMouseLeave,
      handleTitleMouseEnter,
      handleTitleMouseLeave,
      addInfoToSearch
    } = this.props;
    const InfoList = list.toJS();
    const newList = [];
    if (InfoList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (InfoList[i]) {
          newList.push(
            <SearchItem
              key={InfoList[i]}
              onClick={() => {
                addInfoToSearch(InfoList[i]);
              }}
            >
              {InfoList[i]}
            </SearchItem>
          );
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTitle className="popularSearch">热门搜索</SearchTitle>
          <SearchTitle
            className={titleMouseEnter ? "changeInfo info" : "changeInfo"}
            onMouseEnter={handleTitleMouseEnter}
            onMouseLeave={handleTitleMouseLeave}
            onClick={() => {
              changeSearchInfo(page, totalPage, this.icon);
            }}
          >
            <i
              className="iconfont iconhuanyihuan"
              ref={icon => {
                this.icon = icon;
              }}
            ></i>
            换一批
          </SearchTitle>
          <SearchList>{newList}</SearchList>
        </SearchInfo>
      );
    } else return null;
  }

  render() {
    const {
      focused,
      updownMouseEnter,
      registerMouseEnter,
      handleInputFocus,
      handleInputBlur,
      list,
      isLogin,
      searchValue,
      handleUpdownMouseEnter,
      handleUpdownMouseLeave,
      handleSignMouseEnter,
      handleSignMouseLeave
    } = this.props;
    return (
      <Header>
        <Logo />
        <Nav>
          <NavItem className="left active">
            <i className="iconfont iconcompass-"></i>
            首页
          </NavItem>
          <NavItem
            className={updownMouseEnter ? "left updown" : "left"}
            onMouseEnter={handleUpdownMouseEnter}
            onMouseLeave={handleUpdownMouseLeave}
          >
            <i className="iconfont iconshoujixiazai"></i>
            下载App
          </NavItem>
          {!isLogin ? (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          ) : null}
          <NavItem className="right">
            <i className="iconfont iconAa"></i>
          </NavItem>
          <Search>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames="slide"
              appear={true}
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
                value={searchValue}
                readOnly
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? "iconfont iconiconset0157 focused"
                  : "iconfont iconiconset0157"
              }
            />
            {this.showSearchInfo()}
          </Search>
        </Nav>
        <Addition>
          {!isLogin ? (
            <Button
              className={registerMouseEnter ? "signUp signUpEnter" : "signUp"}
              onMouseEnter={handleSignMouseEnter}
              onMouseLeave={handleSignMouseLeave}
            >
              注册
            </Button>
          ) : (
            <UserInfo />
          )}
          <Link to="/write">
            <Button className="writing">
              <i className="iconfont iconbi"></i>
              写文章
            </Button>
          </Link>
        </Addition>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    updownMouseEnter: state.getIn(["header", "updownMouseEnter"]),
    registerMouseEnter: state.getIn(["header", "registerMouseEnter"]),
    titleMouseEnter: state.getIn(["header", "titleMouseEnter"]),
    searchValue: state.getIn(["header", "searchValue"]),
    isLogin: state.getIn(["login", "isLogin"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.createListAction());
      dispatch(actionCreator.createFocusAction());
    },
    handleInputBlur() {
      const action = actionCreator.createBlurAction();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreator.createMouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(actionCreator.createMouseLeaveAction());
    },
    changeSearchInfo(page, totalPage, icon) {
      let originDeg = icon.style.transform.replace(/[^0-9]/gi, "");
      if (originDeg) {
        originDeg = parseInt(originDeg, 10);
      } else {
        originDeg = 0;
      }
      icon.style.transform = `rotate(${originDeg + 360}deg)`;
      const pageNumber = Math.floor(totalPage / 10);
      if (page < pageNumber) {
        dispatch(actionCreator.createChangePageAction(++page));
      } else {
        dispatch(actionCreator.createChangePageAction(0));
      }
    },
    handleUpdownMouseEnter() {
      dispatch(actionCreator.createUpdownAction());
    },
    handleUpdownMouseLeave() {
      dispatch(actionCreator.createLeaveAction());
    },
    handleSignMouseEnter() {
      dispatch(actionCreator.createSignAction());
    },
    handleSignMouseLeave() {
      dispatch(actionCreator.createSignLeaveAction());
    },
    handleTitleMouseEnter() {
      dispatch(actionCreator.createTitleAction());
    },
    handleTitleMouseLeave() {
      dispatch(actionCreator.createTitleLeaveAction());
    },
    addInfoToSearch(item) {
      dispatch(actionCreator.addInfoToSearch(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
