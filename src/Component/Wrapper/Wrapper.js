import classes from './Wrapper.module.css'
import logo from '../../Component/Ui/enter.png'
import Button from '../Ui/Button'
import Modal from '../Modal/Modal'
import React, { useState } from 'react'

const Wrapper = () => {
	const [modal, setModal] = useState(true)
	return (
		<main className={classes.wrapper}>
			<div>
				<Button
					className={classes.btn}
				>
					<img className={classes.logo} src={logo} alt='logo' />
				</Button>
			</div>
		{modal && <Modal modal={modal} setModal={setModal}/>}
		</main>
	)
}

export default Wrapper
