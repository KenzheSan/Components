import React from 'react'
import './CorrectDate.css'

const CorrectDate = (props) => {
    let correct = new Date(props.date)
	let month = correct.toLocaleString('en-US', { month: 'long' })
	let day = correct.toLocaleString('en-US', { day: '2-digit' })
	let year = correct.getFullYear()
	return (
		<div className='date-blog'>
			<span>{month}/</span>
			<span>{day}/</span> 
			<span>{year}</span>
		</div>
	)
}
export default CorrectDate
