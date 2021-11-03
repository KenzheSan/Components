import CourseItem from '../CourseItem/CourseItem'
import React, { useState } from 'react'
import './CourseGoals.css'
import Modal from '../Ui/Modal/Modal'
import Button from '../Ui/Button/Button'

const CourseGoals = (props) => {
	const [modal, setModal] = useState(false)

	return (
		<div className='wrapper-goal'>
			<ul className='goal-list'>
				{props.elemet.map((item) => {
					return (
						<CourseItem key={item.id} id={item.id}>
							{item.name} ({item.age} years old)
							<Button
								className='btn'
								onClick={() => {
									setModal(true)
								}}
							>
								Delete
							</Button>
							<Modal modal={modal} setModal={setModal}>
								<div className='main-modal'>
									<div className='modal-wrapper'>
										<h1>Удалить ?</h1>
										<Button
											onClick={() => {
												props.filterInfo(item.id)
												setModal(false)
											}}
										>
											Да!
										</Button>
										<Button onClick={() => setModal(false)}>
											Нет!
										</Button>
									</div>
								</div>
							</Modal>
						</CourseItem>
					)
				})}
			</ul>
		</div>
	)
}
export default CourseGoals
