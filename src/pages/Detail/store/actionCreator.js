/*
 * @Descripttion:detail的actionCreator
 * @Author: zhaokh
 * @Date: 2019-12-15 22:15:19
 */
import axios from "axios";
import { CHANGE_DETAIL } from "./actionTypes";

const changeDetail = (title, content) => ({
  type: CHANGE_DETAIL,
  payload: {
    title,
    content
  }
});
export const getDeatil = id => {
  console.log(id);
  return async dispatch => {
    const { data = {} } = await axios.get("/api/detail.json?id=" + id);
    const {
      data: { title = "", content = "" }
    } = data;

    dispatch(changeDetail(title, content));
  };
};
