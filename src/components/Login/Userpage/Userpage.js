import React from "react"
import './Userpage.css'
import Render from "../Render/Render"
const Userpage = props => {
    console.log(props);
    return (
        <div className='userpage'>
            {console.log(props.memory)}
            {props.memory.map((item)=>{
                return <Render
                name = {item.name}
                id={item.id}
                password = {item.password}
                email ={item.email}
                setNewUser={props.setNewUser}
                />
            })}
        </div>
    )
}
export default Userpage