/*
 * @Descripttion: 按需加载组件
 * @Author: zhaokh
 * @Date: 2019-12-17 21:05:17
 */
import Loadable from "react-loadable";
import React from "react";

const Loading = () => <div>loading...</div>;
const LoadableComponent = Loadable({
  loader: () => import("./index.js"),
  loading: Loading
});

export default () => <LoadableComponent />;
