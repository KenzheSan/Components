import React, { useState } from 'react'
import './Expensses.css'

function Wrapper(props) {

	const [cost, setCosts] = useState('')
	const [date, setDate] = useState('')
	const costHandler = (e) => {
		setCosts(e.target.value)
	}
	const dateHandler = (e) => {
		setDate(e.target.value)
	}
	const sumbitHandler = (e) => {
		e.preventDefault()
		let data = {
			cost: Number(cost),
			date: new Date(date)
		}
		props.onTransfer(data)
        setCosts('')
        setDate('')
	}

	

	

	return (
		<div>
		<form  className='main-wrapper' onSubmit={sumbitHandler}>
			<div className='wrapper'>
				<h1>Expensses</h1>
				<div className='blog' >
					<input value ={cost}  type='number' onChange={costHandler} />
					<input value={date} type='date' onChange={dateHandler} />
					<input type='submit' />
				</div>
			</div>
		
		</form>
		</div>
	)
}
export default Wrapper
