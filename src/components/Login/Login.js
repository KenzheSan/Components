import classes from './Login.module.css'
import React, { useReducer, useState } from 'react'
import Modal from './UI/Modal/Modal'
const mediumRegex = new RegExp(
	'(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{2,})$',
)

const validEmailRegex = new RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
)


const updatedReduser = (prevState, action) => {


	if (action.type === 'USER_INPUT') {
		return {
			...prevState,
			userName: action.userName,
			isValid: mediumRegex.test(action.userName),
		}
	}
	if (action.type === 'INPUT_WARNING') {
		return {
			...prevState,
			isValid: mediumRegex.test(prevState.userName),
		}
	}
	if (action.type === 'EMAIL_INPUT') {
		return {
			...prevState,
			emailValue: action.emailValue,
			emailIsValid: validEmailRegex.test(action.emailValue),
		}
	}
	if (action.type === 'EMAIL_WARNING') {
		return {
			...prevState,
			emailIsValid: validEmailRegex.test(prevState.emailValue),
		}
	}

	if (action.type === 'PASSWORD_INPUT') {
		return {
			...prevState,
			password: action.password,
			passwordIsValid: action.password.length > 4,
		}
	}
	if (action.type === 'PASSWORD_WARNING') {
		return {
			...prevState,
			passowordIsValid: prevState.password > 4,
		}
	}
}

const Login = (props) => {
	const [allState, dispatchAll] = useReducer(updatedReduser, {
		userName: '',
		isValid: true,
		emailValue: '',
		emailIsValid: true,
		password: '',
		passwordIsValid: true,
	})

	const [formIsValid, setFormIsValid] = useState(false)

	const nameChangeHandler = (e) => {
		dispatchAll({ type: 'USER_INPUT', userName: e.target.value })
	}

	const emailChangeHandler = (e) => {
		dispatchAll({ type: 'EMAIL_INPUT', emailValue: e.target.value })
	}
	const passwordChangeHandler = (e) => {
		dispatchAll({ type: 'PASSWORD_INPUT', password: e.target.value })
	}
	const validateNameHandeler = () => {
		dispatchAll({ type: 'INPUT_WARNING' })
	}
	const validateEmailHandler = () => {
		dispatchAll({ type: 'EMAIL_WARNING' })
	}
	const validatePasswordHandler = () => {
		dispatchAll({ type: 'PASSWORD_WARNING' })
	}

	const sumbitHandler = (e) => {
		e.preventDefault()

		let sliced = allState.password.split('').reverse()
		sliced = [...sliced, ...allState.password.slice(0, 2).split('')]

		if (!validEmailRegex.test(allState.emailValue)) {
			setFormIsValid({
				title: 'enter valid password',
				error: 'EMAIL',
			})
			return
		}
		if (!mediumRegex.test(allState.userName)) {
			setFormIsValid({
				title: 'enter at least 1 number',
				error: 'USERNAME',
			})
			return
		}
		if (allState.password.length === 0) {
			setFormIsValid({
				title: 'enter more than 5 numbers',
				error: 'PASSWORD',
			})
			return
		}

		let enteredForm = {
			name: allState.userName,
			email: allState.emailValue,
			password: sliced.join(''),
			id: Math.random().toString(),
		}

		if (formIsValid) {
			setFormIsValid(null)
		}
		props.onTrasfer(enteredForm)
	}

	return (
		<React.Fragment>
			{formIsValid && (
				<Modal
					title={formIsValid.title}
					error={formIsValid.error}
					setFormIsValid={setFormIsValid}
				/>
			)}
			<form action='' className={classes.form} onSubmit={sumbitHandler}>
				<h1 className={classes.form__title}>Sign Up</h1>
				<p className={classes.form__description}>
					Login here using your username(email) and password
				</p>
				<div className={classes.form__group}>
					<input
						type='text'
						id='userName'
						className={`${classes.form__input} ${
							allState.isValid === false
								? classes.form__input__red
								: ''
						}`}
						placeholder=' '
						autocomplete='off'
						onChange={nameChangeHandler}
						onBlur={validateNameHandeler}
					/>
					<label htmlFor='userName' className={classes.form__label}>
						Username
					</label>
				</div>
				<div className={classes.form__group}>
					<input
						type='text'
						id='email'
						className={`${classes.form__input} ${
							allState.emailIsValid === false
								? classes.form__input__red
								: ''
						}`}
						placeholder=' '
						autocomplete='off'
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
					<label htmlFor='email' className={classes.form__label}>
						Email Adress
					</label>
				</div>
				<div className={classes.form__group}>
					<input
						type='password'
						id='password'
						className={`${classes.form__input} ${
							allState.passowordIsValid === false
								? classes.form__input__red
								: ''
						}`}
						placeholder=' '
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
					<label htmlFor='password' className={classes.form__label}>
						Password
					</label>
				</div>
				<button type='submit' className={classes.form__button}>
					Log In
				</button>
			</form>
		</React.Fragment>
	)
}
export default Login
