import ReactDOM from 'react-dom/client';
import Com from './components/Com'
// 引入样式表
import './index.css'

// 创建一个react元素
const App = <div className="logs">
    <div className="item">
       {/* 日期的容器 */}
        <div className="date">
          <div className="month">
            三月
          </div>
          <div className="day">
            14
          </div>
        </div>
        {/* 日志内容的容器 */}
        <div className="content">
          <h2 className="desc">学习react</h2>
          <div className="time">40分钟</div>
        </div>
    </div>
    <div className="item">
       {/* 日期的容器 */}
        <div className="date">
          <div className="month">
            三月
          </div>
          <div className="day">
            14
          </div>
        </div>
        {/* 日志内容的容器 */}
        <div className="content">
          <h2 className="desc">学习react</h2>
          <div className="time">40分钟</div>
        </div>
    </div>
    <div className="item">
       {/* 日期的容器 */}
        <div className="date">
          <div className="month">
            三月
          </div>
          <div className="day">
            14
          </div>
        </div>
        {/* 日志内容的容器 */}
        <div className="content">
          <h2 className="desc">学习react</h2>
          <div className="time">40分钟</div>
        </div>
    </div>
  </div>

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染
root.render(<Com />)