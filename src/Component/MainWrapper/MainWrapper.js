import { useState } from 'react'
import Card from '../Ui/Card'
import AddUser from '../Users/AddUser'
import './MainWrapper.css'

const MainWrapper = () => {
	const [allData, setAllData] = useState([
		{ name: 'UserOne', age: '23' },
		{ name: 'UserTwo', age: '55' },
	])
	// const changeUserInfo = (userName, userAge) => {
	// 	setAllData((prevInfo) => {
	// 		const returnInfo = [...prevInfo]
	// 		returnInfo.unshift({
	// 				name: userName,
	// 				age: userAge,
	// 				id: Math.random().toString()
	// 		})

	//         return returnInfo
	// 	})
	// }
	const changeUserInfo = (data) => {
		setAllData((prevInfo) => {
			const returnInfo = [...prevInfo]
			returnInfo.unshift(data)
			return returnInfo
		})
	}
    
	return (
		<Card className='mainWrapper'>
			<section>
				<AddUser onSetData={changeUserInfo} />
			</section>
			<section>
                
            </section>
		</Card>
	)
}
export default MainWrapper
