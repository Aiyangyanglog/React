import React from 'react';// 当使用JSX语法的时候必须引入React
import ReactDOM from 'react-dom';
import Todolist from './Todolist';

ReactDOM.render(
    <Todolist />,// 组件必须以大写开头
  document.getElementById('root')
);
