

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
      
    console.log(props);

    
    return (
        <li className='user-list' >
            <input type="checkbox"  onClick={onDone}/>
            {props.children}
            <CorrectDate date={props.date}/>
        </li>
    )
}
export default AllList