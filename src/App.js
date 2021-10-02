import  Comment  from "./components/Comment/Comment"

function App() {
	const comment = {
		date: new Date(),
		text: 'Hello I am from Peaksoft',
		author: {
			name: 'Developer',
			avatarUrl:
				'https://cs10.pikabu.ru/post_img/big/2019/04/28/7/1556450017131255008.png',
		},
	}
	return (
		<div className='App'>
			<Comment
				author={comment.author}
				date={comment.date}
				text={comment.text}
			/>
		</div>
	)
}

export default App
