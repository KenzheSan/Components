import { useEffect, useState } from 'react'
import Card from './Card/Card'
import classes from './Fetch.module.css'
const Fetch = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10',{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json)=> setData(json))
    },[])
    return (
        <div className={classes.wrapper}>
            {data && data.map((item)=>{
                return <Card
                title={item.title}
                id = {item.id}
                url = {item.thumbnailUrl}
                />
            })}
        </div>
    )
}
export default Fetch