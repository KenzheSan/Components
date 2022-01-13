import styles from './FormControl.module.css'
import line from '../../logo/line0.png'
import { useSelector } from 'react-redux'
import {
	AUTOSTARTBREAKS,
	AUTOSTARTPOMODOR,
	INTERVALOFTIMERS,
} from '../../store/constants'
import { forwardRef } from 'react'

const FormControl = forwardRef((props, ref) => {
	const value = useSelector((state) => state.timeSettings[AUTOSTARTPOMODOR])
	const value2 = useSelector((state) => state.timeSettings[AUTOSTARTBREAKS])
	const intervalTime = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)
	
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
					defaultValue={value2}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Auto start Pomodoros?</p>
				<input
					className={`${styles.radio}`}
					type='checkbox'
					onChange={onChangePomoHandler}
					defaultValue={value}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Long Break interval</p>
				<input
					id='longbreak'
					type='number'
					ref={ref}
					defaultValue={intervalTime}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
		</section>
	)
})

export default FormControl
