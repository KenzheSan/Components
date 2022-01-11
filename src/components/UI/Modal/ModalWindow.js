import React from 'react'
import  ReactDOM  from 'react-dom'
import { useDispatch } from 'react-redux'
import classes from '../../UI/Modal/ModalWindow.module.css'
import { toggleActions } from '../../store/Store'


const Backdrop = (props) => {
	const dispatch = useDispatch()
	const closeModalHandler = () =>{
		dispatch(toggleActions.toggle())
	}
	return <div onClick={closeModalHandler} className={classes.backdrop} />
}

const ContentOfModal = (props) => {
	return <div className={classes.header}>
		<div className={classes.contents}>
			{props.children}
		</div>
	</div>
}
const portalElement  = document.getElementById('backdrop-root')
const modalElement =  document.getElementById('modal-root')
const ModalWindow = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
			{ReactDOM.createPortal(<ContentOfModal className={classes.contents}>{props.children}</ContentOfModal>,modalElement)}
		</React.Fragment>
	)
}
export default ModalWindow
