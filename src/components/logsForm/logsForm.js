import Card from '../UI/Card/Card'
import './logsForm.css'

const LogsForm = () => {
    return <Card className={'logs-form'}>
        <form>
            <div className={'form-item'}>
                <label htmlFor="date" className={'form-lable'}>日期</label>
                <input type="date" id="date"></input>
            </div>
            <div className={'form-item'}>
                <label htmlFor="desc" className={'form-lable'}>描述</label>
                <input type="text" id="desc"></input>
            </div>
            <div className={'form-item'}>
                <label htmlFor="time" className={'form-lable'}>时间</label>
                <input type="text" id="time"></input>
            </div>
            <div className={'form-btn'}>
                <button>提交</button>
            </div>
        </form>
    </Card>
}

export default LogsForm