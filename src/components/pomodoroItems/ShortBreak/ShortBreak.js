import classes from './ShortBreak.module.css'
import next from '../../logo/next.png'
import { useSelector, useDispatch } from 'react-redux'
import {
	SHORT_BREAK,
	INTERVALOFTIMERS,
	AUTOSTARTPOMODOR,
	CONFIRM,
	AUTOSTARTBREAKS,
	INTERVALISSTARTED,
	ROUND,
	RESETCONFIRM,
} from '../../store/constants'
import { Fragment } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { useState, useRef, useEffect, useCallback } from 'react'
import formatingTime from '../../store/helpers'
import { Prompt } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { setActions } from '../../store/settings'

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

	const autoStartPomodor = useSelector(
		(state) => state.timeSettings[AUTOSTARTPOMODOR],
	)
	const autoStartBreaks = useSelector(
		(state) => state.timeSettings[AUTOSTARTBREAKS],
	)
	// done

	const [timeLeft, setTimeLeft] = useState(shortBreakTime * 60)
	const [isRunning, setIsRunning] = useState(false)

	const [isChecked, setIsChecked] = useState(false)
	const intervalRef = useRef(null)

	const [progress, setProgress] = useState(0)
	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)
	const percentage = (progress / (shortBreakTime * 60)) * 100
	const history = useHistory()

	useEffect(() => {
		setTimeLeft(shortBreakTime * 60)
	}, [shortBreakTime])

	const startTimer = useCallback(() => {
		if (intervalRef.current !== null) return
		setIsChecked(true)
		setIsRunning(true)
		intervalRef.current = setInterval(() => {
			setProgress((prevState) => prevState + 1)
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) return timeLeft - 1
			})
		}, 100)
	}, [])
	useEffect(() => {
		if (intervalIsStart) {
			if (autoStartBreaks) {
				startTimer()
			}
		}
	}, [autoStartBreaks, initialInterval, intervalIsStart, startTimer])

	// useEffect(() => {
	// 	const autoStartTime = () => {
	// 		if (initialInterval > 0) {
	// 			if (autoStartBreaks) {
	// 				startTimer()
	// 			}
	// 		}
	// 	}
	// 	autoStartTime()
	// }, [autoStartBreaks, initialInterval, startTimer])

	// done
	useEffect(() => {
		if (timeLeft - 1 === 0) {
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
	//done
	const resetTimer = useCallback(() => {
		clearInterval(intervalRef.current)
		intervalRef.current = null
		setTimeLeft(shortBreakTime * 60)
		setIsRunning(false)
		setProgress(0)
	}, [shortBreakTime])
	//done
	// useEffect(() => {
	// 	const nextLevel = async () => {
	// 		if (timeLeft === 0) {
	// 			if (autoStartPomodor) {
	// 				if (initialInterval > 1) {
	// 					disptach(setActions.minuseIntervalTime())
	// 					disptach(setActions.intervalStarted())
	// 					history.replace('/pomodoro')
	// 					await setIsChecked(false)
	// 				}else{
	// 					// disptach(setActions.intervalStoped())
	// 					history.replace('/LongBreak')
	// 					await setIsChecked(false)
	// 				}
	// 			} else {
	// 				history.replace('/LongBreak')
	// 				console.log('herro');
	// 			}
	// 			await resetTimer()
	// 		}
	// 	}
	// 	nextLevel()
	// }, [
	// 	autoStartPomodor,
	// 	disptach,
	// 	history,
	// 	initialInterval,
	// 	resetTimer,
	// 	timeLeft,
	// ])
	const initialRound = useSelector((state) => state.timeSettings[ROUND])
	console.log(initialRound, 'round + short')

	useEffect(() => {
		const newRound = async () => {
			if (timeLeft === 0) {
				if (initialInterval > 0) {
					// disptach(setActions.setRound())
					history.replace('/pomodoro')
					await setIsChecked(false)
				}
			}
		}
		newRound()
	}, [disptach, history, initialInterval, timeLeft])

	// done
	useEffect(() => {
		return () => resetTimer()
	}, [resetTimer, shortBreakTime])

	// const resetTimer = useCallback(() => {
	// 	clearInterval(intervalRef.current)
	// 	intervalRef.current = null
	// 	setTimeLeft(shortBreakTime * 60)
	// 	setIsRunning(false)
	// 	setProgress(0)
	// }, [shortBreakTime])

	// const [start] = useSound(sound)
	// const [play] = useSound(alarm)
	const messageToUser = async() => {
		if(window.confirm(CONFIRM)){	
			await setIsChecked(false)
			history.replace('/pomodoro')
		}else{
			return
		}
		
	}


	const switchBtn = () => {
		// start()
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
