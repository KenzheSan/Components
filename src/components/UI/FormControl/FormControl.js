import styles from './FormControl.module.css'
import line from '../../logo/line0.png'
import { useDispatch, useSelector } from 'react-redux'
import { forwardRef } from 'react'
import { setActions } from '../../store/settings'

const FormControl = forwardRef((props, ref) => {

	const {autostartbreaks ,autostartpomodoro ,intervalOfTimers} = useSelector((state)=> state.timeSettings)

	const disptach = useDispatch()

	const onChangePomoHandler = () => {
		disptach(setActions.autoStartPomodoro())
	}

	const onChangeBreaksHandler = () => {
		disptach(setActions.autoStartBreaks())
	}

	return (
		<section className={styles.checkbox}>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<label htmlFor='input' className={styles.auto}>
					Auto start Breaks?
				</label>
				<input
					name='input'
					className={styles.radio}
					type='checkbox'
					onChange={onChangeBreaksHandler}
					checked={autostartbreaks}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Auto start Pomodoros?</p>
				<input
					className={`${styles.radio}`}
					type='checkbox'
					onChange={onChangePomoHandler}
					checked={autostartpomodoro}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
			<div className={styles.break}>
				<p className={styles.auto}>Long Break interval</p>
				<input
					id='longbreak'
					type='number'
					ref={ref}
					defaultValue={intervalOfTimers}
					max={20}
					min={1}
				/>
			</div>
			<img className={styles.line} src={line} alt='/line' />
		</section>
	)
})

export default FormControl
