import React from 'react'
import CourseItem from '../CourseItem/CourseItem'
import './CourseGoalList.css'
const CourseGoalList = (props) => {
    return (
        <ul className="goal-list">
        {
            props.item.map(goal =>{
                return <CourseItem // Передаем в новый Layout
                key={goal.id}
                id={goal.id}
                onCheckId={props.onRenderId} // а так-же функия через пропсы
                // на 14 стоке наши li-шки
                >
                    {goal.text} 
                </CourseItem>
            })
        }
  </ul>
    )
}
export default CourseGoalList
