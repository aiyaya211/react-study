import React, {Component} from 'react'
import User from '../components/others/users'

class Dcom extends Component{
    render() {
        return <div style={{width: 200+ 'px', height: 200+'px', background:' pink'}}>
            <User weather={'晴朗'} mood={'开心'} place={'杭州'}/>
        </div>
    }
}

export default Dcom