import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建一个react元素
const button = React.createElement('button', {
  id: 'btn',
  onClick: () => {
    alert('请你点击我！')
  }
}, '按钮1');

// 创建一个div react元素
const div = React.createElement('div', {}, ['我是一个div', button]);

// 生成一个dom元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染
root.render(div)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
