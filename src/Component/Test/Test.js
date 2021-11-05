import classes from './Test.module.css'
import Todo from '../Todo/Todo'
import React, { useState } from 'react'
import UserList from '../UserList/UserList'
const Test = () => {
	const [local, setLocal] = useState([])

	const formInfo = (data) => {
		setLocal((prevInfo) => {
			let memory = [...prevInfo]
			memory = JSON.parse(localStorage.getItem('info')) || []
			memory.unshift(data)
			localStorage.setItem('info', JSON.stringify(memory))
			return memory
		})
	}
    let content = (<p style={{textAlign:'center'}}>Все данные удалены!</p>)
    if(localStorage.length > 0){
        content =  <UserList localInfo={local} />
    }

	return (
		<div className={classes.mainBLog}>
			<div className={classes.container}>
				<Todo formInfo={formInfo} />
				<div>
					<div className={classes.userList}>
						{/* <UserList localInfo={local} /> */}
                        {content}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Test
// localStorage.setItem('info',JSON.stringify(memory)
// return memory
