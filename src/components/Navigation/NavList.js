import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavList.module.css'
const NavList = (props) => {
	return (
		<Fragment>
			<NavLink activeClassName={style.active1} to='/pomodoro'>
				Pomofocus
			</NavLink>
			<NavLink activeClassName={style.active2} to='/ShortBreak'>
				Short Break
			</NavLink>
			<NavLink activeClassName={style.active3} to='/LongBreak'>
				Long Break
			</NavLink>
		</Fragment>
	)
}

export default NavList
