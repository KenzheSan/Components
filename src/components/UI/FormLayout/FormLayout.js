import {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react/cjs/react.production.min'
import FormControl from '../FormControl/FormControl'
import FormHeader from '../FormControl/FormHeader'
import styles from './FormLayout.module.css'
import { setActions } from '../../store/settings'
import { toggleActions } from '../../store/Store'


const FormLayout = () => {

	const {pomodoro ,short_break,long_break,intervalOfTimers} = useSelector((state)=> state.timeSettings)

	const pomodoreRef = useRef()
	const shortBreakRef = useRef()
	const longBreakRef = useRef(long_break)
	const timerIntervalRef = useRef(intervalOfTimers)

	const disptach = useDispatch()

	const formChangeHandler = (e) => {
		e.preventDefault()
		let updateClock = {
			longBreakTime: longBreakRef.current.value,
			shortBreakTime: shortBreakRef.current.value,
			pomodoroTime: pomodoreRef.current.value,
			setInterval: timerIntervalRef.current.value
		}
		disptach(setActions.updateClock(updateClock))
		disptach(toggleActions.toggle())
	}

	return (
		<Fragment>
			<form className={styles.forma} onSubmit={formChangeHandler}>
				<FormHeader />
				<section className={styles.labels}>
					<div>
						<label htmlFor='pomodoro'>Pomodoro</label>
						<input
							id='pomodoro'
							type='number'
							defaultValue={pomodoro}
							ref={pomodoreRef}
							min={0}
						/>
					</div>
					<div>
						<label htmlFor='shortbreak'>Short Break</label>
						<input
							id='shortbreak'
							type='number'
							defaultValue={short_break}
							ref={shortBreakRef}
							min={0}
						/>
					</div>
					<div>
						<label htmlFor='longbreak'>Long Break</label>
						<input
							id='longbreak'
							type='number'
							defaultValue={long_break}
							min={0}
							ref={longBreakRef}
						/>
					</div>
				</section>
				<FormControl
					ref={timerIntervalRef}
					onTransfer={formChangeHandler}
				/>
				<button type='sumbit' className={styles.button}>
					OK
				</button>
			</form>
		</Fragment>
	)
}
export default FormLayout
