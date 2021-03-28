import React from 'react';// 当使用JSX语法的时候必须引入React
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)

ReactDOM.render(
  App  ,// 组件必须以大写开头
  document.getElementById('root')
);
