import classes from './Todo.module.css'
import React,{useState} from 'react'
const Todo = (props) => {
	// let today = new Date()
	// let hours = today.toLocaleTimeString()
	const [title, setTitle] = useState('')
	const [hourse, setHourse] = useState('')
	const changeTitleHadnler = (e) => {
		setTitle(e.target.value)
	}
	const changeHourseHandler = (e) => {
		setHourse(e.target.value)
	}
	const formHandler = (e) => {
		e.preventDefault()
		const data = {
			name: title,
			date: new Date().toString().split(' ').splice(1, 3).join(' '),
			id: Math.random().toString(),
		}
		props.formInfo(data)
        setTitle('')
        setHourse('')
	}
	return (
		<form onSubmit={formHandler} classes={classes.blogTodo}>
			<h1 className={classes.h1}>App To-Do-List</h1>
			<div>
				<label>Title</label>
				<input
					type='text'
					value={title}
					onChange={changeTitleHadnler}
				/>
				<label>Date</label>
				<input type='date'  onChange={changeHourseHandler} value={hourse} />
			</div>
			<button type='submit'>Add to List</button>
		</form>
	)
}

export default Todo