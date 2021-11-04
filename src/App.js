import Wrapper from "./Component/Wrapper/Wrapper"
import './App.css'
import Marquee from "react-fast-marquee";

function App() {

	
	return (
		<div className='main-wrapper'>
			<Marquee className='text' speed={200}  >Welcome to Main Page</Marquee>
			<Wrapper/> 
		</div>
	)
}

export default App
