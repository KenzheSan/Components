import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
	let css = '0%'
	if (props.maxValue > 0) {
		css = Math.round((parseInt(props.value) / props.maxValue) * 100) + '%'
	}
	return (

		<div className='main_div'>
			 <div className='first_div'><div className='old_div' style={{ height: css }}></div></div>
			<div> {props.label}</div>
		</div>
	)
}

export default ChartBar
