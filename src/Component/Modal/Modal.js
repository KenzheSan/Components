import './Modal.css'

const Modal = (props) =>{
    return (
        <div className ={props.modal ? 'module active' : 'module'} onClick={(e)=> e.stopPropagation()}>

            <div className ={props.modal ? 'module_content active' : 'module_content'} onClick={(e)=> e.stopPropagation()}>
                {props.children}
            </div>
           
        </div>
    )
}
export default Modal