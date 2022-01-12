import classes from './ShortBreak.module.css'
import next from '../../logo/next.png'
import { useSelector } from 'react-redux'
import { SHORT_BREAK } from '../../store/constants'
import { Fragment } from 'react'
import useSound from 'use-sound'
import sound from '../../assets/sounds/btn.mp3'
import alarm from '../../assets/sounds/sound.mp3'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { useState, useRef } from 'react'
import formatingTime from '../../store/helpers'
import { Prompt } from 'react-router-dom'

const ShortBreak = () => {
	const pomodoroTime = useSelector(
		(state) => state.timeSettings[SHORT_BREAK].minutes,
	)

	const [timeLeft, setTimeLeft] = useState(pomodoroTime * 60)
	const [isRunning, setIsRunning] = useState(false)
	const intervalRef = useRef(null)

	const startTimer = () => {
		if (intervalRef.current !== null) return
		setIsRunning(true)
		intervalRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) return timeLeft - 1
				resetTimer()
				play()
				return 0
			})
		}, 1000)
	}

	const stopTimer = () => {
		if (intervalRef.current === null) return
		setIsRunning(false)
		clearInterval(intervalRef.current)
		intervalRef.current = null
	}

	const resetTimer = () => {
		clearInterval(intervalRef.current)
		intervalRef.current = null
		setTimeLeft(pomodoroTime * 60)
		setIsRunning(false)
	}

	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)
	const [start] = useSound(sound)
	const [play] = useSound(alarm)

	const switchBtn = () => {
		start()
		isRunning ? stopTimer() : startTimer()
	}
	const [isActive,setIsActive] = useState(false)
	return (
		<Fragment>
			<Prompt when={isActive} message={'hello'}/>
			<Progress />
			<div className={classes.shortbreak}>
				<h1 className={classes.time}>
					<span>{minutes}</span>
					<span>:</span>
					<span>{seconds}</span>
				</h1>
				<div onFocus={()=> setIsActive(true)}>
					<button className={classes.btn} onClick={switchBtn}>
						{isRunning ? 'PAUSE' : 'START'}
					</button>
					{isRunning && (
						<img
							className={classes.next}
							src={next}
							alt='/'
						/>
					)}
				</div>
			</div>
		</Fragment>
	)
}
export default ShortBreak
