import classes from './ShortBreak.module.css'
import next from '../../logo/next.png'
import { useSelector } from 'react-redux'
import {
	SHORT_BREAK,
	INTERVALOFTIMERS,
	CONFIRM,
	AUTOSTARTBREAKS,
	INTERVALISSTARTED,
	RESETCONFIRM,
} from '../../store/constants'
import { Fragment } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { useEffect } from 'react'
import { Prompt } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CustomTimer from '../../store/custom_timer'

const ShortBreak = () => {
	const shortBreakTime = useSelector(
		(state) => state.timeSettings[SHORT_BREAK].minutes,
	)
	const initialInterval = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)

	const intervalIsStart = useSelector(
		(state) => state.timeSettings[INTERVALISSTARTED],
	)

	const autoStartBreaks = useSelector(
		(state) => state.timeSettings[AUTOSTARTBREAKS],
	)

	const {		isChecked,
		setIsChecked,
		startTimer,
		minutes,
		seconds,
		stopTimer,
		percentage,
		timeLeft,
		isRunning,} = CustomTimer(shortBreakTime)
	const history = useHistory()

	useEffect(() => {
		if (intervalIsStart) {
			if (autoStartBreaks) {
				startTimer()
			}
		}
	}, [autoStartBreaks, initialInterval, intervalIsStart, startTimer])

	useEffect(() => {
		const newRound = async () => {
			if (timeLeft === 0) {
				if (initialInterval > 0) {
					history.replace('/pomodoro')
					await setIsChecked(false)
				}
			}
		}
		newRound()
	}, [history, initialInterval, setIsChecked, timeLeft])

	const messageToUser = async() => {
		if(window.confirm(CONFIRM)){	
			history.replace('/pomodoro')
			await setIsChecked(false)
		}else{
			return
		}
		
	}

	const switchBtn = () => {
		isRunning ? stopTimer() : startTimer()
	}

	return (
		<Fragment>
			<Prompt when={isChecked} message={RESETCONFIRM} />
			<div className={classes.absolute}>
			<Progress percent={percentage} />
			</div>
			<div className={classes.shortbreak}>
				<h1 className={classes.time}>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</h1>
				<div>
					<button className={classes.btn} onClick={switchBtn}>
						{isRunning ? 'PAUSE' : 'START'}
					</button>
					{isRunning && (
						<img className={classes.next} src={next} onClick={messageToUser} alt='/' />
					)}
				</div>
			</div>
		</Fragment>
	)
}

export default ShortBreak
