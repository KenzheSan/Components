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
	ROUND,
	RESETCONFIRM
} from '../../store/constants'
import React, { Fragment, useEffect } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import { setActions } from '../../store/settings'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Prompt } from 'react-router-dom'
import CustomTimer from '../../store/custom_timer'


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
	const initialRound = useSelector((state)=> state.timeSettings[ROUND])

	const history = useHistory()

	const customTimer = CustomTimer(pomodoroTime)	

	useEffect(() => {
			if (isAutoStartPomodor) {
				if(intervalIsStart){
					customTimer.startTimer()
				}				
			}
	
	},[initialInterval, isAutoStartPomodor, intervalIsStart, customTimer.startTimer, customTimer])

	const disptach = useDispatch()

	useEffect(()=> {
		const newRound = async() => {
			if(customTimer.timeLeft === 0) {
				if(initialInterval > 1){
					disptach(setActions.minuseIntervalTime())
					disptach(setActions.setRound())
					disptach(setActions.intervalStarted())
					history.replace('/ShortBreak')
					await customTimer.setIsChecked(false)
				}else{
					disptach(setActions.setRound())
					history.replace('/LongBreak')
					disptach(setActions.intervalStarted())
					await customTimer.setIsChecked(false)
					
				}
			}
		}
		newRound()
	},[customTimer, disptach, history, initialInterval])

	const messageToUser = async() => {
		if(window.confirm(CONFIRM)){
			if(initialInterval > 1){
				await customTimer.setIsChecked(false)
				history.replace('/ShortBreak')
			}else{
				await customTimer.setIsChecked(false)
				history.replace('/LongBreak')
			}
		}else{
			return
		}
	}

    const switchBtn = () => {
		// start()
	customTimer.isRunning ? customTimer.stopTimer() : customTimer.startTimer()
	}

	return (
		<Fragment>
		
			<Prompt when={customTimer.isChecked} message={RESETCONFIRM} />
			<div className={styles.absolute}>
			<Progress percent={customTimer.percentage} />
			</div>
			<div className={styles.pomofocus}>
				<h1 className={styles.time}>
					<span>{customTimer.minutes}</span>
					<span>:</span>
					<span>{customTimer.seconds}</span>
				</h1>
				<div>
					<button className={styles.btn} onClick={switchBtn}>
						{customTimer.isRunning ? 'PAUSE' : 'START'}
					</button>
					{customTimer.isRunning && (
						<img className={styles.next} src={next} onClick={messageToUser} alt='/' />
					)}
				</div>
			</div>
		</Fragment>
	)
}

export default Pomofocus
