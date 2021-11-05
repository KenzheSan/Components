

import AllList from "../AllList/AllList";
const UserList = props =>{
    
    let localeStore=JSON.parse(localStorage.getItem('info')) || []
    
    
    
    return (
        <ul>
            {localeStore.map((item)=>{
                return (
                    <AllList id = {item.id}
                    key={item.id}>
                        <input type='radio' />
                        {item.name} 
                      
                        <button>Delete</button>
                        <p>{item.date}</p>
                    </AllList>
                )
            })}
        </ul>
    )
}
export default UserList

