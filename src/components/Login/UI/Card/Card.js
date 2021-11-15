import Login from './../../Login'
import { useEffect, useState } from 'react'
import Userpage from '../../Userpage/Userpage'
const Card = props =>{
    const [memory, setMemory] = useState([])
    const [isLogged,setIsLogged] = useState(false)
    const transfer = data =>{
        console.log(data);
        setMemory(prevValue =>{
            let updateData = [...prevValue]
            updateData.unshift(data)
            localStorage.setItem('isLoggedIn', '1')
            localStorage.setItem('currentData', JSON.stringify(updateData))
            setIsLogged(true)
            return updateData
        })
        
    }
    

    useEffect(()=>{
        const storedUserLogged = localStorage.getItem('isLoggedIn') || []
        if(storedUserLogged === '1'){
            setIsLogged(true)
            setMemory(prevValue => { 
                return JSON.parse(localStorage.getItem('currentData'))
            })
        }
    },[])

    const logoutHundler = () => {
        localStorage.removeItem('currentData');
        localStorage.removeItem('isLoggedIn');
        setIsLogged(false)  
    }
 
    return (
        <div>
          {!isLogged && <Login onTrasfer={transfer}/>}
        {isLogged && <Userpage  memory={memory} setNewUser={logoutHundler} />}
        </div>
    )
}
export default Card