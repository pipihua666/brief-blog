import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import {Provider} from 'react-redux';
import store from './store/index';
import{BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <main>
           <Route path="/" exact component={Home}></Route>
           <Route path="/detail" exact component={Detail}></Route>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
