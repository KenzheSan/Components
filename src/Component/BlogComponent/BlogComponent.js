import React, { useState } from 'react'
import Card from '../Card/Card'
import ContenntBar from '../ContentBar/ContentBar'
import Message from '../Message/Message'

const BlogComponent = () => {
	const [valid, setValid] = useState(false)
	return (
		<Card>
			<input type='submit' value='Show The Message' onClick={()=> setValid(true)}/>
			<Message valid={valid} func={setValid}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book.
			</Message>

			<ContenntBar />
			<ContenntBar />
			<ContenntBar />
		</Card>
	)
}

export default BlogComponent
