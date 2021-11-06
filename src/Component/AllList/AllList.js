

import CorrectDate from "../CorrectDate/CorrectDate"
import './AllList.css'
const AllList = (props) =>{



    const onDone = (e) => {
        if (e.target.checked) {
          e.target.parentElement.classList.add('done');
        } else {
          e.target.parentElement.classList.remove('done');
        }
      };
      
    

    
    return (
        <li className='user-list' onClick={onDone}>
            <input type="checkbox" checked= {props.completed} />
            {props.children}
            <CorrectDate date={props.date}/>
        </li>
    )
}
export default AllList