import './Modal.css'
import Button from '../Ui/Button'

const Modal = (props) => {
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
							placeholder='password'
							type='password'
						/>
					</div>
					<br />
					<Button>Login</Button>

					<header className='headerblog'>
						<Button className='create'>Sign Up</Button>
					</header>
					<Button className='fixed'>Close All</Button>
				</div>
			
			</div>
		</div>
	)
}
export default Modal
