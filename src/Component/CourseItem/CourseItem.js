import React, { useState } from 'react'
import './CourseItem.css'
import Rename from '../Ui/ReName/Rename'
import Button from '../Ui/Button/Button'
const CourseItem = (props) => {
	const [rename,setRename] = useState(false)

	return (
		<li className='li'>
			{props.children} 
			<Button onClick={()=> setRename(true)}>Rename</Button>
			{rename && <Rename  rename={rename} setRename={setRename} name={props.name} age={props.age} onChangeInfo={props.onChangeInfo} id={props.id}/>}
		</li>
	)
}

export default CourseItem
