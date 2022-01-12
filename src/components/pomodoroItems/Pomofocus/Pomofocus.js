import styles from './Pomofocus.module.css'
import next from '../../logo/next.png'
import { useSelector } from 'react-redux'
import { CONFIRM, INTERVALOFTIMERS, POMODORO } from '../../store/constants'
import { Fragment,  useEffect } from 'react'
import useSound from 'use-sound'
import sound from '../../assets/sounds/btn.mp3'
import alarm from '../../assets/sounds/sound.mp3'
import Progress from '../../UI/DisplayTime/DisplayTime'
import formatingTime from '../../store/helpers'
import { useState, useRef } from 'react'
import { Prompt } from 'react-router-dom'
// import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Pomofocus = () => {
	const initialInterval = useSelector((state)=> state.timeSettings[INTERVALOFTIMERS])
	const pomodoroTime = useSelector(
		(state) => state.timeSettings[POMODORO].minutes,
	)
	

	const [timeLeft, setTimeLeft] = useState(pomodoroTime * 60)
	const [isRunning, setIsRunning] = useState(false)
	const [progress, setProgress] = useState(0)
	const intervalRef = useRef(null)


	const startTimer = () => {
		if (intervalRef.current !== null) return
		setIsRunning(true)
		intervalRef.current = setInterval(() => {
			setProgress((prevState)=> prevState + 1)
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) return timeLeft -1
				resetTimer()
				play()
				return 0
			})
		}, 1000)
	}
	const percentage = (progress / (pomodoroTime * 60)) * 100

	const stopTimer = () => {
		if (intervalRef.current === null) return
		setIsRunning(false)
		clearInterval(intervalRef.current)
		intervalRef.current = null
	}
	const history = useHistory()
	const resetTimer = () => {
		if(initialInterval !== 0) {
			history.push('/ShortBreak')
			clearInterval(initialInterval.current)
			setIsRunning(false)
			setTimeLeft(pomodoroTime * 60)
			return 
		}else{
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setTimeLeft(pomodoroTime * 60)
			setIsRunning(false)
		}

	}
	useEffect(()=> {
		return () => {
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setTimeLeft(pomodoroTime * 60)
			setIsRunning(false)
		}
	},[pomodoroTime])
	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)
	const [start] = useSound(sound)
	const [play] = useSound(alarm)

	const switchBtn = () => {
		start()
		isRunning ? stopTimer() : startTimer()
	}
	const [isActive, setIsActive] = useState(false)
	return (
		<Fragment>
			<Prompt when={isActive} message={CONFIRM} />
			<Progress percent={percentage} />
			<div className={styles.pomofocus}>
				<h1 className={styles.time}>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</h1>
				<div onFocus={()=> setIsActive(true)}>
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
