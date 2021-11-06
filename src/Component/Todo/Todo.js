import classes from './Todo.module.css'
import React,{useState} from 'react'
import Button from '../Ui/Button'
import Card from '../Card/Card'
import Modal from '../Ui/Modal/Modal'
const Todo = (props) => {
	// let today = new Date()
	// let hours = today.toLocaleTimeString()
	const [title, setTitle] = useState('')
	const [hourse, setHourse] = useState('')
	const [error, setError] = useState(false)
	const changeTitleHadnler = (e) => {
		setTitle(e.target.value)
	}
	const changeHourseHandler = (e) => {
		setHourse(e.target.value)
	}
	const formHandler = (e) => {
		e.preventDefault()
		if(title.trim().length === 0 || hourse.trim().length === 0){
			setError({
				errorType: 'Invalid',
				message: 'Please Enter a valid name and age'
			})
			return
		}
		if (hourse.length === 0) {
			setError({
				errorType: 'Invalid year',
				message: 'Please Enter a valid year (>1995)',
			})
			return
		}
	
		const data = {
			name: title,
			date:hourse,
			id: Math.random().toString(),
			completed: false,
		}
		props.formInfo(data)
        setTitle('')
        setHourse('')
	}
	
	const errorHandler =()=>{
		setError(null)
	}
	return (
		<form onSubmit={formHandler} classes={classes.blogTodo}>
			{error && <Modal errorType={error.errorType} message={error.message} onConfirm={errorHandler}/>}
			<h1 className={classes.h1}>App To-Do-List</h1>
			<Card className={classes.div}>
				<label>Title</label>
				<input
					type='text'
					value={title}
					onChange={changeTitleHadnler}
				/>
				<label>Date</label>
				<input type='date'  onChange={changeHourseHandler} value={hourse} />
			</Card>
			<Button type='submit'>Add to List</Button>
		</form>
	)
}

export default Todo