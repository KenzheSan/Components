import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from './AddUser.module.css'
const AddUser = (props) => {
	const [userName, setUserName] = useState('')
	const [userAge, setUserAge] = useState('')
	const userNameHandler = (e) => {
		setUserName(e.target.value)
	}
	const userAgeHundler = (e) => {
		setUserAge(e.target.value)
	}
	const addUserHundler = (e) => {
		e.preventDefault()
		let data = {
			name: userName,
			age: userAge,
			id: Math.random().toString()
		}
		// props.onSetData(userName,userAge)
		props.onSetData(data)
		
		setUserName('')
		setUserAge('')
	}
	return (
		<Card className={classes.input}>
			<form onSubmit = {addUserHundler}>
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
				<button type='submit'>Add User</button>
			</form>
		</Card>
	)
}

export default AddUser
