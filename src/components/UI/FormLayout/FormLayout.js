import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Fragment } from 'react/cjs/react.production.min'
import FormControl from '../FormControl/FormControl'
import FormHeader from '../FormControl/FormHeader'
import styles from './FormLayout.module.css'
import { setActions } from '../../store/settings'
import { toggleActions } from '../../store/Store'


const FormLayout = (props) => {
	
	const [pomodoroTime, setPomodoroTime] = useState(1)
	const [shortBreak, setShortBreak] = useState(1)
	const [longBreak, setLongBreak] = useState(1)

	const [isPomodor ,setIsPomodoro] = useState(null)
	const [isBreaks ,setIsBreaks] = useState(null)

	const disptach = useDispatch()

	const pomodoroTimeChangeHandler = (e) => {
		setPomodoroTime(e.target.value)
	}

	const shortbreakTimeChangeHandler = (e) => {
		setShortBreak(e.target.value)
	}

	const longBreakTimeChangeHandler = (e) => {
		setLongBreak(e.target.value)
	}
	const valueOfPomo = pomo => {
		setIsPomodoro((init)=> pomo)
	}

	const valueOfBreaks = breaks => {
		setIsBreaks((init)=> breaks)
	}
	const formChangeHandler = (e) => {
		e.preventDefault()
		disptach(setActions.longBreak(longBreak))
		disptach(setActions.shortBreak(shortBreak))
		disptach(setActions.pomodor(pomodoroTime))
		disptach(setActions.autoStartBreaks(isBreaks))
		disptach(setActions.autoStartPomodoro(isPomodor))
		disptach(toggleActions.toggle())
	}
	return (
		<Fragment>

			<form className={styles.forma} onSubmit={formChangeHandler} >
				<FormHeader />
				<section className={styles.labels}>
					<div>
						<label htmlFor='pomodoro'>Pomodoro</label>
						<input
							id='pomodoro'
							type='number'
							onChange={pomodoroTimeChangeHandler}
							value={pomodoroTime}
							min={1}
						/>
					</div>
					<div>
						<label htmlFor='shortbreak'>Short Break</label>
						<input
							id='shortbreak'
							type='number'
							onChange={shortbreakTimeChangeHandler}
							value={shortBreak}
							min={1}
						/>
					</div>
					<div>
						<label htmlFor='longbreak'>Long Break</label>
						<input
							id='longbreak'
							type='number'
							onChange={longBreakTimeChangeHandler}
							value={longBreak}
							min={1}
						/>
					</div>
				</section>
				<FormControl onBoolingPomo={valueOfPomo} onBoolingBreaks={valueOfBreaks}/>
				<button type='sumbit' className={styles.button} >
					OK
				</button>

			</form>
		</Fragment>
	)
}
export default FormLayout
