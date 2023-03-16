import LogItem from './LogItem'
import './logs.css'

const Logs = (props) => {
    return <div className="logs">
        {/* 在父组件中可以直接设置子组件的属性 */}
        <LogItem desc="学习摄影" time="50" date={new Date("January 12,2006 22:19:35")}/>
        <LogItem desc="学习ps" time="30" date={new Date("March 12,2008 22:19:35")}/>
    </div>
}

export default Logs;