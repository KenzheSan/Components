import styles from './FormHeader.module.css'
import line from '../../logo/line0.png'
import x from '../../logo/x.png'
import { useDispatch } from 'react-redux'
import { toggleActions } from '../../store/Store'
const FormHeader = (props) => {
	const dispatch = useDispatch()
	const toggleModalHandler = () =>{
		dispatch(toggleActions.toggle())
	}
	return (
		<section className={styles.navigation}>
			<div className={styles.header}>
				<h1 className={styles.h1}>Timer Settig </h1>
				<img onClick={toggleModalHandler} className={styles.x} src={x} alt='/' />
				<img className={styles.line} src={line} alt='/line' />
			</div>
			<h5 className={styles.timer}>Timer (minutes)</h5>
		</section>
	)
}

export default FormHeader
