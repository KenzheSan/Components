import Layout from './components/Layout/Layout'
import NavBar from './components/Navigation/NavBar'
import './App.css'
import RouterComponents from '../src/components/RouterComponents/RouterComponents'
import FormModal from './components/UI/Modal/FormModal'
function App() {
	return (
		<Layout>
			<FormModal/>
			<NavBar>
				<RouterComponents />
			</NavBar>
		</Layout>
	)
}

export default App
