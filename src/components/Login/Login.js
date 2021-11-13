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
					id='name'
					className={classes.form__input}
					placeholder=' '
					autocomplete='off'
				/>
				<label htmlFor='name' className={classes.form__label}>
					Username
				</label>
			</div>
			<div className={classes.form__group}>
				<input
					type='text'
					id='email'
					className={classes.form__input}
					placeholder=' '
					autocomplete='off'
				/>
				<label htmlFor='email' className={classes.form__label}>
					Email Adress
				</label>
			</div>
			<div className={classes.form__group}>
				<input
					type='password'
					id='password'
					className={classes.form__input}
					placeholder=' '
				/>
				<label htmlFor='password' className={classes.form__label}>
					Password
				</label>
			</div>
			<button
				type='submit'
				className={classes.form__button}
			>
				Log In
			</button>
		</form>
	)
}
export default Login
