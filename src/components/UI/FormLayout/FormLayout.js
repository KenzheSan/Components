import {  useState ,useRef} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Fragment } from 'react/cjs/react.production.min'
import FormControl from '../FormControl/FormControl'
import FormHeader from '../FormControl/FormHeader'
import styles from './FormLayout.module.css'
import { setActions } from '../../store/settings'
import { toggleActions } from '../../store/Store'
import {  INTERVALOFTIMERS, LONG_BREAK, POMODORO, SHORT_BREAK } from '../../store/constants'


const FormLayout = (props) => {
	const pomodoroInitialTime = useSelector((state) =>  state.timeSettings[POMODORO].minutes)
	const shortBreakInitialTime = useSelector((state) =>  state.timeSettings[SHORT_BREAK].minutes)
	const longBreakInitialTime = useSelector((state) =>  state.timeSettings[LONG_BREAK].minutes)
	const initialTimeInterval = useSelector((state) =>  state.timeSettings[INTERVALOFTIMERS])

	const pomodoreRef = useRef()
	const shortBreakRef = useRef()
	const longBreakRef = useRef(longBreakInitialTime)
	const timerIntervalRef = useRef(initialTimeInterval)
	
	
	const [isPomodor ,setIsPomodoro] = useState(false)
	const [isBreaks ,setIsBreaks] = useState(false)

	const disptach = useDispatch()

	const valueOfPomo = pomo => {
		console.log(pomo);
		setIsPomodoro(pomo)
	}

	const valueOfBreaks = breaks => {
		setIsBreaks(breaks)
	}
// изменить стор
	const formChangeHandler = (e) => {
		e.preventDefault()
		console.log(isBreaks, isPomodor);
		disptach(setActions.longBreak(longBreakRef.current.value))
		disptach(setActions.shortBreak(shortBreakRef.current.value))
		disptach(setActions.pomodor(pomodoreRef.current.value))
		disptach(setActions.autoStartBreaks(isBreaks))
		disptach(setActions.autoStartPomodoro(isPomodor))
		disptach(setActions.setInterval(timerIntervalRef.current.value))
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
							defaultValue={pomodoroInitialTime}
							ref={pomodoreRef}
						/>
					</div>
					<div>
						<label htmlFor='shortbreak'>Short Break</label>
						<input
							id='shortbreak'
							type='number'
							defaultValue={shortBreakInitialTime}
							ref={shortBreakRef}
						/>
					</div>
					<div>
						<label htmlFor='longbreak'>Long Break</label>
						<input
							id='longbreak'
							type='number'
							defaultValue={longBreakInitialTime}
							min={0}
							ref={longBreakRef}
						/>
					</div>
				</section>
				<FormControl  ref={timerIntervalRef} onBoolingPomo={valueOfPomo} onBoolingBreaks={valueOfBreaks}/>
				<button type='sumbit' className={styles.button} >
					OK
				</button>

			</form>
		</Fragment>
	)
}
export default FormLayout
