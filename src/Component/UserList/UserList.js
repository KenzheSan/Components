import AllList from '../AllList/AllList'
import './UserList.css'
const UserList = (props) => {
	let localeStore = JSON.parse(localStorage.getItem('info')) || []
	
	return (
		<ul className='main-list'>
			{localeStore.map((item) => {
				return (
					<AllList id={item.id} key={item.id} date={item.date} completed={item.completed} name={item.name}>
						{item.name}
					</AllList>
				)
			})}
		</ul>
	)
}
export default UserList
