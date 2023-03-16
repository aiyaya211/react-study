import React from 'react';
import MyDate from './MyDate';
import './logItem.css'

const LogItem = (props) => {
    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props,props指向的是一个对象
    // 它包含了父组件中传递的所有参数
    console.log(props)
    return <div className="item">
       {/* 日期的容器 */}
       <MyDate date={props.date}/>
        {/* 日志内容的容器 */}
        <div className="content">
          <h2 className="desc">{props.desc}</h2>
          <div className="time">{props.time}分钟</div>
        </div>
    </div>
}

export default LogItem;