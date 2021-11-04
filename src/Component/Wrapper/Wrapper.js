import classes from './Wrapper.module.css'
import logo from '../../Component/Ui/enter.png'
import Button from '../Ui/Button'
import Modal from '../Modal/Modal'
import React, { useState } from 'react'
const Wrapper = () => {
	const [modal, setModal] = useState(false)
	const [signUp, setSignUp] = useState(false)
	return (
		<main className={classes.wrapper}>
			<div>
				<Button
					onClick={(e) => {
						setModal(true)
						e.stopPropagation()
					}}
					className={classes.btn}
				>
					<img className={classes.logo} src={logo} alt='logo' />
					<Modal modal={signUp} setModal={setSignUp}>
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
								<input
									id='password'
									placeholder='email'
									type='email'
								/>
							</div>
							<br />
							<header className='headerblog'>
								<Button
									className='create'
									onClick={() => setSignUp(false)}
								>
									Create
								</Button>
							</header>
							<Button
								className='fixed'
								onClick={(e) => {
									setModal(false)
									setSignUp(false)
								}}
							>
								Close All
							</Button>
						</div>
					</Modal>
				</Button>
			</div>
			<Modal modal={modal} setModal={setModal}>
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
					<Button className='create' onClick={() => setModal(false)}>
						Login
					</Button>
					<header className='headerblog'>
						<Button
							className='create'
							onClick={(e) => {
								setSignUp(true)
								setModal(false)
								e.stopPropagation()
							}}
						>
							Sign Up
						</Button>
					</header>
					<Button
						className='fixed'
						onClick={(e) => {
							setModal(false)
							setSignUp(false)
						}}
					>
						Close All
					</Button>
				</div>
			</Modal>
		</main>
	)
}

export default Wrapper
