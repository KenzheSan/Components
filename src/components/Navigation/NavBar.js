import React, { Fragment } from 'react'
import style from './NavBar.module.css'
import NavList from './NavList'
const NavBar = (props) => {
	return (
		<div className={style.navbar}>
			<div className={style.routes}>
				<NavList />
			</div>
			<Fragment>{props.children}</Fragment>
		</div>
	)
}
export default NavBar
