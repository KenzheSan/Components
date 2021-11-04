import Button from '../Button/Button'
import Card from '../Card'
import React, { useState } from 'react'
import styles from './Rename.module.css'
const Rename = (props) => {
	
    const [user,setUser] = useState(props.name)
    const [ageUser,setAgeUser] = useState(props.age)

    const dataHandler = () =>{
        let data ={
             name: user, age: ageUser, id: props.id 
        }
        props.onChangeInfo(data)
        props.setRename(false)
    }
	return (
		<div>
			<div className={styles.backdrop}/>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<p>{props.name}</p>
				</header>
                <div className={styles.content}>
					<input type= 'text' value={user}  onChange={e => setUser(e.target.value)}/>
				</div>
				<div className={styles.content}>
					<input type= 'number' value={ageUser} 
                     onChange={e => setAgeUser(e.target.value)}/>
				</div>
				<footer className={styles.actions}>
					<Button onClick={dataHandler} >Okay</Button>
				</footer>
			</Card>
		</div>
	)
}
export default Rename
