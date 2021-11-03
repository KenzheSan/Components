import './Modal.css'
import React from "react";

const Modal = (props) =>{
    return (
        <div className ={props.modal ? 'modalBlog active' : 'modalBlog'} onClick={()=> props.setModal(false)}>
            <div className ={props.modal ? 'contentBlog active' : 'contentBlog'} onClick={(e)=> e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}
export default Modal