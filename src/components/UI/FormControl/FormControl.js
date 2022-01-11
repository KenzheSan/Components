import styles from './FormControl.module.css'
import line from '../../logo/line0.png'
import {  useSelector } from 'react-redux'
import {
	AUTOSTARTBREAKS,
	AUTOSTARTPOMODOR,
} from '../../store/constants'


const FormControl = (props) => {
	const value = useSelector((state)=> state.timeSettings[AUTOSTARTPOMODOR])
	const value2 = useSelector((state)=> state.timeSettings[AUTOSTARTBREAKS])
	const onChangePomoHandler = (e) => {
		props.onBoolingPomo(e.target.checked)
	}
	const onChangeBreaksHandler = (e) => {
		props.onBoolingBreaks(e.target.checked)
	}
	return (
		<section className={styles.checkbox}>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<h1 className={styles.auto}>Auto start Breaks?</h1>
				<input
					className={styles.radio}
					type='checkbox'
					onChange={onChangeBreaksHandler}
					defaultChecked={value2}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Auto start Pomodoros?</p>
				<input
					className={`${styles.radio}`}
					type='checkbox'
					onChange={onChangePomoHandler}
					defaultChecked={value}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Long Break interval</p>
				<input id='longbreak' type='number' />
			</div>
			<img className={styles.line} src={line} alt='/line' />
		</section>
	)
}

export default FormControl
