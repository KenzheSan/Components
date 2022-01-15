import classes from './ShortBreak.module.css'
import next from '../../logo/next.png'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { useEffect } from 'react'
import { Prompt } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CustomTimer from '../../store/custom_timer'
import { CONFIRM,RESETCONFIRM } from '../../store/constants'

const ShortBreak = () => {

	const {short_break ,intervalIsStarted ,intervalOfTimers,autostartbreaks} = useSelector((state)=> state.timeSettings)

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
	} = CustomTimer(short_break)
	
	const history = useHistory()

	useEffect(() => {
		if (intervalIsStarted) {
			if (autostartbreaks) {
				startTimer()
			}
		}
	}, [autostartbreaks, intervalOfTimers, intervalIsStarted, startTimer])

	useEffect(() => {
		const newRound = async () => {
			if (timeLeft === 0) {
				if (intervalOfTimers > 0) {
					history.replace('/pomodoro')
					await setIsChecked(false)
				}
			}
		}
		newRound()
	}, [history, intervalOfTimers, setIsChecked, timeLeft])

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
