import LogItem from './LogItem'
import './logs.css'

const Logs = (props) => {
    const resData = [{
        date: new Date("January 12,2006 22:19:35"),
        desc: "学习摄影1",
        time: 30
    }, {
        date: new Date("January 12,2007 22:19:35"),
        desc: "学习摄影2",
        time: 30
    }]
    return <div className="logs">
        {/* 在父组件中可以直接设置子组件的属性 */}
        {/* <LogItem desc="学习摄影" time="50" date={new Date("January 12,2006 22:19:35")}/>
        <LogItem desc="学习ps" time="30" date={new Date("March 12,2008 22:19:35")}/> */}
        {/* 循环 */}{
        resData.map((item) => {
            return <LogItem desc={item.desc} time={item.time} date={item.date} key={item.date}/>
        })}
    </div>
}

export default Logs;