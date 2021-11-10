import Button from '../Ui/Button'
import './ModalRe.css'
import ReactDOM from 'react-dom'
import React from 'react'

const BlackDropBlog = (props) => {
	return (
		<div
			className={props.modal ? 'module active' : 'module'}
			onClick={(e) => e.stopPropagation()}
		>		<div
		className={props.modal ? 'module_content active' : 'module_content'}
		onClick={(e) => e.stopPropagation()}>
			{props.children}
				</div>			
		</div>
	)
}

const BlackDropContent = props =>{
	return (
		<div className='mainblog'>
		<h1>Registration</h1>
		<div className='userblog'>
			<input id='username' placeholder='User-Name' type='name' />
			<br />
			<input
				id='password'
				placeholder='password'
				type='password'
			/>
			<br />
			<input id='password' placeholder='email' type='email' />
		</div>
		<br />
		<header className='headerblog'>
			<Button
				className='create'
				onClick={() => props.setModal(false)}
			>
				Create
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
	)
}

const ModalRe = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<BlackDropBlog modal={props.modal} setModal={props.setModal}  setActive={props.setActive}>
					<BlackDropContent modal={props.modal} setModal={props.setModal}  setActive={props.setActive}/>
				</BlackDropBlog>,
				document.getElementById('modalRe')
			)}
		</React.Fragment>
	)
}
export default ModalRe
