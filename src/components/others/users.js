import React, {Component} from 'react'

class User extends Component{
    // 类组件中可以直接通过this访问到父组件传过来的props
    // 可以直接在类组件中定义state 获取到state中的数据 类似于vue中的data
    // 通过setState来修改state中的值
    // 获取dom 通过React.createRef();
    divRef = React.createRef();
    state = {
        title: '我的一天',
        times: 0
    };
    handleClick = () => {
        this.setState({times: this.state.times + 1})
        console.log(this.divRef)
    };
    render() {   
        return <div>
            {/* 注意 一定要加this */}
                <span>{this.state.times}</span>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClick}>操作</button>
                <ul>
                    <li ref={this.divRef}>天气：{this.props.weather}</li>
                    <li>心情：{this.props.mood}</li>
                    <li>地点：{this.props.place}</li>
                </ul>
            </div>
    }
}

export default User