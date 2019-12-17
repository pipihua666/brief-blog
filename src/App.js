/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React from "react";
import { GlobalStyle } from "./style";
import Header from "./common/Header/index";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail/loadable";
import Login from "./pages/Login/loadable";
import Write from "./pages/Write/loadable";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <main>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
