import { useState } from 'react'
import Card from '../Ui/Card'
import AddUser from '../Users/AddUser'
import './MainWrapper.css'
import CourseGoals from '../CourseGoals/CourseGoals'

const MainWrapper = () => {
	const [allData, setAllData] = useState([
		{ name: 'Adilet', age: '23', id: 'h1' },
		{ name: 'Sakydin', age: '55', id: 'h2' },
	])

	const changeUserInfo = (data) => {
		setAllData((prevInfo) => {
			const returnInfo = [...prevInfo]
			returnInfo.unshift(data)
			return returnInfo
		})
	}

	const filterInfo = (selectedId) => {
		setAllData((prevInfo) => {
			const returnInfo = prevInfo.filter((item) => item.id !== selectedId)
			return returnInfo
		})
	}

	const onChangeInfo = (data) => {
		setAllData((prevInfo) => {
			const returnInfo = [...prevInfo]
			returnInfo.forEach
			(item=>{
				if(item.id === data.id){
					item.name = data.name
					item.age = data.age
				}
			})
			return returnInfo
		})
	}

	
	let content = ( <p style={{ textAlign: 'center' }}>Все данные удалены!</p>)



	
	if(allData.length > 0) {
		content = (
			<CourseGoals
				onChangeInfo={onChangeInfo}
				elemet={allData}
				filterInfo={filterInfo}
			/>
		)
	}
	return (
		<Card className='mainWrapper'>
			<section className='first-list'>
				<AddUser onSetData={changeUserInfo} />
			</section>
			<section className='main-list'>
				{content}
				
			</section>
		</Card>
	)
}
export default MainWrapper
