import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Content from '../content/Content'
import styles from '../Layout/Layout.module.css'

const Layout = (props) => {
	const location = useLocation()
	console.log(location)
	const path = location.pathname

	return (
		<div
			className={`${styles.main} ${
				path === '/ShortBreak' ? styles.shortbreak : ''
			} ${path === '/LongBreak' ? styles.LongBreak : ''}`}
		>
			<Content />
			<main>{props.children}</main>
		</div>
	)
}

export default Layout
