import Wrapper from './Component/Wrapper/Wrapper'
import './App.css'
import Marquee from 'react-fast-marquee'

function App() {
	return (
		<div className='blog'>
			<div className='marquee-blog'>
				<Marquee  speed={300}>
					Welcome to Main Page
				</Marquee>
			</div>
			<div className='wrapper-blog'>
				<Wrapper  onClick={(e) => e.stopPropagation()} />
			</div>
		</div>
	)
}

export default App
