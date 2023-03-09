import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建一个按钮
// const btn = <button
//   onClick={changeList}
// >
//   点击修改
// </button>;


let list = ['苹果', '香蕉', '橘子'];

let listArr = <ul>
  {list.map(item => <li key={item}>{item}</li>)}
</ul>

document.getElementById('btn').onclick = () => {
  list = [ '菠萝', '苹果', '香蕉', '橘子'];
  listArr = <ul>
    {list.map(item => <li key={item}>{item}</li>)}
  </ul>;
  root.render(listArr);
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(listArr);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
