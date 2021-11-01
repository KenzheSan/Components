import React from 'react'
import Card from '../Ui/Card'
import classes from './AddUser.module.css'
const AddUser = (props) => {
	return (
		<Card className={classes.input}>
			<form>
				<label htmlFor='username'>User-Name</label>
				<input id='username' type='text' />
				<label htmlFor='age'>Age (years)</label>
				<input id='age' type='number' />
				<button type='submit'>Add User</button>
			</form>
		</Card>
	)
}

export default AddUser
