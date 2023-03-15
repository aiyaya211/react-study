import LogItem from './LogItem'
import './logs.css'

const Logs = (props) => {
    return <div className="logs">
        {/* 在父组件中可以直接设置子组件的属性 */}
        <LogItem test="123"/>
    </div>
}

export default Logs;