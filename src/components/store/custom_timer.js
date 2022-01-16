import { useState, useRef, useCallback, useEffect } from 'react'
import formatingTime from './helpers'
function CustomTimer(time) {
	const intervalRef = useRef(null)
	const [isChecked, setIsChecked] = useState(false)
	const [timeLeft, setTimeLeft] = useState(time * 60)
	const [isRunning, setIsRunning] = useState(false)
	const [progress, setProgress] = useState(0)

	const percentage = (progress / (time * 60)) * 100

	const minutes = formatingTime(Math.floor(timeLeft / 60))
	const seconds = formatingTime(timeLeft - minutes * 60)

	const startTimer = useCallback(() => {
		if (intervalRef.current !== null) return
		setIsRunning(true)
		setIsChecked(true)
		intervalRef.current = setInterval(() => {
			setProgress((prevState) => prevState + 1)
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) return timeLeft - 1
			})
		}, 1000)
	}, [])

	const stopTimer = useCallback(() => {
		if (intervalRef.current === null) return
		setIsRunning(false)
		clearInterval(intervalRef.current)
		intervalRef.current = null
	},[])

	useEffect(() => {
		setTimeLeft(time * 60)
	}, [time])

	useEffect(() => {
		if (timeLeft - 1 === 0) {
			stopTimer()
			setProgress(0)
			setTimeLeft(0)
			setIsChecked(false)
		}
	}, [stopTimer, timeLeft])

	const resetTimer = useCallback(() => {
		clearInterval(intervalRef.current)
		intervalRef.current = null
		setTimeLeft(time * 60)
		setIsRunning(false)
		setProgress(0)
	}, [time])

	useEffect(() => {
		return () => resetTimer()
	}, [time, resetTimer])

	return {
		startTimer,
		minutes,
		seconds,
		stopTimer,
		isChecked,
		percentage,
		timeLeft,
		setIsChecked,
		isRunning,
	}
}
export default CustomTimer
