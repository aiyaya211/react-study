import { useState, useRef } from 'react';
import './counter.css'

// 组件名要大写 不然会报错
const Counter = () => {
    // 在react中，当组件渲染完毕之后，再修改组件中的变量，不会使组件重新渲染
    // 要让变量修改后重新渲染组件，才能让页面根据变量更新
    // state相当于一个变量 在react中state中的数据被进行了劫持
    // 双向绑定 类似于vue中的data
    // 使用钩子函数usestate()来创建state

    // 钩子函数
    const res = useState(1)
    const h1Ref = useRef()
    console.log(res)
    // let val = res[0]
    // console.log(res)
    let val = res[0];
    let setCount = res[1];
    // 再执行
    const addCount = () => {
        // val++;
        // 会重新渲染组件
        setCount(val + 1)
        console.log(val)
    };
    const lessCount = () => {
        // 会重新渲染组件
        setCount(val - 1)
        // console.log(val)
    };
    // 获取dom
    const getDom = () => {
        let dom = document.getElementById('content')
        console.log(dom)
    }
   //  先执行
    return <div className='counter'>
        <span id="content">{val}</span>
        <div>
            <button onClick={addCount}>增加</button>
            <button onClick={lessCount}>减少</button>
        </div>
        <button onClick={getDom}>获取dom</button>
    </div>
}

export default Counter;