import React from 'react'
import './CourseItem.css'
const CourseItem = (props) => {
	return (
		<li className='li'>
			{props.children}
		</li>
	)
}

export default CourseItem
