import Button from '../Ui/Button'
import './ModalRe.css'

const ModalRe = (props) => {
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
					<h1>Registration</h1>
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
						<br />
						<input id='password' placeholder='email' type='email' />
					</div>
					<br />
					<header className='headerblog'>
						<Button className='create' onClick={() => props.setModal(false)}>Create</Button>
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
export default ModalRe
