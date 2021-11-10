import './Modal.css'
import Button from '../Ui/Button'
import React from 'react'
import  ReactDOM  from 'react-dom'


const BlackDrop = props =>{
	return (
		<div
		className={props.modal ? 'module active' : 'module'}
		onClick={(e) => e.stopPropagation()}
	>
		<div
			className={
				props.modal ? 'module_content active' : 'module_content'
			}
			onClick={(e) => e.stopPropagation()}
		>
			<div className='mainblog'>
				<div className='userblog'>
					<input
						id='username'
						placeholder='User-Name'
						type='name'
					/>
					<br />
					<input
						id='password'
						placeholder='Password'
						type='password'
					/>
				</div>
				<br />
				<Button
					className='create'
					onClick={() => {
						props.setModal(false)
					}}
				>
					Login
				</Button>

				<header className='headerblog'>
					<Button
						className='create'
						onClick={() => {
							props.setActive(true)
							props.setModal(false)
						}}
					>
						Sign Up
					</Button>
				</header>
				<Button
					className='fixed'
					onClick={() => {
						props.setActive(false)
						props.setModal(false)
					}}
				>
					Close All
				</Button>
			</div>
		</div>
	</div>
	)
}
const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<BlackDrop modal={props.modal} setModal={props.setModal}  setActive={props.setActive}/>,
				document.getElementById('blackdrop')
			)}
		</React.Fragment>
	)
}
export default Modal
