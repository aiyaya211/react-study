import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 获取根元素 根元素就是react元素要插入的位置
const root = ReactDOM.createRoot(document.getElementById('root')); // 创建根元素
const div = React.createElement('div', {}, 'hello aiyaya'); // 创建一个react元素
// const btn = React.createElement(
//   'button', 
//   {
//     type: 'button',
//     id: 'btn',
//     // 事件要用驼峰命名（和vue一样
//     onClick: () => {}
//   }, 
//   '我是按钮'
// )
const btn = <div>我是按钮</div>;
console.log(div)
// 将div渲染到根组件之下
// 用来将react元素渲染到根元素之下
// 将原本根元素内的内容都进行替换
root.render(
  btn
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
