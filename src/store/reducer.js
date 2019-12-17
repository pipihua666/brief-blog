/*
 * @Descripttion:应用的reducer
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import { combineReducers } from "redux-immutable";
import { headerReducer } from "../common/Header/store";
import { homeReducer } from "../pages/Home/store";
import { detailReducer } from "../pages/Detail/store";
import { loginReducer } from "../pages/Login/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;
