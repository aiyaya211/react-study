import { useState } from 'react'
import Card from '../UI/Card/Card'
import './logsForm.css'


const LogsForm = () => {

    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
    }
    const descChangeHandler = (e) => {
        setInputDesc(e.target.value)
    }
    const timeChangeHandler = (e) => {
        setInputTime(e.target.value)
    }

    const save = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: inputTime
        }
        console.log(newLog)
        setInputDate('')
        setInputDesc('')
        setInputTime('')

    }

    return <Card className={'logs-form'}>
        <form>
            <div className={'form-item'}>
                <label htmlFor="date" className={'form-lable'}>日期</label>
                <input type="date" id="date" onChange={dateChangeHandler} value={inputDate}></input>
            </div>
            <div className={'form-item'}>
                <label htmlFor="desc" className={'form-lable'}>描述</label>
                <input type="text" id="desc" onChange={descChangeHandler} value={inputDesc}></input>
            </div>
            <div className={'form-item'}>
                <label htmlFor="time" className={'form-lable'}>时间</label>
                <input type="text" id="time" onChange={timeChangeHandler} value={inputTime}></input>
            </div>
            <div className={'form-btn'}>
                <button onClick={save}>提交</button>
            </div>
        </form>
    </Card>
}

export default LogsForm