/*
 * @Descripttion: actionCreator
 * @Author: zhaokh
 * @Date: 2019-12-16 21:15:18
 */
import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeLogin = isLogin => ({
  type: actionTypes.USER_LOGIN,
  payload: isLogin
});

export const changeLogout = () => ({
  type: actionTypes.USER_LOGOUT
});

export const userLogin = (user, password) => {
  return async dispatch => {
    if (user && password) {
      try {
        const { data } = await axios.get("/api/login.json");
        const { data: result } = data;
        console.log(result);
        dispatch(changeLogin(result));
      } catch (e) {
        throw new Error(e);
      }
    }
  };
};