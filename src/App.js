import Layout from './components/Layout/Layout'
import NavBar from './components/Navigation/NavBar'
import './App.css'
import RouterComponents from '../src/components/RouterComponents/RouterComponents'

function App() {
	return (
		<Layout>
			<NavBar>
				<RouterComponents />
			</NavBar>
		</Layout>
	)
}

export default App
