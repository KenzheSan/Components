import styles from './Pomofocus.module.css'
import next from '../../logo/next.png'
import { useDispatch, useSelector } from 'react-redux'
import {
	AUTOSTARTBREAKS,
	AUTOSTARTPOMODOR,
	CONFIRM,
	INTERVALOFTIMERS,
	POMODORO,
	INTERVALISSTARTED,
} from '../../store/constants'
import React, { Fragment, useEffect } from 'react'
// import useSound from 'use-sound'
// import sound from '../../assets/sounds/btn.mp3'
// import alarm from '../../assets/sounds/sound.mp3'
import Progress from '../../UI/DisplayTime/DisplayTime'
import formatingTime from '../../store/helpers'
import { useState, useRef } from 'react'
import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Prompt } from 'react-router-dom'


const Pomofocus = () => {
	// const { } = useSelector(state.timeSettings)
	const initialInterval = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	) 
	const isAutoStartShortBreak = useSelector(
		(state) => state.timeSettings[AUTOSTARTBREAKS],
	)
	const isAutoStartPomodor = useSelector(
		(state) => state.timeSettings[AUTOSTARTPOMODOR],
	)
	
	const intervalIsStart = useSelector( 
		(state) => state.timeSettings[INTERVALISSTARTED],
	)
	
	const pomodoroTime = useSelector(
		(state) => state.timeSettings[POMODORO].minutes,
	)
	const [isChecked, setIsChecked] = useState(false)

	const history = useHistory()
// useCountDown
	const [timeLeft, setTimeLeft] = useState(pomodoroTime * 60)
	const [isRunning, setIsRunning] = useState(false)

	const [progress, setProgress] = useState(0)
	const percentage = (progress / (pomodoroTime * 60)) * 100

	const intervalRef = useRef(null)

	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)
		
	useEffect(() => {
		setTimeLeft(pomodoroTime * 60)
	}, [pomodoroTime])

	const startTimer = React.useCallback(() => {
		if (intervalRef.current !== null) return
		setIsRunning(true)
		setIsChecked(true)
		intervalRef.current = setInterval(() => {
			setProgress((prevState) => prevState + 1)
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) return timeLeft - 1
			})
		}, 100)
	}, [])

console.log('это инит' ,initialInterval , 'первая странцица');
	useEffect(() => {
			if (isAutoStartPomodor) {
				if (intervalIsStart) {
					if (initialInterval > 0) {
						startTimer()
					}
				}
			}
	
	},[initialInterval, intervalIsStart, isAutoStartPomodor,startTimer])



	React.useEffect(() => {
		if(timeLeft - 1 === 0) {
			stopTimer()
			setProgress(0)
			setTimeLeft(0)
			setIsChecked(false)
		}
	}, [timeLeft])

	const stopTimer = () => {
		if (intervalRef.current === null) return
		setIsRunning(false)
		clearInterval(intervalRef.current)
		intervalRef.current = null
	}

	const disptach = useDispatch()

	const resetTimer = React.useCallback(() => {
		clearInterval(intervalRef.current)
		intervalRef.current = null
		setTimeLeft(pomodoroTime * 60)
		setIsRunning(false)
		setProgress(0)
	},[pomodoroTime])

	useEffect(() => {
		const nextLevel = async () => {
			if (timeLeft === 0) {
				if (initialInterval > 0) {
					if (isAutoStartShortBreak) {
						disptach(setActions.intervalStarted())
						await setIsChecked(false)  
						history.replace('/ShortBreak')
					}
					resetTimer()
					await setIsChecked(false)
				}
				resetTimer()
				await setIsChecked(false)
			}
		}
		nextLevel()
	}, [disptach, history, initialInterval, isAutoStartShortBreak, timeLeft, startTimer, resetTimer])
	useEffect(() => {
		return () => {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setTimeLeft(pomodoroTime * 60)
			setIsRunning(false)
		}
	}, [pomodoroTime])

	// const [start] = useSound(sound)
	// const [play] = useSound(alarm)

	const switchBtn = () => {
		// start()
		isRunning ? stopTimer() : startTimer()
	}

	return (
		<Fragment>
			<Prompt when={isChecked} message={CONFIRM} />
			<Progress percent={percentage} />
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
						<img className={styles.next} src={next} alt='/' />
					)}
				</div>
			</div>
		</Fragment>
	)
}
export default Pomofocus
