/*
 * @Descripttion: login页面reducer
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return state.set("isLogin", action.payload);
    case actionTypes.USER_LOGOUT:
      return state.set("isLogin", false);
    default:
      return state;
  }
};
