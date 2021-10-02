import './Comment.css'
import UserInfo from './UserInfo/UserInfo'
import Card from "../Comment/UI/Card"
import './UI/Card.css'

function Comment(props) {
	return (
		<Card className = 'Comment'>
				<UserInfo author={props.author} />
				<div className='Comment-text'>{props.text}</div>
				<div className='Comment-date'>
					{props.date.toLocaleString()}
				</div>
		</Card>
	)
}

export default Comment
