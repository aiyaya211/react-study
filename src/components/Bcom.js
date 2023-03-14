import React from 'react';

// 类组件需要继承
class Bcom extends React.Component{
    // 类组件中 必须添加一个render方法 且方法的返回值必须是一个jsx
    render() {
        return <div>我是类组件</div>
    }

}

export default Bcom;