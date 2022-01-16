import next from '../../logo/next.png'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import styles from './LongBreak.module.css'
import { useEffect } from 'react'
import {
	LONG_BREAK,
	CONFIRM,
	ROUND,
	AUTOSTARTPOMODOR,
	AUTOSTARTBREAKS,
	RESETCONFIRM,
	INTERVALISSTARTED,
} from '../../store/constants'
import { Prompt } from 'react-router-dom'
import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CustomTimer from '../../store/custom_timer'
const LongBreak = () => {
	const longBreakTime = useSelector((state) => state.timeSettings[LONG_BREAK])
	const initialRound = useSelector((state) => state.timeSettings[ROUND])

	const isAutoStartPomodor = useSelector(
		(state) => state.timeSettings[AUTOSTARTPOMODOR],
	)

	const isAutoStartShortBreak = useSelector(
		(state) => state.timeSettings[AUTOSTARTBREAKS],
	)

	const isInterValIsStarted = useSelector(
		(state) => state.timeSettings[INTERVALISSTARTED],
	)
	const history = useHistory()

	const {
		isChecked,
		setIsChecked,
		startTimer,
		minutes,
		seconds,
		stopTimer,
		percentage,
		timeLeft,
		isRunning,
	} = CustomTimer(longBreakTime)

	const disptach = useDispatch()

	useEffect(() => {
		if (isInterValIsStarted) {
			if (isAutoStartPomodor) {
				if (isAutoStartShortBreak) {
					startTimer()
				}	
			}
		}
	}, [isAutoStartPomodor, isAutoStartShortBreak, isInterValIsStarted, startTimer])

	useEffect(() => {
		const newRound = async () => {
			if (timeLeft === 0) {
				if (initialRound > 1) {
					disptach(setActions.setNewInterval(initialRound))
					history.replace('/pomodoro')
					await setIsChecked(false)
				} else {
					history.replace('/pomodoro')
					disptach(setActions.clearRoundInterval())
					await setIsChecked(false)
				}
			}
		}
		newRound()
	}, [disptach, history, initialRound, setIsChecked, timeLeft])
	
	const messageToUser = async () => {
		if (window.confirm(CONFIRM)) {
			await setIsChecked(false)
			history.replace('/pomodoro')
		} else {
			return
		}
	}

	const switchBtn = () => {
		isRunning ? stopTimer() : startTimer()
	}
	return (
		<Fragment>
			<Prompt when={isChecked} message={RESETCONFIRM} />
			<div className={styles.absolute}>
				<Progress percent={percentage} />
			</div>
			<div className={styles.longbreak}>
				<h1 className={styles.time}>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</h1>
				<div>
					<button className={`${styles.btn}`} onClick={switchBtn}>
						{isRunning ? 'PAUSE' : 'START'}
					</button>
					{isRunning && (
						<img
							className={styles.next}
							src={next}
							onClick={messageToUser}
							alt='/'
						/>
					)}
				</div>
			</div>
		</Fragment>
	)
}
export default LongBreak
