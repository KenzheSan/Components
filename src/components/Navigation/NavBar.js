import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {
	return (
		<div className={style.navbar}>
			<div className={style.routes}>
				<NavLink activeClassName={style.active1} to='/pomodoro' >
					Pomofocus
				</NavLink>
				<NavLink activeClassName={style.active2} to='/ShortBreak'>
					Short Break
				</NavLink>
				<NavLink activeClassName={style.active3} to='/LongBreak'>
					Long Break
				</NavLink>
			</div>

			<div>{props.children}</div>
		</div>
	)
}
export default NavBar
