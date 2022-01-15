import styles from './Pomofocus.module.css'
import next from '../../logo/next.png'
import { useDispatch, useSelector } from 'react-redux'
import {
	AUTOSTARTPOMODOR,
	CONFIRM,
	INTERVALOFTIMERS,
	POMODORO,
	INTERVALISSTARTED,
	RESETCONFIRM,
} from '../../store/constants'
import React, { Fragment, useEffect } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Prompt } from 'react-router-dom'
import CustomTimer from '../../store/custom_timer'

const Pomofocus = () => {
	const initialInterval = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)

	const isAutoStartPomodor = useSelector(
		(state) => state.timeSettings[AUTOSTARTPOMODOR],
	)

	const intervalIsStart = useSelector(
		(state) => state.timeSettings[INTERVALISSTARTED],
	)

	const pomodoroTime = useSelector(
		(state) => state.timeSettings[POMODORO]
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
	} = CustomTimer(pomodoroTime)

	useEffect(() => {
		if (isAutoStartPomodor) {
			if (intervalIsStart) {
				startTimer()
			}
		}
	}, [intervalIsStart, isAutoStartPomodor, startTimer])

	const disptach = useDispatch()

	useEffect(() => {
		const newRound = async () => {
			if (timeLeft === 0) {
				if (initialInterval > 1) {
					disptach(setActions.setPreferences())
					history.replace('/ShortBreak')
					await setIsChecked(false)
				} else {
					disptach(setActions.noShortRest())
					history.replace('/LongBreak')
					await setIsChecked(false)
				}
			}
		}
		newRound()
	}, [disptach, history, initialInterval, setIsChecked, timeLeft])

	const messageToUser = async () => {
		if (window.confirm(CONFIRM)) {
			if (initialInterval > 1) {
				await setIsChecked(false)
				history.replace('/ShortBreak')
			} else {
				await setIsChecked(false)
				history.replace('/LongBreak')
			}
		} else {
			return
		}
	}

	const switchBtn = () => {
		isRunning
			? stopTimer()
			: startTimer()
	}

	return (
		<Fragment>
			<Prompt when={isChecked} message={RESETCONFIRM} />
			<div className={styles.absolute}>
				<Progress percent={percentage} />
			</div>
			<div className={styles.pomofocus}>
				<h1 className={styles.time}>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</h1>
				<div>
					<button className={styles.btn} onClick={switchBtn}>
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

export default Pomofocus
