// import React, { Fragment } from 'react'
import style from './NavBar.module.css'
import NavList from './NavList'
const NavBar = (props) => {
	return (
		<div className={style.navbar}>
			<div className={style.routes}>
				<NavList />
			</div>
			<div className={style.navbarBox}>{props.children}</div>
		</div>
	)
}
export default NavBar
