import Button from '../Button/Button'
import MainWrapper from '../MainWrapper/MainWrapper'


function ContenntBar() {
	return (
		<MainWrapper>
			<div className='mainBlog'>
				<h1>Heading</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book.
				</p>
			</div>
			<Button>View More</Button>

		</MainWrapper>
	)
}

export default ContenntBar
