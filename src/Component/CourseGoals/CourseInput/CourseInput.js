import React,{useState} from 'react'
import Button from '../Button/Button'
import './CourseInput.css'

const CourseInput = (props) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [isValid,setIsValid] =useState(true)


    const inputChangeHandler = event =>{
        if(event.target.value.trim().length >0){ // если введеные данные больше нуля возвращяем true значение 
            setIsValid(true)
        }
        setEnteredValue(event.target.value) // что бы он дальше работал
    }
    const  formSubmitHandler = event =>{ //button function
        event.preventDefault()
        if(enteredValue.trim().length === 0){ // если введенный инпут пустой  то false значение
            setIsValid(false)
            return // прекращяем код
        }
        props.onAddGoal(enteredValue) // lifting-up
        setEnteredValue('')
    }
	return (
		<form onSubmit={formSubmitHandler}>
			<div className ={`${!isValid ? 'valid' : ''}`}> 
				<label>Список Целей</label>
                <input value={enteredValue} type= 'text' onChange ={inputChangeHandler}/>
			</div>
            <Button type ='submit'>Записать Цель</Button>
		</form>
	)
}

export default CourseInput
