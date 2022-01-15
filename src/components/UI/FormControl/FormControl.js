import styles from './FormControl.module.css'
import line from '../../logo/line0.png'
import { useDispatch, useSelector } from 'react-redux'
import {
	AUTOSTARTBREAKS,
	AUTOSTARTPOMODOR,
	INTERVALOFTIMERS,
} from '../../store/constants'
import { forwardRef ,useState} from 'react'
import { setActions } from '../../store/settings'

const FormControl = forwardRef((props, ref) => {
	const value = useSelector((state) => state.timeSettings[AUTOSTARTPOMODOR])
	const value2 = useSelector((state) => state.timeSettings[AUTOSTARTBREAKS])
	const [pomo,setPomo] = useState(false)
	const [short,setShort] = useState(false)
	const disptach = useDispatch()
	const intervalTime = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)
	console.log(value2);
	// const onChangePomoHandler = (e) => {
	// 	props.onBoolingPomo(e.target.checked)
	// }

	// const onChangeBreaksHandler = (e) => {
	// 	props.onBoolingBreaks(e.target.checked)
	// }


	return (
		<section className={styles.checkbox}>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<label htmlFor='input' className={styles.auto}>Auto start Breaks?</label>
				<input
				name='input'
					className={styles.radio}
					type='checkbox'
					onChange={(e) =>disptach(setActions.autoStartBreaks(e.target.checked))
					}
					checked={value2}
					value={short}
					// checked={value2}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Auto start Pomodoros?</p>
				<input
					className={`${styles.radio}`}
					type='checkbox'
					onChange={(e) => props.onBoolingPomo(e)}
					// checked={value}
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
