import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建一个react元素
// const button = <button>我是按钮</button>

// 创建一个div react元素
const name = '哎呀呀'
const div =<div>
  <div onClick={() => alert(888)}>我是{name}</div>
  <button style={{ color: 'red' }}>我是按钮1</button>
</div>;

let lang = "en";
let div1;
if (lang === 'en') {
  div1 = <div>hello world</div>
}
if (lang === 'ch') {
  div1 = <div>你好</div>
}
// 生成列表
let list = ['香蕉', '苹果', '橘子'];
let listArr = [];

list.forEach(item => {
  listArr.push(<li>{item}</li>);
})

let listDiv = <ul>{list.map(item => <li>{item}</li>)}</ul>
// 生成一个dom元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染
root.render(listDiv)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
