import React from "react";
import './CourseItem.css'

const CourseItem = (props) =>{ //layOut
    const deleteHandler = () =>{ //lifting -up transfer id
      props.onCheckId(props.id)
    }
    return (
    <li className="goal-item" onClick={deleteHandler} >
      {props.children}
    </li>
        // На 10 будут все наши введеные данные
    )
}
export default CourseItem