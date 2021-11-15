
import React from "react";

const Render = props =>{
    console.log(props)
    return (
        <div className ='wrapper'>
        <h1> Wellcome {props.name}</h1>
        <h2>This your page</h2>
        <div className='content'>
           <p>UserEmail : {props.email}</p>
           <p>userID :{props.id}</p>
           <p>Do not forgot unique code :{props.password}</p>
        </div>
        <button onClick={()=> props.setNewUser()}>Add new User</button>
    </div>
    )
}
export default Render