import Layout from './components/Layout/Layout'
import NavBar from './components/Navigation/NavBar'
import './App.css'
import RouterComponents from '../src/components/RouterComponents/RouterComponents'
import FormModal from './components/UI/Modal/FormModal'
import { useSelector } from 'react-redux'

function App() {
	
	const showHide = useSelector((state) => state.toggle.modal)

	return (
		<Layout>
			{showHide && <FormModal />}
			<NavBar>
				<RouterComponents />
			</NavBar>
		</Layout>
	)
}

export default App

