import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from './AddUser.module.css'
import Button from '../Ui/Button/Button'
import ErrorModal from '../Ui/ErrorModal/ErrorModal'
const AddUser = (props) => {
	const [userName, setUserName] = useState('')
	const [userAge, setUserAge] = useState('')
	const [error, setError] = useState(false)
	const userNameHandler = (e) => {
		setUserName(e.target.value)
	}
	const userAgeHundler = (e) => {
		setUserAge(e.target.value)
	}
	const addUserHundler = (e) => {
		e.preventDefault()
		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please Enter a valid name and age (non-emty valuse)',
			})
			return
		}
		if (+userAge < 10 || +userAge > 100) {
			setError({
				title: 'Invalid age',
				message: 'Please Enter a valid age (>0)',
			})
			return
		}
		let data = {
			name: userName,
			age: userAge,
			id: Math.random().toString(),
		}
		props.onSetData(data)

		setUserName('')
		setUserAge('')
	}

	const errorHandler =()=>{
		setError(null)
	}
	return (
		<div>
			{error && (
				<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHundler}>
					<label htmlFor='username'>User-Name</label>
					<input
						value={userName}
						onChange={userNameHandler}
						id='username'
						type='text'
					/>
					<label htmlFor='age'>Age (years)</label>
					<input
						value={userAge}
						onChange={userAgeHundler}
						id='age'
						type='number'
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default AddUser
