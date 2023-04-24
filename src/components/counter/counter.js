import './counter.css'

const counter = () => {
    let val = 1;
    const addCount = () => {
        val++;
        console.log(val)
    };
    const lessCount = () => {
        val--;
        console.log(val)
    };
   
    return <div className='counter'>
        <span>{val}</span>
        <div>
            <button onClick={addCount}>增加</button>
            <button onClick={lessCount}>减少</button>
        </div>
    </div>
}

export default counter;