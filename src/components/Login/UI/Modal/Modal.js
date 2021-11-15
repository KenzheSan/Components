
const Modal = props =>{
    return (
        <div className='black-drop' onClick={()=> props.setFormIsValid(null)}>
                <h1>Error in {props.error} </h1>
                <p>{props.title}</p>
            <button onClick={()=> props.setFormIsValid(false)}>I got it</button>
        </div>
    )
}
export default Modal