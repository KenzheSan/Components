import next from '../../logo/next.png'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import Progress from '../../UI/DisplayTime/DisplayTime'
import styles from './LongBreak.module.css'
import {  useEffect } from 'react'
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
import CustomTimer from '../../store/custom_timer'
const LongBreak = () => {
	const longBreakTime = useSelector(
		(state) => state.timeSettings[LONG_BREAK].minutes,
	)
	const customTimer = CustomTimer(longBreakTime)

	const disptach = useDispatch()

	const initialInterval = useSelector(
		(state) => state.timeSettings[INTERVALOFTIMERS],
	)
	const intervalIsStart = useSelector(
		(state) => state.timeSettings[INTERVALISSTARTED],
	)
	const initialRound = useSelector((state)=> state.timeSettings[ROUND])
	const isAutoStartPomodor = useSelector((state)=> state.timeSettings[AUTOSTARTPOMODOR])
	const isAutoStartShortBreak = useSelector((state)=> state.timeSettings[AUTOSTARTBREAKS])

	const history = useHistory()

	useEffect(() => {
		if (isAutoStartPomodor) {
			if (isAutoStartShortBreak) {
				customTimer.startTimer()
			}
			
		}
	}, [customTimer, isAutoStartPomodor, isAutoStartShortBreak])
	

	useEffect(()=> {
		const newRound = async() => {
			if(customTimer.timeLeft === 0){
				if(initialRound > 1){
					disptach(setActions.setInterval(initialRound))
					disptach(setActions.clearRoundInterval())
					history.replace('/pomodoro')
					await customTimer.setIsChecked(false)
				}else{
					history.replace('/pomodoro')
					disptach(setActions.clearRoundInterval())
					await customTimer.setIsChecked(false)
				}
			}
		}
		newRound()
	},[customTimer, disptach, history, initialRound])

	const messageToUser = async() => {
		if(window.confirm(CONFIRM)){
			await customTimer.setIsChecked(false)
			history.replace('/pomodoro')
		}else{
			return
		}
		
	}

	const switchBtn = () => {
		customTimer.isRunning ? customTimer.stopTimer() : customTimer.startTimer()
	}
	return (
		<Fragment>
			<Prompt when={customTimer.isChecked} message={RESETCONFIRM} />
			<div className={styles.absolute}>
			<Progress percent={customTimer.percentage} />
			</div>
			<div className={styles.longbreak}>
				<h1 className={styles.time}>
					<span>{customTimer.minutes}</span>
					<span>:</span>
					<span>{customTimer.seconds}</span>
				</h1>
				<div>
					<button className={`${styles.btn}`} onClick={switchBtn}>
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
export default LongBreak
