import { useState } from 'react'
import CourseInput from './Component/CourseGoals/CourseInput/CourseInput'
import './App.css'
import CourseGoalList from './Component/CourseGoals/CourseGoalList/CourseGoalList'

function App() {
	const [courseGoals, setCourseGaol] = useState([
		{ text: 'Сделать все задачи!', id: 'g1' }, // Первоначальное значени useState'a
		{ text: 'Закрыть все задачи!', id: 'g2' },
	])

	function addGoalHandler(enteredText) { // liftin up + Собирает данные
		setCourseGaol((prevGoals) => {
			const updatedGoals = [...prevGoals] 
			updatedGoals.unshift({ // Добавление в начало массива один обьект
				text: enteredText, // lifting up tan келген текст
				id: Math.random().toString(),
			})
			return updatedGoals // Получаем значение
		})
	}
	function DeleteGoal (selectedId){ //Гениально! С помощью фильтрации обновлять Render (map)
		setCourseGaol((prevGoals)=>{ // если пришедший айди не равен  нашим айдишка ,он просто не включает в updateGoals
			const updatedGoals = prevGoals.filter(id=> id.id !== selectedId) 
			return updatedGoals // тут только те айдишки которые не выбранны через props.onRenderID
		})
	}

	let content  = (
		<p style = {{textAlign:'center'}}> Нет новых целей, желаете добавить ?</p>
	)
	if(courseGoals.length > 0){
		content = (
			<CourseGoalList item={courseGoals} // Передаем функцию + данные полученные liftin-up'ом
			onRenderId={DeleteGoal}/> // Плюс функция рендеринга
		)
	}
	
	return (
		<div className='main-wrapper'>
			<section id='goal-form'> 
				<CourseInput onAddGoal={addGoalHandler} />
			</section>
			<section id='goals'>
				{content}
				
				
			</section>
		</div>
	)
}

export default App
