import next from '../../logo/next.png'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import useSound from 'use-sound'
import sound from '../../assets/sounds/btn.mp3'
import alarm from '../../assets/sounds/sound.mp3'
import Progress from '../../UI/DisplayTime/DisplayTime'
import styles from './LongBreak.module.css'
import { useState, useRef, useEffect, useCallback } from 'react'
import formatingTime from '../../store/helpers'
import {
	LONG_BREAK,
	INTERVALOFTIMERS,
	INTERVALISSTARTED,
	CONFIRM,
	ROUND,
	AUTOSTARTPOMODOR,
	AUTOSTARTBREAKS,
	RESETCONFIRM,
} from '../../store/constants'
import { Prompt } from 'react-router-dom'
import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const LongBreak = () => {
	const longBreakTime = useSelector(
		(state) => state.timeSettings[LONG_BREAK].minutes,
	)
	const [timeLeft, setTimeLeft] = useState(longBreakTime * 60)
	const [isRunning, setIsRunning] = useState(false)
	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)
	const [isChecked, setIsChecked] = useState(false)

	const [progress, setProgress] = useState(0)
	const percentage = (progress / (longBreakTime * 60)) * 100
	const [start] = useSound(sound)
	const [play] = useSound(alarm)
	const disptach = useDispatch()
	const intervalRef = useRef(null)
	const initialInterval = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)
	const intervalIsStart = useSelector(
		(state) => state.timeSettings[INTERVALISSTARTED],
	)
	const initialRound = useSelector((state)=> state.timeSettings[ROUND])
	console.log(initialRound);
	const isAutoStartPomodor = useSelector((state)=> state.timeSettings[AUTOSTARTPOMODOR])
	const isAutoStartShortBreak = useSelector((state)=> state.timeSettings[AUTOSTARTBREAKS])

	const startTimer = useCallback(() => {
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
	const stopTimer = () => {
		if (intervalRef.current === null) return
		setIsRunning(false)
		clearInterval(intervalRef.current)
		intervalRef.current = null
	}

	const resetTimer = useCallback(() => {
		clearInterval(intervalRef.current)
		intervalRef.current = null
		setTimeLeft(longBreakTime * 60)
		setIsRunning(false)
		setProgress(0)
	}, [longBreakTime])


	useEffect(() => {
		if (timeLeft - 1 === 0) {
			stopTimer()
			setProgress(0)
			setTimeLeft(0)
			setIsChecked(false)
		}
	}, [timeLeft])

	useEffect(() => {
		return () => resetTimer()
	}, [longBreakTime, resetTimer])


	const history = useHistory()

	useEffect(() => {
		if (isAutoStartPomodor) {
			if (isAutoStartShortBreak) {
				startTimer()
			}
			
		}
	}, [isAutoStartPomodor, isAutoStartShortBreak, startTimer])
	

	useEffect(()=> {
		const newRound = async() => {
			if(timeLeft === 0){
				if(initialRound > 1){
					disptach(setActions.setInterval(initialRound))
					disptach(setActions.clearRoundInterval())
					history.replace('/pomodoro')
					await setIsChecked(false)
				}else{
					history.replace('/pomodoro')
					disptach(setActions.clearRoundInterval())
					await setIsChecked(false)
				}
			}
		}
		newRound()
	},[disptach, history, initialRound, timeLeft])

	const messageToUser = async() => {
		if(window.confirm(CONFIRM)){
			await setIsChecked(false)
			history.replace('/pomodoro')
		}else{
			return
		}
		
	}

	const switchBtn = () => {
		start()
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
						<img className={styles.next} src={next} onClick={messageToUser} alt='/' />
					)}
				</div>
			</div>
		</Fragment>
	)
}
export default LongBreak
