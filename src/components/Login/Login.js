import classes from './Login.module.css'
import React from 'react'

const Login = (props) => {
	return (
		<form action='' className={classes.form}>
			<h1 className={classes.form__title}>Sign Up</h1>
			<p className={classes.form__description}>
				Login here using your username(email) and password
			</p>

			<div className={classes.form__group}>
				<input
					type='text'
					id='email'
					className={classes.form__input}
					placeholder=' '
					autocomplete='off'
				/>
				<label for='email' className={classes.form__label}>
					Email
				</label>
			</div>

			<div className={classes.form__group}>
				<input
					type='password'
					id='password'
					className={classes.form__input}
					placeholder=' '
				/>
				<label for='password' className={classes.form__label}>
					Password
				</label>
			</div>

			<button className={classes.form__button}>Log In</button>
		</form>
	)
}
export default Login
