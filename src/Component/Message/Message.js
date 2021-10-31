import React from "react";
import './Message.css'

const Message = (props) =>{
    return (
        <div className={props.valid ? 'wrapper active': 'wrapper'} onClick ={() => props.func(false)}>
            <div className ={props.valid ? 'text active': 'text'} onClick={e => e.stopPropagation()}>{props.children}</div>
        </div>
    )
}

export default Message