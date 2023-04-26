import React from 'react';
import './card.css'

const Card = (props) => {
    // 类似于vue的插槽
return <div className={`card ${props.className}`}>{props.children}</div>
}

export default Card