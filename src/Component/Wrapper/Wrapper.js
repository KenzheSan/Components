import classes from './Wrapper.module.css'
import logo from '../../Component/Ui/enter.png'
import Button from '../Ui/Button'
import Modal from '../Modal/Modal'
import React, { useState } from 'react'
import ModalRe from '../ModalRe/ModalRe'

const Wrapper = () => {
	const [modal, setModal] = useState(false)
	const [active,setActive] = useState(false)
	return (
		<main className={classes.wrapper}>
			<div className={classes.z_wrapper}>
				<Button
					className={classes.btn}
					onClick={()=> setModal(true)}
				>
					<img className={classes.logo} src={logo} alt='logo' />
				</Button>
			</div>
		{modal && <Modal modal={modal} setModal={setModal}  setActive={setActive}/> }	
		{active && <ModalRe modal={active} setModal={setActive} setActive={setModal}/>}
		</main>
	)
}

export default Wrapper
